import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import m from "../assets/multikart.png";
import CloseButton from "react-bootstrap/CloseButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";


function NavigationBar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
 

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();



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

        <div className="navbar-links">

      
          {isAuthenticated && (
            <li>
              <p> {user.name} </p>
            </li>
          )}



      <a href="/home" className="navbar-link" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        Home
      </a>
    
          {isAuthenticated ? (
            <li>
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          )}

      <a href="#about" className="navbar-link" >
        About
      </a>
  
      <a href="/complaints" className="navbar-link" >
        Complaint
      </a>
      {isHovered && (
        <div className="additional-links">
          {/* Add your additional links here */}
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