import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MainDish from './pages/MainDish';
import Appetizer from './pages/Appetizer';
import Dessert from './pages/Dessert';
import Drinks from './pages/Drinks';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from "./pages/Login";
import PrivateRoute from './utils/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Signup from "./pages/Signup";
import Congrats from "./pages/Congrats";
import Testimonials from './components/Testimonials';
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryPage from './pages/CategoryPage';
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* Toast notifications */}
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="bg-white text-black min-h-screen p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/main-dish" element={<MainDish />} />
            <Route path="/appetizer" element={<Appetizer />} />
            <Route path="/dessert" element={<Dessert />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/congrats" element={<Congrats />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:productName" element={<ProductPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
