import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="p-6 border border-white/10 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 group transform hover:scale-105"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;