import { useState, useCallback } from 'react';

const useCart = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((productName, productPrice) => {
    // Update cart counter
    setCartCount(prev => prev + 1);
    
    // Add item to cart items
    setCartItems(prev => [...prev, { name: productName, price: productPrice, id: Date.now() }]);
    
    // Show notification (optimized)
    const existingNotification = document.querySelector('.cart-notification');
    if (existingNotification) {
      existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>${productName} added to cart!</span>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
    setCartCount(prev => prev - 1);
  }, []);

  const clearCart = useCallback(() => {
    setCartCount(0);
    setCartItems([]);
  }, []);

  return {
    cartCount,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart
  };
};

export default useCart;