import React from 'react';
import './ProductSection.css';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import UMFTooltip from './UMFTooltip';

const ProductSection = () => {
  return (
    <section className="product-section">
      {/* Desktop Layout */}
      <div className="desktop-only">
        <div className="desktop-container">
          <div className="desktop-grid">
            <ProductGallery />
            <ProductInfo />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-only">
        <div className="mobile-container">
          <div className="mobile-image">
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/tuvfj5vnSw.png"
              alt="Manuka Honey UMF 24+"
              className="mobile-img"
            />
          </div>

          {/* Product Info Mobile */}
          <ProductInfo isMobile={true} />
        </div>
      </div>

      <UMFTooltip />
    </section>
  );
};

export default ProductSection;
