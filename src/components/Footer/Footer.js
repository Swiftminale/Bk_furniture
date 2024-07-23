import React from "react";
import "./Footer.css";
import logoimg from "../Navbar/img/Logo.png";
function Footer() {
  return (
    <div className="container-footer">
      <div className="text-center">
        <img src={logoimg} alt="logo" className="logo" />© 2020 Copyright:
        <a className="text-light" href="/">
          BK Furniture
        </a>
      </div>
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
