import React, { useState } from "react";
import "./ScheduleDemoForm.css";

function ScheduleDemoForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend
    fetch("http://localhost:4000/api/scheduleDemo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send the formData state as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Appointment scheduled successfully!");
        onClose(); // Close the popup after submission
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error scheduling the appointment.");
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          {" "}
          x{" "}
        </span>{" "}
        <h2> Schedule a Demo </h2>{" "}
        <form onSubmit={handleSubmit} className="schedule-demo-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>{" "}
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>{" "}
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>{" "}
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>{" "}
          <label>
            Available Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>{" "}
          <button type="submit"> Submit </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}

export default ScheduleDemoForm;
