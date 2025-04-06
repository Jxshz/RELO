import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, User, PenTool as Tool } from 'lucide-react';

interface SuccessState {
  amount: number;
  vendor: string;
  service: string;
  date: string;
  time: string;
}

export const PaymentSuccessPage: React.FC = () => {
  const location = useLocation();
  const bookingDetails = location.state as SuccessState;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"
          >
            <CheckCircle className="w-10 h-10 text-green-500" />
          </motion.div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">Your booking has been confirmed</p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600">
              <Tool className="w-5 h-5 mr-2" />
              <span>Service</span>
            </div>
            <span className="font-semibold">{bookingDetails.service}</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600">
              <User className="w-5 h-5 mr-2" />
              <span>Provider</span>
            </div>
            <span className="font-semibold">{bookingDetails.vendor}</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Date</span>
            </div>
            <span className="font-semibold">{bookingDetails.date}</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>Time</span>
            </div>
            <span className="font-semibold">{bookingDetails.time}</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Amount Paid</span>
            <span className="font-bold text-green-600">${bookingDetails.amount}</span>
          </div>
        </div>

        <Link
          to="/"
          className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};