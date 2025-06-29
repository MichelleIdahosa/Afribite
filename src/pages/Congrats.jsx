// src/pages/Congrats.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Congrats = () => {
  const navigate = useNavigate();

  const handleGoToMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9] px-4 text-center">
      {/* Checkmark Icon */}
      <IoMdCheckmarkCircleOutline className="text-[#E27258] text-9xl mb-4" />

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign up was successful</h1>
      
      {/* Subtext */}
      <p className="text-gray-600 mb-6 text-sm">Hungry now?</p>

      {/* Button */}
      <button
        onClick={handleGoToMenu}
        className="bg-[#E27258] text-white px-6 py-2 rounded font-medium hover:bg-[#d25b41] transition"
      >
        Get Some Food
      </button>
    </div>
  );
};

export default Congrats;
