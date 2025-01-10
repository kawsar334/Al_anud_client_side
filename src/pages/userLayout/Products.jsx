import React, { useState } from "react";

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    // Mock product data with images
    const productList = [
        { id: 1, name: "Apple", price: 1.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCWjL2TZWKBDLm5dBUm23BoZoKNvWzvC-fA&s" },
        { id: 2, name: "Banana", price: 0.5, image: "https://product-images.metro.ca/images/hc2/h51/11860661469214.jpg" },
        { id: 3, name: "Cherry", price: 2.0, image: "https://media.istockphoto.com/id/533381303/photo/cherry-with-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=6BV79sui5Hc6lj555eV_ePiGlKfdZveIG9B5hIWidug=" },
        { id: 4, name: "Date", price: 3.0, image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/dates-resized-14ee31f.jpg?quality=90&resize=556,505" },
        { id: 5, name: "Elderberry", price: 4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOVy4j_HdzxT27TjmwHQut9AiqbYGMyUC7g&s" },
    ];

    // Filter and sort products
    const filteredProducts = productList
        .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

    return (
        <div className="p-8">
            {/* Search and Sort Section */}
            <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full lg:w-1/2 border-gray-300 focus:border-teal-500"
                />

                {/* Sort Dropdown */}
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="select select-bordered w-full lg:w-1/4 border-gray-300 focus:border-teal-500"
                >
                    <option value="asc">Sort by Price: Low to High</option>
                    <option value="desc">Sort by Price: High to Low</option>
                </select>
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col items-center"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-32 h-32 object-cover mb-4"
                        />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        <button className="mt-4 bg-teal text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
