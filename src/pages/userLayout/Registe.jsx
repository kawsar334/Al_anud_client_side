import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { register } from "../../redux/authActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
    const navigate= useNavigate();
    const [email,setEmail] =useState("");
    const [password, setpassword] = useState("");
    const [photoURL, setPhotoURL] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [name, setName ]= useState("")
    
    const dispatch = useDispatch()

    const handleUpload = async (e) => {
       
        const formData = new FormData();
        formData.append("file", photo);
        formData.append("upload_preset", "alanud"); 

        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dmvmzwqkw/image/upload", 
                formData
            );
            setPhotoURL(response.data.secure_url)
            // email, password, photoURL, name, navigate, toast
            dispatch(register(email, password, photoURL, name , navigate , toast))
        } catch (error) {
            toast.error("Failed to upload image. Please try again.");
            console.error("Cloudinary upload error:", error);
        }
        

    };
    
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white shadow-lg rounded-lg p-8 md:w-[500px] w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email
                    </label>
                    <input
                    onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="photoURL" className="block text-gray-700 font-semibold mb-2">
                        
                    </label>
                    <input
                        onChange={(e)=>setPhoto(e.target.files[0])}
                        type="file"
                        id="photoURL"
                        placeholder="Enter your "
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
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Create a password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>

                <button
                    onClick={handleUpload}
                    type="submit"
                    className="w-full bg-teal text-white py-2 rounded-md hover:bg-teal-600 transition"
                >
                    Register
                </button>

                <div className="my-6 text-center text-gray-500">OR</div>

                <button
                    className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                >
                    <i className="fa-brands fa-google mr-2"></i>
                    Sign in with Google
                </button>

                <p className="text-sm text-center mt-6">
                    Already have an account?{" "}
                    <NavLink to="/login" className="text-teal hover:underline">
                        Login here
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;
