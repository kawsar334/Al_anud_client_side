import React, { useContext } from "react";
import { FaHome, FaBox, FaUsers, FaChartBar, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProviders";
import { signOutUser } from "../../redux/authActions";

const Sidebar = () => {
    const user = useSelector((state) => state.auth?.user);

    return (
        <div className="h-screen w-64 bg-gray-800 text-gray-200 sticky left-0 top-0 z-50">
            <div className="flex items-center justify-center h-16 bg-gray-900">
                <h1 className="text-xl font-bold">{user?.displayName || "Admin pannel"}</h1>
            </div>
            <nav className="mt-4">
                <ul className="space-y-2">
                    <li>
                        <NavLink
                            to="/dashboard/main"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                        >
                            <FaHome className="mr-3" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/product"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                        >
                            <FaBox className="mr-3" />
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/users"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                        >
                            <FaUsers className="mr-3" />
                            Users
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/dashboard/create"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                        >
                            <i className="fas fa-box mr-3"></i>
                            create Product
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="/dashboard/analytics"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                        >
                            <FaChartBar className="mr-3" />
                            Analytics
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink
                            to="/dashboard/setting"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                        >
                            <FaCogs className="mr-3" />
                            Settings
                        </NavLink>
                    </li>


                    <li>
                        <NavLink
                            to="/register"
                            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
                        >
                            <i className="fas fa-user-plus mr-3"></i>
                            Create User
                        </NavLink>
                    </li>

                    <li onClick={signOutUser}>
                        <button
                            href="#"
                            className="flex items-center px-4 py-2 text-red-500 hover:bg-red-600 hover:text-white"
                        >
                            <FaSignOutAlt className="mr-3" />
                            Logout
                        </button>
                    </li>

                    
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
