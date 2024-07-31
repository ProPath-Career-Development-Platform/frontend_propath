import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const JSSearch = () => {
  return (
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search" 
        className="w-[150px] sm:w-[200px] lg:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-2 focus:border-gray-400 pr-10" 
      />
      <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}

export default JSSearch;
