import { useState, useEffect } from "react";
import products from "../Data/products.json";

export default function CartItem({ productid, ondelete, onQuantityChange, initialQuantity = 1 }) {
  const p = products.find((item) => item.id == productid);
  const [quantity, setQuantity] = useState(initialQuantity);

  // Sync quantity with initialQuantity prop
  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  // If product not found, don't render anything
  if (!p) {
    return null;
  }

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) {
      onQuantityChange(productid, newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) {
        onQuantityChange(productid, newQuantity);
      }
    }
  };

  return (
    <div className="bg-neutral-900 text-white flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl w-full relative">
      
      <img
        src={p.image}
        alt={p.name}
        className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-xl"
      />

      <div className="flex flex-col justify-between flex-1 gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">{p.name}</h2>
          <p className="text-sm text-gray-300">
            Size: {p.size} • Color: {p.color}
          </p>
          <p className="text-lg font-semibold mt-1">
            ₹{p.price} {quantity > 1 && <span className="text-sm text-gray-400">x {quantity} = ₹{p.price * quantity}</span>}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleDecrement}
            className="bg-neutral-800 rounded-xl px-4 py-2 text-lg font-bold hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="text-lg font-semibold min-w-[2rem] text-center">{quantity}</span>
          <button 
            onClick={handleIncrement}
            className="bg-neutral-800 rounded-xl px-4 py-2 text-lg font-bold hover:bg-neutral-700 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex justify-end sm:items-end">
        <button onClick={ondelete} className="text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3 cursor-pointer" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
