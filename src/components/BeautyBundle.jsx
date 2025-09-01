import React from 'react';
import bundleIcon from '../assets/bundle.png';
import bundleIcon2 from '../assets/bundle.png';

import woodenSpoon from '../assets/spoon.png';
import './BeautyBundle.css';

const BeautyBundle = () => {
  return (
    <div className="beauty-bundle">
      {/* Header */}
      <div className="bundle-header">
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/3mhDj3AAPn.svg" alt="Bundle" className="bundle-icon" />
        <h3 className="bundle-title">Beauty Bundle</h3>
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/nHw1G1jtSA.svg" alt="Arrow" className="arrow-icon" />
      </div>

      {/* Products */}
      <div className="products">
        {/* Product 1 */}
        <div className="product">
          <div className="product-image">
            <img 
              src={bundleIcon}
              alt="UMF 20+"
            />
          </div>
          <div className="product-name">UMF 20+</div>
          <div className="product-weight">
            <span>250g</span>
            <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/oXUV4Gp4jP." alt="Dropdown" className="dropdown-icon" />
          </div>
        </div>

        <div className="plus">+</div>

        {/* Product 2 */}
        <div className="product">
          <div className="product-image">
            <img 
              src={bundleIcon2}
              alt="UMF 24+"
            />
          </div>
          <div className="product-name">UMF 24+</div>
          <div className="product-weight">
            <span>250g</span>
            <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/5eB6KeHT9a.svg" alt="Dropdown" className="dropdown-icon" />
          </div>
        </div>

        <div className="plus">+</div>

        {/* Product 3 */}
        <div className="product">
          <div className="product-image">
            <img 
              src={woodenSpoon}
              alt="Wooden Spoon"
            />
          </div>
          <div className="product-name">Wooden Spoon</div>
        </div>

        {/* Pricing */}
        <div className="pricing">
          <div className="price-info">
            <span className="original-price">$478.75 USD</span>
            <span className="discounted-price">$430.88 USD</span>
            <span className="save-text">Save 10%</span>
          </div>
          <button className="add-bundle-btn">Add bundle to cart</button>
        </div>
      </div>
    </div>
  )
}

export default BeautyBundle;
