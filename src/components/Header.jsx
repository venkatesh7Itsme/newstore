
import React, { useState } from "react";
import { FaShoppingBag, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="nav-container">
          <ul className="nav-list desktop-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          {/* Hamburger Icon for Mobile */}
          <FaBars className="hamburger-icon" onClick={toggleMenu} />
        </div>

        <div className="logo-container">
          <div className="logo-line1">FEMME</div>
          <div className="logo-line2">Wardrobe</div>
          <div className="logo-underline"></div>
        </div>

        <div className="icon-container">
          <FaSearch className="icon" />
          <FaShoppingBag className="icon" />
          <span className="bag-count">0</span>
        </div>
      </header>

      <div className="hero-content">
        <h2 className="sub-heading">CASUAL & EVERYDAY</h2>
        <h1>Effortlessly Blend Comfort & Style!</h1>
        <p>
          Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters,
          versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
        </p>
        <button className="view-collection-btn">VIEW COLLECTION</button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <FaTimes className="close-icon" onClick={toggleMenu} />
          <ul className="mobile-nav-list">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#shop" onClick={toggleMenu}>Shop</a></li>
            <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
