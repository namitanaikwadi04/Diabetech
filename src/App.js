import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
