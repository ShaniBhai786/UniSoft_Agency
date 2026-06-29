"use client";

import React, { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");
  const [chat, setChat] = useState([]);

  
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    const userMessage = value;

    setChat((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    setValue("");

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

    if (!res.ok) {
      const errorText = await res.text();
      console.error("API Error:", errorText);
      return;
    }

    const data = await res.json();
    console.log(data);

    setChat((prev) => [
      ...prev,
      {
        role: "assistant",
        text: data.reply,
      },
    ]);
  };

  return (
    <div className="container">
      <h1>UniSoft ChatBot</h1>

      <div className="formDiv">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="chat"
            id="chat"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Reply to Chat with AI..."
            style={{ color: "black" }}
          />

          <div className="buttons">
            <button
              type="button"
              onClick={() => {
                setValue("");
                setChat([]);
              }}
            >
              Reset
            </button>

            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="chat">
        {chat.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign:
                msg.role === "user"
                  ? "right"
                  : "left",
              margin: "10px 0",
            }}
          >
            <strong>
              {msg.role === "user"
                ? "You"
                : "AI"}
            </strong>

            <p>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;