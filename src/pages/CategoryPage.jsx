import React from "react";
import { useParams } from "react-router-dom";
import { menuItems } from "../data/menuItems";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const formattedName = categoryName.replace(/-/g, " ").toLowerCase();

  const itemsInCategory = menuItems.filter((item) =>
    item.category.some((cat) => cat.toLowerCase() === formattedName)
  );

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-[#1C1A27] text-black dark:text-white">
      <h2 className="text-2xl font-bold text-[#E27258] mb-4 capitalize">
        {formattedName} Items
      </h2>

      {itemsInCategory.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {itemsInCategory.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                <p className="text-[#E27258] font-bold mt-2">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No items found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
