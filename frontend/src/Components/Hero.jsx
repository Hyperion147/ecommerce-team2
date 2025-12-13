import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Hero() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80",
      alt: "Fashion Store Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1920&h=1080&fit=crop&q=80",
      alt: "Urban Fashion Model"
    },
    {
      url: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&q=80",
      alt: "Clothing Collection"
    },
    {
      url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop&q=80",
      alt: "Fashion Accessories"
    },
    {
      url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&h=1080&fit=crop&q=80",
      alt: "Street Style Fashion"
    }
  ];

  // Preload images
  useEffect(() => {
    backgroundImages.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  }, []);

  // Auto-change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % backgroundImages.length;
        console.log(`Switching to image ${newIndex}: ${backgroundImages[newIndex].alt}`);
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden -mt-16 bg-gray-900">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                console.log(`Failed to load image: ${image.url}`);
                e.target.style.display = 'none';
              }}
              onLoad={() => {
                console.log(`Loaded image: ${image.url}`);
              }}
            />
          </div>
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              console.log(`Manually switching to image ${index}`);
              setCurrentImageIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-blue-500 scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Debug info - remove this later */}
      <div className="absolute top-20 left-4 z-30 bg-black/50 text-white p-2 rounded text-sm">
        Current Image: {currentImageIndex + 1}/{backgroundImages.length}
        <br />
        {backgroundImages[currentImageIndex].alt}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Urban<span className="text-blue-500">Threads</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover the latest in streetwear and urban fashion. 
          Express your style with our curated collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleShopNow}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </button>
          
          <button 
            onClick={() => navigate("/about")}
            className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black rounded-xl text-white font-semibold text-lg transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-500">20+</div>
            <div className="text-gray-400">Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500">1000+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}