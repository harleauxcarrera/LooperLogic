import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureProps {
  number: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ number, title, description }) => {
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
      className="p-6 border border-white/10 rounded-lg bg-[#112240] backdrop-blur-sm"
    >
      <div className="flex items-start gap-4">
        <span className="text-[#64FFDA] text-xl font-bold">{number}</span>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Operations: React.FC = () => {
  const features = [
    {
      number: "1",
      title: "Modular Solutions",
      description: "Build your automation ecosystem piece by piece. Start with what matters most and expand as your business grows."
    },
    {
      number: "2",
      title: "Streamlined Communication",
      description: "Direct access to your automation team through Slack. Quick responses and efficient collaboration without the bureaucracy."
    },
    {
      number: "3",
      title: "Immediate Impact",
      description: "See tangible results within the first week. Our rapid deployment approach means faster time to value for your business."
    }
  ];

  return (
    <section className="py-24 bg-[#0A192F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-[#64FFDA] tracking-wide uppercase mb-3">
            AUTOMATION EXPERTISE
          </h2>
          <h3 className="text-4xl font-bold mb-6">
            Smart systems, delivered differently
          </h3>
          <p className="text-gray-400 text-lg">
            Forget traditional consulting. Get expert automation implementation through a flexible subscription model that adapts to your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operations;