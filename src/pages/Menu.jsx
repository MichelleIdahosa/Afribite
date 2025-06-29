// src/pages/Menu.jsx
import React, { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiFilter } from "react-icons/fi";
import { GiRiceCooker, GiChickenOven, GiWineGlass, GiNoodles, GiMeat, GiCheeseWedge } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import icon from "../assets/img/icon.png"
import { menuItems } from "../data/menuItems";


const popularFilters = [
  { name: "Main Dish", icon: <GiRiceCooker /> },
  { name: "Dessert", icon: <GiCheeseWedge /> },
  { name: "Drinks", icon: <GiWineGlass /> },
  { name: "Appetizer", icon: <LuDessert /> },
];

const moreFilters = [
  "All", "Afang", "Akara & Pap", "Amala", "Asun", "Banga", "Beans", "Black soup", "Cake Slice", "Eba", "Egusi", "Efo riro", "Ewedu","Fried Plantain", "Fried rice", "Fufu",
  "Grilled Fish", "Jollof Spaghetti", "Jollof rice", "Moi Moi", "Palm oil rice", "Pepper Soup", "Pounded yam", "Rice", "Small chops", "Soup", "Swallow", "Wheat"
];

const Menu = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredItems = menuItems.filter((item) =>
    (selectedFilter === "All" || item.category.includes(selectedFilter)) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const { addToCart } = useCart();

const handleAddToCart = (item) => {
  addToCart(item); // ✅ this actually stores the item
  alert(`${item.name} added to cart`);
};
  

  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1A27] text-black dark:text-white">
      
      {/* NAV */}
<header className="flex justify-between items-center px-6 py-4 
  bg-[#E27258] text-white 
  shadow-md sticky top-0 z-50 
  dark:bg-[#1C1A27] dark:text-[#E27258]">

  <img
    src={icon}
    alt="Logo"
    className="h-10 w-auto 
      filter brightness-0 invert 
      dark:filter-none"
  />

  <div className="flex items-center gap-4">
    <div className="relative">
      <FiSearch className="absolute top-2 left-3 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10 pr-4 py-2 text-sm rounded-full bg-white text-black"
      />
    </div>
    <FiUser />
    <Link to="/cart">
      <FiShoppingCart />
    </Link>
  </div>
</header>

      <main className="flex flex-col md:flex-row gap-8 px-6 py-10 lg:px-20 items-start">
        
        {/* SIDEBAR */}
        <aside className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Popular Filters</h4>
            <ul className="space-y-2">
              {popularFilters.map((f) => (
                <li
                  key={f.name}
                  onClick={() => setSelectedFilter(f.name)}
                  className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded hover:bg-[#E27258]/10 ${
                    selectedFilter === f.name ? "bg-[#E27258]/20" : ""
                  }`}
                >
                  {f.icon}
                  <span>{f.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">More Filters</h4>
            <ul className="space-y-2 text-sm">
              {moreFilters.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`cursor-pointer px-3 py-1 rounded hover:bg-[#E27258]/10 ${
                    selectedFilter === cat ? "bg-[#E27258]/20 font-semibold" : ""
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <section className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
<div
  key={item.id}
  className="flex flex-col bg-white dark:bg-[#2C2A38] border border-[#E27258] rounded-lg overflow-hidden shadow hover:shadow-md transition cursor-pointer"
>
  <img
    src={item.image}
    alt={item.name}
    className="w-full aspect-square "
  />

  <div className="p-4 flex flex-col flex-grow">
    <h3 className="text-lg font-bold text-[#E27258]">{item.name}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 my-2">{item.description}</p>
    <div className="flex justify-between items-center mt-auto">
      <span className="text-lg font-bold text-[#E27258]">{item.price}</span>
      <button
        onClick={() => handleAddToCart(item)}
        className="bg-[#E27258] text-white px-4 py-1 rounded-full text-sm hover:opacity-90"
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Menu;
