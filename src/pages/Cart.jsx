import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1A27] text-black dark:text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm bg-white dark:bg-[#2C2A38]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#E27258]">{item.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6">
          <Link to="/checkout">
            <button className="bg-[#E27258] text-white px-6 py-2 rounded hover:opacity-90">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
