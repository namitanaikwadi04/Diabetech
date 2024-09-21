import React from "react";
import "./Features.css";

function Features() {
  return (
    <section id="features" className="feature-section">
      <h2> Key Features of Diabetech </h2>{" "}
      <div className="feature-grid">
        <div className="feature-item">
          <h3> 1. Electronic Tattoo Sensors </h3>{" "}
          <div className="feature-image-placeholder"> </div>{" "}
          <p>
            {" "}
            Our innovative electronic tattoo sensors are at the heart of the DT
            platform.{" "}
          </p>{" "}
        </div>{" "}
        <div className="feature-item">
          <h3> 2. AI - powered Analytics </h3>{" "}
          <div className="feature-image-placeholder"> </div>{" "}
          <p>
            {" "}
            <i> Uses sophisticated AI for actionable insights. </i>{" "}
          </p>{" "}
        </div>{" "}
        <div className="feature-item">
          <h3> 3. Patient - Centric Mobile App </h3>{" "}
          <div className="feature-image-placeholder"> </div>{" "}
          <p>
            {" "}
            Our user - friendly mobile app empowers patients to monitor their
            health.{" "}
          </p>{" "}
        </div>{" "}
        <div className="feature-item">
          <h3> 4. Clinician Dashboard </h3>{" "}
          <div className="feature-image-placeholder"> </div>{" "}
          <p>
            {" "}
            Empowering healthcare providers with real - time patient data.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Features;
