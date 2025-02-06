import React from "react";
import { Link } from "react-router-dom";

const Header = ({ showHero = true }) => {
  return (
    <div className={showHero ? "header-container" : "header-container no-hero"}>
      {/* Navigation Bar (Always Visible) */}
      <header className="header">
        <nav className="nav-container">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="logo-container">
          <span className="logo-line1">CASUAL & EVERYDAY</span>
          <h1 className="logo-line2">Your Brand</h1>
          <div className="logo-underline"></div>
        </div>
        <div className="icon-container">
          <span className="icon">🔍</span>
          <span className="icon shopping-bag">🛍️</span>
        </div>
      </header>

      {/* Hero Section (Conditionally Rendered) */}
      {showHero && (
        <div className="hero-content">
          <h2 className="sub-heading">CASUAL & EVERYDAY</h2>
          <h1>Effortlessly Blend Comfort & Style!</h1>
          <p>
            Explore our latest collection of stylish and comfortable casual wear, 
            designed for your everyday adventures.
          </p>
          <button className="view-collection-btn">VIEW COLLECTION</button>
        </div>
      )}
    </div>
  );
};

export default Header;
