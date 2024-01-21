import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css"; // Assuming the CSS file is in the same directory
import genre from "../Images/genre.png";
import region from "../Images/region.png";
import footer from "../Images/footerBg.jpg";
import footerLogo from "../Images/footerLogo.png";
import ChatbotDialog from '../chatbotDialog.jsx';
function Folktales() {
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
              <img src={genre} alt="" />
              <h2 className="center color-primary burger-heading">
                GENRE BASED
              </h2>
              <p className="center">
                Dive into a diverse collection of Indian folktales, where
                timeless narratives unfold, weaving together enchanting stories
                that span themes, regions, and genres. Choose folktales to
                transport yourself into a world of tradition
              </p>
              <select
                className="order-btn"
                onChange={(e) => navigate(`/dynamic/${e.target.value}`)} // Update the path to "/dynamic"
              >
                <option value="">Explore More</option>
                <option value="Animal Tales of Indian Folktales in 200 words">Animal Tales</option>
                <option value="Romantic Tales of Indian Folktales in 200 words">Romance Tales</option>
                <option value="Historical Tales of Indian Folktales in 200 words">Historical Tales</option>
                <option value="Humour Tales of Indian Folktales in 200 words">Humour Tales</option>
              </select>
            </div>
            <div className="burger-item">
              <img src={region} alt="" />
              <h2 className="center color-primary burger-heading">
                REGION BASED
              </h2>
              <p className="center">
                Explore the timeless tales of gods, goddesses, and epic
                adventures in our Indian Mythology section Choose the region
                that interests you the most, and you'll find a treasure trove of
                fascinating folktales to explore.
              </p>
              <select
                className="order-btn"
                onChange={(e) => navigate(`/dynamic/${e.target.value}`)}
              >
                <option value="">Explore More</option>
                <option value="Punjabi folktales in 200 words">Punjabi Tales</option>
                <option value="Rajastani folktales in 200 words">Rajastani Tales</option>
                <option value="Kerala folktales in 200 words">Kerala Tales</option>
                <option value="Maharastrian folktales in 200 words">Maharastrian Tales</option>
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
        &copy; LOADS OF LOGIC 2021-22. ALL RIGHTS RESERVED
      </footer>
      <ChatbotDialog/>
    </div>
  );
}

export default Folktales;