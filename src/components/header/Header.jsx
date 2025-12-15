import React from "react";

import { restaurantConfig } from "../ZamExport";
// import logoImage from '../../assets/zamindar-logo.png';
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="flex items-center justify-around px-4 py-3 max-w-4xl mx-auto">
        <div className="flex justify-items-start">
          {/* Logo/Restaurant Name */}
          <a href="/" className="flex items-center">
            <img
              src="zamindar-logo.jpeg"
              alt="Zamindar Logo"
              className="h-10 w-10 mr-2"
            />
          </a>
          <div className="text-xl font-bold tracking-wider text-gray-800 uppercase">
            <a href="/" className="hover:text-red-600 transition duration-300">
              {restaurantConfig.name}
            </a>
          </div>
        </div>
        <a 
          href={restaurantConfig.google_reviewURL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg"
        >
          Google Reviews
        </a>
        
      </div>
    </header>
  );
};

export default Header;
