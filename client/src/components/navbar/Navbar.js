import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import m from "../assets/multikart.png";
import CloseButton from "react-bootstrap/CloseButton";
// import { Button } from "react-bootstrap";
import axios from "axios";

function NavigationBar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const [name, setName] = useState("");

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api4/getName"); // Replace with your API endpoint to fetch the name
        setName(response.data.name);
        console.log()
      } catch (error) {
        console.log("Failed to fetch name:", error);
      }
    };

    fetchName();
  }, []);
  
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

        <div className="navbar-links">
          {name && (
            <li>
              <p>{name}</p>
            </li>
          )}

          <a
            href="/home"
            className="navbar-link"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            Home
          </a>

          <a href="#about" className="navbar-link">
            About
          </a>

          <a href="/complaints" className="navbar-link">
            Complaint
          </a>

          {isHovered && (
            <div className="additional-links">
              <a href="#link1">Product</a>
              <a href="#link2">Services</a>
              <a href="#link3">Associates</a>
            </div>
          )}
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
      <h2>
        Navigation <CloseButton onClick={handleClosePopup} />
      </h2>
      <ul className="popup-links">
        <li>
          <a
            href="/home"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Home
          </a>
          <a href="/home" className="hover-link">
            Additional Link
          </a>
        </li>
        <li>
          <a
            href="/about"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            About
          </a>
          <a href="/about" className="hover-link">
            Additional Link
          </a>
        </li>
        <li>
          <a
            href="/services"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
            Services
          </a>
          <a href="/services" className="hover-link">
            Additional Link
          </a>
        </li>
        <li>
          <a
            href="/contact"
            onMouseEnter={handleLinkHover}
            onMouseLeave={handleLinkLeave}
          >
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
