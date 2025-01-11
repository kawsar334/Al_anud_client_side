
import React, { useEffect } from 'react';
import axios from 'axios';
import Banner from '../../components/banner/Banner';
import SecondBanner from '../../components/secondBanner/SecondBanner';
import Categories from '../../components/categories/Categories';
import SpecialBanner from '../../components/specialbanner/SpecialBanner';
import SpecialProducts from '../../components/specialProducts/SpecialProducts';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/authSlice';

const fetchProduct = async () => {
  const { data, } = await axios.get('https://server-anud.vercel.app/api/product/productList'); 
  return data;
};


const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const { data, isLoading, error } = useQuery({
    queryKey: ['product'], 
    queryFn: fetchProduct,
    staleTime: 1000 * 60 * 5, 
    cacheTime: 1000 * 60 * 10, 
  });

  if (isLoading) return <Loader/>;
  if (error) return <p className="text-center text-red-500"> {error.message}</p>;

 
  return (
    <div>
      <Banner />
      <SecondBanner />
      <Categories products={data?.data} />
      <SpecialBanner />
      <SpecialProducts  />
    </div>
  );
};

export default Home;
