import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface TechnologyCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  logos: Array<{ src: string; name: string; }>;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ title, description, Icon, color, logos }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={item}
      className="flex flex-col p-6 border border-white/10 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 group transform hover:scale-105"
      style={{ boxShadow: `0 0 20px ${color}10` }}
      whileHover={{ boxShadow: `0 0 30px ${color}20` }}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="mb-4"
      >
        <Icon className="w-8 h-8" style={{ color }} />
      </motion.div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="w-6 h-6 rounded-full bg-white/10 p-1 overflow-hidden"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-full object-contain"
                title={logo.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;