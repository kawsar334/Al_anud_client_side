


import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/product/productList", {
        withCredentials: true,
    });
    return data;
};

const ProductList = () => {
    const navigate = useNavigate()
    const { data, isLoading, error } = useQuery({
        queryKey: "products",
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 5,
        refetchInterval: 1000 * 60 * 5,
    });

    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };


    const navigateToUpdateRoute = (product) => {
        navigate(`/dashboard/updateproduct/${product?._id}`, { state: { product } });
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading products.</p>;
    return (
        <div className="p-6 bg-gray-100 min-h-screen w-full">
            <div className="flex justify-center items-center gap-10 py-3 my-6">
            <h1 className="text-3xl font-bold   ">Product List</h1>
                <NavLink
                    to="/dashboard/create"
                    className="flex items-center px-4 py-2  bg-teal  rounded  text-white"
                >
                    <i className="fas fa-box mr-3"></i>
                    create Product
                </NavLink>

            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden capitalize">
                    <thead>
                        <tr className="bg-gray-800 text-white text-left">
                            <th className="p-4">Image</th>
                            <th className="p-4">Product Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Stock</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((product, index) => (
                            <tr
                                key={product.id}
                                className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
                            >
                                <td className="p-4">
                                    <div
                                        className="flex justify-start items-center gap-1 cursor-pointer"
                                        onClick={() => openModal(product)}
                                    >
                                        <span className="text-red-500">{index+1}.</span>
                                        <img
                                            src={product?.image}
                                            alt={product?.name}
                                            className="w-10 h-10 rounded-full border-2"
                                        />
                                    </div>
                                </td>
                                <td className="p-4">{product?.name}</td>
                                <td className="p-4">{product?.category}</td>
                                <td className="p-4">{product?.price}</td>
                                
                                <td
                                    className={`p-4 font-semibold ${product?.stock === "In Stock"
                                            ? "text-green-500"
                                            : "text-red-500"
                                        }`}
                                >
                                    {product.stock}
                                </td>
                                <td className="p-4">
                                    <button onClick={() => navigateToUpdateRoute(product)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-2">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-md  w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">
                            {selectedProduct.name}
                        </h2>
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700 mb-2">
                            <strong>Category:</strong> {selectedProduct.category}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Price:</strong> {selectedProduct.price}
                        </p>
                        <p className="text-gray-700">
                            <strong>Stock:</strong> {selectedProduct.stock}
                        </p>
                        <p><strong>Description:</strong> {selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
