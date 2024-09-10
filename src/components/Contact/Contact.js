import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
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
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p><strong>Address:</strong> 1234 Diabetech St, Health City</p>
        <p><strong>Email:</strong> contact@diabetech.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
      </div>
    </section>
  );
}

export default Contact;
