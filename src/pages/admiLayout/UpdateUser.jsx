import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateUser = ({  }) => {

    const location = useLocation();
    const user = location.state.user
    const id = location.pathname.split("/")[3]
    
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        // password: "",
        role: user?.role || "user",
        photoURL: user?.photoURL || "https://via.placeholder.com/150",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
             const result = await Swal.fire({
                        title: 'Are you sure?',
                        text: 'You won’t be able to Update?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, delete it!',
                        cancelButtonText: 'Cancel',
                    });
            if (result.isConfirmed) {
                const res = await axios.put(`http://localhost:5000/api/user/update/${id}`, {
                    name: formData.name,
                    email: formData.email,
                    role: formData.role,
                    photoURL: formData.photoURL,
                }, { withCredentials: true });
                toast.success(res.data?.message)
            }else{
                toast.error('canceled to update user!');
            }
            

        }catch(err){
            console.log(err)
        }
    };


    return (
        <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center w-full">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Update User</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                        minLength={3}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-4 hidden">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                    
                        readOnly
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter a new password"
                        required
                        minLength={6}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="photoURL" className="block text-gray-700 font-medium mb-2">
                        Profile Picture URL
                    </label>
                    <input
                        type="url"
                        id="photoURL"
                        name="photoURL"
                        value={formData.photoURL}
                        readOnly
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter photo URL"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateUser;
