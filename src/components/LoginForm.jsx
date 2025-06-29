import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Must be 6 characters minimum').required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success("Login successful!");
      navigate("/menu");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message);
    }
    setSubmitting(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google login successful!");
      navigate("/menu");
    } catch (error) {
      console.error("Google login failed:", error);
      toast.error("Google login failed: " + error.message);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400"><FiMail /></span>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E27258]"
            />
            <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
          </div>

          {/* Password Field */}
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400"><FiLock /></span>
            <Field
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              className="pl-10 pr-10 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E27258]"
            />
            <span
              className="absolute right-3 top-3.5 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
            <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1" />
          </div>

          {/* Remember Me & Forgot */}
          <div className="flex justify-between items-center">
            <label className="flex items-center space-x-1 text-sm">
              <Field type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="text-sm text-[#E27258] hover:underline">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#E27258] text-white w-full py-2 rounded-md font-semibold hover:opacity-90"
          >
            Login
          </button>

          {/* Divider */}
          <div className="text-center text-gray-400">- or continue with -</div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border py-2 rounded-md flex items-center justify-center space-x-2"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span>Login with Google</span>
          </button>

          {/* Signup Link */}
          <p className="text-sm text-center mt-4">
            Don’t have an account? <a href="/signup" className="text-[#E27258] font-semibold">Signup</a>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
