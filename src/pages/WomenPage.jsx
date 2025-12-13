import React from 'react';
import Header from '../components/Header.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { PRODUCTS } from '../data/products.jsx';

const WomenPage = ({ cartCount, cartItems, onAddToCart, onRemoveFromCart, onClearCart }) => {
  const womenProducts = PRODUCTS.filter(product => 
    product.category.toLowerCase().includes('women')
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
        <h2 className="section-title">Women's Collection</h2>
        <ProductGrid 
          products={womenProducts} 
          onAddToCart={onAddToCart}
          includeAnimation={false}
          enableScrollAnimation={false}
        />
      </section>
    </div>
  );
};

export default WomenPage;