import React from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Effortlessly Blend Comfort & Style!</h1>
          <p>Discover our exclusive collection for every season and occasion.</p>
          <button className="btn">view collection</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;