import React from 'react';
import './PaymentOptions.css';

const PaymentOptions = ({ selectedOption, onOptionChange, isMobile = false }) => {
  return (
    <div className="payment-options">
      <h3 className="payment-title">Payment Options (Select One)</h3>

      <div className="payment-container">
        {/* One-time purchase */}
        <button
          onClick={() => onOptionChange('one-time')}
          className={`payment-button ${
            selectedOption === 'one-time' ? 'selected' : 'unselected'
          }`}
        >
          <div className="button-content">
            <div className="text-left">
              <div>One-time</div>
              <div>purchase</div>
            </div>
            <div className="text-right">
              <div>$55.88</div>
              <div>USD</div>
            </div>
          </div>
        </button>

        {/* Subscribe & save */}
        <button
          onClick={() => onOptionChange('subscribe')}
          className={`payment-button ${
            selectedOption === 'subscribe' ? 'selected' : 'unselected'
          }`}
        >
          <div className="button-content">
            <div className="text-left">
              <div>Subscribe & save</div>
              <div>20%</div>
            </div>
            <div className="text-right">
              <div>$44.70</div>
              <div>USD</div>
            </div>
          </div>
        </button>

        {/* Subscription info */}
        <button className="subscription-info">
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/MbeB4gGLL6.svg"
            alt="Info"
            className="info-icon"
          />
          <span>What is a Subscription?</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
