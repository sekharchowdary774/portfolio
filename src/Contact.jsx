import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>
        Contact <span>Me!</span>
      </h2>
      <form>
        <div className="input-box">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Mobile Number" required />
          <input type="text" placeholder="Email Subject" required />
        </div>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default ContactForm;
