import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import '../App.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-logo" onClick={() => handleScroll('home')}>
          <img 
            src="/assets/images/logo.jpeg" 
            alt="Nature Nest Wellness Logo" 
            className="navbar-logo-img"
          />
          <span>Nature Nest Wellness</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          <button onClick={() => handleScroll('home')} className="nav-btn">Home</button>
          <button onClick={() => handleScroll('services')} className="nav-btn">Services</button>
          <button onClick={() => handleScroll('about')} className="nav-btn">About & Contact</button>
          {/* <button onClick={() => handleScroll('about')} className="nav-cta">Book Now</button> */}
        </div>

        {/* Mobile Toggle Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="nav-links-mobile">
          <button onClick={() => handleScroll('home')} className="mobile-nav-btn">Home</button>
          <button onClick={() => handleScroll('services')} className="mobile-nav-btn">Services</button>
          <button onClick={() => handleScroll('about')} className="mobile-nav-btn">About & Contact</button>
          {/* <button onClick={() => handleScroll('about')} className="mobile-nav-cta">Book Now</button> */}
        </div>
      )}
    </nav>
  );
}