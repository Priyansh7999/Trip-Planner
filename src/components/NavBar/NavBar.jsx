import React, { useState, useEffect } from 'react';
import images from "../../assets/images.png"
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
          <img src={images} alt="Logo" width={50} height={50} style={{ borderRadius: '50%' }}/>
        </div>
        <div className={`menu ${menuOpen ? 'showing' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="/plantrip">Plan Trip</a></li>
            <li><a href="#">Contact</a></li>
            <li style={{borderRadius: '50%'}}><a href="#login"><i className="fa fa-user"></i></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
