import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../../components/Loader';



const fetchProductDetails = async(id)=>{
    const { data, isLoading,error } = await axios.get(`https://server-anud.vercel.app/api/product/find/${id}`); 
    return data;
}

const ProductDetails = () => {
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

    const handleAddTocart=(item)=>{
        
    }

    const handleAddToWishlist= (item)=>{

    }
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-10 bg-gray-100 min-h-screen">
            <div className="flex-1 flex justify-center items-center">
                <img
                    src="https://groca.myshopify.com/cdn/shop/products/Shop-30_19053d26-edd6-4592-a8d7-791cd0961fc7.png?v=1584697386&width=360"
                    alt="Product"
                    className="w-full max-w-sm rounded shadow-lg"
                />
            </div>
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-4">{data?.data?.name}</h1>
                <p className="text-gray-600 mb-4">

                    {data?.data?.description}
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    mattis ligula nec ex porttitor, id placerat ligula pulvinar. Vivamus
                    volutpat massa at arcu tincidunt eleifend. */}
                </p>
                <p className="text-2xl font-semibold text-teal-600 mb-6">${data?.data?.price}</p>
                <div className="flex gap-4">
                    <button onClick={()=>handleAddTocart(data?.data)} className="bg-teal text-white px-6 py-2 rounded hover:bg-teal-600 transition">
                        <i className="fa-solid fa-cart-shopping mr-2"></i> Add to Cart
                    </button>
                    <button onClick={() => handleAddToWishlist(data?.data)} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                        <i className="fa-solid fa-heart mr-2"></i> Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
