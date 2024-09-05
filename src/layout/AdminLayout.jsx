import React from 'react'
import SidebarAdmin from '../components/Admin/SidebarAdmin'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../components/Admin/NavbarAdmin'

const AdminLayout = () => {
  return (
    <div className='flex flex-row'>
      <SidebarAdmin />

      <div className='flex flex-col w-full'>
        <NavbarAdmin className='flex w-full mx-0'/>
        <Outlet/>  
      </div>
    </div>      
  )
}

export default AdminLayout