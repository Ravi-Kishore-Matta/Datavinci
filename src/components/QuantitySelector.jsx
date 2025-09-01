import React from 'react';
import './QuantitySelector.css';

const QuantitySelector = ({ quantity, onQuantityChange, isMobile = false }) => {
  const increment = () => onQuantityChange(quantity + 1);
  const decrement = () => onQuantityChange(Math.max(1, quantity - 1));

  return (
    <div className="quantity-selector">
      <h3 className="quantity-title">Select Quantity</h3>
      
      <div className={`quantity-box ${isMobile ? 'mobile' : 'desktop'}`}>
        <button className="quantity-btn" onClick={decrement}>-</button>
        
        <div className="quantity-display">
          <span>{quantity}</span>
        </div>
        
        <button className="quantity-btn" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default QuantitySelector;
