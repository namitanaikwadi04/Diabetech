// src/components/learn-more/LearnMore.js

import React from "react";
import "./LearnMore.css";

function LearnMore() {
  return (
    <div className="learn-more-content">
      <div className="section">
        <h3> Sensor Application </h3>{" "}
        <p>
          {" "}
          A healthcare provider applies the electronic tattoo sensor near the
          DFU site.
        </p>{" "}
      </div>{" "}
      <div className="section">
        <h3> Data Collection </h3>{" "}
        <p>
          {" "}
          The sensor continuously collects data on key wound healing indicators.
        </p>{" "}
      </div>{" "}
      <div className="section">
        <h3> AI Analysis </h3>{" "}
        <p> Our advanced AI algorithms process the sensor data in real-time.</p>{" "}
      </div>{" "}
      <div className="section">
        <h3> Insight Generation </h3>{" "}
        <p>
          {" "}
          The AI generates personalized insights and treatment recommendations.
        </p>{" "}
      </div>{" "}
      <div className="section">
        <h3> User Access</h3>{" "}
        <p>
          {" "}
          Patients and providers access insights through the mobile app and
          clinician dashboard.{" "}
        </p>{" "}
      </div>{" "}
      <div className="section">
        <h3>Ongoing Care </h3>{" "}
        <p>
          {" "}
          The platform supports continuous monitoring and adjustment of care
          plans.{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}

export default LearnMore;
