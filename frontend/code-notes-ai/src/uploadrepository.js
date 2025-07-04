import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UploadRepository = () => {
  // State for form input
  const [githubUrl, setGithubUrl] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the GitHub URL here
    console.log('GitHub URL submitted:', githubUrl);
    // Reset form after submission
    setGithubUrl('');
  };

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
      
      {/* Repository upload card */}
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
          <h1 className="text-white text-2xl font-bold mb-1 animate-slide-up">Upload Repository</h1>
          <p className="text-gray-400 text-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>Enter a GitHub repository URL to analyze</p>
        </div>
        
        {/* Form section */}
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <input 
                  type="url" 
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="w-full bg-black/60 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="GitHub Repository URL"
                  required
                />
                <FaGithub className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
              </div>
              <p className="mt-2 text-xs text-gray-400">Example: https://github.com/username/repository</p>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors animate-slide-up hover:shadow-glow"
              style={{ animationDelay: '0.3s' }}
            >
              Analyze Repository
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex justify-between items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Back to dashboard
              </Link>
              <div className="flex space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-gray-700 transition-all">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
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

export default UploadRepository;
