import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PopupButton } from '@typeform/embed-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A192F] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F] to-black opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1 }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.span 
            variants={textVariants}
            className="inline-block px-4 py-2 bg-[#112240] text-[#BD34FE] rounded-full text-sm font-medium"
          >
            INTELLIGENT AUTOMATION SOLUTIONS
          </motion.span>

          <motion.h1 
            variants={textVariants}
            className="text-4xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            Scale your business with<br />intelligent automation
          </motion.h1>

          <motion.p 
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            Transform your operations with <span className="italic">custom</span> AI-powered automation systems that reduce costs, eliminate bottlenecks, and accelerate growth.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <PopupButton
              id="xwYUAXbV"
              size={80}
              hideHeaders
              hideFooter
              className="px-8 py-4 bg-[#BD34FE] text-white font-semibold rounded-full hover:bg-[#A020F0] transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Schedule Strategy Call
              <ArrowRight className="w-5 h-5" />
            </PopupButton>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
            >
              View Solutions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;