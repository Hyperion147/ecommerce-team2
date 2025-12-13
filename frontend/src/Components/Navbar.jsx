import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black/90 backdrop-blur-sm text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold hover:text-blue-500 transition-colors"
          >
            Urban<span className="text-blue-500">Threads</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/")}
              className={`hover:text-blue-500 transition-colors ${
                isActive("/") ? "text-blue-500" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate("/products")}
              className={`hover:text-blue-500 transition-colors ${
                isActive("/products") ? "text-blue-500" : ""
              }`}
            >
              Products
            </button>
            <button
              onClick={() => navigate("/about")}
              className={`hover:text-blue-500 transition-colors ${
                isActive("/about") ? "text-blue-500" : ""
              }`}
            >
              About
            </button>
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 hover:text-blue-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
                className={`text-left hover:text-blue-500 transition-colors ${
                  isActive("/") ? "text-blue-500" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/products");
                  setIsMenuOpen(false);
                }}
                className={`text-left hover:text-blue-500 transition-colors ${
                  isActive("/products") ? "text-blue-500" : ""
                }`}
              >
                Products
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                  setIsMenuOpen(false);
                }}
                className={`text-left hover:text-blue-500 transition-colors ${
                  isActive("/about") ? "text-blue-500" : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate("/cart");
                  setIsMenuOpen(false);
                }}
                className="text-left hover:text-blue-500 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}