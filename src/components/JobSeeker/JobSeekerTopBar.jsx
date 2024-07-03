import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import logo from '/logo.png'; // Adjust the import path as needed
import Alert from './alert'; // Ensure the import path is correct
import ProfileDropdown from './ProfileDropdown';

const JobSeekerTopbar = () => {
  return (
    <div className="relative shadow-md bg-primary/40 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-20">
          <a href="#" alt="">
            <img src={logo} className="w-40" alt="Logo" />
          </a>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-[150px] sm:w-[200px] lg:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-4 py-2 focus:outline-none focus:border-1 focus:border-blue-400 pr-10" 
            />
            <IoMdSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-8 pr-8">
          <Alert /> 
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}

export default JobSeekerTopbar;
