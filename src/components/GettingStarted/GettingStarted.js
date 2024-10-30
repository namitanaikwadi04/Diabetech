import React, { useState } from "react";
import "./GettingStarted.css";
import ScheduleDemoForm from "../ScheduleDemoForm/ScheduleDemoForm";
import patientimg from "../../Images/Picture2.jpg";
import providerimg from "../../Images/Picture3.jpg";

function GettingStarted() {
  const [showForm, setShowForm] = useState(false);
  const [showPatientBenefits, setShowPatientBenefits] = useState(false);
  const [showProviderBenefits, setShowProviderBenefits] = useState(false);

  const handleDemoClick = () => {
    setShowForm(true);
  };

  const handlePatientBenefitsClick = (event) => {
    event.preventDefault();
    setShowPatientBenefits(!showPatientBenefits);
  };

  const handleProviderBenefitsClick = (event) => {
    event.preventDefault();
    setShowProviderBenefits(!showProviderBenefits);
  };

  const handleFormSubmit = async (formData) => {
    const response = await fetch("http://localhost:4000/api/scheduleDemo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result.message);
  };

  return (
    <section className="getting-started">
      <h2>Getting Started</h2>
      <p>Ready to revolutionize your DFU care? Here's how to get started:</p>
      <div className="options">
        {/* Patient Portal Section */}
        <div className="option">
          <h3>Patient Portal</h3>
          <div className="benefits">
            <p>
              <b>
                <a href="#" onClick={handlePatientBenefitsClick}>
                  Benefits
                </a>
              </b>
            </p>
            {showPatientBenefits && (
              <ul className="leftalignbenefits">
                <li>
                  <b>Continuous Monitoring:</b> Your wound healing is being
                  tracked 24/7.
                </li>
                <li>
                  <b>Early Detection:</b> Identify potential complications
                  before they become serious.
                </li>
                <li>
                  <b>Personalized Care:</b> Receive treatment plans tailored to
                  your healing process.
                </li>
                <li>
                  <b>Improved Communication:</b> Stay connected with healthcare
                  provider via app.
                </li>
                <li>
                  <b>Empowerment:</b> Take an active role in managing your foot
                  health.
                </li>
              </ul>
            )}
          </div>
          {/* Add Random Image Section */}
          <div className="picture-section">
            <img src={patientimg} alt="Placeholder" />
          </div>
          <button
            className="contact-btn"
            onClick={() => document.getElementById("contact").scrollIntoView()}
          >
            Contact
          </button>
        </div>

        {/* Healthcare Provider Section */}
        <div className="option">
          <h3>Healthcare Provider</h3>
          <div className="benefits">
            <p>
              <b>
                <a href="#" onClick={handleProviderBenefitsClick}>
                  Benefits
                </a>
              </b>
            </p>
            {showProviderBenefits && (
              <ul className="leftalignbenefits">
                <li>
                  <b>Real-time Patient Data:</b> Access up-to-date information
                  on patient status.
                </li>
                <li>
                  <b>Efficient Care Management:</b> Prioritize patients on
                  AI-generated risk assessments.
                </li>
                <li>
                  <b>Data-Driven Decisions:</b> Make treatment decisions backed
                  by comprehensive, real-time data.
                </li>
                <li>
                  <b>Remote Monitoring:</b> Manage patient care effectively,
                  even between in-person visits.
                </li>
              </ul>
            )}
          </div>
          {/* Add Random Image Section */}
          <div className="picture-section">
            <img src={providerimg} alt="Placeholder" />
          </div>
          <button className="demo-btn" onClick={handleDemoClick}>
            Schedule a Demo
          </button>
          {showForm && (
            <ScheduleDemoForm
              onSubmit={handleFormSubmit}
              onClose={() => setShowForm(false)}
            />
          )}
        </div>
      </div>
      <footer className="footer-message">
        <p>Join us in walking towards wellness with DiabeTech!</p>
      </footer>
    </section>
  );
}

export default GettingStarted;
