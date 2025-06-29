// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiMessageSquare, FiX } from 'react-icons/fi';
import logo from '../assets/img/logo.png';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('email');
  const [email, setEmail] = useState('');

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel your login process?')) {
      navigate('/');
    }
  };

  const handleReset = async () => {
    if (!email) return toast.error("Please enter a valid email");

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent to your email");
      navigate("/reset-password");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl p-6 shadow-lg relative">
        <button className="absolute top-4 right-4 text-xl" onClick={handleCancel}>
          <FiX />
        </button>

        <div className="flex items-center space-x-2 mb-6">
          <img src={logo} alt="Afribite logo" className="h-10" />
        </div>

        <h2 className="text-[#E27258] text-xl font-semibold mb-1">Forgot your Password?</h2>
        <p className="text-sm text-gray-600 mb-6">It's okay, mistakes happen! We'll help you create a new password.</p>

        <div className="space-y-4 mb-4">
          <button
            onClick={() => setSelectedMethod('email')}
            className={`w-full border rounded-lg p-4 flex items-start space-x-3 ${selectedMethod === 'email' ? 'border-[#E27258]' : 'border-gray-300'}`}
          >
            <FiMail className="text-2xl mt-1" />
            <div className="text-left">
              <p className="font-semibold">By Email</p>
              <p className="text-sm text-gray-600">{email || "Enter your email below"}</p>
            </div>
          </button>

          <button
            onClick={() => toast.info("Phone reset not yet supported")}
            className="w-full border rounded-lg p-4 flex items-start space-x-3 border-gray-300 cursor-not-allowed"
          >
            <FiMessageSquare className="text-2xl mt-1" />
            <div className="text-left">
              <p className="font-semibold">By Phone Number</p>
              <p className="text-sm text-gray-600">(234) 957-2550-427</p>
            </div>
          </button>
        </div>

        {selectedMethod === 'email' && (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full border rounded p-3 mb-4 outline-none"
          />
        )}

        <button
          onClick={handleReset}
          className="bg-[#E27258] text-white font-semibold w-full py-3 rounded-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
