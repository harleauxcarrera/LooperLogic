import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedRobot from './AnimatedRobot';
import { PopupButton } from '@typeform/embed-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-40 bg-[#0A192F]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 cursor-pointer flex items-center gap-2 group"
          >
            <AnimatedRobot className="text-[#BD34FE]" size={24} />
            <span className="text-white text-xl font-bold group-hover:text-[#BD34FE] transition-colors">
              Looper Logic
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#BD34FE] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-white hover:text-[#BD34FE] transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-white hover:text-[#BD34FE] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-[#BD34FE] transition-colors"
            >
              Pricing
            </button>
            <PopupButton 
              id="xwYUAXbV"
              size={80}
              hideHeaders
              hideFooter
              className="px-6 py-2 bg-[#BD34FE] text-white rounded-full font-medium hover:bg-[#A020F0] transition-colors"
            >
              Book intro call →
            </PopupButton>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#BD34FE] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A192F]/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-3 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white hover:text-[#BD34FE] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="block w-full text-left text-white hover:text-[#BD34FE] transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left text-white hover:text-[#BD34FE] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-white hover:text-[#BD34FE] transition-colors"
            >
              Pricing
            </button>
            <PopupButton 
              id="xwYUAXbV"
              size={80}
              hideHeaders
              hideFooter
              className="w-full px-6 py-2 bg-[#BD34FE] text-white rounded-full font-medium hover:bg-[#A020F0] transition-colors"
            >
              Book intro call →
            </PopupButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;