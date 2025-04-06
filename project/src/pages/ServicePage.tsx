import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone } from 'lucide-react';

const mockProviders = [
  {
    id: '1',
    name: 'JOSHVA',
    photo: 'https://i.pinimg.com/736x/76/53/16/765316b12b380d310f0aa4c35b80eb4c.jpg',
    rating: 4.8,
    experience: 5,
    description: 'Professional service provider with extensive experience in residential and commercial projects.',
    hourlyRate: 50,
    availability: true,
    location: 'Downtown Area',
    contactNumber: '+1 234 567 8900'
  },
  {
    id: '2',
    name: 'AKSHAYA',
    photo: 'https://i.pinimg.com/736x/30/3d/a6/303da6dd578e88314497010120bff8ca.jpg',
    rating: 5,
    experience: 7,
    description: 'Specialized in high-end installations and emergency services. Available 24/7.',
    hourlyRate: 65,
    availability: true,
    location: 'Suburban District',
    contactNumber: '+1 234 567 8901'
  },
    {
    id: '3',
    name: 'SIDHESH',
    photo: 'https://i.pinimg.com/736x/8d/8a/ca/8d8aca06c640ce685b95f400b23305e0.jpg',
    rating: 4.7,
    experience: 5,
    description: 'Professional service provider with extensive experience in residential and commercial projects.',
    hourlyRate: 50,
    availability: true,
    location: 'Downtown Area',
    contactNumber: '+1 234 567 8900'
  },
    {
    id: '4',
    name: 'NANDHINI',
    photo: 'https://i.pinimg.com/736x/07/27/49/0727496d3933ee05605d97adb157fa37.jpg',
    rating: 4.9,
    experience: 7,
    description: 'Specialized in high-end installations and emergency services. Available 24/7.',
    hourlyRate: 65,
    availability: true,
    location: 'Suburban District',
    contactNumber: '+1 234 567 8901'
  },
  {
    id: '5',
    name: 'SHRENICA',
    photo: 'https://i.pinimg.com/736x/ef/00/31/ef00312d685e58f5f1692a0bed8b12c2.jpg',
    rating: 4.6,
    experience: 7,
    description: 'Specialized in high-end installations and emergency services. Available 24/7.',
    hourlyRate: 65,
    availability: true,
    location: 'Suburban District',
    contactNumber: '+1 234 567 8901'
  },
  {
    id: '6',
    name: 'CHETTIAR',
    photo: 'https://i.pinimg.com/736x/01/00/d1/0100d18d2381d9e968cc1ddfeeb7bc50.jpg',
    rating: 4.8,
    experience: 5,
    description: 'Professional service provider with extensive experience in residential and commercial projects.',
    hourlyRate: 50,
    availability: true,
    location: 'Downtown Area',
    contactNumber: '+1 234 567 8900'
  },
   {
    id: '7',
    name: 'M.S.LAKSHITA',
    photo: 'https://i.pinimg.com/736x/ce/d0/1e/ced01eb6f0cef0ab182934ef8e29f723.jpg ',
    rating: 4.6,
    experience: 7,
    description: 'Specialized in high-end installations and emergency services. Available 24/7.',
    hourlyRate: 65,
    availability: true,
    location: 'Suburban District',
    contactNumber: '+1 234 567 8901'
  },
];

export const ServicePage: React.FC = () => {
  const { profession } = useParams<{ profession: string }>();
  const navigate = useNavigate();
  const formattedProfession = profession?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const handleBooking = (provider: typeof mockProviders[0]) => {
    navigate('/booking', {
      state: {
        vendorName: provider.name,
        vendorPhoto: provider.photo,
        profession: formattedProfession,
        hourlyRate: provider.hourlyRate
      }
    });
  };

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          {formattedProfession} Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProviders.map((provider) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={provider.photo}
                alt={provider.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{provider.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{provider.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{provider.contactNumber}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">₹{provider.hourlyRate}/hr</span>
                  <button
                    onClick={() => handleBooking(provider)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};