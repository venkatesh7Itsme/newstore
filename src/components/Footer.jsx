import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">Menu</h4>
          <ul className="footer-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Categories</h4>
          <ul className="footer-list">
            <li><a href="#casual">Casual</a></li>
            <li><a href="#work-office">Work & Office</a></li>
            <li><a href="#activewear">Activewear</a></li>
            <li><a href="#evening-dresses">Evening Dresses</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-list">
            <li><a href="#contact-support">Contact Support</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#live-chat">Live Chat</a></li>
            <li><a href="#returns">Returns</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Social Media</h4>
          <ul className="footer-list">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#pinterest">Pinterest</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;