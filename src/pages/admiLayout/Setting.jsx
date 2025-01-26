import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import UserRole from "../../privateRoutes/UserRole";

const Settings = () => {
     const [notifications, setNotifications] = useState(true);
    const [open, setOpen] = useState("");
    const [name, setName] =useState(null)
    const {user} = UserRole();
    const handleUpdate = async(e) => {
        e.preventDefault();
        if(!name) return toast.error("Please enter a name");
        setName(e.target.value);
        
      try{
          const res = await axios.put(`http://localhost:5000/api/user/update/${user?._id}`, { name },{withCredentials:true})
          toast.success(res?.data?.message)
          if(res){
            window.location.reload()
          }
      }catch(err){
        console.error(err);
        alert("Failed to update settings. Please try again later.");
      }
    };

    const modal = ()=>{
        setOpen(true);
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen w-full ">
            <h1 className="text-3xl font-bold mb-6">Profile</h1>
            <div className="bg-white w-[500px] shadow-md rounded-lg p-6">
                {/* General Settings */}
                <div className="mb-6">
                    <img src={user?.photoURL} alt="" className="w-20 h-20 rounded-full border-2 object-cover " />
                    <h2 className="text-lg font-bold mb-4">{user?.name}</h2>
                    <p><span className="text-teal">Email:</span> {user?.email}</p>
                    <p><span className="text-teal">Account created:</span> {user?.createdAt}</p>
                    <p><span className="text-teal">user Id:</span> {user?._id}</p>
                </div>

                {open &&<div className="fixed w-full h-full top-0 left-0 bg-black inset-1 bg-opacity-50 z-50 opacity-3 flex justify-center items-center ">
                        <div className="w-[90%] md:w-[500px] bg-white p-4  rounded ">
                            
                            <form action="">
                               <div className="flex justify-start flex-col">
                                <label htmlFor="notifications">Name</label>
                                <input
                                    type="text"
                                    id="notifications"
                                    name="name"
                                    onChange={(e)=>setName(e.target.value)}
                                    placeholder={user?.name}
                                    className="border px-2 py-2 rounded"
                                    required
                                />
                               </div>
                            <div className="flex justify-end items-center gap-6 my-5">
                            <button className="px-3 py-1 bg-teal rounded text-white" onClick={handleUpdate}>update</button>
                            <button className="px-3 py-1 bg-red-600 rounded text-white" onClick={() => setOpen(false)}>Cancel</button>
                            </div>
                            </form>

                        </div>
                </div>}
                <div className="flex justify-start">
                    <button
                        onClick={modal}
                        className="bg-teal hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-md"
                    > Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
