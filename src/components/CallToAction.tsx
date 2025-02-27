import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PopupButton } from '@typeform/embed-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#BD34FE] to-[#FF6B6B] p-0.5"
        >
          <div className="relative bg-[#0A192F] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to transform your business?
                </h2>
                <p className="text-lg text-gray-300">
                  Schedule a free strategy call to discuss your automation needs and discover how we can help you scale.
                </p>
                <PopupButton
                  id="xwYUAXbV"
                  size={80}
                  hideHeaders
                  hideFooter
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#BD34FE] text-white rounded-full font-semibold hover:bg-[#A020F0] transition-all transform hover:scale-105"
                >
                  Book your free call
                  <ArrowRight className="w-5 h-5" />
                </PopupButton>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Strategy call"
                  className="w-full rounded-lg opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;