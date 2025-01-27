import React from "react";
import "../styles/ProductGrid.css";

const NewestProducts = () => {
  const products = [
    {
      id: 1,
      category: "Activewear",
      title: "Professional Pinstripe Blazer",
      price: "$109.99",
      image: "public/img46.jpg",
    },
    {
      id: 2,
      category: "Work & Joggers",
      title: "Relaxed Fit Joggers",
      price: "$250.00",
      image: "public/img47.jpg",
    },
    {
      id: 3,
      category: "Evening Dresses",
      title: "Urban Chic Ensemble",
      price: "$224.95",
      image:"public/img48.jpg",
    },
    {
      id: 4,
      category: "Activewear",
      title: "Weekend Wanderlust Wardrobe",
      price: "$119.95",
      image: "public/img49.jpg",
    },
  ];

  return (
    <div className="products-container">
      <h2 className="heading">Newest Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-category">{product.category}</h3>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">{product.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewestProducts;