import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import m from "../assets/multikart.png";
import CloseButton from "react-bootstrap/CloseButton";

function NavigationBar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-top">
          <div className="App">
            <FontAwesomeIcon
              className="navbar-logo"
              onClick={handlePopupToggle}
              icon={faBars}
            />
            {isPopupOpen && <PopupScreen handleClosePopup={handleClosePopup} />}
          </div>
          <div className="navbar-logo">
            <img src={m} alt="pic not found" />
          </div>
        </div>
        {/* Rest of the code */}
        <div class="navbar-links">
  <a href="#home" class="navbar-link">Home</a>
  <a href="#about" class="navbar-link">About</a>
  <a href="#services" class="navbar-link">Services</a>
  <a href="#contact" class="navbar-link">Contact</a>
</div>

      </nav>
    </>
  );
}

export default NavigationBar;

const PopupScreen = ({ handleClosePopup }) => {
  const handleLinkHover = (event) => {
    const hoverLink = event.target.nextElementSibling;
    hoverLink.style.display = "inline-block";
  };

  const handleLinkLeave = (event) => {
    const hoverLink = event.target.nextElementSibling;
    hoverLink.style.display = "none";
  };

  return (
    <div className="popup-screen">
      <h2>Navigation <CloseButton onClick={handleClosePopup} /></h2>
      <ul className="popup-links">
        <li>
          <a href="/home" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
            Home
          </a>
          <a href="/home" className="hover-link">
            Additional Link
          </a>
        </li>
        <li>
          <a href="/about" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
            About
          </a>
          <a href="/about" className="hover-link">
            Additional Link
          </a>
        </li>
        <li>
          <a href="/services" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
            Services
          </a>
          <a href="/services" className="hover-link">
            Additional Link
          </a>
        </li>
        <li>
          <a href="/contact" onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
            Contact
          </a>
          <a href="/contact" className="hover-link">
            Additional Link
          </a>
        </li>
      </ul>
    </div>
  );
};