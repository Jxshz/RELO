import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, LogIn, Briefcase } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            >
              Relo
            </motion.h1>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/vendor/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              <span>For Vendors</span>
            </Link>
            
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
            
            <Link
              to="/signup"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};