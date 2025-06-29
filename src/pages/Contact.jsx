import React from "react";

const Contact = () => {
  return (
    <section className="dark:bg-black py-10 transition-colors duration-300">
      <div className="border-2 border-[#f9d7d0] dark:bg-[#1F1D2B] py-16 px-6 lg:px-20 mx-4 lg:mx-16 rounded-3xl">
        <div className="max-w-2xl mx-auto text-center">
          <h4 className="text-[#E27258] font-semibold uppercase mb-2">
            Newsletter
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get the Latest Updates
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Subscribe to our newsletter and never miss any update or special offer!
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-full border border-gray-500 dark:border-gray-600 outline-none dark:bg-zinc-800 dark:text-white"
            />
            <button
              type="submit"
              className="bg-[#E27258] hover:bg-[#ed9480] text-white font-medium px-6 py-3 rounded-full transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;