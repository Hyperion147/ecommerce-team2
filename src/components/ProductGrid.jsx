import React from 'react';
import ProductCard from './ProductCard.jsx';

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;