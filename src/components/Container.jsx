import React from "react";
import { FaStar } from "react-icons/fa";
import '../styles/Container.css';

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="stars">
          {Array(5)
            .fill()
            .map((_, index) => (
              <FaStar key={index} className="star-icon" />
            ))}
        </div>
        <p className="quote">
          "FemmeWardrobe Is My Fashion Sanctuary! The Curated Collection
          Effortlessly Blends Chic Trends With Timeless Elegance, Making Every
          Purchase A Delightful Discovery. The Quality Of Their Pieces Is
          Unmatched, And I Appreciate The Brands Commitment To Sustainable
          Fashion. What Truly Sets FemmeWardrobe Apart Is Their Customer-Centric
          Approach."
        </p>
        <p className="author">SARAH M., DEVOTED FEMMEWARDROBE FAN</p>
      </div>
    </div>
  );
};

export default App;
