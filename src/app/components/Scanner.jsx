"use client";

import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Image from "next/image";

export default function Scanner() {
    const scannerRef = useRef(null);
    const processingRef = useRef(false);
    const lastScannedRef = useRef("");

    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "reader",
            {
                fps: 10,
                qrbox: 250,
                rememberLastUsedCamera: true,
            },
            false
        );

        scannerRef.current = scanner;

        scanner.render(
            async (decodedText) => {
                // Ignore duplicate scans
                if (
                    processingRef.current ||
                    lastScannedRef.current === decodedText
                ) {
                    return;
                }

                processingRef.current = true;
                lastScannedRef.current = decodedText;

                setLoading(true);
                setImageData(null);

                try {
                    const res = await fetch("/api/attendance", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            studentId: decodedText,
                        }),
                    });

                    const data = await res.json();

                    if (data.success) {
                        setSuccess(true);
                        setMessage(
                            `${data.name} (${data.class}) - Attendance Marked`
                        );

                        if (data.image) {
                            setImageData(data.image);
                        }

                        setTimeout(() => {
                            setMessage("");
                            setSuccess(false);
                            setImageData(null);
                            processingRef.current = false;
                            lastScannedRef.current = "";
                        }, 5000);
                    } else {
                        setSuccess(false);
                        setMessage(data.message);

                        setTimeout(() => {
                            setMessage("");
                            setImageData(null);
                            processingRef.current = false;
                            lastScannedRef.current = "";
                        }, 3000);
                    }
                } catch (err) {
                    console.error(err);

                    setSuccess(false);
                    setMessage(
                        "Unable to mark attendance. Please try again."
                    );

                    setTimeout(() => {
                        setMessage("");
                        setImageData(null);
                        processingRef.current = false;
                        lastScannedRef.current = "";
                    }, 3000);
                } finally {
                    setLoading(false);
                }
            },
            () => { }
        );

        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear().catch(() => { });
            }
        };
    }, []);

    return (
        <>
            <div id="reader"></div>

            {loading && (
                <div className="scanInfo">
                    Processing attendance...
                </div>
            )}

            {message && (
                <div
                    className={
                        success ? "scanSuccess" : "scanError"
                    }
                >
                    {imageData &&
                        (imageData.startsWith("http://") ||
                            imageData.startsWith("https://")) && (
                            <Image
                                src={imageData}
                                alt="Student"
                                width={120}
                                height={120}
                                className="studentImage"
                                unoptimized
                            />
                        )}

                    {message}
                </div>
            )}
        </>
    );
}