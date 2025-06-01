import React from 'react';
import UploadRepository from './uploadrepository';
import SideBanner from './sidebanner';
import './App.css';

function App() {
  return (
    <div className="App relative">
      {/* The main content with background takes up full screen */}
      <div className="w-full min-h-screen">
        <UploadRepository />
      </div>
      
      {/* Side banner appears on top of the background */}
      <SideBanner />
    </div>
  );
}

export default App;
