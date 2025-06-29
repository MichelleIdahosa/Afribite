import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { menuItems } from "../data/menuItems";

const ProductPage = () => {
  const { productName } = useParams();
  const { addToCart } = useCart();

  // Match exactly with slug
  const product = menuItems.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === productName
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4 text-gray-700 dark:text-white">
        <div>
          <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
          <p>Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/menu" className="text-[#E27258] mt-4 inline-block">← Back to Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1A27] text-black dark:text-white px-6 py-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <img src={product.image} alt={product.name} className="w-full rounded-xl" />

        <div>
          <h1 className="text-3xl font-bold text-[#E27258] mb-4">{product.name}</h1>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{product.description}</p>
          <p className="text-xl font-bold mb-4">{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#E27258] text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Add to Cart
          </button>
          <div className="mt-6">
            <Link to="/menu" className="text-[#E27258]">← Back to Menu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
