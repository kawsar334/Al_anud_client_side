import React, { useState } from 'react'
import Title from '../CustomTitle/Title'
import { NavLink } from 'react-router-dom';
import "../../App.css"

const Categories = ({ products }) => {

    const [category, setCategory] =useState("All")
    const cats = ["Cereals", "Fruits", "Rice & Grains", "Clothing", "Home", "Sports"];
    const [productLists , setProductsList]=useState(products)
  

   

    const productList = [
        {
            id: 1,
            name: "Horse Gram",
            price: 4.69,
            desc: "People start migrating from conventional to organic products because of their health benefits. Comparing chemically treated food versus organic food reveals that the latter is more nutrient-dense. The distinction between natural and organic food is well discernible. A path of goodness extends from healthy soil to healthy humans in the end.",
            image: "https://groca.myshopify.com/cdn/shop/products/HorseGram1_cc9a9198-7c80-4581-adf5-5a5ceff9a8e0.jpg?v=1681546430&width=1946"
        },
        {
            id: 2,
            name: "Coco Cookies",
            price: 2.69,
            desc: "People start migrating from conventional to organic products because of their health benefits. Comparing chemically treated food versus organic food reveals that the latter is more nutrient-dense. The distinction between natural and organic food is well discernible. A path of goodness extends from healthy soil to healthy humans in the end..",
            img: 'https://groca.myshopify.com/cdn/shop/products/Shop-30_19053d26-edd6-4592-a8d7-791cd0961fc7.png?v=1584697386&width=1946'
        },

        {
            id: 3,
            name: "Vetch seeds",
            price: 2.69,
            desc: "People start migrating from conventional to organic products because of their health benefits. Comparing chemically treated food versus organic food reveals that the latter is more nutrient-dense. The distinction between natural and organic food is well discernible. A path of goodness extends from healthy soil to healthy humans in the end.",
            img: 'https://groca.myshopify.com/cdn/shop/products/Shop-28.png?v=1584697163&width=1946'
        },
        {
            id: 4,
            name: "Fish Curry",
            price: 2.69,
            desc: "People start migrating from conventional to organic products because of their health benefits. Comparing chemically treated food versus organic food reveals that the latter is more nutrient-dense. The distinction between natural and organic food is well discernible. A path of goodness extends from healthy soil to healthy humans in the end.",
            img: 'https://groca.myshopify.com/cdn/shop/products/Shop-13.png?v=1584085502&width=823'
        },

        {
            id: 5,
            name: "Beetroot",
            price: 10.69,
            desc: "People start migrating from conventional to organic products because of their health benefits. Comparing chemically treated food versus organic food reveals that the latter is more nutrient-dense. The distinction between natural and organic food is well discernible. A path of goodness extends from healthy soil to healthy humans in the end.",
            img: 'https://groca.myshopify.com/cdn/shop/products/Shop-22_df2f4015-e37d-4ae2-9fa8-876e15e78566.png?v=1584694777&width=360'
        },

        {
            id: 5,
            name: "Beetroot",
            price: 10.69,
            desc: "People start migrating from conventional to organic products because of their health benefits. Comparing chemically treated food versus organic food reveals that the latter is more nutrient-dense. The distinction between natural and organic food is well discernible. A path of goodness extends from healthy soil to healthy humans in the end.",
            img: 'https://groca.myshopify.com/cdn/shop/products/Shop-22_df2f4015-e37d-4ae2-9fa8-876e15e78566.png?v=1584694777&width=360'
        },




    ]

    const handleFilter=(i)=>{
        setCategory(i)

        if (category === "All"){
            setProductsList(products)
        }else{
            setProductsList(products.filter(item=>item.category===category))
        }
        // setProductsList(productLists.filter(item=>item.category===category))
    }


    return (
        <div className='flex justify-center  items-center gap-4 w-[80%] mx-auto  flex-col  ' id='products'>

            <Title title="our categories" />

{/* category */}
            <ul className='flex justify-center items-center  gap-3 flex-wrap'>
                <li  onClick={() => handleFilter("All")} className='py-2 cursor-pointer px-5 rounded border  capitalize font-semibold'>
                    <span >All</span>
                </li>
                {cats.map((cat, index) => (
                    <li key={index} onClick={() => handleFilter(cat)} className='py-2 cursor-pointer px-5 rounded border  capitalize font-semibold'>
                        <span >{cat}</span>
                    </li>
                ))}
            </ul>
            {/* product lst  */}
            <div className='flex  justify-center items-center flex-wrap w-full space-y-3 my-10 capitalize '>
 
                {productLists?.length === 0? (<div>

                        <h1 className='text-3xl'>Empty Product List</h1>
                </div>) : <>  {productLists?.slice(0,6).map((product) => (
                     <div key={product._id} className='parrent rounded flex w-full border p-4  md:w-[32%] justify-center items-center gap-6  mx-auto  flex-col cursor-pointer relative  transition-all  duration-700'>
                         <img src={product.image} alt={product?.name} className='w-full h-[250px] object-cover rounded-md ' />
                         <h3 className='text-bgcolor font-semibold'>{product?.name}</h3>
                         <p>
                             <span className='text-[#FFD700] flex justify-center items-center gap-2 text-2xl'>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                                 <i className="fa-solid fa-star"></i>
                             </span>
                         </p>
                         <h3 className='text-teal font-bold text-2xl'>${product.price}</h3>

                         <NavLink className="border z-10 w-full py-2 text-center bg-teal capitalize text-white transition-all duration-500 hover:bg-transparent hover:text-teal hover:border-teal rounded" to={`/product/${product._id}`}>view details</NavLink>

                         <div className='absolute children top-0 left-0 w-full h-full hidden text-white  justify-center items-center gap-4 text-3xl bg-[rgba(0,0,0,0.2)] opacity-35  transition-all  duration-700'>
                             <NavLink to="/cat/:category"><i class="fa-solid fa-magnifying-glass"></i></NavLink>
                             <NavLink to="/cat/:category"><i class="fa-solid fa-heart"></i></NavLink>
                         </div>
                     </div>

                 ))}
                </>}
               
            </div>
        </div>
    )
}

export default Categories