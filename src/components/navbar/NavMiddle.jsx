import React from 'react'
import { NavLink } from 'react-router-dom'
import UserRole from '../../privateRoutes/UserRole'
import { signOutUser } from '../../redux/authActions'

const NavMiddle = () => {
    
    const { role, user } = UserRole();
    const categories = [
        { name: "Vegetables", link: "Vegetables" },
        { name: "Fruits", link: "Fruits" },
        { name: "Dairy", link: "Dairy" },
        { name: "Bakery", link: "Bakery" },
        { name: "Snacks", link: "Snacks" },
        { name: "Beverages", link: "Beverages" },
        { name: "Meat", link: "Meat" },
        { name: "Seafood", link: "Seafood" },
        { name: "Cereals", link: "Cereals" },
        { name: "Rice & Grains", link: "Rice & Grains" },
        { name: "Spices & Condiments", link: "Spices & Condiments" },
        { name: "Oils & Ghee", link: "Oils & Ghee" },
        { name: "Packaged Foods", link: "Packaged Foods" },
        { name: "Frozen Foods", link: "Frozen Foods" },
        { name: "Cleaning Supplies", link: "Cleaning Supplies" },
        { name: "Personal Care", link: "Personal Care" },
        { name: "Baby Care", link: "Baby Care" },
        { name: "Pet Care", link: "Pet Care" },
        { name: "Baking Essentials", link: "Baking Essentials" },
        { name: "Health Supplements", link: "Health Supplements" },
        { name: "Clothing", link: "Clothing" },
        { name: "Home", link: "Home" },
        { name: "Books", link: "Books" },
        { name: "Sports", link: "Sports" },
        { name: "Other", link: "Other" },
    ];


    const Links = ()=>{
        return(
            <>
                {role === "admin" && <li><NavLink to="/dashboard/main">Dashboard</NavLink></li>}
                {user ? <button onClick={signOutUser} >logout</button> : <>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </>}
            
            </>
        )
    }
    return (
        <div className='w-full bg-white mx-auto shadow-sm sticky top-0 left-0 z-50 '>

            <div className="navbar  lg:px-10   ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a><i className="fa-solid fa-user"></i>
                                </a>
                                <ul className="p-2 ">
                                    <Links/>
                                </ul>
                            </li>
                            <li><NavLink to="/products">products</NavLink></li>
                            <li><NavLink to="/contact">contact</NavLink></li>
                            
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost text-xl " to="/">
                        <span className='first-letter:text-teal teaxt-white' >AL-ANUD</span>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>
                                    Categories

                                </summary>
                                <ul className="p-5 flex justify-start items-start gap-2  flex-wrap w-[300px]">                               
                                 
                                    {categories?.slice(0,8).map((category) => (
                                        <li key={category.name}>
                                            <NavLink
                                                to={`/cat/${category.link}`}
                                                className={({ isActive }) =>
                                                    `block p-[5px] rounded-md ${isActive ? 'bg-teal text-white' : 'bg-gray-100 text-gray-800'
                                                    }`
                                                }
                                            >
                                                {category.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to="/products">products</NavLink></li>
                        <li><NavLink to="/contact">contact</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">                         
                               {role=== "admin" && <li className='hidden md:flex'><NavLink to="/dashboard/main">Dashboard</NavLink></li>}
                            <li>
                                <a>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </a>
                            </li>
                            <li>
                                <a><i class="fa-solid fa-heart"></i>
                                </a>
                            </li>
                          
                            {user ? <li>
                               <span  className="bg-transparent">
                                <img src={user?.photoURL} alt="" className='w-8 h-8 rounded-full object-cover border-2' />
                                    <button onClick={signOutUser} className='hidden md:flex' >logout</button>
                               </span>
                                
                            </li> :  <li>
                                <details>
                                    <summary>
                                        <i class="fa-solid fa-user"></i>
                                    </summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        {user ?( <div className=''>
                                            <button onClick={signOutUser} >logout</button>
                                            <button onClick={signOutUser} >logout</button>

                                             </div>) : <>
                                                 <li><NavLink to="/login">Login</NavLink></li>
                                                 <li><NavLink to="/register">Register</NavLink></li>
                                               
                                                 
                                             
                                             </>}
                                    </ul>
                                </details>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMiddle