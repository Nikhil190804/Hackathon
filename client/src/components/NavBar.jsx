// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Assuming you want to style the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EcoCommunity</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#challenges">Challenges</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#forum">Community Forum</a></li>
        <li><a href="#impact">Impact Tracking</a></li>
      </ul>
      <div className="navbar-auth">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
