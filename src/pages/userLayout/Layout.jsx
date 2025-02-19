import React, { useContext, useEffect, useState } from 'react';

import { Outlet, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const Layout = () => {
 
    return (
        <div >
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Layout;
