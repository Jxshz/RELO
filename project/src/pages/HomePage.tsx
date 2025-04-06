import React from 'react';
import { motion } from 'framer-motion';
import { SearchBar } from '../components/SearchBar';
import { ServiceCard } from '../components/ServiceCard';
import { FeaturedVendors } from '../components/FeaturedVendors';
import { services } from '../data/services';

export const HomePage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trusted Service – Anytime, Anywhere!
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Easily Connect with Trusted Professionals for All Your Home Service Needs.
        </p>
      </motion.div>

      <div className="mb-16">
        <SearchBar />
      </div>

      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              Icon={service.icon}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <FeaturedVendors />
    </div>
  );
};