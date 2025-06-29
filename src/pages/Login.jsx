import React from 'react';
import LoginForm from '../components/LoginForm';
import foodImage from '../assets/img/food-login.png';
import logo from "../assets/img/logo.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    const confirm = window.confirm("Are you sure you want to cancel your login process?");
    if (confirm) {
      navigate('/');
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#fdfdfd] dark:bg-[#1C1A27] text-black dark:text-white">
      
      {/* === Left Image Section === */}
      <div className="hidden md:block w-1/2 h-full">
        <img 
          src={foodImage} 
          alt="Login Visual" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* === Right Login Form === */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-6">
        {/* Logo & Cancel */}
        <div className="w-full flex items-center justify-between mb-8 max-w-md">
          <img src={logo} alt="Afribite logo" className="h-8" />
          <button 
            onClick={handleCancel} 
            className="text-xl font-bold text-gray-600 hover:text-red-400"
          >
            ✕
          </button>
        </div>

        {/* Text */}
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Good to see you again!</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">Please enter your login details</p>
          
          {/* Login Form Component */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
