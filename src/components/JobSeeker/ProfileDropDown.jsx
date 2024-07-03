import React, { useState, useEffect, useRef } from 'react';
import { FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
        className="relative flex items-center p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <FaUserCircle className="text-2xl text-gray-500 hover:text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-20 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <FaUserCircle className="mr-2 text-gray-500 dark:text-gray-200" />
              <a href="#" className="block text-gray-800 dark:text-gray-200">Profile</a>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <FaCog className="mr-2 text-gray-500 dark:text-gray-200" />
              <a href="#" className="block text-gray-800 dark:text-gray-200">Settings</a>
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <FaSignOutAlt className="mr-2 text-gray-500 dark:text-gray-200" />
              <a href="#" className="block text-gray-800 dark:text-gray-200">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
