import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import logo from "/logo.png";

const CPDnav = () => {
  return (
    <Navbar maxWidth='full' className='px-8'>
      <NavbarBrand>
        <img src={logo} alt="" className='h-10'/>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className='bg-purple1 text-white font-semibold' href="#" variant="flat">
            Log in
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link to="/employersite" className='text-purple1 font-bold'>Post a Course</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default CPDnav