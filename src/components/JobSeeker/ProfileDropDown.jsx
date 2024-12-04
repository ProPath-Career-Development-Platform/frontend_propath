import React, { useState, useEffect, useRef } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import seba from '/seba.jpg'
const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const navigate = useNavigate()
  const applyHandleChange = ()=> {
    event.preventDefault()
    navigate('/JobSeeker/Profile/' )
}

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

   

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-4" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="relative flex items-center p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0VDY4CWWO8S2h_WPo2EfRNUu8xPs9HD_-g&s" alt="icon" style={{ height: '35px', width: '35px' , borderRadius: '50%'}} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 pl-5 pr-5 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-20 dark:bg-gray-700 w-fit border">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer" onClick= {applyHandleChange} >
              <AccountCircleIcon className="mr-2 text-gray-500 dark:text-gray-200" />
              <a className="block text-gray-800 dark:text-gray-200 ">Profile</a>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <SettingsIcon className="mr-2 text-gray-500 dark:text-gray-200" />
              <a onClick= {applyHandleChange} className="block text-gray-800 dark:text-gray-200 hover:cursor-pointer">Edit</a>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <ExitToAppIcon className="mr-2 text-gray-500 dark:text-gray-200" />
              <a onClick={handleLogout} className="block text-gray-800 dark:text-gray-200">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
