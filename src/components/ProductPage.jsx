import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from "react-icons/fa";
import "../styles/ProductPage.css";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    category: "Work & Office",
    title: "Timeless Classic Collection",
    price: "$124.90 – $154.90 & Free Shipping",
    description:
      "Crafted from soft, breathable fabrics, the relaxed fit provides a carefree silhouette, while thoughtful details add a touch of sophistication. Whether you're lounging at home or navigating a bustling day at the office, Timeless Classic Collection effortlessly combines ease with fashion, allowing you to indulge in a statement of casual sophistication.",
    sku: "N/A",
    image:
      "https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-08-a.jpg",
    sizes: ["XL", "L", "M", "S", "XS"],
    colors: ["black", "green", "red"],
    additionalInfo:
      "sizes: XL,L,M,S,XS\n colors:black, green, red",
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
    additionalInfo:" sizes: XL,L,M,S,XS\n colors:black, green, red",
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
    additionalInfo: " sizes: XL,L,M,S,XS\n colors:black, green, red",

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
    additionalInfo: "sizes: XL,L,M,S,XS\n colors:black, green, red",
      
    reviews: [],
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [activeTab, setActiveTab] = useState("description");
  const [isSticky, setIsSticky] = useState(false);

 
  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    review: "",
    name: "",
    email: "",
    saveInfo: false,
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const productDetails = document.querySelector('.product-details');
      if (productDetails) {
        const position = productDetails.getBoundingClientRect();
        setIsSticky(position.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('has-sticky-header', isSticky);
  }, [isSticky]);

  if (!product) {
    return <h2 style={{ textAlign: "center", margin: "2rem" }}>Product not found.</h2>;
  }

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleReviewChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReviewForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!reviewForm.rating) errors.rating = "Please select a rating";
    if (!reviewForm.review.trim()) errors.review = "Please write a review";
    if (!reviewForm.name.trim()) errors.name = "Name is required";
    if (!reviewForm.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(reviewForm.email)) errors.email = "Please enter a valid email";
    return errors;
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      console.log("Review submitted:", reviewForm);
      setReviewForm({
        rating: 0,
        review: "",
        name: "",
        email: "",
        saveInfo: false
      });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const renderStars = (interactive = false) => {
    return [...Array(5)].map((_, index) => {
      const ratingValue = index + 1;
      return (
        <span
          key={index}
          className={`star ${ratingValue <= (interactive ? (hoveredStar || reviewForm.rating) : reviewForm.rating) ? 'filled' : ''}`}
          onClick={() => interactive && setReviewForm(prev => ({ ...prev, rating: ratingValue }))}
          onMouseEnter={() => interactive && setHoveredStar(ratingValue)}
          onMouseLeave={() => interactive && setHoveredStar(0)}
        >
          ★
        </span>
      );
    });
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const basePrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
  const totalPrice = (basePrice * quantity).toFixed(2);

  return (
    <div className="product-page-container">
      {isSticky && (
        <div className="sticky-header">
          <div className="sticky-content">
            <div className="sticky-product-info">
              <img src={product.image} alt={product.title} className="sticky-image" />
              <div className="sticky-details">
                <h3>{product.title}</h3>
                <p className="sticky-price">${totalPrice}</p>
              </div>
            </div>
            <div className="sticky-actions">
              <div className="quantity-selector">
                <button className="quantity-button" onClick={decrement}>–</button>
                <span className="quantity-value">{quantity}</span>
                <button className="quantity-button" onClick={increment}>+</button>
              </div>
              <button className="select-options">SELECT OPTIONS</button>
            </div>
          </div>
        </div>
      )}

      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details">
        <p className="product-category">{product.category}</p>
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-options">
          <div className="product-sizes">
            <h4>Size</h4>
            <div className="size-list">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className={`size-item ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="product-colors">
            <h4>Color</h4>
            <div className="color-list">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className={`color-swatch ${selectedColor === color ? "active" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        <div className="purchase-actions">
          <div className="quantity-selector">
            <button className="quantity-button" onClick={decrement}>–</button>
            <span className="quantity-value">{quantity}</span>
            <button className="quantity-button" onClick={increment}>+</button>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>

        <div className="product-meta">
          <p className="sku">SKU: {product.sku}</p>
          <p className="product-category-tag">Category: {product.category}</p>
        </div>

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
                    <div className="review-rating">{renderStars(false)}</div>
                    <p>
                      <strong>{review.author}:</strong> {review.text}
                    </p>
                  </div>
                ))
              )}

              <div className="review-form-container">
                <h3>Be the first to review "{product.title}"</h3>
                <p className="review-notice">Your email address will not be published. Required fields are marked *</p>

                <form onSubmit={handleSubmitReview} className="review-form">
                  <div className="form-group">
                    <label>Your rating *</label>
                    <div className="star-rating">
                      {renderStars(true)}
                    </div>
                    {formErrors.rating && <span className="error">{formErrors.rating}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="review">Your review *</label>
                    <textarea
                      id="review"
                      name="review"
                      value={reviewForm.review}
                      onChange={handleReviewChange}
                      rows="5"
                    />
                    {formErrors.review && <span className="error">{formErrors.review}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={reviewForm.name}
                      onChange={handleReviewChange}
                    />
                    {formErrors.name && <span className="error">{formErrors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={reviewForm.email}
                      onChange={handleReviewChange}
                    />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                  </div>

                  <div className="form-group checkbox">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={reviewForm.saveInfo}
                      onChange={handleReviewChange}
                    />
                    <label htmlFor="saveInfo">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>

                  <button type="submit" className="submit-review-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

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
      <Footer />
    </div>
  );
};
 
export default ProductPage;
