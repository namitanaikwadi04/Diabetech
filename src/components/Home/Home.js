import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <h1>Welcome to Diabetech Band</h1>
      <p>Revolutionizing Diabetes Management with Innovative Wearable Technology</p>
      <img src="https://via.placeholder.com/600x400" alt="Diabetech Band" className="home-image" />
      <button className="cta-button">Learn More</button>
    </section>
  );
}

export default Home;
