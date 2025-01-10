import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8 md:w-[500px] w-[95%]">

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form action="">


          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal text-white py-2 rounded-md hover:bg-teal-600 transition"
          >
            Login
          </button>
        </form>

        <div className="my-6 text-center text-gray-500">OR</div>
        <button
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        >
          <i className="fa-brands fa-google mr-2"></i>
          Login with Google
        </button>
        <p
          className="my-2 w-full text-right  "
        >
          Don't have an account? <NavLink to="/register" className="text-blue-500 hover:text-blue-700">Register</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
