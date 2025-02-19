import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface UseCaseProps {
  title: string;
  painPoint: string;
  solution: string;
  imageUrl: string;
}

const UseCase: React.FC<UseCaseProps> = ({ title, painPoint, solution, imageUrl }) => {
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
      className="p-6 border border-white/10 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 group"
    >
      <div className="h-48 mb-6 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-1">Challenge</h4>
          <p className="text-gray-300">{painPoint}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-1">Solution</h4>
          <p className="text-gray-300">{solution}</p>
        </div>
      </div>
    </motion.div>
  );
};

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: "Smart Email Processing",
      painPoint: "Teams spending hours manually sorting, categorizing, and responding to emails",
      solution: "AI-powered system that automatically categorizes, responds, and routes emails, reducing handling time by 75%.",
      imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80"
    },
    {
      title: "Document Data Extraction",
      painPoint: "Manual data entry from invoices, receipts, and forms causing delays and errors",
      solution: "Automated document processing with 99% accuracy, turning hours of work into minutes.",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
    },
    {
      title: "Lead Management",
      painPoint: "Inconsistent lead follow-up and missed sales opportunities",
      solution: "Smart lead qualification and automated follow-up system that never misses an opportunity.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      title: "Support Ticket Automation",
      painPoint: "Slow response times and overwhelmed support team",
      solution: "AI-powered ticket routing and resolution system that cuts response time by 90%.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="use-cases" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Common Business Challenges We Solve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <UseCase key={index} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;