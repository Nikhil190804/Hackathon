import React from 'react';
import './Herosection.css'; 

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-headline">Join the EcoCommunity</h1>
        <p className="hero-subheadline">Participate in challenges, track your impact, and connect with like-minded individuals.</p>
        <div className="hero-buttons">
          <button className="cta-btn">Get Started</button>
          <button className="cta-btn">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
