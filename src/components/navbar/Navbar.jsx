import React from 'react'
import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBottom from './NavBottom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const path = useLocation().pathname

  console.log(path)
  return (
    <div className='lg:sticky top-0 left-0 lg:z-50'>
      <NavTop />
      <NavMiddle />
      {/* {path === "/" && <NavBottom />} */}
    </div>
  )
}

export default Navbar