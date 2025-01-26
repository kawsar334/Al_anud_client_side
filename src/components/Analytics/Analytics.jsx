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

const Analytics = ({ items }) => {


    const data = items.data?.products?.slice(0,5).map((item) => item.category)
    const price = items.data?.products?.slice(0, 5).map((item) => item.price)


    const barChartData = {
        labels: data,
        datasets: [
            {
                label: "price",
                data:price,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Sample data for pie chart
    const pieChartData = {
        labels: data,
        datasets: [
            {
                // label: "Categories",
                data: price,
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-4">price by category</h2>
                    <Bar data={barChartData} />
                </div>

                {/* Pie Chart */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    {/* <h2 className="text-lg font-bold mb-4">Sales by Category</h2> */}
                    <Pie data={pieChartData} />
                </div>
            </div>
        </div>
    );
};

export default Analytics;
