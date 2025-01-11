import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import NotFoundPage from './pages/Notfound';
import Layout from './pages/userLayout/Layout';
import Home from './pages/userLayout/Home';
import Login from './pages/userLayout/Login';
import Register from './pages/userLayout/Registe';
import ProductDetails from './pages/userLayout/ProductDetails';
import Products from './pages/userLayout/Products';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,


      children: [
        {
          path: "/",
          element: (
         
              <Home />

          ),
        },
        {
          path: "/product/:id",
          element: (

            <ProductDetails />

          ),
        },
        {
          path: "/products",
          element: (

            <Products />

          ),
        },
        {
          path: "/login",
          element: (
            <Login />
          )
        },
        {
          path: "/register",
          element: (
            <Register />
          )
        },
       
      ],
    },
    {
      path: "*",
      element: (
          <NotFoundPage />
      ),
    },

  ]);

  return (
    <>
   
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
