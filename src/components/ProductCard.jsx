import { memo } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = memo(({ product, onAddToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product.name, product.price);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div 
          className="product-image" 
          style={{ 
            backgroundImage: `url('${product.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <div className="product-name">{product.name}</div>
          <div className="product-price">₹{product.price.toLocaleString()}</div>
        </div>
      </Link>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <i className="fas fa-shopping-cart"></i>
        Add to Cart
      </button>
    </div>
  );
});

export default ProductCard;