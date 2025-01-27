
import React, { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import UserRole from '../privateRoutes/UserRole';
import Loader from '../components/Loader';


const fetchProduct = async () => {
    const { data, } = await axios.get('http://localhost:5000/api/product/productList', {
        withCredentials: true
    });
    return data;
};


    export const UseFetch = () => {

        const { user } = useSelector((state) => state.auth);
        const { role } = UserRole()
        const dispatch = useDispatch()
        const { data, isLoading, error, refetch } = useQuery({
            queryKey: ['product'],
            queryFn: fetchProduct,
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 10,
        });

        console.log(error)
        if (isLoading) return <Loader />;
        if (error) return <p className="text-center text-red-500"> {error.message}</p>;

        return { data, isLoading, error, refetch }
    }
    