import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { services } from '../data/services';

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredServices, setFilteredServices] = useState(services);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setIsDropdownOpen(true);
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleServiceClick = (serviceName: string) => {
    navigate(`/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`);
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  return (
    <motion.div
      ref={searchRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto relative"
    >
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for services..."
          className="w-full px-6 py-4 text-lg rounded-full border-2 border-blue-100 focus:border-blue-500 focus:outline-none shadow-lg"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isDropdownOpen && filteredServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 bg-white rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto"
          >
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.name)}
                className="flex items-center px-6 py-3 hover:bg-blue-50 cursor-pointer transition-colors"
              >
                <service.icon className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">{service.name}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};