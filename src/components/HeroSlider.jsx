import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../data/products.jsx';
import { ANIMATION_CONFIG } from '../utils/constants.jsx';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
      }, ANIMATION_CONFIG.slideInterval);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="hero-slider">
      {HERO_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default HeroSlider;