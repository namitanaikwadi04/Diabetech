import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section id="about" className="about">
      <h2>About Diabetech Band</h2>
      <p>Diabetech Band is dedicated to improving the lives of those with diabetes through cutting-edge technology.</p>
      <div className="image-grid">
        <img src="https://via.placeholder.com/300x200" alt="Development Process" />
        <img src="https://via.placeholder.com/300x200" alt="Team" />
        <img src="https://via.placeholder.com/300x200" alt="User Testimonials" />
      </div>
      <a href="#more" className="read-more">Read More About Our Technology</a>
    </section>
  );
}

export default AboutUs;
