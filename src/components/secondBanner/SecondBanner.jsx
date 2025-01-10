import React from 'react'

const SecondBanner = () => {

    const items=[
        {
            id:1,
            title:'Veggies',
            desc:'100% organic products',
            buttonText:'See Offers',
            link:'/offers',
            bg:"#f9b1af",
            image:'https://groca.myshopify.com/cdn/shop/files/img-1.jpg?v=1614917996&width=1500',
        },

        {
            id: 1,
            title: 'Fruits',
            desc: '100% organic products',
            buttonText: 'See Offers',
            link: '/offers',
            bg: "red",
            image: 'https://groca.myshopify.com/cdn/shop/files/img-2.jpg?v=1614917996&width=1500',
        },

    ]
  return (
    <div className='w-full md:w-[90%] mx-auto  h-[300px]  my-10'>

<div className='flex w-full justify-center items-center h-full  gap-1 md:gap-8 overflow-hidden flex-col md:flex-row'>
    {items.map((item)=>(

        <div style={{ 
            background:`url('${item.image}')`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            height:"100%",
            backgroundRepeat:"no-repeat",
            
            }} 
            className='w-full flex transition-all duration-1000 cursor-pointer justify-end items-center transform hover:scale-110'>
            
            <div 
            style={{transition: "all 1s ease "}}
            
            className={`w-[50%] shadow-sm z-10   h-full  rounded-l-full flex justify-center items-center gap-3 flex-col`}>
                <h2 className='text-white text-2xl font-bold'>{item.title}</h2>
                <p className='text-gray-400 text-sm'>{item.desc}</p>
                <button className='py-1 px-4 rounded-[15px] border-b-2 border-b-teal hover:border-teal border-red-300 bg-white text-teal'>{item.buttonText}</button>
            </div>
        </div>
    ))}

</div>

    </div>
  )
}

export default SecondBanner