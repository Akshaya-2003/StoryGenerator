import React, { useState, useEffect } from "react";
import Chatbot from "./chatbot.jsx"; // Make sure the path is correct
import "./css/chatbot.css";
import logo from './Images/logo.png';

function ChatbotDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const openChatbotDialog = () => {
        setIsOpen(true);
    };

    const closeChatbotDialog = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-IN';

        recognition.onresult = (event) => {
            const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
            console.log("Detected phrase:", transcript);
            if (transcript.includes("chatbot") || transcript.includes("hello assistant") || transcript.includes("vedic")) {
                openChatbotDialog();
            }
        };

        recognition.start();


        return () => {
            recognition.stop();
        };
    }, []);

    return (
        <div>
            {isOpen ? (
                <div className="chatbot-dialog">
                    <div className="chatbot-header">
                        Vedic
                        <button className="exit-button" onClick={closeChatbotDialog}></button>
                    </div>
                    <div className="chatbot-messages">
                        <Chatbot onClose={closeChatbotDialog} />
                    </div>
                </div>
            ) : (
                <div>
                    <button className="sri" onClick={openChatbotDialog} >
                        <img src={logo}  />
                        </button>
                </div>
            )}
        </div>
    );
}

export default ChatbotDialog;
