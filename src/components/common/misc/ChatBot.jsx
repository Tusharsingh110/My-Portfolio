import React, { useState, useEffect } from "react";
import chatbotImg from "../../../assets/images/chat.png";
import ChatArea from "./ChatArea";
import { useSelector } from "react-redux";
import { useSocket } from "../../../contexts/SocketProvider";
import { useToast } from "../../../hooks/useToast";

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const { session, messages, startChat, sendMessage } = useSocket();
  const userData = useSelector((state) => state.auth);
  const toast = useToast();

  // Handle body overflow when chat is opened/closed
  useEffect(() => {
    if (showChat) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to ensure overflow is reset when component unmounts
    return () => {  
      document.body.style.overflow = 'unset';
    };
  }, [showChat]);

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    if(!userData?.isLoggedIn) {
      toast("warn", "Please login to use the chat feature");
      return;
    }
    setShowChat(!showChat);
    if (!showChat && !session) {
      startChat(userData?.userId);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    const userMessage = {
      timeStamp: Date.now(),
      userType: "user",
      message: inputMessage,
    };
    setInputMessage("");
    sendMessage(userMessage);
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <button onClick={toggleChatbot} className="chat-bot">
        <img 
          className={`${userData?.isLoggedIn ? "opacity-100" : "opacity-50"} ${!userData?.isLoggedIn ? "filter grayscale" : ""}`} 
          src={chatbotImg} 
          alt="Chatbot" 
        />
      </button>

      {/* Overlay */}
      {showChat && (
        <button 
          className="chat-overlay"
          onClick={toggleChatbot}
          onKeyDown={(e) => e.key === 'Escape' && toggleChatbot()}
          tabIndex={0}
          aria-label="Close chat"
        />
      )}

      {/* Chat window */}
      {showChat && (
        <div className="chat-window">
          <div className="chat-window-content">
            {/* Pass messages to ChatArea for rendering */}
            <ChatArea chats={messages} />
          </div>
          <div className="chat-window-footer">
            <input
              type="text"
              onKeyDown={(e) => { if (e.key === "Enter") handleSendMessage(); }}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button disabled={!session} onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
