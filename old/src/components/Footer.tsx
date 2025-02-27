import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedRobot from './AnimatedRobot';
import ContactModal from './ContactModal';

const Footer: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

  const links = [
    { name: 'Services', id: 'services' },
    { name: 'Case Studies', id: 'case-studies' },
    { name: 'How It Works', id: 'process' },
    { name: 'Pricing', id: 'pricing' }
  ];

  return (
    <footer className="bg-[#0A192F] border-t border-[#BD34FE]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <AnimatedRobot className="text-[#BD34FE]" size={32} />
            <span className="text-2xl font-bold tracking-tight group-hover:text-[#BD34FE] transition-colors">
              Looper Logic
            </span>
          </button>
          
          <p className="text-gray-400 text-lg max-w-md text-center font-light">
            Transforming businesses through intelligent automation solutions.
          </p>
          
          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-400 hover:text-[#BD34FE] transition-colors tracking-wide"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-gray-400 hover:text-[#BD34FE] transition-colors tracking-wide"
            >
              Contact Us
            </button>
          </nav>

          <div className="text-center space-y-4 font-light">
            <p className="text-gray-400">© 2025 Looper Logic. All rights reserved.</p>
            <motion.div 
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gray-400">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart className="inline-block w-4 h-4 text-[#BD34FE]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;