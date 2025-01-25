import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='flex  gap-5'>
        
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default AdminDashboard