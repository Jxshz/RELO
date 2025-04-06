import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredVendors = [
  {
    id: '1',
    name: 'JOSHVA',
    profession: 'Electrician',
    photo: 'https://i.pinimg.com/736x/76/53/16/765316b12b380d310f0aa4c35b80eb4c.jpg',
    rating: 4.9,
    experience: 8,
    description: 'Expert electrician with extensive experience in residential and commercial projects.',
    location: 'Downtown Area',
    contactNumber: '+1 234 567 8900'
  },
  {
    id: '2',
    name: 'AKSHAYA',
    profession: 'Interior Designer',
    photo: 'https://i.pinimg.com/736x/30/3d/a6/303da6dd578e88314497010120bff8ca.jpg',
    rating: 5,
    experience: 10,
    description: 'Creative interior designer with a passion for modern and sustainable design.',
    location: 'Suburban District',
    contactNumber: '+1 234 567 8901'
  },
  {
    id: '3',
    name: 'SHRENICA',
    profession: 'Plumber',
    photo: 'https://i.pinimg.com/736x/ef/00/31/ef00312d685e58f5f1692a0bed8b12c2.jpg',
    rating: 4.8,
    experience: 12,
    description: 'Professional plumber specializing in emergency repairs and installations.',
    location: 'City Center',
    contactNumber: '+1 234 567 8902'
  },
  {
    id: '4',
    name: 'NANDHINI',
    profession: 'Wifi Technician',
    photo: 'https://i.pinimg.com/736x/07/27/49/0727496d3933ee05605d97adb157fa37.jpg',
    rating: 4.9,
    experience: 7,
    description: 'Specialized in high-end installations and emergency services. Available 24/7.',
    location: 'Suburban District',
    contactNumber: '+1 234 567 8901'
  }
];

export const FeaturedVendors: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Service Providers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVendors.map((vendor) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={vendor.photo}
                alt={vendor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{vendor.name}</h3>
                    <p className="text-blue-600">{vendor.profession}</p>
                  </div>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{vendor.description}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{vendor.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{vendor.contactNumber}</span>
                  </div>
                </div>
                
                <Link
                  to={`/services/${vendor.profession.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-6 block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};