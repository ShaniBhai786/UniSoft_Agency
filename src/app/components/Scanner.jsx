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
    const [timeStatus, setTimeStatus] = useState("")
    const [marked, setMarked] = useState(true)

    const speak = (text) => {
        if (!("speechSynthesis" in window)) return;

        const utterance = new SpeechSynthesisUtterance(text);

        // Better accent for Pakistan
        utterance.lang = "en-IN"; // or "en-GB"
        utterance.rate = 0.9;
        utterance.pitch = 1;

        const voices = window.speechSynthesis.getVoices();

        // Prefer an Indian or British voice if available
        const voice =
            voices.find((v) => v.lang === "en-IN") ||
            voices.find((v) => v.lang.startsWith("en"));

        if (voice) {
            utterance.voice = voice;
        }

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    };
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
                    console.log("Attendance Response:", data);
                    console.log("Image URL:", data.image);

                    if (data.success) {
                        setSuccess(true);
                        const time = new Date().toLocaleString("en-PK", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                        });

                        const status =
                            new Date().getHours() >= 16 ? "Late" : "On Time";

                        setTimeStatus(status);

                        setMessage(
                            `${data.name} (${data.class})\nAttendance Marked at ${time}\n Fee Status: ${data.fee ? "✅Paid" : `❌Unpaid ${data.fee}` }`
                        );

                        // Speak message
                        if (data.success) {
                            setMarked(true)
                            speak(`Thank you ${data.name}. Your attendance has been marked.`);
                        } else {
                            speak(data.message);
                        }
                        
                        if (data.image) {
                            console.log("Image URL:", data.image);
                            setImageData(data.image);
                        }

                        setTimeout(() => {
                            setMessage("");
                            setSuccess(false);
                            setImageData(null);
                            processingRef.current = false;
                            lastScannedRef.current = "";
                            setMarked(false)
                        }, 5000);
                    } else {
                        setSuccess(false);
                        setMessage(data.message);
                        setMarked(false)
                        setTimeout(() => {
                            setMessage("");
                            setImageData(null);
                            processingRef.current = false;
                            lastScannedRef.current = "";
                        }, 2000);
                        setMarked(false)
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
    // In Scanner.jsx, after scanner.render(...), add a snapshot loop:
    useEffect(() => {
        const interval = setInterval(async () => {
            const videoEl = document.querySelector("#reader video");
            if (!videoEl) return;

            const canvas = document.createElement("canvas");
            canvas.width = videoEl.videoWidth;
            canvas.height = videoEl.videoHeight;
            canvas.getContext("2d").drawImage(videoEl, 0, 0);

            const frame = canvas.toDataURL("image/jpeg", 0.5);

            fetch("/api/scanner-preview", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ frame }),
            });
        }, 1000);

        return () => clearInterval(interval);
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
                    {marked && <div className={timeStatus === "On Time" ? "ontime" : "late"}>{timeStatus}</div>}
                    {imageData &&
                        (imageData.startsWith("http://") ||
                            imageData.startsWith("https://")) && (
                            <Image
                                src={imageData}
                                alt="Student Image"
                                width={120}
                                height={120}
                                className="studentImage"
                            />
                        )}

                    {message}
                </div>
            )}
        </>
    );
}