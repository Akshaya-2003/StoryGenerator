// ChatbotResponsePage.js

import React from 'react';
import { useLocation } from 'react-router-dom';

function ChatbotResponsePage() {
    const location = useLocation();
    const response = location.state?.response;

    return (
        <div>
            <h1>Chatbot Response</h1>
            <p>{response || 'No response available.'}</p>
            {/* You can add more styling and content here */}
        </div>
    );
}

export default ChatbotResponsePage;
