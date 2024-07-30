import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import logo from "/logo.png";

const EmployerNavbar = () => {
  return (
    <Navbar maxWidth='full' className='px-8'>
        <NavbarBrand>
            <img src={logo} alt="" className='h-10'/>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10 mx-16" justify="center">
            <NavbarItem className='isActive'>
            <Link color="foreground" href="#" className='font-semibold text-[#808080]'>
                Home
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#" className='font-semibold text-[#808080]'>
                My Dashboard
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
            <Link to="/" className='text-purple1 font-bold'>Back to Job Finder</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default EmployerNavbar