import React, { useEffect, useRef, useState } from "react";
import chatbotImg from "../../../assets/images/chat.png";
import { useSelector } from "react-redux";
import { cn } from "../../../utils/cn.utils";
import ReactMarkdown from 'react-markdown';

const ChatArea = (props) => {
  const userData = useSelector((state) => state.auth);
  const { chats } = props;
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  const [currentUser, setCurrentUser] = useState(
    userData.isLoggedIn ? userData.userId : "User"
  );

  console.log(currentUser);

  const userAvatar = (
    <div className={cn("flex justify-center items-center", "user-avatar")}>
      {(userData?.username ?? "You")[0]?.toUpperCase()}
    </div>
  );

  return (
    <div className="chat-window-content">
      {chats?.map((chat, index) => (
        <div
          key={index}
          className={cn(
            chat?.userType?.toLowerCase() == "bot" ? "bot" : "user",
            "chat-container"
          )}
        >
          {chat?.userType?.toLowerCase() == "bot" ? (
            <img className="user-avatar" src={chatbotImg} alt={currentUser} />
          ) : (
            userAvatar
          )}
          <ReactMarkdown
            style={{
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              fontFamily:
                "apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            }}
            className={`chat-message ${
              chat?.userType.toLowerCase() == "bot"
                ? "bg-[#0056b3] bg-opacity-15"
                : "border"
            }`}
          >
            {chat?.message ?? "Message Preview."}
          </ReactMarkdown>
        </div>
      ))}
      {/* Invisible div to scroll into */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatArea;
