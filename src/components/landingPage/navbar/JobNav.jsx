import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import logo from "/logo.png";
import './Navbar.css'

const JobNav = () => {
  return (
    <Navbar maxWidth='full' className='px-8'>
      <NavbarBrand>
        <img src={logo} alt="" className='h-10'/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10 mx-16" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className='font-semibold text-[#808080]'>
            Job Search
          </Link>
        </NavbarItem>
        <NavbarItem className='isActive font-semibold text-[#808080]'>
          <Link href="#" aria-current="page">
            Career Advice
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className='font-semibold text-[#808080]'>
            Explore Companies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className='bg-purple1 text-white font-semibold py-6' href="#" variant="flat">
            Log in
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className='text-purple1 font-bold'>Employer Site</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default JobNav