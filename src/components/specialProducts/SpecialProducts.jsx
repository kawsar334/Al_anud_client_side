



import React from 'react'
import Title from '../CustomTitle/Title'
import { NavLink } from 'react-router-dom';
import "../../App.css"

const SpecialProducts = () => {

    const cats = ["milk", "fruits", "flour", "meat", "vegetables", "eggs"];

    const productLists = [
        {
            id: 1,
            name: "Horse Gram",
            price: 4.69,
            desc: "People start migrating from conventional to organic products because of their health benefits. Comparing chemically treated food versus organic food reveals that the latter is more nutrient-dense. The distinction between natural and organic food is well discernible. A path of goodness extends from healthy soil to healthy humans in the end.",
            img: "https://groca.myshopify.com/cdn/shop/products/HorseGram1_cc9a9198-7c80-4581-adf5-5a5ceff9a8e0.jpg?v=1681546430&width=1946"
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

    return (
        <div className='flex justify-center  items-center gap-4 w-[90%] mx-auto  flex-col bg-base-100 my-10'>

            <Title title="Special Products" sub='Ut tellus elementum sagittis vitae et leo. Sollicitudin tempor id eu nisl nunc' />

            {/* product lst  */}
            <div className='flex justify-center items-center flex-wrap w-full   '>

                {productLists.map((product) => (
                    <div key={product.id} className='parrent h-[180px] rounded flex w-full border p-2  md:w-[33%] justify-center items-center gap-6  mx-auto   cursor-pointer relative  transition-all  duration-700'>
                        <img src={product.img} alt={product.name} className='w-[45%] h-[100px] object-cover rounded-md' />
                      <div className='h-full flex justify-center items-center gap-3 flex-col w-[50%]'>
                            <h3 className='text-bgcolor font-semibold'>{product.name}</h3>
                            <p>
                                <span className='text-[#FFD700] flex justify-center items-center gap-2 text-2xl'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </span>
                            </p>
                            <h3 className='text-teal font-bold text-xl'>${product.price}</h3>

                            <NavLink className="absolute top-0 right-[0px] text-white text-[14px] bg-red-500 rounded   px-2  " to={`/product/${product.id}`}>save 60%</NavLink>

                      </div>
                        <div className='absolute children top-0 left-0 w-[60%] h-full hidden text-teal  justify-start items-center p-10 gap-4 text-3xl   transition-all  duration-700'>
                            <NavLink to="/cat/:category"><i class="fa-solid fa-magnifying-glass"></i></NavLink>

                            <NavLink to="/cat/:category"><i class="fa-solid fa-heart"></i></NavLink>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default SpecialProducts