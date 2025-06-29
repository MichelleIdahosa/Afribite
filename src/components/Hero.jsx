import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import SearchBar from "../components/SearchBar";
import { FiShoppingCart, FiChevronDown } from "react-icons/fi";
import ThemeToggle from "../components/ThemeToggle";
import vectorBg from "../assets/img/vector-bg.png";
import vectorTop from "../assets/img/vector-top.png";
import bluryStar from "../assets/img/blury-star.png";
import heroFood from "../assets/img/hero-food.png";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#1C1A27] text-black dark:text-white overflow-hidden">

      {/* === VECTORS UNDER EVERYTHING === */}
      <img
        src={vectorBg}
        alt="Orange Vector Background"
        className="absolute top-0 right-0 w-[750px] md:w-[850px] z-0"
      />
      <img
        src={vectorTop}
        alt="Black Vector Top"
        className="absolute top-0 right-0 w-[700px] md:w-[800px] z-10"
      />
      <img
        src={bluryStar}
        alt="Blurry Decorative Star"
        className="absolute bottom-8 right-8 w-[150px] md:w-[200px] z-20 opacity-80"
      />

      {/* === NAVBAR === */}
      <header className="sticky top-0 z-50  w-full bg-white dark:bg-[#1C1A27] px-5 lg:px-14 py-4 flex items-center justify-between shadow-sm backdrop-blur-md bg-opacity-95">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="Afribite logo" className="h-10" />
          </Link>
          <nav>
            <ul className="hidden md:flex space-x-6 items-center font-medium">
              <li><Link to="/" className="hover:text-[#E27258]">Home</Link></li>
              <li className="relative group">
                {/* MENU + CHEVRON */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 hover:text-[#E27258] font-medium"
                >
                  <span>Menu</span>
                  <FiChevronDown className={`${isMenuOpen ? 'rotate-180' : ''} transition`} />
                </button>

                {/* DROPDOWN */}
                {isMenuOpen && (
                  <ul className="absolute top-full left-0 bg-white dark:bg-[#1C1A27] shadow-lg rounded mt-2 p-2 space-y-2 z-50 w-44">
                    <li>
                      <Link
                        to="/menu"
                        className="block px-4 py-2 hover:bg-[#E27258] hover:text-white rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Menu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/main-dish"
                        className="block px-4 py-2 hover:bg-[#E27258] hover:text-white rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Main Dish
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/appetizer"
                        className="block px-4 py-2 hover:bg-[#E27258] hover:text-white rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Appetizer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dessert"
                        className="block px-4 py-2 hover:bg-[#E27258] hover:text-white rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dessert
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/drinks"
                        className="block px-4 py-2 hover:bg-[#E27258] hover:text-white rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Drinks
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li><Link to="/about" className="hover:text-[#E27258]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#E27258]">Contact Us</Link></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/login" className="bg-[#E27258] text-white px-3 py-2 rounded-xl text-sm font-medium hover:bg-opacity-90 transition">Login / Signup</Link>
          <Link to="/cart" className="flex items-center space-x-1 hover:text-[#E27258]">
            <FiShoppingCart className="text-xl" />
            <span>Cart</span>
          </Link>
          <SearchBar />
        </div>
      </header>

      {/* === HERO SECTION === */}
      <section className="relative z-30 flex flex-col lg:flex-row items-center justify-between w-full px-5 lg:px-14 min-h-[calc(100vh-80px)] pt-10">
        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E27258] mb-6 leading-tight">
            Discover people & <br /> places through food
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8 dark:text-gray-300">
            Join a community of foodies, explore local eats, and <br className="hidden md:block" />
            make every meal unforgettable.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-[#E27258] text-white text-sm md:text-base font-semibold py-3 px-8 rounded-full hover:opacity-90 transition duration-200"
          >
            Make your order now
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center z-40 relative">
          <img
            src={heroFood}
            alt="Delicious Food"
            className="w-[350px] md:w-[450px] rounded-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
