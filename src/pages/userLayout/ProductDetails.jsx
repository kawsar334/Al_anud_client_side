import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../../components/Loader';
import { UseFetch } from '../../data/UseFetch';



const fetchProductDetails = async(id)=>{
    const { data, isLoading,error } = await axios.get(`http://localhost:5000/api/product/find/${id}`); 
    return data;
}

const ProductDetails = () => {

    const { data: productData ,refetch }= UseFetch()
    
    const id = useLocation().pathname.split("/")[2];
    const { data, isLoading, error } = useQuery({
        queryKey: ['details',id], 
        queryFn:()=>fetchProductDetails(id),
        staleTime: 1000 * 60 * 5, 
        cacheTime: 1000 * 60 * 10, 
      });
    
      if(isLoading || error){

        return(
            <Loader/>
        )
      }
    console.log(data?.data)

    
    const suggestedData = productData?.data?.filter(
        (item) => item?.category?.toLowerCase() === data?.data?.category?.toLowerCase()
    );
    

    const handleAddTocart=(item)=>{
        
    }

    const handleAddToWishlist= (item)=>{

    }
    return (
        <div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-10 bg-gray-100 min-h-screen">
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src={data?.data?.image}
                        alt="Product"
                        className="w-full h-[400px] max-w-sm rounded shadow-lg"
                    />
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-4">{data?.data?.name}</h1>
                    <p className="text-gray-600 mb-4">
                        {data?.data?.description}
                    </p>
                    <p className="text-2xl font-semibold text-teal-600 mb-6">${data?.data?.price}</p>
                    <div className="flex gap-4">
                        <button onClick={() => handleAddTocart(data?.data)} className="bg-teal text-white px-6 py-2 rounded hover:bg-teal-600 transition">
                            <i className="fa-solid fa-cart-shopping mr-2"></i> Add to Cart
                        </button>
                        <button onClick={() => handleAddToWishlist(data?.data)} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                            <i className="fa-solid fa-heart mr-2"></i> Add to Wishlist
                        </button>
                    </div>
                </div>
        </div>


            <div className="mt-8 w-[90%] my-[100px] mx-auto capitalize">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {suggestedData?.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center text-center"
                        >
                            <img
                                src={item.image}
                                alt="Product"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                            <p className="text-sm text-gray-500 mt-2">${item.price}</p>
                            <NavLink to={`/product/${item?._id}`} className="mt-4 bg-teal text-white px-4 py-2 rounded hover:bg-teal-dark transition-all">
                                View Details
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default ProductDetails;
