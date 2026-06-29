"use client";

import React, { useRef, useState, useEffect } from "react";
import "../chatbot.css";

export default function Page() {
  const [value, setValue] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!value.trim() || loading) return;

    const userMessage = value;

    setChat((prev) => [...prev, { role: "user", text: userMessage }]);

    setValue("");
    setLoading(true);

    try {
      const sessionId =
        localStorage.getItem("sessionId") || crypto.randomUUID();

      localStorage.setItem("sessionId", sessionId);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId,
        }),
      });

      const data = await res.json();

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply || data[0]?.output || "No response received.",
        },
      ]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong. Please try again.",
        },
      ]);

      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="chatPage">

      <div className="chatCard">

        <div className="header">
          <h1>🤖 UniSoft AI</h1>
          <p>Powered by n8n + OpenAI</p>
        </div>

        <div className="messages">

          {chat.length === 0 && (
            <div className="welcome">
              Ask me anything...
            </div>
          )}

          {chat.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.role}`}
            >
              <div className="bubble">
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="message assistant">
              <div className="bubble typing">
                Thinking...
              </div>
            </div>
          )}

          <div ref={bottomRef} />

        </div>

        <form onSubmit={onSubmit} className="inputArea">

          <input
            type="text"
            placeholder="Ask UniSoft AI..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button disabled={loading}>
            {loading ? "..." : "Send"}
          </button>

        </form>

      </div>

    </div>
  );
}