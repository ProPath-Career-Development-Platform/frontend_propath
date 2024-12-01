import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import logo from "/logo.png";
import '../../landingPage/navbar/Navbar.css'


const Navbar1 = () => {
  return (
    <Navbar maxWidth='full' className='px-8'>
      <NavbarBrand>
        <a href="/"><img src={logo} alt="" className='h-10'/></a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10 mx-16" justify="center">
        {/* <NavbarItem className='isActive'>
          <Link color="foreground" to='/' className='font-semibold text-[#808080]'>
            Job Search
          </Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Link color="foreground" href="#" className='font-semibold text-[#808080]'>
            Career Advice
          </Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Link color="foreground" to='/explorecompanies' href="#" className='font-semibold text-[#808080]'>
            Explore Companies
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} to ="/jobprovider/dashboard" className='bg-[#814DDE] text-white font-semibold' href="#" variant="flat">
            Back to Dashboard
          </Button>
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <Link to="/employersite" className='text-purple1 font-bold'>Employer Site</Link>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  )
}

export default Navbar1