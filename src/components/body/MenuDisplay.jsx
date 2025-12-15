import { useState } from "react";
import { restaurantConfig } from "../ZamExport";

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MenuDisplay = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  // Helper variables
  const totalPages = restaurantConfig.menuImageUrls.length;
  const currentImageUrl = restaurantConfig.menuImageUrls[currentPageIndex];

  // Handlers for button clicks
  const goToPrevPage = () => {
    setCurrentPageIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const goToNextPage = () => {
    setCurrentPageIndex(prevIndex => Math.min(totalPages - 1, prevIndex + 1));
  };
  return (
    // pt-20 matches the height of the fixed header, preventing overlap.
    <main className="pt-20 pb-10 px-4 min-h-screen bg-gray-50 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2 tracking-tight">
        {restaurantConfig.name} Menu
      </h1>
      <p className="text-center text-red-600 font-medium mb-8">
        {restaurantConfig.tagline}
      </p>

    
      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 p-2">
        
       {/* --- MENU IMAGE DISPLAY --- */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
        <img 
            src={currentImageUrl}
            alt={`Restaurant Menu Page ${currentPageIndex + 1}`} 
            className="w-full h-auto object-cover"
        />
      </div>
      {totalPages > 1 && ( // Only show controls if there is more than one page
        <div className="flex justify-center items-center space-x-6 mt-6">
          
          <button
            onClick={goToPrevPage}
            disabled={currentPageIndex === 0} // Disable if on the first page
            className="flex items-center space-x-2 px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-red-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaArrowLeft />
            <span>Prev</span>
          </button>
          
          <span className="text-gray-700 font-semibold">
            {`Page ${currentPageIndex + 1} of ${totalPages}`}
          </span>
          
          <button
            onClick={goToNextPage}
            disabled={currentPageIndex === totalPages - 1} // Disable if on the last page
            className="flex items-center space-x-2 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <FaArrowRight />
          </button>
        </div>
      )}
        
       
      </div>
      {/* ----------------------------- */}

      {/* Link to PDF Download */}
      <div className="text-center mt-6 space-x-6">
        <a 
          href={restaurantConfig.menuPdfUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300 shadow-lg"
        >
          View/Download Full PDF
        </a>
         <a 
          href={restaurantConfig.google_reviewURL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg"
        >
          Google Reviews
        </a>
      </div>
       
    </main>
  );
};

export default MenuDisplay;