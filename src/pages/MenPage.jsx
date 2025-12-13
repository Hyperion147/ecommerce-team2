import React from 'react';
import Header from '../components/Header.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { PRODUCTS } from '../data/products.jsx';

const MenPage = ({ cartCount, cartItems, onAddToCart, onRemoveFromCart, onClearCart }) => {
  const menProducts = PRODUCTS.filter(product => 
    product.category.toLowerCase().includes('men') && 
    !product.category.toLowerCase().includes('women')
  );

  return (
    <div>
      <Header 
        cartCount={cartCount} 
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
      />
      
      <section className="section" style={{ marginTop: '100px' }}>
        <h2 className="section-title">Men's Collection</h2>
        <ProductGrid 
          products={menProducts} 
          onAddToCart={onAddToCart}
        />
      </section>
    </div>
  );
};

export default MenPage;