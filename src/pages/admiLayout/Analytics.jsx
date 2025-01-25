import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Analytics = () => {
    // Sample data for bar chart
    const barChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Sales",
                data: [3000, 4000, 3200, 5000, 4500, 6000],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Sample data for pie chart
    const pieChartData = {
        labels: ["Electronics", "Clothing", "Groceries", "Beauty", "Others"],
        datasets: [
            {
                label: "Product Categories",
                data: [35, 25, 20, 10, 10],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Analytics</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
                    <p className="text-2xl font-bold text-blue-500">$25,000</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                    <p className="text-2xl font-bold text-green-500">1,200</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Orders</h3>
                    <p className="text-2xl font-bold text-orange-500">450</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                    <p className="text-2xl font-bold text-purple-500">$75,000</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-4">Monthly Sales</h2>
                    <Bar data={barChartData} />
                </div>

                {/* Pie Chart */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-4">Sales by Category</h2>
                    <Pie data={pieChartData} />
                </div>
            </div>
        </div>
    );
};

export default Analytics;
