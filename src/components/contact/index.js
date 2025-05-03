import React, { useState } from 'react';
import './contact.css';
import cont from '../Img/istockphoto-1450058572-612x612.webp';
function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const formattedMessage = `Hello, my name is ${name}. My contact number is ${phone}. Message: ${message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=+919117886838&text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappURL, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact_description">
        <h2>Contact Me</h2>
        <p>I'm here to turn your ideas into reality. Let's collaborate to create something amazing!</p>
        <img src={cont} alt="contact" />
      </div>
      {!submitted ? (
        <form onSubmit={handleWhatsAppSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Your WhatsApp Number"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          ></textarea>

          <button type="submit" className="submit-button">
            Send on WhatsApp
          </button>
        </form>
      ) : (
        <p>Thank you! I’ll be in touch soon.</p>
      )}
    </section>
  );
}

export default Contact;
