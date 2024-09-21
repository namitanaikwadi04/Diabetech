// src/components/GettingStarted/GettingStarted.js

import React, { useState } from "react";
import "./GettingStarted.css";
import ScheduleDemoForm from "../ScheduleDemoForm/ScheduleDemoForm";

function GettingStarted() {
  const [showForm, setShowForm] = useState(false);
  const handleDemoClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (formData) => {
    const response = await fetch("http://localhost:5000/api/scheduleDemo", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result.message);
  };

  return (
    <section className="getting-started">
      <h2> Getting Started </h2>{" "}
      <p> Ready to revolutionize your DFU care ? Here 's how to get started:</p>{" "}
      <div className="options">
        <div className="option">
          <h3> Patients </h3>{" "}
          <div className="benefits">
            <p> Mention Benefits </p>{" "}
            <ul>
              <li> Benefit 1 </li> <li> Benefit 2 </li> <li> Benefit 3 </li>{" "}
            </ul>{" "}
          </div>{" "}
          <button className="contact-btn"> Contact </button>{" "}
        </div>{" "}
        <div className="option">
          <h3> Healthcare Providers </h3>{" "}
          <div className="benefits">
            <p> Mention Benefits </p>{" "}
            <ul>
              <li> Benefit 1 </li> <li> Benefit 2 </li> <li> Benefit 3 </li>{" "}
            </ul>{" "}
          </div>{" "}
          <button className="demo-btn" onClick={handleDemoClick}>
            {" "}
            Schedule a Demo{" "}
          </button>{" "}
          {showForm && (
            <ScheduleDemoForm
              onSubmit={handleFormSubmit}
              onClose={() => setShowForm(false)}
            />
          )}{" "}
        </div>{" "}
      </div>{" "}
      <footer className="footer-message">
        <p> Join us in walking towards wellness with Diabetech! </p>{" "}
      </footer>{" "}
    </section>
  );
}

export default GettingStarted;
