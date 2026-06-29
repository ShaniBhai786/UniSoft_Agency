"use client";

import React, { useEffect, useRef, useState } from "react";
import "../chatbot.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Page() {
  const [value, setValue] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, loading]);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!value.trim() || loading) return;

    const userMessage = value.trim();

    setChat((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setValue("");
    setLoading(true);

    try {
      let sessionId = localStorage.getItem("sessionId");

      if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem("sessionId", sessionId);
      }

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

      if (!res.ok) {
        throw new Error("Request Failed");
      }

      const data = await res.json();

      let aiMessage =
        data?.[0]?.output ??
        data?.output ??
        data?.message ??
        data?.text ??
        "No response received.";

      if (typeof aiMessage !== "string") {
        aiMessage = JSON.stringify(aiMessage, null, 2);
      }

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: aiMessage || "No response received.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "⚠️ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatPage">
      <div className="chatCard">

        <div className="header">
          <h1>🤖 UniSoft AI (UniBot)</h1>
          <p>Your Intelligent AI Assistant</p>
        </div>

        <div className="messages">

          {chat.length === 0 && (
            <div className="welcome">
              👋 Welcome to UniBot
              <br />
              Ask me anything about UniSoft or technology.
            </div>
          )}

          {chat.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.role}`}
            >
              <div className="bubble">

                <div className="messageHeader" ref={bottomRef}>
                  <strong>
                    {msg.role === "user"
                      ? "You"
                      : "🤖 UniBot"}
                  </strong>

                  <div className="ai-response">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} >
                      {typeof msg.text === "string"
                        ? msg.text
                        : JSON.stringify(msg.text, null, 2)}
                    </ReactMarkdown>
                  </div>

                  {msg.role === "assistant" && (
                    <button
                      className="copyBtn"
                      onClick={() => copy(msg.text)}
                    >
                      📋 Copy
                    </button>
                  )}
                </div>


              </div>
            </div>
          ))}

          {loading && (
            <div className="message assistant">
              <div className="bubble typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div />

        </div>

        <form
          onSubmit={onSubmit}
          className="inputArea"
        >
          <input
            value={value}
            placeholder="Ask UniBot..."
            onChange={(e) =>
              setValue(e.target.value)
            }
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>
        </form>

      </div>
    </div>
  );
}