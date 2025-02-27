import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Widget } from '@typeform/embed-react';

interface IntroCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroCallModal: React.FC<IntroCallModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle bg-[#0A192F] rounded-lg shadow-xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-50"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="h-[600px]">
            {mounted && (
              <Widget
                id='xwYUAXbV' // Ensure this matches your Typeform ID
                style={{ width: '100%', height: '500px' }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroCallModal;