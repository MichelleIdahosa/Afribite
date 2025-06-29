import React from 'react';
import { Link } from 'react-router-dom';
import AboutImg from "../assets/img/about-food.png";

const About = () => {
  return (
    <div className="min-h-[620px] flex justify-center items-center py-12 dark:bg-[#1F1D2B] text-black dark:text-white pt-16 pb-10 px-6 lg:px-20 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          
          {/* LEFT - IMAGE */}
          <div data-aos="zoom-in" className="flex justify-center items-center">
            <img
              src={AboutImg}
              alt="Delicious meal on plate"
              className="max-w-[450px] w-full mx-auto rounded-full shadow-[-60px_5px_20px_5px_rgba(0,0,0,0.2)] relative z-10"
            />
          </div>

          {/* RIGHT - TEXT */}
          <div className="flex flex-col justify-center gap-6">
            <p
              data-aos="fade-up"
              className="uppercase text-3xl font-semibold text-dark dark:text-white"
            >
              About
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl lg:text-5xl text-[#E27258] font-bold font-cursive2"
            >
              Fresh Meals
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide"
            >
              At Afribite, food is more than just a meal, it’s a celebration of culture, connection, and creativity. We are an African-inspired restaurant redefining how people experience local and continental dishes. Every plate is carefully crafted to take you on a flavorful journey across Africa’s rich culinary landscape. With a passion for authenticity and flair, we serve food that connects hearts. Whether it’s a quick bite or shared feast, Afribite is your home for taste, quality, and community. One order, one memory, every dish tells a story.
            </p>

            {/* CTA BUTTON */}
            <div data-aos="fade-up" data-aos-delay="400">
              <Link to="/menu">
                <button className="bg-[#E27258] text-white text-sm md:text-base font-semibold py-3 px-8 rounded-full hover:opacity-90 transition duration-200">
                  View Our Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
