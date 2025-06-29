import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from "yup";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import foodImg from "../assets/img/signup-food.png";
import logo from "../assets/img/logo.png";
import { IoClose } from "react-icons/io5";
import { getFirebaseErrorMessage } from "../utils/firebaseErrors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    category: Yup.string().required("Category is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/congrats");
    } catch (error) {
      const message = getFirebaseErrorMessage(error.code);
      toast.error(message);
    }
  };

  return (
    <div className="flex h-screen bg-white dark:bg-[#1C1A27] text-black dark:text-white">
      {/* === Left Image Section === */}
      <div className="w-1/2 hidden md:block">
        <img
          src={foodImg}
          alt="signup"
          className="h-full w-full object-cover rounded-l-xl"
        />
      </div>

      {/* === Right Form Section === */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6">
        {/* Logo & Cancel Button */}
        <div className="flex items-center justify-between px-8 py-4">
          <img src={logo} alt="Afribite logo" className="h-8" />
          <button
            onClick={() => {
              const confirmCancel = window.confirm("Are you sure you want to cancel the signup process?");
              if (confirmCancel) navigate("/login");
            }}
            className="text-black dark:text-white text-2xl hover:text-red-500"
          >
            <IoClose />
          </button>
        </div>

        {/* Form Content */}
        <div className="flex flex-col justify-center items-center px-6">
          <h2 className="text-2xl font-bold mb-1">Glad to have you onboard!</h2>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
            Signup to have an account with us.
          </p>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              category: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              try {
                await createUserWithEmailAndPassword(auth, values.email, values.password);
                navigate("/congrats");
              } catch (error) {
                const message = getFirebaseErrorMessage(error.code);
                toast.error(message);
              }
            }}
          >
            {() => (
              <Form className="w-full max-w-sm space-y-4">
                {/* Full Name */}
                <div className="relative">
                  <AiOutlineUser className="absolute left-3 top-3 text-xl text-gray-400" />
                  <Field
                    name="fullName"
                    type="text"
                    placeholder="Enter fullname"
                    className="pl-10 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#E27258] bg-white dark:bg-[#2c2a39] dark:border-[#444] dark:text-white"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Email */}
                <div className="relative">
                  <AiOutlineMail className="absolute left-3 top-3 text-xl text-gray-400" />
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter valid email"
                    className="pl-10 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#E27258] bg-white dark:bg-[#2c2a39] dark:border-[#444] dark:text-white"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Category */}
                <div className="relative">
                  <BiCategory className="absolute left-3 top-3 text-xl text-gray-400" />
                  <Field
                    as="select"
                    name="category"
                    className="pl-10 w-full p-2 border rounded focus:outline-none bg-white dark:bg-[#2c2a39] dark:border-[#444] dark:text-white"
                  >
                    <option value="">Select your category</option>
                    <option value="customer">Customer</option>
                    <option value="vendor">Vendor</option>
                  </Field>
                  <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Password */}
                <div className="relative">
                  <AiOutlineLock className="absolute left-3 top-3 text-xl text-gray-400" />
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#E27258] bg-white dark:bg-[#2c2a39] dark:border-[#444] dark:text-white"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  <span
                    className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                  </span>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="w-full bg-[#E27258] text-white p-2 rounded font-semibold hover:opacity-90 transition"
                >
                  Signup
                </button>

                {/* Divider */}
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  - or continue with -
                </div>

                {/* Google Signup */}
                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  className="flex items-center justify-center w-full border p-2 rounded hover:shadow bg-white dark:bg-[#2c2a39] dark:border-[#444] dark:text-white"
                >
                  <FcGoogle className="mr-2 text-xl" />
                  Signup with Google
                </button>

                {/* Switch to Login */}
                <p className="text-sm text-center mt-4 dark:text-gray-300">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#E27258] font-semibold">
                    Login
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
