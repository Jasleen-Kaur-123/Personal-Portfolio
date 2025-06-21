import React, { useState, useEffect } from 'react';
import '../Style/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationArrow, faIdCard } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone_number: ''
  });

  const [toast, setToast] = useState({ show: false, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contact', formData);
      setToast({ show: true, message: `✅ Message successfully delivered to ${formData.name}` });
      setFormData({ name: '', email: '', message: '', phone_number: '' });
    } catch (err) {
      setToast({ show: true, message: '❌ Failed to send message' });
    }
  };

  // Hide toast after 3 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section className="contact-section">
      <div className="contact-header-bg">
        <div className="contact-header-content">
          <h1 className="contact-title">CONTACT US</h1>
          <div className="contact-breadcrumbs">Home <span>/</span> Contact Us</div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-form-section">
            <h2 className="contact-form-title">
              <FontAwesomeIcon icon={faIdCard} className="contact-form-icon" /> Get In Touch
            </h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="contact-input"
                required
              />
              <input
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                type="tel"
                placeholder="Your Phone Number"
                className="contact-input"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                className="contact-input"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="contact-input contact-textarea"
                required
              ></textarea>
              <button type="submit" className="contact-send-btn">
                Send Now <span className="arrow">→</span>
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-info-icon" />
              <span>jkaurdhillon51@gmail.com</span>
            </div>
            <div className="contact-info-item">
              <FontAwesomeIcon icon={faLocationArrow} className="contact-info-icon" />
              <span>West Delhi, Delhi – 110018</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div className="toast-message">
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
