import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link, useLocation } from 'react-router-dom';
import logo from "/logo.png";
import './Navbar.css'

const JobNav = () => {
  const location = useLocation();

  return (
    <Navbar maxWidth='full' className='px-8'>
      <NavbarBrand>
        <img src={logo} alt="" className='h-10'/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10 mx-16" justify="center">
        <NavbarItem className={location.pathname === '/' ? 'isActive' : ''}>
          <Link color="foreground" to='/' className='font-semibold text-[#808080]'>
            Job Search
          </Link>
        </NavbarItem>
        <NavbarItem className={location.pathname === '/explorecompanies' ? 'isActive' : ''}>
          <Link color="foreground" to='/explorecompanies' href="#" className='font-semibold text-[#808080]'>
            Explore Companies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className='bg-purple1 text-white font-semibold' href="#" variant="flat">
            Log in
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link to="/employersite" className='text-purple1 font-bold'>Employer Site</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default JobNav