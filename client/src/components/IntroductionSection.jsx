// src/components/IntroductionSection.jsx
import React, { useEffect, useRef } from 'react';
import './IntroductionSection.css';

function IntroductionSection() {
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the box is visible
      }
    );

    boxes.forEach(box => {
      observer.observe(box);
    });

    return () => {
      boxes.forEach(box => {
        observer.unobserve(box);
      });
    };
  }, []);

  return (
    <section className="introduction-section">
      <div className="intro-container">
        <h2 className="section-title">Introduction to EcoCommunity</h2>
        <div className="box-container">
          <div className="box" ref={el => boxesRef.current[0] = el}>
            <h3>About EcoCommunity</h3>
            <p>EcoCommunity is a platform dedicated to bringing individuals together to make a positive impact on the environment. Our mission is to promote eco-friendly practices through community engagement, challenges, and educational resources.</p>
          </div>
          <div className="box" ref={el => boxesRef.current[1] = el}>
            <h3>How It Works</h3>
            <p>Participate in exciting challenges, track your environmental impact, and earn rewards. Join events, contribute to discussions in our community forum, and access valuable resources to enhance your eco-friendly lifestyle.</p>
          </div>
          <div className="box" ref={el => boxesRef.current[2] = el}>
            <h3>Featured Challenges and Events</h3>
            <div className="challenges">
              <h4>Current Challenges:</h4>
              <ul>
                <li>Tree Planting Challenge</li>
                <li>Recycling Drive</li>
              </ul>
            </div>
            <div className="events">
              <h4>Upcoming Events:</h4>
              <ul>
                <li>Community Clean-Up on July 30th</li>
                <li>Gardening Workshop on August 5th</li>
              </ul>
            </div>
          </div>
          <div className="box" ref={el => boxesRef.current[3] = el}>
            <h3>Impact Metrics</h3>
            <p>Live Statistics:</p>
            <ul>
              <li>Trees Planted: 1500</li>
              <li>Waste Recycled: 2000 kg</li>
            </ul>
            <p>User Testimonials:</p>
            <blockquote>
              “EcoCommunity helped me make a real difference!” - Jane D.
            </blockquote>
          </div>
          <div className="box" ref={el => boxesRef.current[4] = el}>
            <h3>Educational Resources</h3>
            <ul>
              <li>10 Ways to Reduce Your Carbon Footprint</li>
              <li>The Importance of Recycling</li>
            </ul>
          </div>
          <div className="box" ref={el => boxesRef.current[5] = el}>
            <h3>Community Section</h3>
            <p>Forum Preview:</p>
            <p>Recent Discussions: How to Start Composting</p>
            <p>Join the Conversation: Join our forum and share your eco-friendly tips!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
