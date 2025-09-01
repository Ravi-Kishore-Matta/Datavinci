import React, { useState } from 'react';
import './ProductInfo.css';
import SizeSelector from './SizeSelector';
import PaymentOptions from './PaymentOptions';
import QuantitySelector from './QuantitySelector';
import BeautyBundle from './BeautyBundle';
import UMFTooltip from './UMFTooltip';

const ProductInfo = ({ isMobile = false }) => {
  const [showUMFTooltip, setShowUMFTooltip] = useState(false);
  const [selectedSize, setSelectedSize] = useState('125g');
  const [quantity, setQuantity] = useState(1);
  const [paymentOption, setPaymentOption] = useState('one-time');

  const StarRating = () => (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/4gsoMpsEg0.svg"
          alt="Star"
          className="star"
        />
      ))}
    </div>
  );

  return (
    <div className={`product-info ${isMobile ? 'mobile' : ''}`}>
      {/* Product Title */}
      <div className="product-title">
        <h1 className={`title ${isMobile ? 'mobile-title' : 'desktop-title'}`}>
          Manuka Honey
        </h1>

        <div className="umf-mgo">
          <span className={`umf ${isMobile ? 'mobile-text' : 'desktop-text'}`}>UMF</span>
          <span className="tm">™</span>
          <span className={`umf-value ${isMobile ? 'mobile-value' : 'desktop-value'}`}>24+</span>
        </div>

        <div className="umf-mgo">
          <span className={`umf ${isMobile ? 'mobile-text' : 'desktop-text'}`}>MGO</span>
          <span className={`umf-value ${isMobile ? 'mobile-value' : 'desktop-value'}`}>1122+</span>
        </div>
      </div>

      {/* UMF/MGO Info Button */}
      <div
        className="tooltip-wrapper"
        onMouseEnter={() => !isMobile && setShowUMFTooltip(true)}
        onMouseLeave={() => !isMobile && setShowUMFTooltip(false)}
      >
        <button
          className="info-button"
          onClick={() => isMobile && setShowUMFTooltip((prev) => !prev)}
        >
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/o77GXLgUQt.svg"
            alt="Info"
            className="info-icon"
          />
          <span>What is UMF and MGO?</span>
        </button>

        {/* Tooltip */}
        <UMFTooltip
          isVisible={showUMFTooltip}
          onClose={() => setShowUMFTooltip(false)}
        />
      </div>

      {/* Product Name & Rating */}
      <div className="product-name-rating">
        <h2 className="product-name">The Optimiser</h2>
        <div className={isMobile ? 'rating-mobile' : 'rating-desktop'}>
          <StarRating />
          <span className="review-text">{isMobile ? '795 reviews' : '825 Reviews'}</span>
        </div>
      </div>

      {/* Product Description */}
      <p className={`product-description ${isMobile ? 'mobile-desc' : 'desktop-desc'}`}>
        For those times in life when quality comes first. This pure UMF™ 24+ Manuka
        Honey is powerfully active, sourced from wild and rugged locations around
        Aotearoa New Zealand and great for almost all uses. It has a full, delicious
        flavour and your body will love you for it.
      </p>

      {/* Certifications */}
      <div className="certifications">
        {[
          "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/bRqegHFw6U.png",
          "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/vjnjUwnQwn.png",
          "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/TbzbCZ6ZVp.png",
          "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/0XXTpysiKf.png",
          "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/qwV0ujHOx3.png",
          "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/SCrQfStMsk.png"
        ].map((cert, index) => (
          <img key={index} src={cert} alt={`Certification ${index + 1}`} className="cert-icon" />
        ))}
      </div>

      {/* Size Selection */}
      <SizeSelector selectedSize={selectedSize} onSizeChange={setSelectedSize} isMobile={isMobile} />

      {/* Payment Options */}
      <PaymentOptions selectedOption={paymentOption} onOptionChange={setPaymentOption} isMobile={isMobile} />

      {/* Quantity and Add to Cart */}
      <div className={isMobile ? 'quantity-add-mobile' : 'quantity-add-desktop'}>
        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} isMobile={isMobile} />
        <button className="add-to-cart-button">Add to cart</button>
      </div>

      {/* Rewards Info */}
      <div className="rewards-info">
        <img
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/s3UdWs4WRU.png"
          alt="Colourclub Logo"
          className="rewards-logo"
        />
        <div className="rewards-text">
          <div className="rewards-details">
            <span>Colourclub members earn up to</span>
            <div className="reward-points">56</div>
            <span>reward points when buy this item.</span>
          </div>
          <div className="rewards-actions">
            <button>Sign up</button>
            <span> or </span>
            <button>log in</button>
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="delivery-info">
        <h3>Delivery</h3>
        <p>FREE DELIVERY ON ORDERS OVER $30</p>
        <p>ESTIMATED DELIVERY DATE:<br />{isMobile ? 'Apr 8 - Apr 10 to' : 'Jun 9 - Jun 13 to'}</p>
      </div>

      {/* Afterpay */}
      <div className="afterpay-info">
        <h3>After Pay</h3>
        <div className="afterpay-details">
          <span>or 4 interest-free payments of $13.97 with</span>
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/WyY9ivGyO6.svg"
            alt="Afterpay"
            className="afterpay-logo"
          />
          <button>
            <img
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/uEzHncSWDw.svg"
              alt="Learn more"
              className="learn-more-icon"
            />
          </button>
        </div>
      </div>

      {/* UMF Scale & Taste Profile */}
      <div className="umf-taste-profile">
        <div className="umf-scale">
          <h3>UMF™ scale</h3>
          <div className={`umf-grid ${isMobile ? 'mobile-umf-grid' : 'desktop-umf-grid'}`}>
            {[{ label: 'UMF™ 10+', active: false },
              { label: 'UMF™ 15+', active: false },
              { label: 'UMF™ 20+', active: false },
              { label: 'UMF™ 24+', active: true },
              { label: 'UMF™ 26+', active: false },
              { label: 'UMF™ 28+', active: false },
              { label: 'UMF™ 30+', active: false }
            ].slice(0, isMobile ? 4 : 7).map((item, index) => (
              <button key={index} className={`umf-btn ${item.active ? 'active' : ''}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="taste-profile">
          <h3>Taste Profile</h3>
          <div className="taste-bar">
            <div className="taste-gradient"></div>
            <div className="taste-left-label">Clean & {isMobile ? 'Sweet' : 'Intense'}</div>
            <div className="taste-right-label">Bold & Intense</div>
            {!isMobile && <div className="taste-marker"></div>}
          </div>
        </div>
      </div>

      {/* Beauty Bundle */}
      {!isMobile && <BeautyBundle />}
    </div>
  );
};

export default ProductInfo;
