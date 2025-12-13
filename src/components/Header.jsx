import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from '../navigation';

const Header = ({ cartCount = 0, cartItems = [], onRemoveFromCart, onClearCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      // Handle both string and numeric prices
      const price = typeof item.price === 'string' 
        ? parseFloat(item.price.replace('₹', '').replace(',', ''))
        : item.price;
      return total + price;
    }, 0);
  };

  return (
    <header className="header">
      <div className="logo">
        Urban<span>Threads</span>
      </div>
      <Navigation />
      <div className="cart-container" ref={cartRef}>
        <div className="cart-icon" onClick={toggleCart}>
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cartCount}</span>
        </div>
        
        {isCartOpen && (
          <div className="cart-dropdown">
            <div className="cart-header">
              <h3>Shopping Cart ({cartCount})</h3>
              <button className="close-cart" onClick={toggleCart}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p className="item-price">
                        ₹{typeof item.price === 'string' 
                          ? item.price.replace('₹', '') 
                          : item.price.toLocaleString()}
                      </p>
                    </div>
                    <button 
                      className="remove-item"
                      onClick={() => onRemoveFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ₹{getTotalPrice().toLocaleString()}</strong>
                </div>
                <div className="cart-actions">
                  <button className="clear-cart-btn" onClick={onClearCart}>
                    Clear Cart
                  </button>
                  <button className="checkout-btn">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;