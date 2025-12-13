import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { PRODUCTS } from '../data/products.jsx';
import { SITE_CONFIG } from '../utils/constants.jsx';

const HomePage = ({ cartCount, cartItems, onAddToCart, onRemoveFromCart, onClearCart }) => {
  // Show only first 5 products for "Latest Collection" section
  const latestProducts = PRODUCTS.slice(0, 5);

  return (
    <div>
      <Header 
        cartCount={cartCount} 
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
      />
      
      {/* HERO */}
      <section className="hero">
        <HeroSlider />
        <div className="hero-content">
          <span className="hero-badge">{SITE_CONFIG.currentSeason}</span>
          <h1 className="hero-title">Elevate Your Style</h1>
          <p className="hero-subtitle">
            {SITE_CONFIG.tagline}
          </p>
          <Link to="/shop" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>

      {/* CLOTHES SECTION */}
      <section className="section">
        <h2 className="section-title">Latest Collection</h2>
        <ProductGrid 
          products={latestProducts} 
          onAddToCart={onAddToCart}
        />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;