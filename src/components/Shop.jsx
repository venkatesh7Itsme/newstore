import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MostPopular from "../components/MostPopular";
import ProductGrid from "../components/ProductGrid";
import "../styles/Shop.css";

const ShopPage = () => {
  return (
    <div>
      <Navbar/>
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