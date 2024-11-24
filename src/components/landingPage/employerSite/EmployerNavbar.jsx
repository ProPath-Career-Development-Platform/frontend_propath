import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "/logo.png";

const EmployerNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

  return (
    <Navbar maxWidth='full' className='px-8'>
        <NavbarBrand>
            <img src={logo} alt="" className='h-10'/>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10 mx-16" justify="center">
            <NavbarItem className={location.pathname === '/employersite' ? 'isActive' : ''}>
            <Link color="foreground" to='/employersite' className='font-semibold text-[#808080]'>
                Home
            </Link>
            </NavbarItem>
            <NavbarItem className={location.pathname === '/jobprovider/home' ? 'isActive' : ''}>
            <Link color="foreground" to='/jobprovider/dashboard' className='font-semibold text-[#808080]'>
                My Dashboard
            </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
            <Button onClick={handleLogin} className='bg-purple1 text-white font-semibold' href="#" variant="flat">
                Log in
            </Button>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
            <Link to="/" className='text-purple1 font-bold'>Back to Job Finder</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default EmployerNavbar