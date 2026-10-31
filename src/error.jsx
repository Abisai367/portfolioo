import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from './navbar.jsx';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <Navbar />

      <div className="max-w-2xl mx-auto w-full text-center">

        <h1 className="text-7xl font-extrabold tracking-tight sm:text-9xl text-blue-500 mb-2">
          404
        </h1>
        <h2 className="text-2xl font-bold tracking-wide text-gray-100 sm:text-3xl mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10">
          The page you are trying to access does not exist, or it has been taken down for maintenace
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-gray-700/50">
          <button onClick={() => window.history.back()} className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-semibold text-gray-300 hover:text-blue-400 border border-gray-700 hover:border-gray-600 bg-gray-800 px-5 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer">
            <FaArrowLeft className="w-3.5 h-3.5" />
            <span>Go Back</span>
          </button>

          <Link to="/" className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 px-5 py-3 rounded-lg shadow-md transition-all duration-300">
            <FaHome className="w-4 h-4"/>
            <span>Return Home</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NotFound;
