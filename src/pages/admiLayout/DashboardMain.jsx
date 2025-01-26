import React, { useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from "../../components/Loader";
import Analytics from "../../components/Analytics/Analytics";
import { NavLink } from "react-router-dom";


const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:5000/api/user/stats',{
        withCredentials:true
    });
    return data;
}

const DashboardMain = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['stats'], 
      queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, 
    cacheTime: 1000 * 60 * 10,
     
  });
  console.log(error)
    const usersByRole = data?.data?.usersByRole
   if(error){
    return (
        <div className="w-full h-[500px] flex justify-center items-center text-[red]">{error?.response?.data?.message}</div>
    )
   }
    if (isLoading){
        return (
            <div className="w-full h-full flex justify-center items-center">
                <Loader />
            </div>
        )
    }
  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">

        
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {
                  usersByRole?.map((user)=>(
            <div className="bg-white shadow rounded-lg p-4 capitalize">
                          <h2 className="text-lg font-semibold text-gray-700">Total : <span className="text-red-500">{user?._id}</span></h2>
          <p className="text-3xl font-bold text-blue-500 mt-2">{user?.count}</p>
        </div>
                  ))    
    }

        {/* Card 2: Total Orders */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700">Total products</h2>
                  <p className="text-3xl font-bold text-green-500 mt-2">{data?.data?.totalProducts}</p>
        </div>

        {/* Card 3: Revenue */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
                  <p className="text-3xl font-bold text-yellow-500 mt-2">${data?.data?.productStats[0]?.totalPrice}</p>
        </div>
      </div>


      <Analytics items={data}/>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <NavLink
            to="/dashboard/users"
            className="block bg-blue-500 text-white text-center py-4 rounded-lg shadow hover:bg-blue-600"
          >
            Manage Users
          </NavLink>
          <NavLink
            to="/dashboard/product"
            className="block bg-green-500 text-white text-center py-4 rounded-lg shadow hover:bg-green-600"
          >
            Add product
          </NavLink>
          <NavLink
            to="/dashboard/users"
            className="block bg-yellow-500 text-white text-center py-4 rounded-lg shadow hover:bg-yellow-600"
          >Manage users
          </NavLink>
          <NavLink
            to="/dashboard/reports"
            className="block bg-red-500 text-white text-center py-4 rounded-lg shadow hover:bg-red-600"
          >View Reports
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
