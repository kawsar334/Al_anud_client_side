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

import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import { useEffect } from 'react';
import { auth } from './firebase';
import { setLoading, setUser } from './redux/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import AdminDashboard from './pages/admiLayout/AdminDashboard';
import DashboardMain from './pages/admiLayout/DashboardMain';
import ProductList from './pages/admiLayout/ProductList';
import UserList from './pages/admiLayout/UserList';
import Analytics from './pages/admiLayout/Analytics';
import Settings from './pages/admiLayout/Setting';
import UpdateUser from './pages/admiLayout/UpdateUser';


function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // Dispatch user data to Redux store
  //       dispatch(
  //         setUser({
  //           uid: user.uid,
  //           email: user.email,
  //           displayName: user.displayName,
  //           photoURL: user.photoURL,
  //         })
  //       );
  //     } else {
  //       // Clear user from Redux store
  //       dispatch(setUser(null));
  //     }
  //     dispatch(setLoading(false));
  //   });

  //   // Cleanup subscription on component unmount
  //   return () => unsubscribe();
  // }, [dispatch]);


  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
   
        dispatch(
          setUser({user})
        );
      } else {
        dispatch(setUser(null));
      }
      dispatch(setLoading(false));
    });
    return () => unsubscribe();
  }, [dispatch]);

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
      path: "/dashboard",
      element: <AdminDashboard />,
      children:[
        { path: "main", element:<DashboardMain/>},
        { path: "product", element: <ProductList /> },
        { path: "users", element: <UserList /> },
        { path: "analytics", element: <Analytics /> },
        { path: "setting", element: <Settings /> },
        { path: "update/:id", element: <UpdateUser /> },




      ]
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
