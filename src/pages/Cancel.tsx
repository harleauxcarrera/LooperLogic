import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Cancel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center p-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-6 flex items-center justify-center"
        >
          <XCircle className="w-12 h-12 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
        <p className="text-gray-400 mb-8">
          Your payment was cancelled. If you have any questions, please contact us.
        </p>
        <button
          onClick={() => navigate('/pricing')}
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
        >
          Return to Pricing
        </button>
      </motion.div>
    </div>
  );
};

export default Cancel;