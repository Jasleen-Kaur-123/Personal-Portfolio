import React, { useState } from 'react';
import '../Style/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-dot"></span>
        <span className="logo-text">JASLEEN <b>KAUR</b></span>
      </div>
      <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={handleHamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links${menuOpen ? ' show' : ''}`}>
        <li><a href="#home" onClick={handleLinkClick}>HOME</a></li>
        <li><a href="#about" onClick={handleLinkClick}>ABOUT</a></li>
        <li><a href="#skill" onClick={handleLinkClick}>SKILLS</a></li>
        <li><a href="#project" onClick={handleLinkClick}>PROJECTS</a></li>
        <li><a href="#certificate" onClick={handleLinkClick}>CERTIFICATES</a></li>
      </ul>
      <a href="#contact" className="navbar-contact-btn" onClick={handleLinkClick}>Let's Connect 👋</a>
    </nav>
  );
};

export default Navbar;
