import React from 'react';
import './UMFTooltip.css';

const UMFTooltip = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const umfs = [
    { label: '10+', color: 'bg-orange' },
    { label: '15+', color: 'bg-red' },
    { label: '20+', color: 'bg-pink' },
    { label: '24+', color: 'bg-purple' },
    { label: '26+', color: 'bg-blue' },
    { label: '28+', color: 'bg-green' },
    { label: '30+', color: 'bg-darkblue' }
  ];

  const mgos = [
    { label: '263+', color: 'bg-orange' },
    { label: '514+', color: 'bg-red' },
    { label: '829+', color: 'bg-pink' },
    { label: '1122+', color: 'bg-purple' },
    { label: '1282+', color: 'bg-blue' },
    { label: '1450+', color: 'bg-green' },
    { label: '1620+', color: 'bg-darkblue' }
  ];

  return (
    <div className="umf-tooltip-backdrop">
      <div className="umf-tooltip-container">
        <div className="relative">
          <div className="umf-tooltip-arrow"></div>
        </div>

        {/* UMF Section */}
        <div className="umf-section">
          <div>
            <span className="umf-title">UMF</span>
            <span className="umf-description">
              {' '}is the strength and purity rating of Manuka honey.
            </span>
          </div>

          <div>
            <div className="umf-values">
              {umfs.map((item, index) => (
                <div key={index} className="umf-value">
                  <div className={`umf-label ${item.color}`}>{item.label}</div>
                  <div className={`umf-bar ${item.color}`}></div>
                </div>
              ))}
            </div>
            <p className="umf-info-text">
              The higher the number, the greater the potency and rarity of Manuka honey.
            </p>
          </div>
        </div>

        {/* MGO Section */}
        <div className="umf-section">
          <div>
            <span className="umf-title">MGO</span>
            <span className="umf-description">
              {' '}is the key natural compound that gives Manuka honey its special antibacterial strength.
            </span>
          </div>

          <div>
            <div className="umf-values">
              {mgos.map((item, index) => (
                <div key={index} className="umf-value">
                  <div className={`umf-label ${item.color}`}>{item.label}</div>
                  <div className={`umf-bar ${item.color}`}></div>
                </div>
              ))}
            </div>
            <p className="umf-info-text">
              The higher the number, the higher the antibacterial properties in the honey.
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-center pt-4">
          <button onClick={onClose} className="umf-close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UMFTooltip;
