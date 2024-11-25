import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "/logo.png";
import './Navbar.css'


const JobNav = () => {
  const location = useLocation();
  const navigate  = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };


  return (
    <Navbar maxWidth='full' className='px-8'>
      <NavbarBrand>
        <img src={logo} alt="" className='h-10'/>
      </NavbarBrand>
      <NavbarContent className="hidden gap-10 mx-16 sm:flex" justify="center">
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
        <NavbarItem className={location.pathname === '/workshops' ? 'isActive' : ''}>
          <Link color="foreground" to='/workshops' href="#" className='font-semibold text-[#808080]'>
            Workshops
          </Link>
        </NavbarItem>
        {/* <NavbarItem className={location.pathname === '/professionalmemberships' ? 'isActive' : ''}>
          <Link color="foreground" to='/professionalmemberships' href="#" className='font-semibold text-[#808080]'>
            Professional Memberships
          </Link>
        </NavbarItem> */}
        {/* <NavbarItem className={location.pathname === '/cpdcourses' ? 'isActive' : ''}>
          <Link color="foreground" to='/cpdcourses' href="#" className='font-semibold text-[#808080]'>
            CPD Courses
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className='font-semibold text-white bg-purple1' href="#" variant="flat" component= {Link}
                to = "/Login">
            Log in
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link to="/employersite" className='font-bold text-purple1'>Employer Site</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default JobNav