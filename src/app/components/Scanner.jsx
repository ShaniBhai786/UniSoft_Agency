"use client";

import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Scanner() {
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
                const res = await fetch(
                    "https://script.google.com/macros/s/AKfycbx33GF6M1ohj3DDmF1iM_AbPYnhi6KkF9rtpdTFMpr-Yah60TwXYrYmIYLIgEynpqHn/exec",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            studentId: decodedText,
                        }),
                    }
                );

                const data = await res.json();

                if (data.success) {
                    alert(
                        `${data.name} (${data.class})
Attendance Marked`
                    );
                } else {
                    alert(data.message);
                }
            },
            () => { }
        );

        return () => scanner.clear();
    }, []);

    return <div id="reader"></div>;
}