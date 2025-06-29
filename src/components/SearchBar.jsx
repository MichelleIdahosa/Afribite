import React, { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuItems";

const searchData = {
  Swallow: ["Eba", "Fufu", "Amala", "Pounded Yam"],
  Soup: ["Efo riro", "Ewedu", "Afang", "Egusi"],
  Rice: ["Jollof rice", "Palm oil rice", "Fried Rice"],
  Desserts: ["Cake Slice", "Cookies", "Chin Chin", "Fried Plantain"],
};

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchText, setSearchText] = useState("");

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="relative w-[270px] md:w-[265px] z-50">
      {/* Search input */}
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 bg-white shadow-sm">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="What would you like to eat?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-grow outline-none text-sm text-black bg-transparent placeholder-gray-400"
        />
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="ml-2 focus:outline-none"
        >
          <FiChevronDown className="text-gray-500" />
        </button>
      </div>

      {/* Typing search result dropdown */}
      {searchText && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-[300px] overflow-y-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setSearchText("")}
              >
                {item.name}
              </Link>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">No matching items</div>
          )}
        </div>
      )}

      {/* Category dropdown when button clicked */}
      {isDropdownOpen && !searchText && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-[300px] overflow-y-auto">
          {Object.entries(searchData).map(([category, items]) => (
            <div key={category} className="p-2">
              <p
                className="font-semibold text-[#E27258] cursor-pointer"
                onClick={() =>
                  setActiveCategory(activeCategory === category ? null : category)
                }
              >
                {category}
              </p>
              {activeCategory === category && (
                <ul className="pl-4 mt-1 space-y-1">
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}

                        className="text-sm text-gray-700 hover:text-[#E27258]"
                        onClick={() => {
                          setSearchText(""); // clear input
                          setIsDropdownOpen(false); // close dropdown
                          setActiveCategory(null); // collapse category
                        }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
