import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import ThemeToggle from "../components/ThemeToggle";
import { FiShoppingCart } from 'react-icons/fi';
import img1 from "../assets/img/jollof-rice-main.jpg";
import img2 from "../assets/img/Akara.jpg";
import img3 from "../assets/img/moimoi-main.jpg";
import img4 from "../assets/img/Amala-main.png";
import img5 from "../assets/img/Egusi.png";
import img6 from "../assets/img/jollof-spagetti.png";

// Dish data
const mainDishes = [
  {
    id: 1,
    name: "Palm oil Rice",
    image: img1,
    price: "£18",
  },
  {
    id: 2,
    name: "Akara and Pap",
    image: img2,
    price: "£12",
  },
  {
    id: 3,
    name: "Moi Moi",
    image: img3,
    price: "£8",
  },
  {
    id: 4,
    name: "Amala and Ewedu",
    image: img4,
    price: "£15",
  },
  {
    id: 5,
    name: "Egusi and Pounded Yam",
    image: img5,
    price: "£18",
  },
  {
    id: 6,
    name: "Jollof Spaghetti",
    image: img6,
    price: "£18",
  },
];

const MainDish = () => {
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

      {/* MAIN DISH SECTION */}
      <section className="px-6 lg:px-20 py-10">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-6">
          <h3 className="text-center text-2xl font-bold text-[#E27258]">Main Dish</h3>
        </div>

        {/* DISH GRID */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainDishes.map((dish) => (
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

export default MainDish;
