"use client";

import { useEffect, useState, useRef } from "react";

export default function ScannerView() {
    const [frame, setFrame] = useState(null);
    const [stale, setStale] = useState(false);
    const [connected, setConnected] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        const fetchFrame = async () => {
            try {
                const res = await fetch("/api/scanner-preview", {
                    cache: "no-store",
                });
                const data = await res.json();

                if (data.success) {
                    setFrame(data.frame);
                    setStale(data.stale);
                    setConnected(true);
                } else {
                    setConnected(false);
                }
            } catch (err) {
                console.error(err);
                setConnected(false);
            }
        };

        fetchFrame();
        intervalRef.current = setInterval(fetchFrame, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "#111",
                color: "#fff",
                padding: "20px",
                fontFamily: "sans-serif",
            }}
        >
            <h2 style={{ marginBottom: "16px" }}>Live Scanner Feed</h2>

            <div
                style={{
                    padding: "6px 14px",
                    borderRadius: "20px",
                    marginBottom: "16px",
                    fontSize: "14px",
                    background: !connected
                        ? "#555"
                        : stale
                            ? "#b45309"
                            : "#15803d",
                }}
            >
                {!connected
                    ? "No scanner connected"
                    : stale
                        ? "Feed is stale — scanner may be idle"
                        : "Live"}
            </div>

            <div
                style={{
                    width: "480px",
                    maxWidth: "90vw",
                    aspectRatio: "4 / 3",
                    background: "#222",
                    borderRadius: "12px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #333",
                }}
            >
                {frame ? (
                    <img
                        src={frame}
                        alt="Scanner live feed"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: stale ? 0.4 : 1,
                        }}
                    />
                ) : (
                    <span style={{ color: "#777" }}>Waiting for feed...</span>
                )}
            </div>
        </div>
    );
}