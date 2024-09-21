import React, { useState } from "react";
import "./Home.css";
import LearnMore from "../LearnMore/LearnoMore";
import GettingStarted from "../GettingStarted/GettingStarted";
import Features from "../Features/Features";

function Home() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowLearnMore(!showLearnMore); // Toggle the hidden content
  };

  return (
    <section id="home" className="home">
      <h1> Welcome to Diabetech Band </h1>{" "}
      <p>
        {" "}
        Revolutionizing Diabetes Management with Innovative Wearable Technology{" "}
      </p>{" "}
      <img
        src="https://via.placeholder.com/600x400"
        alt="Diabetech Band"
        className="home-image"
      />
      <button className="cta-button" onClick={handleLearnMoreClick}>
        {" "}
        {showLearnMore ? "Show Less" : "Learn More"}{" "}
      </button>{" "}
      {showLearnMore && <LearnMore />} {/* Show the hidden content */}{" "}
      <GettingStarted />
      <Features />
      Fe Fe{" "}
    </section>
  );
}

export default Home;
