import React from 'react'

const Banner = () => {

const items=[
    {
        id:1,
        title:"Organic vegetables ",
        des:"Small changes Big Defference ",
        img:"https://groca.myshopify.com/cdn/shop/files/slider-3.jpg?v=1614918563&width=1500"

    },
    {
        id: 2,
        title: "Groca ",
        des: "vegetable 100% organic  ",
        img: "https://groca.myshopify.com/cdn/shop/files/slider-2.jpg?v=1614918563&width=1500"

    },
    {
        id: 3,
        title: "Natural Helth Care Ingredients  ",
        des: "Grocery Shop ",
        img: "https://groca.myshopify.com/cdn/shop/files/slider-1.jpg?v=1614918563&width=1500"

    },
]

  return (
    <div className='w-full'>

        <div className='w-full flex justify-center items-center   h-[450px]' 
    
    style={{ 
        backgroundImage: `url(${items[0].img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment:"fixed",

     }}
        >
            <div className='flex justify-center  items-center gap-2  flex-col w-[100%] h-full  bg-[rgba(0,0,0,0.3)] p-5'>
                <h1 className="text-4xl text-white font-bold text-center">{items[0].title}</h1>
                <p className="text-white text-lg text-center">{items[0].des}</p>
                <a href='#products' className="btn bg-teal   mt-5">Shop Now</a>
            </div>
        </div>
    </div>
  )
}

export default Banner