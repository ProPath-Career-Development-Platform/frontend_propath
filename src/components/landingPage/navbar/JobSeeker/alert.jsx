import React, { useState, useEffect, useRef } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Alert = () => {
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
        <IoMdNotificationsOutline className="text-2xl text-gray-400" />
        {true && ( // replace `true` with your notification count condition
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-20 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="flex items-center">
                <div className="mr-3">
                  <span className="block h-8 w-8 rounded-full bg-blue-500 text-white text-center leading-8">N</span>
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium">New Comment</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">You have a new comment on your post.</p>
                </div>
              </div>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="flex items-center">
                <div className="mr-3">
                  <span className="block h-8 w-8 rounded-full bg-green-500 text-white text-center leading-8">M</span>
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium">New Message</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">You received a new message from John.</p>
                </div>
              </div>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="flex items-center">
                <div className="mr-3">
                  <span className="block h-8 w-8 rounded-full bg-red-500 text-white text-center leading-8">A</span>
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium">New Alert</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Your account password was changed.</p>
                </div>
              </div>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-center">
              <a href="#" className="text-sm font-medium text-blue-500 dark:text-blue-400">View All Notifications</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Alert;
