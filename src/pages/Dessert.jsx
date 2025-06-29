import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import ThemeToggle from "../components/ThemeToggle";
import { FiShoppingCart } from "react-icons/fi";

// Replace these with your actual dessert images
import img1 from "../assets/img/cakeslice.png";
import img2 from "../assets/img/cookie.png";
import img3 from "../assets/img/Sweet-Couscous.png";
import img4 from "../assets/img/chinchin.png";
import img5 from "../assets/img/datebars.png";
import img6 from "../assets/img/grilledfish.png";

// Dessert product data
const desserts = [
  {
    id: 1,
    name: "Cake Slices",
    image: img1,
    price: "£10",
  },
  {
    id: 2,
    name: "Cookies",
    image: img2,
    price: "£8",
  },
  {
    id: 3,
    name: "Sweet Couscous",
    image: img3,
    price: "£9",
  },
  {
    id: 4,
    name: "Chinchin",
    image: img4,
    price: "£7",
  },
  {
    id: 5,
    name: "Date Bars",
    image: img5,
    price: "£9",
  },
  {
    id: 6,
    name: "Grilled Fish",
    image: img6,
    price: "£15",
  },
];

const Dessert = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1A27] text-black dark:text-white">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-[#1C1A27] shadow-sm">
        <Link to="/">
          <img src={logo} alt="Afribite logo" className="h-10" />
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
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

      {/* DESSERT SECTION */}
      <section className="px-6 lg:px-20 py-10">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
          <h3 className="text-2xl text-center font-bold text-[#E27258]">Dessert</h3>
        </div>

        {/* DESSERT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {desserts.map((item) => (
            <div
              key={item.id}
              onClick={() => handleAddToCart(item)}
              className="border-2 border-[#E27258] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition duration-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-[#E27258] font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dessert;
