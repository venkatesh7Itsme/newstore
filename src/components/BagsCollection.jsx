import React from "react";
import "../styles/BagsCollection.css";

const BagsCollection = () => {
  return (
    <div className="bags-collection">
      <div className="bags-right">
        <img
          src="public/img50.jpg"
          alt="Bag and Accessories"
          className="bag-image"/>
      

        <h2>Explore Our Exquisite Bag Collection Now!</h2>

        <button className="view-collection">View Collection</button>
      </div>
    </div>
  );
};

export default BagsCollection;


/*import React from "react";
import "../styles/BagsCollection.css";


const BagsCollection = () => {
  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="content">
        <div className="section">
          <h1>Explore Our Exquisite Bag Collection Now!</h1>
          <button className="cta-button">View Collection</button>
        </div>
        <div className="section">
          <img
            src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-03-b.jpg"
            alt="Bag"
            className="foreground-image"
          />
        </div>
        <div className="section">
          <p>
            Discover the perfect bags for every occasion. Style meets
            functionality in our curated collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BagsCollection;*/