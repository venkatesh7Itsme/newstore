import React from "react";
import "../styles/FashionParallax.css";

const DiscoverParallax = () => {
  return (
    <div className="parallax-section">
      <div className="overlay-images">
        <figure>
        <div className="image-left">
          < img src="public/img44.jpg" alt="Fashion Model Left" />
        </div>
        </figure>
      </div>
      <div className="parallax-content">
        <h1>Discover The Allure Of Fashion Reinvented!</h1>
        <p>
          Dive into a world of style with our latest collection! Shop now and redefine your wardrobe narrative!
        </p>
        <button className="shop-now">Shop Now</button>
      </div>
    </div>
  );
};

export default DiscoverParallax;