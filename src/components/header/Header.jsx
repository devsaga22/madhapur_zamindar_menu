import React from "react";

import { restaurantConfig } from "../ZamExport";
import { HiPhone } from "react-icons/hi";
// import logoImage from '../../assets/zamindar-logo.png';
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="flex items-center justify-between px-4 py-3 max-w-4xl mx-auto">
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
        {/*  */}
        <div className="flex items-center">
          {" "}
          {/* Parent container is now a row */}
          <a
            href={`tel:${restaurantConfig.phone}`}
            className="flex flex-row items-center gap-2 p-2 text-gray-700 hover:text-green-600 transition duration-300"
            title="Call Us"
          >
            {/* Icon and Phone Number are now forced side-by-side */}
            <HiPhone className="h-5 w-5 shrink-0" />

            <span className="hidden md:inline-block font-medium text-sm underline decoration-gray-400 underline-offset-4 hover:decoration-green-600">
              {restaurantConfig.phone}
            </span>
          </a>
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
