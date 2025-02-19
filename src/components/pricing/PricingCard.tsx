import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  features: Feature[];
  recommended?: boolean;
  onSubscribe: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  features, 
  recommended, 
  onSubscribe 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-lg ${
        recommended 
          ? 'border-2 border-white bg-white/10' 
          : 'border border-white/10 bg-black/50'
      }`}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-3xl font-bold">${price}/mo</p>
      </div>
      
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check 
              className={feature.included ? 'text-green-400' : 'text-gray-500'} 
              size={20} 
            />
            <span className={feature.included ? 'text-white' : 'text-gray-500'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={onSubscribe}
        className={`w-full py-2 rounded-lg transition-colors ${
          recommended
            ? 'bg-white text-black hover:bg-gray-200'
            : 'bg-white/10 hover:bg-white/20'
        }`}
      >
        Subscribe Now
      </button>
    </motion.div>
  );
};

export default PricingCard;