import React, { useState } from "react";
import "./Home.css";
import LearnMore from "../LearnMore/LearnoMore";
import GettingStarted from "../GettingStarted/GettingStarted";
import Features from "../Features/Features";
import Picture4 from "../../Images/Picture4.jpg";

function Home() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowLearnMore(!showLearnMore); // Toggle the hidden content
  };

  return (
    <section id="home" className="home">
      <h1> Welcome to DiabeTech Band </h1>{" "}
      <p>
        <b>
          <i>Walking towards wellness</i>
        </b>{" "}
      </p>{" "}
      <p>
        {" "}
        DiabeTech Band is dedicated to improving the lives of those with
        diabetes through cutting-edge technology.{" "}
      </p>{" "}
      <img src={Picture4} alt="Picture4" className="home-image" />
      <button className="cta-button" onClick={handleLearnMoreClick}>
        {" "}
        {showLearnMore ? "Show Less" : "Learn More"}{" "}
      </button>{" "}
      {showLearnMore && <LearnMore />} {/* Show the hidden content */}{" "}
      <GettingStarted />
      <Features />{" "}
    </section>
  );
}

export default Home;
