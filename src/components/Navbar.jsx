import React from "react";
import { Link } from "react-router-dom"; 
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-line1">FEMME</div>
        <div className="logo-line2">Wardrobe</div>
        <div className="logo-underline"></div>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

              <div className="icon-container">
                <FaSearch className="icon" />
                <FaShoppingBag className="icon" />
                <span className="bag-count">0</span>
              </div>
    </nav>
  );
};

export default Navbar;