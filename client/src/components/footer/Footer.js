import React from "react";
import { FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { useState } from "react";
import { FaFacebook,
        FaTwitter, 
        FaInstagram,
        FaYoutube,
        FaGoogle, 
        FaMapMarkerAlt,
        FaEnvelope,
        FaFax,
        FaPhone
      } from "react-icons/fa";
import m from '../assets/multikart.png'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import './Footer.css';
export default function Footer() {
  const footerStyles = {
    backgroundColor: "gray",
    borderTop: "1px solid #ddd",
    padding: "20px",
    textAlign: "center",
  };
 
  const iconStyles = {
    marginRight: "25px",
  };
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div style={{backgroundColor:"#f9f9f9"}}>
      <Container
             className={footerStyles}
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <Row>
          <Col className="col-with-line">
            <h5>KNOW IT ALL FIRST!</h5>
            <h6 style={{  color:'gray',fontSize:'14px'}}>
              Never Miss Anything From Multikart By Signing Up To Our
              Newsletter.
            </h6>
          </Col>

          <Col style={{textAlign:'end'}}>
            <input
              className="email"
              type="email"
              placeholder="Enter your email"
            />
            <button  className="button">SUBSCRIBE</button>
          </Col>
        </Row>
        <hr/>
        <Row style={{marginTop:'45px',marginBottom:'35px'}} >
          <Col md={5}>
            <img src={m} alt="pic not found"/>
            <h6 style={{  color:'gray'}}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              </p>
              <p>
                {" "}
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
              </p>
              <p> enim ad minim veniam,</p>{" "}
            </h6>

            <div  >
              <FaFacebook className="iconStyle" size={24} href="/" />
              <FaTwitter  className="iconStyle" size={24} href="/" />
              <FaInstagram  className="iconStyle" size={24} href="/" />
              <FaYoutube    className="iconStyle" size={24} href="/" />
              <FaGoogle  className="iconStyle"/>
            </div>
          </Col>
          {/* another row */}
          <Col>
            <ul >
              <h4 style={{marginBottom:'30px',fontSize:'18px'}}   >MY ACCOUNT</h4>
              <li className="links">
                {" "}
                <a href="/">
                  <h6> Womens </h6>
                </a>{" "}
              </li>
              <li className="links">
                {" "}
                <a href="/">
                  <h6> Clothing </h6>
                </a>{" "}
              </li>
              <li className="links">
                {" "}
                <a href="/">
                  <h6> Assesories </h6>
                </a>{" "}
              </li>
              <li className="links">
                {" "}
                <a href="/">
                  <h6> Feartured </h6>
                </a>{" "}
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h4 style={{marginBottom:'30px',fontSize:'18px'}}   >WHY WE CHOOSE</h4>
              <li className="links">
                {" "}
                <a href="/">
                  <h6> Shipping & Return</h6>
                </a>{" "}
              </li>
              <li className="links">
                {" "}
                <a href="/">
                  <h6> Secure Shopping </h6>
                </a>{" "}
              </li>
              <li className="links">
                {" "}
                <a href="/">
                  <h6> Gallary </h6>
                </a>{" "}
              </li>
              <li className="links">
                {" "}
                <a href="/">
                  <h6> Affiliates </h6>
                </a>{" "}
              </li>
              <li className="links">
                {" "}
                <a href="/">
                  <h6> Contacts </h6>
                </a>{" "}
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h4 style={{marginBottom:'30px',fontSize:'18px'}}  >STORE INFORMATION</h4>
            
              <li className="links">
                {" "}
                <a href="/">
                  <h6>  <FaMapMarkerAlt /> Multikart Demo Store, <br />
                      Demo Store India 345-659
                  </h6>
                </a>{" "}
              </li>
              <li className="links">
                {" "}
                <a href="/">
                  <h6><FaPhone/> Call Us: 123-456-7898</h6>
                </a>{" "}
              </li>
              <li className="links">
                {" "}<h6 style={{color:'gray'}} >  <FaEnvelope style={{color:'gray'}}  />  Email Us:</h6>
                <a href="/">
                  <h6> Support@Fiot.Com </h6>
                </a>{" "}
              </li>
    
              <li className="links">
                {" "}
                <a href="/">
                  <h6> <FaFax/> Fax: 123456 </h6>
                </a>{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    <Container className="contaier2" fluid style={{backgroundColor:"#ffffff"}}>
    <Row>
          <Col>
            <p>
              &copy; {new Date().getFullYear()} My Website Name. All Rights
              Reserved.
            </p>
          </Col>
          <Col>
            <span className="icons">
              <FaPaypal color="#003087" size={32} style={iconStyles} />
              <FaCcVisa color="#1a1f71" size={32} style={iconStyles} />
              <FaCcMastercard color="#ff5f00" size={32} style={iconStyles} />
            </span>
          </Col>
        </Row>
    </Container>
    </div>
  );
}
