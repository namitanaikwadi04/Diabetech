import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-media">
        {/* Add social media icons here */}
      </div>
      <p>© 2024 Diabetech Band. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
