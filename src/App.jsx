import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MenPage from './pages/MenPage.jsx';
import WomenPage from './pages/WomenPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import useCart from './hooks/useCart.jsx';
import './styles/main.css';

function App() {
  const { cartCount, cartItems, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage 
              cartCount={cartCount} 
              cartItems={cartItems}
              onAddToCart={addToCart} 
              onRemoveFromCart={removeFromCart}
              onClearCart={clearCart}
            />} 
          />
          <Route 
            path="/shop" 
            element={<ShopPage 
              cartCount={cartCount} 
              cartItems={cartItems}
              onAddToCart={addToCart} 
              onRemoveFromCart={removeFromCart}
              onClearCart={clearCart}
            />} 
          />
          <Route 
            path="/men" 
            element={<MenPage 
              cartCount={cartCount} 
              cartItems={cartItems}
              onAddToCart={addToCart} 
              onRemoveFromCart={removeFromCart}
              onClearCart={clearCart}
            />} 
          />
          <Route 
            path="/women" 
            element={<WomenPage 
              cartCount={cartCount} 
              cartItems={cartItems}
              onAddToCart={addToCart} 
              onRemoveFromCart={removeFromCart}
              onClearCart={clearCart}
            />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage 
              cartCount={cartCount} 
              cartItems={cartItems}
              onRemoveFromCart={removeFromCart}
              onClearCart={clearCart}
            />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage 
              cartCount={cartCount} 
              cartItems={cartItems}
              onRemoveFromCart={removeFromCart}
              onClearCart={clearCart}
            />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetailsPage 
              cartCount={cartCount} 
              cartItems={cartItems}
              onAddToCart={addToCart} 
              onRemoveFromCart={removeFromCart}
              onClearCart={clearCart}
            />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;