import React from "react";
import "./css/style.css";
import footerLogo from "./Images/footerLogo.png";
import burgerImage from "./Images/burger.png";
import burgerImage2 from "./Images/burger2.png";
import eventBurger from "./Images/eventBurger.jpg";
import footer from "./Images/footerBg.jpg"; // Assuming the CSS file is in the same directory
import { useNavigate } from "react-router-dom";
import ChatbotDialog from './chatbotDialog.jsx';

function VedicWhispers() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = (path) => {
    navigate(path); // Use navigate to navigate to the specified path
  };

  return (
    <div>
      {/* Navbar Starts from Here */}
      <nav className="navbar">
        <img className="danny" src={footerLogo} alt="" />
        <div className="varchas">
          <h2>VEDIC WHISPERS</h2>
        </div>
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
          <li>
          <a onClick={() => handleNavigation("/register")} className="link">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>

      {/* Home Section Starts from Here */}
      <section id="home">
        <div className="divider">
          <div className="home-left">
            <h1 className="h-primary color-primary">Tales of Valor</h1>
            <h2 className="h-secondary color-primary">
              "Embark on a mystical journey through the heart of India with our
              enchanting collection of folktales and mythology" Discover the
              rich tapestry of Indian culture as you explore tales of gods and
              goddesses, valiant heroes, and magical creatures. Each story is a
              window into the vibrant traditions and timeless lessons that have
              shaped this land. Join us in celebrating the spirit of India,
              where every tale weaves a spell of wonder and delight. Your
              adventure into the world of Indian folklore starts here!"
            </h2>
            <br />
          </div>
          <img className="burger-home" src={burgerImage} alt="" />
        </div>
      </section>

      {/* Main Section Starts from Here */}
      <section id="main" className="home-bottom"></section>

      {/* Center Section Starts from Here */}
      <section className="center-div" id="food">
        <h1 className="center color-primary center-heading">
          CHOOSE YOUR CATEGORY
        </h1>
        <p className="center para-font">
          At Vedic Whispers, choose between AI-crafted Indian folktales or
          mythological stories, blending ancient traditions with modern
          narratives for a personalized journey into India's cultural heritage.
          Explore the magic of choice in storytelling.
        </p>
        <div className="burger-container">
          <div className="burger-item">
            <img src={burgerImage2} alt="" />
            <h2 className="center color-primary burger-heading">
              Indian Folktales
            </h2>
            <p className="center">
              Dive into a diverse collection of Indian folktales, where timeless
              narratives unfold, weaving together enchanting stories that span
              themes, regions, and genres.
            </p>
            <a onClick={() => handleNavigation("/folk")} className="order-btn">
              Explore More
            </a>
          </div>
          <div className="burger-item">
            <img src={burgerImage} alt="" />
            <h2 className="center color-primary burger-heading">
              Indian Mythology{" "}
            </h2>
            <p className="center">
              Embark on a captivating journey into the realm of Indian Mythology, where timeless tales of gods, goddesses, and epic adventures await. Explore the timeless tales of gods, goddesses, and epic adventures
            </p>
            <a onClick={() => handleNavigation("/myth")} className="order-btn">
            Explore More
            </a>
          </div>
        </div>
      </section>

      {/* Event Section Starts from Here */}
      <section id="event-container">
        <div className="event-item">
          <div className="event-content">
            <h2 className="normal-hading color-primary">OUR MOTIVE</h2>
            <p className="event-para para-font">
              Welcome to our captivating digital realm, where the rich tapestry
              of Indian folklore and mythology unfolds in a kaleidoscope of
              themes, regions, and genres. Immerse yourself in a treasure trove
              of enchanting tales that traverse the diverse landscapes of India,
              each narrative woven with cultural nuances and timeless wisdom.
              From the mystical realms of gods and goddesses to the rustic charm
              of regional folklore, our website invites you on a journey through
              the heart of Indian storytelling. Explore the magic of mythology,
              discover hidden gems from distinct regions, and delve into the
              myriad genres that make Indian folklore a tapestry of vibrant
              narratives. Join us in celebrating the timeless allure of India's
              storytelling traditions.
            </p>
          </div>
          <img src={eventBurger} alt="" />
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

export default VedicWhispers;