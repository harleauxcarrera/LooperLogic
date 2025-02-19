import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudyProps {
  title: string;
  company: string;
  description: string;
  metrics: string;
  imageUrl?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, company, description, metrics, imageUrl }) => {
  return (
    <motion.div 
      className="p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {imageUrl && (
        <div className="aspect-video mb-6 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{company}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-white font-semibold">{metrics}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
      </div>
    </motion.div>
  );
};

export default CaseStudy;