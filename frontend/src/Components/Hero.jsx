import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden -mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
          alt="Fashion Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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