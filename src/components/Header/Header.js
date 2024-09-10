import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Diabetech Band</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
