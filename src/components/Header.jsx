// src/components/Header.jsx
import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="social-icons">
        <FaFacebookF className="icon" />
        <FaTwitter className="icon" />
      </div>
      <div className="logo">MITRAVEL</div>
      <div className="menu-toggle">☰</div>
    </header>
  );
};

export default Header;