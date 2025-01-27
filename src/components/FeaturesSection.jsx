import React from 'react';
import { FaLock, FaTruck, FaUndoAlt, FaShippingFast } from 'react-icons/fa'; 
import '../styles/FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="feature">
        <FaLock className="feature-icon" />
        <h3>Secure Payments</h3>
        <p>Shop with confidence knowing your transactions are safeguarded.</p>
      </div>
      <div className="feature">
        <FaTruck className="feature-icon" />
        <h3>Free Shipping</h3>
        <p>Shopping with no extra charges - savor the liberty of complimentary shipping on every order.</p>
      </div>
      <div className="feature">
        <FaUndoAlt className="feature-icon" />
        <h3>Easy Returns</h3>
        <p>With our hassle-free Easy Returns, changing your mind has never been more convenient.</p>
      </div>
      <div className="feature">
        <FaShippingFast className="feature-icon" />
        <h3>Order Tracking</h3>
        <p>Stay in the loop with our Order Tracking feature - from checkout to your doorstep.</p>
      </div>
    </section>
  );
}

export default FeaturesSection;