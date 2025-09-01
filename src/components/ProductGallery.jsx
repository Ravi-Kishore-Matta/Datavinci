import React, { useState } from 'react';
import './ProductGallery.css';

const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/yRZGqVxUja.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/qQxEnwuROp.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/XT1gzX0z39.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/Um0uE8rvbj.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/5tOsJ8YOQM.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/xq9oiHOA8G.png",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/TDKHx4XETq.png"
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="gallery">
      {/* Main Image */}
      <div className="main-image-container">
        <img 
          src={images[currentImage]} 
          alt="Manuka Honey Product"
          className="main-image"
        />

        {/* Navigation Arrows */}
        <button onClick={prevImage} className="nav-arrow left-arrow">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/1bKVfkvXjU.svg" alt="Previous" className="arrow-icon" />
        </button>
        <button onClick={nextImage} className="nav-arrow right-arrow">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/DhW96tMXV4.svg" alt="Next" className="arrow-icon" />
        </button>
      </div>

      {/* Thumbnail Grid */}
      <div className="thumbnail-grid">
        {images.slice(1, 7).map((image, index) => (
          <div key={index} className="thumbnail-wrapper">
            {index === 2 ? (
              <div className="video-thumbnail">
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/yTeXAz1wOS.png" 
                  alt="Video thumbnail"
                  className="video-thumb-img"
                />
                <div className="video-play-icon">
                  <div className="play-button">
                    <div className="play-triangle"></div>
                  </div>
                </div>
              </div>
            ) : (
              <img 
                src={image} 
                alt={`Product view ${index + 2}`}
                className="thumbnail-image"
                onClick={() => setCurrentImage(index + 1)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
