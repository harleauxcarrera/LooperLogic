import React from 'react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300">Let's build something amazing together.</p>
        </div>
        
        <div className="max-w-xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-300">Email: info@looperlogic.com</p>
            </div>
            <div className="h-px bg-white/10"></div>
            <p className="text-gray-300">
              Ready to transform your business with AI automation? 
              Reach out to us and let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;