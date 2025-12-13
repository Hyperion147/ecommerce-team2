import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { PRODUCTS } from '../data/products.jsx';

const ProductDetailsPage = ({ cartCount, cartItems, onAddToCart, onRemoveFromCart, onClearCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  const product = PRODUCTS.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div>
        <Header 
          cartCount={cartCount} 
          cartItems={cartItems}
          onRemoveFromCart={onRemoveFromCart}
          onClearCart={onClearCart}
        />
        <section className="section" style={{ marginTop: '100px' }}>
          <h2>Product not found</h2>
          <button onClick={() => navigate('/shop')} className="btn btn-primary">
            Back to Shop
          </button>
        </section>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    
    const cartItem = {
      ...product,
      selectedSize,
      quantity
    };
    
    onAddToCart(cartItem);
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div>
      <Header 
        cartCount={cartCount} 
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
      />
      
      <section className="section" style={{ marginTop: '100px' }}>
        <div className="product-details-container">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} className="product-detail-image" />
          </div>
          
          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-price">₹{product.price.toLocaleString()}</p>
            
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description || 'High-quality fashion piece perfect for any occasion.'}</p>
            </div>
            
            {product.sizes && product.sizes.length > 0 && (
              <div className="size-selection">
                <h3>Size</h3>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="quantity-selection">
              <h3>Quantity</h3>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="product-actions">
              <button onClick={handleAddToCart} className="btn btn-primary add-to-cart-btn">
                Add to Cart
              </button>
              <button onClick={() => navigate('/shop')} className="btn btn-secondary">
                Back to Shop
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;