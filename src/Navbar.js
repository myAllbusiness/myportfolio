import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './components/Img/g (5).png';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'; // Make sure this file is properly linked

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState('dark_mode'); // Initial icon state

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // On mount, check if dark mode is already active
  useEffect(() => {
    if (document.body.classList.contains('sunny')) {
      setIcon('sunny');
    }
  }, []);

  // Toggle Dark/Light Mode
  const handleToggle = () => {
    const newIcon = icon === 'dark_mode' ? 'sunny' : 'dark_mode';
    setIcon(newIcon);
    document.body.classList.toggle('sunny', newIcon === 'sunny');
  };

  return (
    <nav>
      {/* Logo Left */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Right */}
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      {/* Menu Items */}
      <ul className={`listof ${isOpen ? 'open' : ''}`}>
        <li className="list" onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="list" onClick={closeMenu}>
          <Link to="/about">About</Link>
        </li>
        <li className="list" onClick={closeMenu}>
          <Link to="/service">Services</Link>
        </li>
        <li className="list" onClick={closeMenu}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className="list" onClick={closeMenu}>
          <Link to="/contact">Contact</Link>
        </li>

        {/* Dark/Light Toggle inside Menu */}
        <li className="day_night" onClick={handleToggle}>
          <span className={`toggle-icon ${icon === 'dark_mode' ? 'dark-mode-style' : 'sunny-style'}`}>
            <FontAwesomeIcon icon={icon === 'dark_mode' ? faMoon : faSun} />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
