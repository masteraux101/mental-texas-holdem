import React, { useState } from 'react';
import '../styles/EducationalDisclaimer.css';

export default function EducationalDisclaimer() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="educational-disclaimer">
      <button 
        className="disclaimer-close-btn"
        onClick={() => setIsVisible(false)}
        aria-label="Close disclaimer"
        title="Close"
      >
        ✕
      </button>
      <div className="disclaimer-header">
        <span className="disclaimer-icon">⚠️</span>
        <span className="disclaimer-title">Educational Project</span>
      </div>
      <p className="disclaimer-text">
        This is an educational project demonstrating mental poker technology. 
        <strong> Do not use for gambling.</strong>
      </p>
    </div>
  );
}
