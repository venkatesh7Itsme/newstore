//shop.jsx//
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MostPopular from "../components/MostPopular";
import ProductGrid from "../components/ProductGrid";
import "../styles/Shop.css";

const ShopPage = () => {
  return (
    <div>
      {/* Pass isShopPage as true */}
      <Header isShopPage={true} showHero={false} showNav={true} />

      <div className="shop-hero">
        <div className="shop-hero-content">
          <h1>Shop</h1>
          <p>
            <a href="/">Home</a> &raquo; Shop
          </p>
        </div>
      </div>

      <MostPopular />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default ShopPage;

//header.jsx//
import React, { useState } from "react";
import { FaShoppingBag, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ isShopPage = false, isAboutUs = false, showHero = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={header-container ${isShopPage || isAboutUs ? "shop-page-header" : "headerPage"}}>
      {/* Navigation Bar (Always Visible) */}
      <header className="header">
        <div className="nav-container">
          <ul className="nav-list desktop-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#contact">Contact Us</a></li>
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
          <FaShoppingBag className="icon" />
          <span className="bag-count">0</span>
        </div>
      </header>

      {/* Hero Section (Only Visible on Home Page) */}
      {showHero && !isShopPage && !isAboutUs && (
        <div className="hero-content">
          <h2 className="sub-heading">CASUAL & EVERYDAY</h2>
          <h1>Effortlessly Blend Comfort & Style!</h1>
          <p>
            Explore our collection featuring cozy sweaters, versatile denim, and more.
          </p>
          <button className="view-collection-btn">VIEW COLLECTION</button>
        </div>
      )}

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
    </div>
  );
};

export default Header;
