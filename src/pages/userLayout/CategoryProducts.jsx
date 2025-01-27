

import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UseFetch } from '../../data/UseFetch';
import Loader from '../../components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoryProducts = () => {
    // const cat = useLocation().pathname.split('/')[2];
    const cat = useLocation().pathname.split('/')[2].split("%20").join(" ");
    const { data, isLoading, error, refetch } = UseFetch();
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        if (data?.data) {
            const categoryProducts = data?.data?.filter((item) => item?.category === cat);
            const searched = categoryProducts.filter((item) =>
                item?.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const filtered = searched.filter(
                (item) => item.price >= priceRange.min && item.price <= priceRange.max
            );
            setFilteredProducts(filtered);
        }
    }, [data, searchTerm, priceRange, cat]);

    const handleReload = () => {
        setLoading(true);
        setTimeout(() => {
            refetch();
            setLoading(false);
        }, 2000);
    };

    if (isLoading || loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div className="w-full h-[500px] flex justify-center items-center text-red-500">
                Error: {error}
            </div>
        );
    }

    if (filteredProducts?.length === 0) {
        return (
            <div className="w-full h-[500px] flex justify-center items-center text-gray-500">
                No Products found in <span className='text-teal mx-3 font-semibold capitalize'>{cat}</span> category
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1
                data-aos="fade-up"
                className="text-3xl font-bold text-center mb-6 capitalize text-gray-800"
            >
                Products in {cat} Category
            </h1>

            {/* Search and Filter Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 w-[90%] mx-auto">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded-lg w-full md:w-1/3"
                />
                <div className="flex items-center gap-4">
                    <label className="text-gray-700">Price:</label>
                    <input
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                        className="px-2 py-1 border rounded-lg w-20"
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                        className="px-2 py-1 border rounded-lg w-20"
                    />
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] mx-auto">
                {filteredProducts?.map((item) => (
                    <div
                        key={item?.id}
                        data-aos="fade-up"
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 "
                    >
                        <img
                            src={item?.image}
                            alt={item?.name}
                            className="w-full h-40 object-cover rounded-t-md"
                        />
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800">{item?.name}</h2>
                            <p className="text-sm text-gray-600 mt-2">{item?.description}</p>
                            <p className="text-lg font-bold text-gray-800 my-2">Price: ${item?.price}</p>
                        <NavLink className="border z-10 px-3   py-2 text-center bg-teal capitalize text-white transition-all duration-500 hover:bg-transparent hover:text-teal hover:border-teal rounded" to={`/product/${item?._id}`}>view details</NavLink>
                        </div>
                    </div>
                ))}
            </div>

            {/* Refresh Button */}
            <div className="text-center mt-8">
                <button
                    onClick={handleReload}
                    className="px-6 py-2 bg-teal text-white rounded-lg transition-all hover:bg-teal-600"
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};

export default CategoryProducts;
