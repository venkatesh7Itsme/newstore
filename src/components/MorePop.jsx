import React, { useState } from "react";
import { FaRegHeart, FaRegCommentDots, FaCog } from "react-icons/fa";
import "./App.css";

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.title}
          onClick={() => onProductClick(product)}
        />
        <div className="image-icons">
          <FaRegHeart className="icon" title="Wishlist" />
          <FaRegCommentDots className="icon" title="Comment" />
          <FaCog className="icon" title="Settings" />
        </div>
      </div>
      <h4>{product.category}</h4>
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <div className="size-options">
        {product.sizes.map((size) => (
          <span key={size} className="size">
            {size}
          </span>
        ))}
      </div>
    </div>
  );
};

const MostPopular = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/200",
      category: "Work & Casual",
      title: "Timeless Classic Collection",
      price: 124.9,
      sizes: ["XL", "L", "M", "S"],
    },
    {
      id: 2,
      image: "https://via.placeholder.com/200",
      category: "Casual",
      title: "Bohemian Rhapsody Attire",
      price: 145.5,
      sizes: ["XL", "L", "M", "S"],
    },
    {
      id: 3,
      image: "https://via.placeholder.com/200",
      category: "Evening Dresses",
      title: "Midnight Gala Maxi Dress",
      price: 175.0,
      sizes: ["M", "S", "XS"],
    },
    {
      id: 4,
      image: "https://via.placeholder.com/200",
      category: "Casual",
      title: "Power Suit Ensemble",
      price: 125.5,
      sizes: ["XL", "L", "M", "S"],
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2 className="section-title">Most Popular</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={handleProductClick}
          />
        ))}
      </div>

      {selectedProduct && (
        <div className="product-details">
          <div className="details-content">
            <h3>{selectedProduct.title}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>Price: ${selectedProduct.price}</p>
            <button className="add-to-cart">Add to Cart</button>
            <button className="close-details" onClick={handleCloseDetails}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MostPopular;

//import React from "react";//most popular
import "../styles/MostPopular.css";
import "../assets/img3.jpg";
import "../assets/img4.jpg";
import "../assets/img5.jpg";
import "../assets/img6.jpg";
const MostPopular = () => {
  const items = [
    {
      title: "Timeless Classic Collection",
      price: "$124.90",
      category: "Work & Casual",
      sizes: ["XL", "L", "M", "S"],
      colors: ["black", "green", "red", "white"],
      descripiton: "Crafted from soft breathable fabrics, the relaxed fit provides a carefree silhouette, while thoughtful details add a touch of urban chic. Whether you’re lounging at home or navigating a bustling day, our Timeless Classic Collection effortlessly combine ease with fashion, allowing you to move with relaxed confidence while making a statement of casual sophistication", 
     image:"../assets/img3.jpg",
    },
    {
      title: "Bohemian Rhapsody Attire",
      price: "$145.50",
      category: "Casual",
      sizes: ["XL", "L", "M", "S", "XS"],
      colors: ["black", "green", "red", "white"],
      descripiton:"From the office to high-powered meetings, our Bohemian Rhapsody Attire is more than clothing; it’s a statement of strength, ambition, and unwavering elegance, ensuring you stride into any professional setting with unparalleled grace and authority",
      image: "../assets/img4.jpg",
    },
    {
      title: "Midnight Gala Maxi Dress",
      price: "$175.00",
      category: "Evening Dresses",
      sizes: ["XL", "L", "M", "S"],
      colors: ["black", "green", "red", "white"],
      descripiton:"The deep midnight hue, combined with subtle detailing and a touch of glamour, creates a look that is both timeless and captivating. Whether you’re attending a gala, a wedding, or a special event, the Midnight Gala Maxi Dress ensures you’ll be the epitome of sophistication, leaving a trail of enchantment wherever you go",
      image: "../assets/img5.jpg",
    },
    {
      title: "Power Suit Ensemble",
      price: "$125.50",
      category: "Casual",
      sizes: ["XL", "L", "M", "S"],
      colors: ["black", "green", "red", "white"],
      descripiton:"Whether you’re leading a meeting or making a statement at a professional event, our Power Suit Ensemble effortlessly blends professionalism with contemporary flair, ensuring you exude confidence and leave a lasting impression wherever your ambitions take you",
      image: "../assets/img6.jpg" ,
    },
  ];

  return (
    <div className="most-popular">
      <h2>Most Popular</h2>
      <div className="most-popular-items">
        {items.map((item, index) => (
          <div key={index} className="most-popular-item">
            <img src={item.image} alt={item.title} className="item-image" />
            <h3>{item.category}</h3>
            <p>{item.title}</p>
            <p className="price">{item.price}</p>
            <div className="options">
              <div className="sizes">
                {item.sizes.map((size, i) => (
                  <button key={i}>{size}</button>
                ))}
              </div>
              <div className="colors">
                {item.colors.map((color, i) => (
                  <div
                    key={i}
                    className="color-circle"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular; //