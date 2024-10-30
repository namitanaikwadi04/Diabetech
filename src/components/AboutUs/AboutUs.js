import React from "react";
import "./AboutUs.css";
import Picture4 from "../../Images/Picture4.jpg";
import Picture5 from "../../Images/Picture5.png";

function AboutUs() {
  return (
    <section id="about" className="about">
      <h2>About Diabetech Band</h2>
      <p>
        Diabetech Band is dedicated to improving the lives of those with
        diabetes through cutting-edge technology.
      </p>
      <div className="image-grid">
        <img src={Picture4} alt="Development Process" className="image-grid" />
        <img src={Picture5} alt="Team" className="image-grid" />
      </div>
    </section>
  );
}

export default AboutUs;
