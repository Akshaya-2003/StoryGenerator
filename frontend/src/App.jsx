import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.jsx';
import Signup from './Signup.jsx';
import Login from './login.jsx';
import Folk from './pages/folktales.jsx';
import Myth from './pages/myths.jsx';
import Dynamic from './dynamic.jsx';
import Chatbot from './chatbot.jsx';
import Redirect from './ChatbotResponsePage.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chatbot/>} />
          <Route path="/folk" element={<Folk />} />
          <Route path="/myth" element={<Myth />} />
          <Route path="/chatbot-response" element={<Redirect />} />
          <Route path="/dynamic/:paramName" element={<Dynamic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;