"use client";

import { useState } from "react";
import "./style.css"

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [html, setHtml] = useState("");

    const generateWebsite = async () => {
        if (!prompt.trim()) return;

        setLoading(true);

        try {
            const response = await fetch(
                "api/webpage-generator",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query: prompt,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(await response.text());
            }

            const text = await response.text();

            console.log(text);
            alert(text);

            // If n8n returns { html: "<div>...</div>" }
            setHtml(text.html || "");

            console.log(text);
        } catch (error) {
            console.error(error);
            alert(error.message);
        }

        setLoading(false);
    };

    return (
        <main className="min-h-screen bg-gray-100 p-10">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl font-bold mb-6">
                    AI Website Generator
                </h1>

                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your website..."
                    className="w-full h-40 border rounded-lg p-4"
                />

                <button
                    onClick={generateWebsite}
                    disabled={loading}
                    className="mt-4 bg-black text-white px-8 py-3 rounded-lg"
                >
                    {loading ? "Generating..." : "Generate Website"}
                </button>

                {html && (
                    <div className="mt-10 border rounded-lg overflow-hidden bg-white">
                        <iframe
                            title="preview"
                            srcDoc={html}
                            className="w-full h-[900px]"
                        />
                    </div>
                )}

            </div>

        </main>
    );
}