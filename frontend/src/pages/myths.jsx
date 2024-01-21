import React from "react";
import "../css/style.css";
import footer from "../Images/footerBg.jpg";
import footerLogo from "../Images/footerLogo.png";
import genre1 from "../Images/genre1.png";
import region1 from "../Images/region1.png";
import { useNavigate } from "react-router-dom";
import ChatbotDialog from '../chatbotDialog.jsx';

// Assuming style.css is in the same folder

function App() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = (path) => {
    navigate(path); // Use navigate to navigate to the specified path
  };

  
  return (
    <div>
      {/* Navbar Starts from Here */}
      <nav className="navbar">
        <h2>VEDIC WHISPERS</h2>
        <ul>
          <li>
          <a onClick={() => handleNavigation("/home")} className="link">
              Home
            </a>
          </li>
          <li>
          <a onClick={() => handleNavigation("/folk")} className="link">
              Indian Folktales
            </a>
          </li>
          <li>
          <a onClick={() => handleNavigation("/myth")} className="link">
              Indian Mythology
            </a>
          </li>
        </ul>
      </nav>

      {/* Event Section Starts from Here */}
      <section id="event-container">
        <div className="event-item">
          <div className="burger-container">
            <div className="burger-item">
              <img src={genre1} alt="" />
              <h2 className="center color-primary burger-heading">
                GENRE BASED
              </h2>
              <p className="center">
                The stories offer profound insights into Indian spirituality,
                philosophy, and the enduring values that have shaped the
                subcontinent's cultural heritage for millennia.
              </p>
              <select
                className="order-btn"
                onChange={(e) => navigate(`/dynamic/${e.target.value}`)}
              >
                <option value="">Explore More</option>
                <option value="Story on creation of god in 200 words">Creation</option>
                <option value="Romantic story in Indian Mythology of 200 words">Romance</option>
                <option value="Moral and ethical stories of Indian Mythology in 200 words">Moral and Ethical</option>
                <option value="Transformation in Indian Mythology in 200 words">Transformation</option>
              </select>
            </div>
            <div className="burger-item">
              <img src={region1} alt="" />
              <h2 className="center color-primary burger-heading">
                REGION BASED
              </h2>
              <p className="center">
                Region-based Indian mythology explores the diverse and
                enchanting mythological traditions that flourish across the vast
                and culturally rich landscape of India.
              </p>
              <select
                className="order-btn"
                onChange={(e) => navigate(`/dynamic/${e.target.value}`)}
              >
                <option value="">Explore More</option>
                <option value="Hindu Mythology Story of 200 words">Hindu</option>
                <option value="Maharastrian Mythology Story of 200 words">Maharastrian</option>
                <option value="Kerala Mythology Story of 200 words">Kerala</option>
                <option value="Tamil Mythology Story of 200 words">Tamil</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Location Section Starts from Here */}
      <section id="burger-footer">
        <div
          className="footer-bg"
          style={{
            backgroundImage: `url(${footer})`,
          }}
        >
          <div className="left-footer">
            <img src={footerLogo} alt="" />
            <p className="color-white para-font">
              Vedic Whispers: AI-driven magic that transforms Indian folklore
              into captivating tales. <br />
              Immerse yourself in a blend of ancient myths and modern
              storytelling, <br />
              exploring the rich cultural heritage of India through personalized
              narratives.
              <br /> A unique platform reimagining Vedic traditions with
              cutting-edge technology.
            </p>
          </div>
        </div>
      </section>
      {/* Footer Starts from Here */}
      <footer className="center footer">
        {" "}
        &copy; VEDIC WHISPERS 2021-22. ALL RIGHTS RESERVED
      </footer>
      <ChatbotDialog/>
    </div>
  );
}

export default App;