import React, { useState, useEffect } from 'react';

const StickyHeader = ({ product, onSelectOptions }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky header after scrolling 200px
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-header ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-header-content">
        <div className="sticky-product-info">
          <img 
            src={product.image} 
            alt={product.title} 
            className="sticky-product-image"
          />
          <div className="sticky-product-details">
            <h3 className="sticky-product-title">{product.title}</h3>
            <p className="sticky-product-price">{product.price}</p>
          </div>
        </div>
        <button 
          className="sticky-select-options"
          onClick={onSelectOptions}
        >
          SELECT OPTIONS
        </button>
      </div>
    </div>
  );
};

export default StickyHeader;
