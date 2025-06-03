import React from 'react';
import Login from './login';
import Signup from './Signup';
import UploadRepository from './uploadrepository';
import SideBanner from './sidebanner';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout component that includes SideBanner
const Layout = ({ children }) => {
  return (
    <div className="App relative flex">
      {/* Side banner */}
      <SideBanner />
      
      {/* Main content area that adapts to sidebar width */}
      <div className="flex-grow transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Login />
          </Layout>
        } />
        <Route path="/signup" element={
          <Layout>
            <Signup />
          </Layout>
        } />
        <Route path="/upload" element={
          <Layout>
            <UploadRepository />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
