
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from "react-icons/fa";
import "../styles/ProductPage.css";

// Updated product array with "additionalInfo" and "reviews"
const products = [
  {
    id: 1,
    category: "Work & Office",
    title: "Timeless Classic Collection",
    price: "$124.90 – $154.90 & Free Shipping",
    description:
      "Crafted from soft, breathable fabrics, the relaxed fit provides a carefree silhouette, while thoughtful details add a touch of sophistication. Whether you’re lounging at home or navigating a bustling day at the office, Timeless Classic Collection effortlessly combines ease with fashion, allowing you to indulge in a statement of casual sophistication.",
    sku: "N/A",
    image:
      "https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-08-a.jpg",
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "green", "red"],
    additionalInfo:
      "Material: 100% Cotton\nShipping: Free worldwide shipping\nCare: Machine wash cold.\nFit: Relaxed / Oversized",
    reviews: [],
  },
  {
    id: 2,
    category: "Casual",
    title: "Bohemian Rhapsody Attire",
    price: "$145.50",
    description:
      "A free-spirited piece that blends whimsical patterns with comfortable fabrics. Perfect for a summer outing or festival look.",
    sku: "BR-202",
    image: "/img38.jpg",
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "green", "red"],
    additionalInfo:
      "Material: Rayon & Cotton\nShipping: Free shipping on orders over $99\nCare: Hand wash recommended",
    reviews: [],
  },
  {
    id: 3,
    category: "Evening Dresses",
    title: "Midnight Gala Maxi Dress",
    price: "$175.00",
    description:
      "Turn heads at any formal event with this elegant maxi dress. The flowing silhouette and intricate detailing exude sophistication.",
    sku: "MG-303",
    image: "/img39.jpg",
    sizes: ["L", "M", "S", "XS"],
    colors: ["black", "green", "red"],
    additionalInfo:
      "Material: Silk Blend\nShipping: Express shipping available\nCare: Dry clean only",
    reviews: [],
  },
  {
    id: 4,
    category: "Casual",
    title: "Power Suit Ensemble",
    price: "$125.50",
    description:
      "A sleek, modern suit that embodies confidence and class. Ideal for business meetings or a night out in style.",
    sku: "PSE-404",
    image: "/img40.jpg",
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "green", "red"],
    additionalInfo:
      "Material: 80% Polyester, 20% Viscose\nShipping: Free shipping\nCare: Machine wash cold, hang dry",
    reviews: [],
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // If product not found, display a message
  if (!product) {
    return (
      <h2 style={{ textAlign: "center", margin: "2rem" }}>
        Product not found.
      </h2>
    );
  }

  // States for quantity and selected options
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // For tabbed content
  const [activeTab, setActiveTab] = useState("description");

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Filter "related" by matching category (excluding the current product)
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="product-page-container">
      {/* ========== Top Section: Product Image & Details ========== */}
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details">
        <p className="product-category">{product.category}</p>
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-options">
          {/* Size Options */}
          <div className="product-sizes">
            <h4>Size</h4>
            <div className="size-list">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className={`size-item ${
                    selectedSize === size ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="product-colors">
            <h4>Color</h4>
            <div className="color-list">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className={`color-swatch ${
                    selectedColor === color ? "active" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Purchase Actions (Quantity + Add to Cart) */}
        <div className="purchase-actions">
          <div className="quantity-selector">
            <button className="quantity-button" onClick={decrement}>
              –
            </button>
            <span className="quantity-value">{quantity}</span>
            <button className="quantity-button" onClick={increment}>
              +
            </button>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>

        {/* SKU & Category Meta */}
        <div className="product-meta">
          <p className="sku">SKU: {product.sku}</p>
          <p className="product-category-tag">Category: {product.category}</p>
        </div>

        {/* Guaranteed Safe Checkout */}
        <div className="guaranteed-checkout">
          <h3>Guaranteed Safe Checkout</h3>
          <div className="payment-icons">
            <FaCcVisa className="payment-icon" />
            <FaCcMastercard className="payment-icon" />
            <FaCcAmex className="payment-icon" />
            <FaPaypal className="payment-icon" />
          </div>
        </div>
      </div>

      {/* ========== Tabbed Content Section ========== */}
      <div className="product-tabs">
        <ul className="tab-list">
          <li
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </li>
          <li
            className={activeTab === "additionalInfo" ? "active" : ""}
            onClick={() => setActiveTab("additionalInfo")}
          >
            Additional Information
          </li>
          <li
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.reviews.length})
          </li>
        </ul>

        <div className="tab-content">
          {activeTab === "description" && (
            <div className="description-content">
              <p>{product.description}</p>
            </div>
          )}
          {activeTab === "additionalInfo" && (
            <div className="additional-info-content">
              {/* Using <pre> to preserve newlines in the text */}
              <pre>{product.additionalInfo}</pre>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="reviews-content">
              {product.reviews.length === 0 ? (
                <p>No reviews yet.</p>
              ) : (
                product.reviews.map((review, index) => (
                  <div key={index} className="review-item">
                    <p>
                      <strong>{review.author}:</strong> {review.text}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* ========== Related Products Section ========== */}
      {relatedProducts.length > 0 && (
        <div className="related-products-section">
          <h2>Related Products</h2>
          <div className="related-products-grid">
            {relatedProducts.map((rp) => (
              <div key={rp.id} className="related-product-card">
                <img src={rp.image} alt={rp.title} />
                <h3>{rp.title}</h3>
                <p className="related-product-price">{rp.price}</p>
                <button className="view-product-btn">View Product</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
