import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  name: string;
  Icon: LucideIcon;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ name, Icon, description }) => {
  return (
    <Link to={`/services/${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-blue-50 rounded-full mb-4">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};