import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

const CreateProduct = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = (file) => {
        const formData = new FormData();
        formData.append("file", file[0]);
        formData.append("upload_preset", "alanud");

        axios
            .post("https://api.cloudinary.com/v1_1/dmvmzwqkw/image/upload", formData)
            .then((response) => {
                setImage(response.data.secure_url);
            })
            .catch((error) => {
                console.error("Image upload failed:", error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const productData = {
            name,
            description,
            price,
            category,
            stock,
            image,
        };

        axios
            .post("http://localhost:5000/api/product/createproduct",
                productData,
            {
               
                withCredentials: true,  
            }) 
            .then((response) => {
                toast.success(response?.data?.message)
                alert("Product created successfully!");
                setLoading(false);
            })
            .catch((error) => {
                toast.error("something went wrong please try again");
                console.error("Error creating product:", error);
                setLoading(false);
            });
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleImageUpload,
        accept: "image/*",
    });

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 border border-gray-300 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Create New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-700">Product Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                        minLength={10}
                    />
                </div>
             
            <div className="flex justify-center gap-1">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700">Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md"
                            required
                            min={0}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700">Stock</label>
                        <input
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md"
                            required
                            min={0}
                        />
                    </div>
            </div>

                {/* <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-700">Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div> */}
                <div>
                    <label className="block text-gray-600 text-sm font-medium mb-1">Category</label>
                    <select
                        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 focus:ring focus:ring-indigo-200"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="Vegetables">Vegetables</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Meat">Meat</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Cereals">Cereals</option>
                        <option value="Rice & Grains">Rice & Grains</option>
                        <option value="Spices & Condiments">Spices & Condiments</option>
                        <option value="Oils & Ghee">Oils & Ghee</option>
                        <option value="Packaged Foods">Packaged Foods</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Cleaning Supplies">Cleaning Supplies</option>
                        <option value="Personal Care">Personal Care</option>
                        <option value="Baby Care">Baby Care</option>
                        <option value="Pet Care">Pet Care</option>
                        <option value="Baking Essentials">Baking Essentials</option>
                        <option value="Health Supplements">Health Supplements</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Home">Home</option>
                        <option value="Books">Books</option>
                        <option value="Sports">Sports</option>
                        <option value="Other">Other</option>

                    </select>
                </div>

                <div {...getRootProps()} className="flex flex-col border p-4 border-dashed rounded-md bg-gray-300">
                    <input {...getInputProps()}  />
                    <p className="text-gray-600">Drag & drop an image, or <span className="text-blue-600 cursor-pointer">click to select one</span></p>
                </div>

                {image && <img src={image} alt="Product" className="mt-4 w-32 h-32 object-cover" />}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full p-2 bg-blue-500 text-white rounded-md ${loading && "opacity-50"}`}
                >
                    {loading ? "Submitting..." : "Create Product"}
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
