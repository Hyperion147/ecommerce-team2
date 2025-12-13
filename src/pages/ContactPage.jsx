import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ContactPage = ({ cartCount, cartItems, onRemoveFromCart, onClearCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <Header 
        cartCount={cartCount} 
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
      />
      
      <section className="section" style={{ marginTop: '100px' }}>
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Connect With Us</h3>
            <p>Follow Urban Threads on social media for the latest fashion updates, style tips, and exclusive offers.</p>
            
            <div className="social-links">
              <div className="social-link instagram">
                <i className="fab fa-instagram"></i>
                <span>@urbanthreads</span>
              </div>
              
              <div className="social-link twitter">
                <i className="fab fa-twitter"></i>
                <span>@urbanthreads</span>
              </div>
              
              <div className="social-link linkedin">
                <i className="fab fa-linkedin"></i>
                <span>Urban Threads</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Us A Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;