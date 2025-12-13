import React from 'react';
import Header from '../components/Header.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { PRODUCTS } from '../data/products.jsx';

const ShopPage = ({ cartCount, cartItems, onAddToCart, onRemoveFromCart, onClearCart }) => {
  return (
    <div>
      <Header 
        cartCount={cartCount} 
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
      />
      
      <section className="section" style={{ marginTop: '100px' }}>
        <h2 className="section-title">Shop Our Collection</h2>
        <ProductGrid 
          products={PRODUCTS} 
          onAddToCart={onAddToCart}
          includeAnimation={true}
        />
      </section>
    </div>
  );
};

export default ShopPage;