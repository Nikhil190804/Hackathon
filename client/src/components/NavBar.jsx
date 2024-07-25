// src/components/Navbar.js
import React from 'react';
import { Outlet , Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you want to style the navbar

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">EcoCommunity</div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/challenges">Challenges</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/forum">Community Forum</Link></li>
        <li><Link to="/impact">Impact Tracking</Link></li>
      </ul>
      <div className="navbar-auth">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </nav>

    <Outlet /> 
    </>
  );
}

export default Navbar;
