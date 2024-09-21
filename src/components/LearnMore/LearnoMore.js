// src/components/learn-more/LearnMore.js

import React from "react";
import "./LearnMore.css";

function LearnMore() {
  return (
    <div className="learn-more-content">
      <div className="section">
        <h3> Sensor Application </h3>{" "}
        <p> Information about sensor application goes here. </p>{" "}
        <img src="https://via.placeholder.com/150" alt="Sensor Application" />
      </div>{" "}
      <div className="section">
        <h3> Data Collection </h3>{" "}
        <p> Information about data collection goes here. </p>{" "}
        <img src="https://via.placeholder.com/150" alt="Data Collection" />
      </div>{" "}
      <div className="section">
        <h3> AI Analysis </h3> <p> Information about AI analysis goes here. </p>{" "}
        <img src="https://via.placeholder.com/150" alt="AI Analysis" />
      </div>{" "}
    </div>
  );
}

export default LearnMore;
