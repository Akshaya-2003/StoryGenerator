// ChatHistory.js
import React, { createContext, useContext, useState } from "react";

const ChatHistoryContext = createContext();

export const ChatHistoryProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);

  const addMessage = (message) => {
    setChatHistory([...chatHistory, message]);
  };

  return (
    <ChatHistoryContext.Provider value={{ chatHistory, addMessage }}>
      {children}
    </ChatHistoryContext.Provider>
  );
};

export const useChatHistory = () => {
  return useContext(ChatHistoryContext);
};
