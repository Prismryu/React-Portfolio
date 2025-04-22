import React from 'react';
import '../components/Contact.css'; // You can style this separately or in App.css

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="6" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;