import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import ThemeToggle from "../components/ThemeToggle";
import { FiShoppingCart } from 'react-icons/fi';
import img1 from "../assets/img/Asun.png";
import img2 from "../assets/img/Peppersoup.png";
import img3 from "../assets/img/catfishpepp.png";
import img4 from "../assets/img/smallchops.png";
import img5 from "../assets/img/suya.jpg";
import img6 from "../assets/img/pepperedsnail.jpg";

// Dummy appetizer data
const appetizers = [
  {
    id: 1,
    name: "Asun",
    image: img1,
    price: "£12",
  },
  {
    id: 2,
    name: "Pepper Soup",
    image: img2,
    price: "£18",
  },
  {
    id: 3,
    name: "Catfish Pepper Soup",
    image: img3,
    price: "£14",
  },
  {
    id: 4,
    name: "Small Chops",
    image: img4,
    price: "£10",
  },
  {
    id: 5,
    name: "Suya",
    image: img5,
    price: "£13",
  },
  {
    id: 6,
    name: "Peppered Snail",
    image: img6,
    price: "£15",
  },
];

const Appetizer = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (dish) => {
    setCart([...cart, dish]);
    alert(`${dish.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1A27] text-black dark:text-white">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-[#1C1A27] shadow-sm">
        <Link to="/">
          <img src={logo} alt="Afribite logo" className="h-10" />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-[#E27258]">Home</Link>
            <Link to="/menu" className="hover:text-[#E27258]">Menu</Link>
            <Link to="/about" className="hover:text-[#E27258]">About</Link>
            <Link to="/contact" className="hover:text-[#E27258]">Contact</Link>
            <Link to="/cart" className="hover:text-[#E27258] flex items-center">
              <FiShoppingCart className="text-xl" /> <span className="ml-1">Cart</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* APPETIZER SECTION */}
      <section className="px-6 lg:px-20 py-10">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
          <h3 className="text-2xl text-center font-bold text-[#E27258]">Appetizer</h3>
        </div>

        {/* APPETIZER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {appetizers.map((dish) => (
            <div
              key={dish.id}
              onClick={() => handleAddToCart(dish)}
              className="border-2 border-[#E27258] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition duration-200"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-60 object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{dish.name}</h3>
                <p className="text-[#E27258] font-bold">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Appetizer;
