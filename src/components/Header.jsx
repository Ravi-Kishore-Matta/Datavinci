import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [cartCount] = useState(0);

  return (
    <header className="header">
      {/* Desktop Header */}
      <div className="desktop-only">
        <div className="desktop-container">
          <div className="desktop-inner">
            {/* Left Navigation */}
            <nav className="nav-left">
              <button className="nav-button">WHICH MANUKA IS FOR ME?</button>
              <div className="nav-links">
                <button className="nav-link">Shop</button>
                <button className="nav-link">Explore</button>
              </div>
            </nav>

            {/* Logo */}
            <div className="logo-wrapper">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/bX4R7g5yTx.svg" 
                alt="Logo" 
                className="logo"
              />
            </div>

            {/* Right Navigation */}
            <nav className="nav-right">
              <div className="nav-links">
                <button className="nav-link">About</button>
                <button className="nav-link">Rewards</button>
                <button className="nav-link">Contact</button>
              </div>
              <div className="nav-icons">
                <button className="icon-button">
                  <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/Swx7ERjTTE.svg" alt="Account" className="icon" />
                </button>
                <button className="icon-button">
                  <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/13j83XhaVi.svg" alt="Search" className="icon" />
                </button>
                <button className="icon-button cart-button">
                  <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/QpLkJYiZx2.svg" alt="Cart" className="icon" />
                  <span className="cart-count">{cartCount}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile-only">
        <div className="mobile-container">
          <div className="mobile-inner">
            <button className="menu-button">
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/6CaWHeMJv5.svg" alt="Menu" className="mobile-icon" />
            </button>
            
            <img 
              src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/A5x0sUpcrr.svg" 
              alt="Logo" 
              className="mobile-logo"
            />
            
            <div className="mobile-icons">
              <button>
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/9hUOUXL7My.svg" alt="Account" className="mobile-icon" />
              </button>
              <button>
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/O1YD11WxfW.svg" alt="Search" className="mobile-icon" />
              </button>
              <button className="cart-button">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/NOQgWNvgQ4.svg" alt="Cart" className="mobile-icon" />
                <span className="cart-count">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
