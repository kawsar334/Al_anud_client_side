import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:5000/api/user/stats', {
        withCredentials: true
    });
    return data;
}
const UserList = () => {
    const [open, setOpen] =useState(false);
    const [userInfo, setUserInfo] = useState(null)
    const navigate = useNavigate();
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['stats'],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,

    });


    // handle toggle popup
    const handleModal =(item)=>{
        setOpen(true)
        setUserInfo(item)
    }

    // handling makeAdmin functionality 
    const makeAdmin = async () => {
        try {
           const res = await axios.put(`http://localhost:5000/api/user/makeadmin/${userInfo?._id}`,{}, {
                withCredentials: true
            });
            console.log(res.data?.message)
            toast.success(res.data?.message ||"User updated successfully!");
            setOpen(false)
            refetch()
        } catch (error) {
            console.error(error);
            toast.error("Failed to convert Admin!");
        }
    };

    // navigte to update route
    const navigateToUpdateRoute = (user) => {
        navigate(`/dashboard/update/${user?._id}`, { state: { user } });
    };

   
// handling delete funcionality
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        });
        if (result.isConfirmed) {
            try {
                const res = await axios.delete(`http://localhost:5000/api/user/${id}`, {
                    withCredentials: true,
                });
                if (res) {
                    toast.success(res.data?.message || 'User deleted successfully!');
                    refetch(); 
                }
            } catch (err) {
                console.error(err);
                toast.error('Failed to delete user!');
            }
        } else {
            toast.info('User deletion was cancelled.');
        }
    };
    return (
        <div className="p-6 bg-gray-100 w-full min-h-screen">
            <h1 className="text-3xl font-bold mb-6">User List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-start">
                    <thead>
                        <tr className="bg-gray-800 text-white text-left">
                            <th className="p-4">ID</th>
                            <th className="p-4">Avatar</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.users?.map((user, index) => (
                            <tr
                                key={user.id}
                                className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
                            >
                                <td className="p-4">{index + 1}</td>
                                <td
                                    className=""
                                >
                                    <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full border-2" />
                                </td>
                                <td className="p-4">{user.name}</td>
                                <td className="p-4  ">{user.email}</td>
                                {user?.role === "admin" ? <td className=" flex justify-center items-center p-4"><button className=" rounded bg-main capitalize text-white  px-2 py-1
                                ">{user.role}</button></td> :

                                    <td className="p-4">
                                        <div className="flex justify-center items-center flex-col">
                                            <span>{user.role}</span>
                                            
                                            <button  onClick={()=>handleModal(user)} className="ml-2 bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600">
                                                Make Admin
                                            </button>
                                        </div>
                                        </td>}

                                <td className="p-4">
                                    <button onClick={() => navigateToUpdateRoute(user)} title="Edite" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2">
                                        <i className="fas fa-edit text-lg"></i>
                                    </button >
                                    <button onClick={() => handleDelete(user?._id)} title="Delete" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                        <i className="fas fa-trash text-lg"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

{/* popup startttt */}
                {open && <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="w-[50%] h-max bg-white p-8 rounded flex justify-center items-center gap-3 flex-col">
                        <h1>Are you sure want make Admin ?</h1>
                        <div className="flex justify-center items-center gap-4 ">
                            <button className="border px-7 btn rounded btn-success " onClick={makeAdmin}>Yes </button>
                            <button className="border px-4 rounded btn  bg-red-500 text-white " onClick={() => setOpen(false)}>Cancel </button>
                        </div>
                    </div>
                </div>}

                {/* popup end  */}
            </div>
        </div>
    );
};

export default UserList;
