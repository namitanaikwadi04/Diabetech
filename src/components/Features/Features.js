import React from "react";
import "./Features.css";

function Features() {
  return (
    <section id="features" className="feature-section">
      <h2> Key Features of Diabetech </h2>{" "}
      <div className="feature-grid">
        <div className="feature-item">
          <h3> 1. Electronic Tattoo Sensors </h3>{" "}
          <img
            src="https://images.indianexpress.com/2016/10/wearable-tattoo-480.jpg"
            className="feature-image-placeholder"
          />
          <p>
            {" "}
            <i>
              Our innovative electronic tattoo sensors are at the heart of the
              DiabeTech platform.
            </i>{" "}
          </p>{" "}
        </div>{" "}
        <div className="feature-item">
          <h3> 2. AI - powered Analytics </h3>{" "}
          <img
            src="https://as2.ftcdn.net/v2/jpg/06/02/89/45/1000_F_602894590_QRUm1kP7GFegUactBwOh3q7b8qpglQMF.jpg"
            className="feature-image-placeholder"
          />
          <p>
            {" "}
            <i>
              {" "}
              Our sophisticated artificial intelligence engine turns raw data
              into actionable insights.{" "}
            </i>{" "}
          </p>{" "}
        </div>{" "}
        <div className="feature-item">
          <h3> 3. Patient - Centric Mobile App </h3>{" "}
          <img
            src="https://www.addevice.io/storage/ckeditor/uploads/images/6389ef343b0fa_healthcare.mobile.apps.for.users.1.jpg"
            className="feature-image-placeholder"
          />
          <p>
            {" "}
            <i>
              Our user-friendly mobile app puts the power of DiabeTech in the
              palm of your hand.
            </i>{" "}
          </p>{" "}
        </div>{" "}
        <div className="feature-item">
          <h3> 4. Clinician Dashboard </h3>{" "}
          <img
            src="https://www.shpdata.com/media/1931/shp-home-health-clinical-dashboard-updates.jpg"
            className="feature-image-placeholder"
          />
          <p>
            {" "}
            <i>
              Empowering healthcare providers with comprehensive patient data
              and management tools.
            </i>{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Features;
