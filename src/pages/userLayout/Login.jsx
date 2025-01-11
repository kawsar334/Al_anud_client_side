import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.post("https://server-anud.vercel.app/api/auth/login",
        { email, password },
        { withCredentials: true } 
      );
      if (response.data?.user){

        toast.success("Login successful!");
        navigate("/");
        localStorage.setItem("user", response.data?.user?._id);
      }

    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const loginGoogle = async(e)=>{
    e.preventDefault();
   try{
     const provider = new GoogleAuthProvider();
     const result = await signInWithPopup(auth, provider);
     const userInfo = {
       name: result?.user?.displayName,
       email: result?.user?.email,
       photoURL: result?.user?.photoURL,
       password:""
     }

     const res = await axios.post("https://server-anud.vercel.app/api/auth/google", userInfo)
     console.log(result?.user)
     toast.success(res?.data?.message);
     console.log(res?.data?.message)
   }catch(err){
    console.log(err);
   }
  }
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8 md:w-[500px] w-[95%]">

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>


          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              required
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
              onChange={(e)=>setPassword(e.target.value)}
              required
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

          onClick={loginGoogle}
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
