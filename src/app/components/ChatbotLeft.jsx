import React from "react";
import "../chatbot.css";

const ChatbotLeft = () => {
    return (
        <aside className="left-window">
            <div className="header">
                <h1>🤖 UniBot</h1>
                <p>Your Intelligent AI Assistant</p>
            </div>

            <button className="new-chat-btn">
                ➕ New Chat
            </button>

            <div className="chat-history">
                <div className="history-item active">
                    AI Automation
                </div>

                <div className="history-item">
                    Website SEO
                </div>

                <div className="history-item">
                    React Help
                </div>

                <div className="history-item">
                    n8n Workflow
                </div>
            </div>
        </aside>
    );
};

export default ChatbotLeft;