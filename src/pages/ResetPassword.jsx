// src/pages/ResetPassword.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import logo from "../assets/img/logo.png";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(58);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < code.length - 1) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel your password reset?")) {
      navigate("/forgot-password");
    }
  };

  const handleContinue = () => {
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    const enteredCode = code.join("");
    if (enteredCode.length !== 5) {
      return toast.error("Please enter a valid 5-digit code");
    }

    // Simulated success
    toast.success("Password reset successful!");
    navigate("/login");

    // 🔒 When using Firebase email link, you'd do:
    // await confirmPasswordReset(auth, actionCode, password);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl p-6 shadow-lg relative">
        <button className="absolute top-4 right-4 text-xl" onClick={handleCancel}>
          <FiX />
        </button>

        <div className="flex items-center space-x-2 mb-4">
          <img src={logo} alt="Afribite logo" className="h-10" />
          <span className="text-[#E27258] font-bold text-lg">AFRIBITE</span>
        </div>

        <div className="w-16 h-16 bg-[#FFECE7] rounded-full flex items-center justify-center mb-4">
          <PiEnvelopeSimpleLight className="text-2xl text-[#E27258]" />
        </div>

        <h2 className="text-lg font-semibold mb-1">We have sent you an activation code</h2>
        <p className="text-sm text-gray-600 mb-4">
          An email has been sent to your address containing a code to activate your account.
        </p>

        <div className="flex justify-between mb-4">
          {code.map((digit, i) => (
            <input
              key={i}
              id={`code-${i}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleCodeChange(i, e.target.value)}
              className="w-12 h-12 border border-[#E4D9BD] text-center rounded-md focus:outline-[#E27258]"
            />
          ))}
        </div>

        <p className="text-xs text-gray-500 mb-6">
          Link will expire soon. <span className="font-medium">00:{timer < 10 ? `0${timer}` : timer}</span>
        </p>

        {/* New Password */}
        <div className="mb-4">
          <label className="block font-medium mb-1">New Password</label>
          <div className="flex items-center border rounded px-3 py-2 bg-white">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 outline-none"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Confirm New Password</label>
          <div className="flex items-center border rounded px-3 py-2 bg-white">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="flex-1 outline-none"
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="bg-[#E27258] text-white font-semibold w-full py-3 rounded-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

 export default ResetPassword;
