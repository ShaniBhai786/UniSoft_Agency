"use client";

import React, { useEffect, useRef, useState } from "react";
import "../chatbot.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChatbotLeft from "../components/ChatbotLeft";

export default function Page() {
  const [value, setValue] = useState("");
  // const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);
  const messagesRef = useRef(null);

  const [chat, setChat] = useState([]);

  useEffect(() => {
    const storedChat = localStorage.getItem("chat");
    if (storedChat) {
      setChat(JSON.parse(storedChat));
    }
  }, []);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chat, loading]);

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(chat));
  }, [chat]);


  const [copiedIndex, setCopiedIndex] = useState(null);
  const copy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
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

      console.log("API Status:", res.status);

      const responseText = await res.text();
      console.log("API Response:", responseText);

      if (!res.ok) {
        throw new Error(`Request Failed (${res.status})`);
      }

      const data = JSON.parse(responseText);

      if (!res.ok) {
        throw new Error("Request Failed");
      }

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
const clearChat = () => {
  localStorage.removeItem("chat")
  setChat([])
}
  return (
    <div className="chatbot">
      <ChatbotLeft />
      <div className="chatPage">
        <div className="chatCard">
          <div className="messages" ref={messagesRef}>

            {chat.length === 0 && (
              <div className="welcome">
                <p>👋 Welcome to UniBot</p>
                <p>Ask me anything about UniSoft or technology.</p>
              </div>
            )}

            {chat.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.role}`}
              >
                <div className="bubble">

                  <div className="messageHeader">
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

                    <button
                      className={`copyBtn ${copiedIndex === index ? "active" : ""}`}
                      onClick={() => copy(msg.text, index)}
                    >
                      {copiedIndex === index ? "✅ Copied!" : "📋 Copy"}
                    </button>
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

            <div ref={bottomRef} />

          </div>

          <form
            onSubmit={onSubmit}
            className="inputArea"
          >
            <textarea
              className="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  onSubmit(e);
                }
              }}
              placeholder="Ask from UniBot..."
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "please wait..." : "Send"}
            </button>
            <button
              type="button"
              className="deleteBtn"
              onClick={clearChat}
              disabled={loading}
            >
              🗑️ Delete
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}