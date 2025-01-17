import React, { useState, useEffect } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [isNavBlack, setIsNavBlack] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavBlack(true);
      } else {
        setIsNavBlack(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu on mobile view
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={isNavBlack ? 'black' : ''}>
        <div className="menu-icon" onClick={handleMenuClick}>
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <div className="logo">
          LOGO
        </div>
        <div className={`menu ${menuOpen ? 'showing' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="/where-to">Where To</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
