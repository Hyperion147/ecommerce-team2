import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const AboutPage = ({ cartCount, cartItems, onRemoveFromCart, onClearCart }) => {
  return (
    <div>
      <Header 
        cartCount={cartCount} 
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
      />
      
      <section className="section" style={{ marginTop: '100px' }}>
        <h2 className="section-title">About Urban Threads</h2>
        
        <div className="about-container">
          <div className="about-content">
            <h3>Our Story</h3>
            <p>
              Urban Threads was founded with a simple mission: to bring you the latest fashion trends 
              at affordable prices. We believe that style should be accessible to everyone, regardless 
              of budget or background.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              We're committed to providing high-quality clothing that doesn't compromise on style or 
              sustainability. Every piece in our collection is carefully selected to ensure it meets 
              our standards for both fashion and ethics.
            </p>
            
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Curated collection of trendy and timeless pieces</li>
              <li>Affordable pricing without compromising quality</li>
              <li>Sustainable and ethical fashion practices</li>
              <li>Excellent customer service and support</li>
              <li>Fast and reliable shipping</li>
            </ul>
            
            <h3>Our Values</h3>
            <p>
              At Urban Threads, we value authenticity, inclusivity, and sustainability. We believe 
              fashion should empower people to express themselves while being mindful of our impact 
              on the environment and society.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;