import React, { useState } from 'react';
import './NavBar.css';
import logo from "../../assets/images.png"
import Authentication from '../Login-Signup-Form/Authentication';
import User from "../../assets/User.jpg"
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  function handleAuthentication() {
    setIsAuthOpen(!isAuthOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav-links ${isMobile ? 'active' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/plantrip">Plan Trip</a></li>
            <li><a href="/about">Contact Us</a></li>
            <li onClick={handleAuthentication}><img src={User} alt="" width={30} height={30} style={{cursor: 'pointer', borderRadius: '100%'}} /></li>
          </ul>
        </div>
        <div className="toggle-button" onClick={toggleMenu}>
          <i className={`fa fa-bars fa-2x`}></i>
        </div>
      </div>

      {isAuthOpen && (
        <div className='overlay' onClick={handleAuthentication}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <Authentication />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
