import React from 'react';
import './SizeSelector.css';

const SizeSelector = ({ selectedSize, onSizeChange, isMobile = false }) => {
  const sizes = [
    { id: '125g', label: '125g | 4.4oz', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/cV5LNci0fb.png' },
    { id: '250g', label: '250g | 8.8oz', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/5TkEdKOkaO.png' },
    { id: '250g-spoon', label: '250g | 8.8oz + 12cm Spoon', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/wCGugc51EY.png' },
    { id: '500g', label: '500g | 17.6oz', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/42zYuFXn6N.png' },
    { id: '500g-spoon', label: '500g | 17.6oz + 12cm Spoon', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/joYcCJJztn.png' },
    { id: '500g-squeezy', label: '500g | 17.6oz - Squeezy', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/gkbvX5b9up.png' },
    { id: '250g-drops', label: '250g | 8.8oz + 16 Drops', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/W0B5ibFs6u.png' }
  ];

  return (
    <div className="size-selector">
      <div className="size-header">
        <h3 className="size-title">Size (Select One)</h3>
        <p className="size-variant">Variant: 125g | 4.4oz</p>
      </div>

      <div className={`size-grid ${isMobile ? 'mobile' : 'desktop'}`}>
        {sizes.slice(0, isMobile ? 6 : 7).map((size, index) => (
          <button
            key={size.id}
            onClick={() => onSizeChange(size.id)}
            className={`size-btn ${index === 0 ? 'selected' : ''}`}
          >
            <img src={size.image} alt={size.label} className={`size-img ${isMobile ? 'mobile' : 'desktop'}`} />
            {index === 0 && <div className="size-overlay"></div>}
          </button>
        ))}

        {isMobile && sizes.length > 6 && (
          <button className="size-more">
            <span>+</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SizeSelector;
