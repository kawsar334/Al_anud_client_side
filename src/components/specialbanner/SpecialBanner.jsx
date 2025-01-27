import React from 'react'
import { NavLink } from 'react-router-dom'

const SpecialBanner = () => {
  return (
    <div
    
    style={{ 
              background: `url("https://groca.myshopify.com/cdn/shop/files/bg-1.jpg?v=1614918144&width=1500")`,
              backgroundSize:"cover",
              backgroundAttachment:"fixed",
              height:"500px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
              backgroundPosition:"center"
     
     }}
     className='my-[100px]'
    >
        <div className=' w-[90%] flex justify-start items-start gap-3 flex-col p-5 '>
             <div className='w-full md:w-[50%] flex justify-center items-center gap-3 flex-col text-bgcolor'>
                  <h1 className='text-3xl font-semibold'>Special Discount For All Grocery Products</h1>
                  <p>Turpis tincidunt id aliquet risus feugiat. Pretium vulputate sapien nec sagittis aliquam. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Amet risus nullam eget felis eget nunc lobortis mattis aliquam</p>
          <NavLink to="/products" className='border px-4 py-1 rounded bg-teal hover:bg-white hover:text-teal transition-all duration-700'>Buy Now</NavLink>
             </div>
        </div>
    </div>
  )
}

export default SpecialBanner