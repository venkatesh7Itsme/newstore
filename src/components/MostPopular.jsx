import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MostPopular.css";

const MostPopular = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      category: "Work &amp",
      title: "Timeless Classic Collection",
      price: "$124.90",
      sizes: ["XL", "L", "M", "S", "XS"],
      colors: ["black", "green", "red"],
      image: "public/img37.jpg",
    },
    {
      id: 2,
      category: "Casual",
      title: "Bohemian Rhapsody Attire",
      price: "$145.50",
      sizes: ["XL", "L", "M", "S", "XS"],
      colors: ["black", "green", "red"],
      image: "public/img38.jpg",
    },
    {
      id: 3,
      category: "Evening Dresses",
      title: "Midnight Gala Maxi Dress",
      price: "$175.00",
      sizes: ["L", "M", "S", "XS"],
      colors: ["black", "green", "red"],
      image: "public/img39.jpg",
    },
    {
      id: 4,
      category: "Casual",
      title: "Power Suit Ensemble",
      price: "$125.50",
      sizes: ["XL", "L", "M", "S", "XS"],
      colors: ["black", "green", "red"],
      image: "public/img40.jpg",
    },
  ];

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="most-popular">
      <h1>Most Popular</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.title}
              onClick={() => handleImageClick(product.id)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <div className="sizes">
              {product.sizes.map((size, index) => (
                <span key={index} className="size">
                  {size}
                </span>
              ))}
            </div>
            <div className="colors">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="color"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;