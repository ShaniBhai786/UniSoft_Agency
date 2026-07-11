"use client";

import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Scanner() {
    const scannerRef = useRef(null);
    const processingRef = useRef(false);

    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

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
                // Prevent multiple scans
                if (processingRef.current) return;

                processingRef.current = true;
                setLoading(true);

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

                        // Stop scanning for 5 seconds
                        setTimeout(() => {
                            setMessage("");
                            setSuccess(false);
                            processingRef.current = false;
                        }, 5000);
                    } else {
                        setSuccess(false);
                        setMessage(data.message);

                        setTimeout(() => {
                            setMessage("");
                            processingRef.current = false;
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
                        processingRef.current = false;
                    }, 3000);
                } finally {
                    setLoading(false);
                }
            },
            () => { }
        );

        return () => {
            if (scannerRef.current) {
                scannerRef.current
                    .clear()
                    .catch(() => { });
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
                    {message}
                </div>
            )}
        </>
    );
}