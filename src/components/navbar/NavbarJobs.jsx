import React from 'react';
import logo from '/logo.png';
import '../../App.css'

const NavbarJobs = () => {
  return (
    <div>
        <div className="navbar bg-base-100 md:px-12">
            <div className="navbar-start gap-6 w-11/12">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 text-navbar font-semibold text-grey text-base">
                    <li><a className='navlink nav-active'>Job Search</a></li>
                    <li><a className='navlink' href="#">Career Advice</a></li>
                    <li><a className='navlink'>Explore Companies</a></li>
                    <p className='text-grey2 ps-1 pt-3'>All Propath Products</p>
                    <li className='active'><a href='#'>Jobs</a></li>
                    <li><a className='navlink' href="#">Workshops</a></li>
                    <li><a className='navlink' href="#">Professional Memberships</a></li>
                    <li><a className='navlink' href="#">Continuous Professional Development</a></li>
                    <a href="#" className='font-semibold text-primary ps-1 pt-3'>Employer Site</a>
                </ul>
                </div>
                <a href='/'>
                    <img className='w-40' src={logo} alt="" />
                </a>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-navbar font-semibold text-grey text-base">
                    <li><a className='navlink nav-active'>Job Search</a></li>
                    <li><a className='navlink' href="#">Career Advice</a></li>
                    <li><a className='navlink'>Explore Companies</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end gap-6 flex justify-end">
                <a className="btn bg-primary text-white">Login</a>
                <a href="#" className='font-semibold text-primary hidden lg:block'>Employer Site</a>
            </div>
        </div>
    </div>
  )
}

export default NavbarJobs