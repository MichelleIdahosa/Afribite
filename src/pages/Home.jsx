import React from 'react';
import Hero from '../components/Hero'; // or wherever Hero is stored
import Footer from "../components/footer";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* This wrapper allows vectors to span behind both navbar and hero */}
      <Hero />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
