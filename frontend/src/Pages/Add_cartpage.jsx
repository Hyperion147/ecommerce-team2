// cart page - Aman jangra
import { useNavigate, useParams } from "react-router-dom";
import CartItem from "../Components/CartItem";
import OrderSummary from "../Components/OrderSummary";
import { useState, useEffect } from "react";
import products from "../Data/products.json";

export default function Add_cartpage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState({}); // Changed to object: {productId: quantity}

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cartItems")) || {};
    setCartItems(saved);
  }, []);

  useEffect(() => {
    if (id && id !== "0") {
      setCartItems((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1
      }));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function handleDelete(deleteId) {
    setCartItems((prev) => {
      const newItems = { ...prev };
      delete newItems[deleteId];
      return newItems;
    });
  }

  function handleQuantityChange(productId, newQuantity) {
    setCartItems((prev) => ({
      ...prev,
      [productId]: newQuantity
    }));
  }

  useEffect(() => {
    let sum = 0;
    Object.entries(cartItems).forEach(([productId, quantity]) => {
      const p = products.find((item) => item.id == productId);
      if (p) {
        sum += p.price * quantity;
      }
    });
    setTotal(sum);
  }, [cartItems]);

  const cartItemIds = Object.keys(cartItems);

  const tax = total * 0.09;
  const grandTotal = total + tax;

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-neutral-800 rounded-xl px-4 py-2 text-base sm:text-lg font-bold hover:bg-neutral-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        
        <h1 className="text-2xl md:text-3xl font-bold">Shopping Cart</h1>
        <div></div>
      </div>

      {cartItemIds.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 w-full">
          <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8">
            {cartItemIds.map((productId) => (
              <CartItem
                key={productId}
                productid={productId}
                initialQuantity={cartItems[productId]}
                ondelete={() => handleDelete(productId)}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>

          <div className="w-full lg:max-w-sm lg:self-start">
            <OrderSummary total={total} tax={tax} grandTotal={grandTotal} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-6">Add some products to get started!</p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-colors"
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
}
