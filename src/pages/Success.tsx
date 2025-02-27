import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Success: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
          className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-400 mb-8">
          Thank you for subscribing. We'll be in touch shortly with next steps.
        </p>
        <p className="text-sm text-gray-500">
          Redirecting you to the homepage in a few seconds...
        </p>
      </motion.div>
    </div>
  );
};

export default Success;