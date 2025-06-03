import React, { useState } from 'react';

const SideBanner = () => {
  // State to track if the sidebar is collapsed
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle collapse state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'notebooks', label: 'Notebooks', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 'chatbot', label: 'Chatbot', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
  ];

  return (
    <div 
      className={`bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm transition-all duration-300 flex ${
        isCollapsed ? 'w-12' : 'w-72'
      } h-screen shadow-xl z-10 border-r border-gray-700 flex-shrink-0`}
    >
      {/* Collapsed/Expanded content container */}
      <div className="flex-grow overflow-hidden flex flex-col h-full">
        {/* Header with logo and app name */}
        <div className={`flex items-center border-b border-gray-700 py-3 ${isCollapsed ? 'justify-center px-1' : 'px-4'}`}>
          <img 
            src="/robotnotebook.png" 
            alt="Code Notes AI" 
            className={`${isCollapsed ? 'w-8 h-8' : 'w-10 h-10'} object-contain drop-shadow-md`} 
          />
          {!isCollapsed && (
            <h1 className="text-white text-xl font-bold ml-3">Code Notes AI</h1>
          )}
        </div>
        <div className="h-4/5"></div>
        
        {/* Navigation Menu */}
        {!isCollapsed && (
          <div className="px-3 mb-2">
            <nav>
              <ul className="space-y-0">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <svg 
                        className="w-5 h-5 mr-3" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
        
        {/* Profile Section (bottom) */}
        {!isCollapsed && (
          <div className="mt-auto px-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  AM
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Alexandra Mayson</p>
                <p className="text-xs text-gray-400">alex.mayson@gmail.com</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Collapsed View Icons */}
        {isCollapsed && (
          <div className="flex flex-col items-center mt-auto mb-auto space-y-6">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </a>
            ))}
            
            {/* Profile icon when collapsed */}
            <div className="mt-auto mb-5">
              <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                AM
              </div>
            </div>
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

