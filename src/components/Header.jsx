import React, { useState } from "react";
import { FaShoppingBag, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="nav-container">
          <ul className="nav-list desktop-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <FaBars className="hamburger-icon" onClick={toggleMenu} />
        </div>

        <div className="logo-container">
          <div className="logo-line1">FEMME</div>
          <div className="logo-line2">Wardrobe</div>
          <div className="logo-underline"></div>
        </div>

        <div className="icon-container">
          <FaSearch className="icon" />
          <div className="cart-icon-container" onClick={toggleCart}>
            <FaShoppingBag className="icon" />
            <span className="bag-count">0</span>
          </div>
        </div>
      </header>

      <div className="hero-content">
        <h2 className="sub-heading">CASUAL & EVERYDAY</h2>
        <h1>Effortlessly Blend Comfort & Style!</h1>
        <p>
          Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
        </p>
        <button className="view-collection-btn">VIEW COLLECTION</button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <FaTimes className="close-icon" onClick={toggleMenu} />
          <ul className="mobile-nav-list">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </div>
      )}

      {/* Shopping Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleCart}>✖</button>
        <h2>Shopping Cart</h2>
        <p>No products in the cart.</p>
        <button className="continue-btn" onClick={toggleCart}>
          Continue Shopping
        </button>
      </div>

      {/* Overlay for Cart */}
      {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
    </div>
  );
};

export default Header;