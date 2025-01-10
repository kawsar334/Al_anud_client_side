import React from 'react'
import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'

const Navbar = () => {
  return (
    <div className='lg:sticky top-0 left-0 lg:z-50'>
      <NavTop />
      <NavMiddle />
      <NavBottom />
    </div>
  )
}

export default Navbar