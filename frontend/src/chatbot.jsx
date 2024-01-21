import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/chatbot.css';

function Chatbot({ onClose }) {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [typingResponse, setTypingResponse] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [handsFreeMode, setHandsFreeMode] = useState(true);
    const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const navigate = useNavigate();
    const chatbotMessagesRef = useRef(null);
    const recognitionRef = useRef(null);
    const silenceTimeoutRef = useRef(null);
    const speechSynthesisRef = useRef(window.speechSynthesis); // Reference to the speech synthesis API

    const OPENAI_API_KEY = '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';
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
    };
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const addMessage = (role, content) => {
        setMessages(prevMessages => [...prevMessages, { role, content }]);
    };

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesisRef.current.speak(utterance);
    };

    const navigateToResponsePage = (response) => {
        speak(response); // Speak the response
        navigate('/chatbot-response', { state: { response } });
    };

    const makeApiRequest = async () => {
        if (inputValue.trim() === '') {
            return;
        }
    
        try {
            const userMessageContent = inputValue;
            addMessage('user', userMessageContent);
    
            const requestData = {
                model: 'gpt-3.5-turbo',
                messages: [...messages, { role: 'user', content: userMessageContent }],
            };
    
            setIsTyping(true);
    
            const response = await axios.post(apiUrl, requestData, { headers });
    
            const botResponse = response.data.choices[0].message.content;
    
            for (let i = 0; i < botResponse.length; i++) {
                setTypingResponse(botResponse.substring(0, i + 1));
                await new Promise(resolve => setTimeout(resolve, 50));
            }
    
            setTypingResponse('');
            setIsTyping(false);
            setInputValue('');
    
            // Define a function to check if the response is related to Indian mythology, folktales, epics, or legends
            const isRelatedToIndianMythology = (response) => {
                const keywords = ['Indian mythology', 'folktales', 'epics', 'legends','give a story in 100 words','give a story in 200 words'];
                return keywords.some(keyword => response.toLowerCase().includes(keyword.toLowerCase()));
            };
    
            // Check if the bot's response is related to Indian mythology, folktales, epics, or legends
            if (isRelatedToIndianMythology(botResponse)) {
                addMessage('assistant', botResponse);
                if (shouldAutoScroll) {
                    scrollToBottom();
                }
                // Navigate to the response page with the bot's response
                navigateToResponsePage(botResponse);
            } else {
                addMessage('assistant', "I can provide information only about Indian mythology, folktales, epics, or legends.");
                if (shouldAutoScroll) {
                    scrollToBottom();
                }
            }
    
        } catch (error) {
            console.error('Error making OpenAI API request:', error);
        }
    };
    
    
    

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    const toggleHandsFreeMode = () => {
        setHandsFreeMode(!handsFreeMode);
    };

    const startListening = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognitionRef.current = recognition;
        recognition.lang = 'en-IN';
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
            console.log('Listening...');
        };

        recognition.onresult = (event) => {
            const transcript = event.results[event.results.length - 1][0].transcript;
            setInputValue(transcript);

            if (handsFreeMode && event.results[0].isFinal) {
                clearTimeout(silenceTimeoutRef.current);
                makeApiRequest();
            }

            clearTimeout(silenceTimeoutRef.current);
            silenceTimeoutRef.current = setTimeout(() => {
                if (recognitionRef.current) {
                    recognitionRef.current.stop();
                    recognitionRef.current = null;
                }
                makeApiRequest();
            }, 2000);
        };

        recognition.onend = () => {
            console.log('Stopped listening...');
        };

        recognition.start();
    };

    useEffect(() => {
        if (isChatbotOpen) {
            const introMessage = "Hey, I'm your AI assistant! What stories can I provide you?";
            addMessage('assistant', introMessage);
        }
    }, [isChatbotOpen]);

    useEffect(() => {
        if (handsFreeMode) {
            startListening();
        } else if (recognitionRef.current) {
            recognitionRef.current.stop();
            recognitionRef.current = null;
        }
    }, [handsFreeMode]);

    useEffect(() => {
        scrollToBottom();
    }, []);

    const scrollToBottom = () => {
        if (chatbotMessagesRef.current) {
            chatbotMessagesRef.current.scrollTop = chatbotMessagesRef.current.scrollHeight;
        }
    };

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = chatbotMessagesRef.current;
        setShouldAutoScroll(scrollTop + clientHeight === scrollHeight);
    };

    return (
        <div className="chatbot-dialog">
            <div className="chatbot-header">
                Vedic
                <button className="exit-button" onClick={onClose}></button>
            </div>
            <div className="chatbot-messages" ref={chatbotMessagesRef} onScroll={handleScroll}>
                {messages.map((msg, index) => (
                    <div key={index} className={`chatbot-message ${msg.role === 'user' ? 'user-message' : 'assistant-message'}`}>
                        <div className="message-content">
                            <p className={`message-text ${msg.role === 'user' ? 'user-text' : 'assistant-text'}`}>
                                {msg.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && makeApiRequest()}
                    disabled={isTyping || handsFreeMode}
                />
                <button onClick={makeApiRequest} disabled={isTyping || handsFreeMode}>Send</button>
            </div>
            {isTyping && (
                <div className="assistant-typing">
                    {typingResponse}<span className="blink">|</span>
                </div>
            )}
            <div className="chatbot-options">
                <button className="toggle-button" onClick={toggleHandsFreeMode}>
                    {handsFreeMode ? 'Switch to Manual' : 'Switch to Hands-Free'}
                </button>
            </div>
        </div>
    )
}

export default Chatbot;
