import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

interface StepProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, isActive = true }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-4 relative"
    >
      <div className="relative">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isActive ? 'bg-[#BD34FE] text-white' : 'bg-gray-700 text-gray-400'
        }`}>
          <CheckCircle className="w-5 h-5" />
        </div>
        {number !== "3" && (
          <div className="absolute top-10 left-1/2 w-px h-24 bg-gradient-to-b from-[#BD34FE] to-transparent" />
        )}
      </div>
      <div className="flex-1 pb-16">
        <span className="text-sm font-medium text-[#BD34FE] mb-2 block">STEP {number}</span>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "A focused 30-minute consultation to understand your business needs and identify automation opportunities. We'll outline a clear path forward tailored to your goals."
    },
    {
      number: "2",
      title: "Solution Design",
      description: "We create a detailed automation blueprint, mapping out workflows and integrations. You'll get a comprehensive plan showing exactly how we'll transform your operations."
    },
    {
      number: "3",
      title: "Implementation",
      description: "Our team builds and deploys your custom automation solutions. Weekly check-ins ensure everything runs smoothly and adapts to your evolving needs."
    }
  ];

  return (
    <section id="process" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-semibold text-[#BD34FE] tracking-wide uppercase mb-3 block">
            SUBSCRIPTION STEPS
          </span>
          <h2 className="text-4xl font-bold mb-6">
            Here's how it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
          <div className="relative">
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Process visualization"
                className="w-full h-[600px] object-cover rounded-lg opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;