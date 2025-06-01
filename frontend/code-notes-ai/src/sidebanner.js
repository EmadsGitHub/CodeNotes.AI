import React, { useState } from 'react';

const SideBanner = () => {
  // State to track if the sidebar is collapsed
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle collapse state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-sm transition-all duration-300 flex ${
        isCollapsed ? 'w-12' : 'w-72'
      } h-screen fixed left-0 top-0 shadow-xl z-10 border-r border-gray-700`}
    >
      {/* Collapsed/Expanded content container */}
      <div className="flex-grow overflow-hidden">
        {!isCollapsed && (
          <div className="p-4">
            {/* This div is intentionally empty - no content as requested */}
          </div>
        )}
      </div>
      
      {/* Collapse/Expand button */}
      <div 
        className="absolute top-4 -right-4 bg-gray-800 rounded-full p-1 cursor-pointer shadow-lg flex items-center justify-center h-6 w-6 hover:bg-gray-700 border border-gray-600"
        onClick={toggleCollapse}
      >
        <svg 
          className="w-4 h-4 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isCollapsed ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          )}
        </svg>
      </div>
    </div>
  );
};

export default SideBanner;

