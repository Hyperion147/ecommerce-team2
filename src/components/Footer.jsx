import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            Urban<span>Threads</span>
          </div>
          <p>Premium clothing curated for the modern urban lifestyle.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <div className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="social-icon linkedin">
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Urban Threads. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;