import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import './css/dynamic.css';

function ChatPage() {
    const { paramName } = useParams();
    const [messages, setMessages] = useState([]);
    const [generatedImage, setGeneratedImage] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        sendMessage();
    }, []);

    const OPENAI_API_KEY = "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";

    const sendMessage = async () => {
        try {
            setLoading(true);
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [...messages, { role: "user", content: paramName }],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                    },
                }
            );

            const newMessages = [...messages];
            newMessages.push({ role: "user", content: paramName });
            newMessages.push({ role: "assistant", content: response.data.choices[0].message.content });

            setMessages(newMessages);
            setLoading(false);
            generateImage(response.data.choices[0].message.content);
        } catch (error) {
            console.error("Error sending message:", error);
            setErrorMessage("Error sending message: " + error.message);
            setLoading(false);
        }
    };

    const generateImage = async (generate) => {
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/images/generations",
                {
                    model: "dall-e-2",
                    prompt: `${generate}`,
                    n: 1,
                    size: "256x256",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer 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`, // Replace with your actual OpenAI API key
                    },
                }
            );

            if (response.data && response.data.data && response.data.data[0]) {
                setGeneratedImage(response.data.data[0].url);
            }
        } catch (error) {
            console.error("Error generating image:", error);
            setErrorMessage("Error generating image: " + error.message);
        }
    };

    const LoadingComponent = () => (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 1000,
        }}>
            <div style={{
                border: '5px solid #f3f3f3',
                borderTop: '5px solid #3498db',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                animation: 'spin 2s linear infinite',
            }}></div>
        </div>
    );

    return (
        <div>
            <h1>Chat with AI Assistant</h1>
            {Loading && <LoadingComponent />}
            {/* {errorMessage && <div style={{
                color: 'white',
                backgroundColor: 'red',
                padding: '10px',
                margin: '10px 0',
                borderRadius: '5px',
            }}>{errorMessage}</div>} */}
            <div className="chat-box">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.role}`}>
                        {message.content}
                    </div>
                ))}
                {generatedImage && (
                    <div>
                        <h2>Generated Image</h2>
                        <img
                            src={generatedImage}
                            alt="Generated Image"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatPage;

{/* <div className="chat-box">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.role}`}>
                        {message.content}
                    </div>
                ))}
                {generatedImage && (
                    <div>
                        <h2>Generated Image</h2>
                        <img
                            src={generatedImage}
                            alt="Generated Image"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
                )}
            </div> */}