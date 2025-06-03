import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 123, 255, 0.2) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(0, 123, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}>
        </div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-blue-500 opacity-30"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
        
        {/* Circuit lines with animations */}
        <div className="absolute top-[20%] left-0 w-[30%] border-t border-blue-700">
          <div className="absolute left-0 top-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-y-1/2 pulse-animation"></div>
          <div className="absolute left-[20%] top-0 w-1 h-1 bg-white rounded-full transform -translate-y-1/2 animate-ping"></div>
        </div>
        <div className="absolute top-[20%] left-0 w-[20%] h-[30%] border-l border-blue-700">
          <div className="absolute bottom-0 left-0 w-[50%] border-b border-blue-700"></div>
          <div className="absolute bottom-0 left-0 p-1 bg-black/80 border border-blue-900 rounded text-blue-500 text-xs font-mono code-animation">01101</div>
        </div>
        
        {/* Top right circuit line */}
        <div className="absolute top-[20%] right-0 w-[30%] border-t border-blue-700">
          <div className="absolute right-0 top-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-y-1/2 pulse-animation"></div>
          <div className="absolute right-[20%] top-0 w-1 h-1 bg-white rounded-full transform -translate-y-1/2 animate-ping"></div>
        </div>
        <div className="absolute top-[20%] right-0 w-[20%] h-[30%] border-r border-blue-700"></div>
        
        {/* Bottom left circuit line */}
        <div className="absolute bottom-[20%] left-0 w-[30%] border-t border-blue-700">
          <div className="absolute left-0 top-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-y-1/2 pulse-animation"></div>
        </div>
        <div className="absolute bottom-[20%] left-0 w-[20%] h-[30%] border-l border-blue-700">
          <div className="absolute top-0 left-0 p-1 bg-black/80 border border-blue-900 rounded text-blue-500 text-xs font-mono code-animation">01001</div>
        </div>
        
        {/* Bottom right circuit line */}
        <div className="absolute bottom-[20%] right-0 w-[30%] border-t border-blue-700">
          <div className="absolute right-0 top-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-y-1/2 pulse-animation"></div>
        </div>
        <div className="absolute bottom-[20%] right-0 w-[20%] h-[30%] border-r border-blue-700"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-purple-900/10 animate-gradient"></div>
      </div>
      
      {/* Signup card */}
      <div className="w-full max-w-md bg-[#121212] bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 z-10 overflow-hidden animate-fade-in">
        {/* Logo section */}
        <div className="flex flex-col items-center justify-center pt-8 pb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-800 to-gray-900 flex items-center justify-center p-2 mb-4 border border-blue-700 shadow-glow">
            <img 
              src="/robotnotebook.png" 
              alt="Code Notes AI" 
              className="w-full h-full object-contain drop-shadow-lg animate-float-slow"
            />
          </div>
          <h1 className="text-white text-2xl font-bold mb-1 animate-slide-up">Create Account</h1>
          <p className="text-gray-400 text-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>Already have an account? <Link to="/" className="text-blue-500 hover:text-blue-400 transition-colors">Log in</Link></p>
        </div>
        
        {/* Form section */}
        <div className="px-8 py-6">
          <div className="mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black/60 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Full name"
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div className="mb-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/60 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Email address"
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="mb-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/60 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Password"
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-black/60 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Confirm password"
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors animate-slide-up hover:shadow-glow"
            style={{ animationDelay: '0.6s' }}
          >
            Sign Up
          </button>
          
          <div className="flex items-center my-4 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <hr className="flex-1 border-gray-700" />
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-700" />
          </div>
          
          {/* Social signups */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <button className="flex items-center justify-center bg-black/60 hover:bg-black/80 text-white font-medium py-2.5 px-4 rounded-lg border border-gray-700 transition-all hover:border-blue-600">
              <FaGithub className="w-5 h-5 mr-2" />
              <span>GitHub</span>
            </button>
            <button className="flex items-center justify-center bg-black/60 hover:bg-black/80 text-white font-medium py-2.5 px-4 rounded-lg border border-gray-700 transition-all hover:border-blue-600">
              <FaGoogle className="w-5 h-5 mr-2" />
              <span>Google</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse-animation {
          0% { opacity: 0.5; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 1; transform: scale(1.2) translate(-50%, -50%); }
          100% { opacity: 0.5; transform: scale(1) translate(-50%, -50%); }
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(10px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes code-animation {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          60% { opacity: 0.2; }
          70% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        @keyframes animate-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        
        .pulse-animation {
          animation: pulse-animation 2s infinite;
        }
        
        .code-animation {
          animation: code-animation 4s infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: animate-gradient 10s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-animation 3s infinite;
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
        
        .hover\:shadow-glow:hover {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
        }
      `}</style>
    </div>
  );
};

export default Signup;
