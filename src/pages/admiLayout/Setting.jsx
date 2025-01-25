import React, { useState } from "react";

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [email, setEmail] = useState("");

    const handleSave = () => {
        alert("Settings saved successfully!");
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            <div className="bg-white shadow-md rounded-lg p-6">
                {/* General Settings */}
                <div className="mb-6">
                    <h2 className="text-lg font-bold mb-4">General</h2>
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-gray-700 font-medium">Dark Mode</label>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`w-12 h-6 flex items-center rounded-full p-1 ${darkMode ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        >
                            <div
                                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${darkMode ? "translate-x-6" : ""
                                    }`}
                            ></div>
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="text-gray-700 font-medium">Email Notifications</label>
                        <button
                            onClick={() => setNotifications(!notifications)}
                            className={`w-12 h-6 flex items-center rounded-full p-1 ${notifications ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        >
                            <div
                                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${notifications ? "translate-x-6" : ""
                                    }`}
                            ></div>
                        </button>
                    </div>
                </div>

                {/* Account Settings */}
                <div className="mb-6">
                    <h2 className="text-lg font-bold mb-4">Account</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-700 font-medium block mb-2">
                            Admin Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter admin email"
                        />
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-md"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
