"use client";

import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Scanner() {
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "reader",
            {
                fps: 10,
                qrbox: 250,
            },
            false
        );

        scanner.render(
            async (decodedText) => {
                try {
                    setLoading(true);

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

                        scanner.clear().catch(console.error);
                    } else {
                        setSuccess(false);
                        setMessage(data.message);
                    }
                } catch (err) {
                    setSuccess(false);
                    setMessage(
                        "Unable to mark attendance. Please try again."
                    );
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            },
            () => { }
        );

        return () => {
            scanner.clear().catch(() => { });
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