import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const newRecord = {
      Name: name,
      Email: email,
      Message: message,
    };

    try {
      // Send data to the backend to save in the Excel file
      const response = await fetch("http://localhost:4000/api/saveContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecord),
      });

      if (response.ok) {
        // Successfully saved the data
        console.log("Data saved successfully");
      } else {
        // Handle server errors
        console.error("Error saving data");
      }

      const result = await response.json();
      console.log(result.message);

      alert("We got your message, Thank You!!!");

      // Clear the form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2> Get in Touch </h2>{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>{" "}
        <button type="submit"> Send Message </button>{" "}
      </form>{" "}
      <div className="contact-info">
        <p>
          <strong> Address: </strong> Equitable floor 8, 100 Madison St, MD
          32-88, Syracuse, NY -13202{" "}
        </p>{" "}
        <p>
          <strong> Email: </strong> info@diabetech.co{" "}
        </p>{" "}
        <p>
          <strong> LinkedIn: </strong> Diabetech llc{" "}
        </p>{" "}
        <p>
          <strong> Phone: </strong> (680) 244-6122{" "}
        </p>{" "}
      </div>{" "}
    </section>
  );
}

export default Contact;
