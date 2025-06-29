import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi"; // ✅ New import
import logo from "../assets/img/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white dark:bg-[#1F1D2B] text-black dark:text-white pt-16 pb-10 px-6 lg:px-20 transition-colors duration-300">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="Afribite Logo" className="mb-4" /> <br />
          <p className="text-gray-700 dark:text-gray-300">
            Your one-stop resturant for delicious and fast food delivery. Taste the joy
            at your doorstep.
          </p> <br />
          <div className="flex gap-4 mt-4 text-[#E27258]">
            <FaFacebookF className="hover:text-[#E27258] cursor-pointer" />
            <FaInstagram className="hover:text-[#E27258] cursor-pointer" />
            <FaTwitter className="hover:text-[#E27258] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#E27258] cursor-pointer" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><a href="/" className="hover:text-[#E27258] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#E27258] transition">About Us</a></li>
            <li><a href="/menu" className="hover:text-[#E27258] transition">Menu</a></li>
            <li><a href="/testimonials" className="hover:text-[#E27258] transition">Reviews</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><a href="/" className="hover:text-orange-400 transition">Help Center</a></li>
            <li><a href="/" className="hover:text-orange-400 transition">Safety Center</a></li>
            <li><a href="/" className="hover:text-orange-400 transition">FAQs</a></li>
            <li><a href="/" className="hover:text-orange-400 transition">Contact Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="hover:text-[#E27258] transition">Email: support@Afribite.com</li>
            <li className="hover:text-[#E27258] transition">Phone: +234 907 605 0000</li>
            <li className="hover:text-[#E27258] transition">Location: San Francisco, USA</li>
          </ul>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-16 bg-[#E27258] text-white p-3 rounded-full shadow-md hover:bg-opacity-90 transition duration-300"
        aria-label="Back to Top"
      >
        <FiArrowUp className="text-lg" />
      </button>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 border-t mt-8 pt-4">
        &copy; Developed by Michelle Idahosa | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
