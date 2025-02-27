import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert">
          <p className="text-gray-300 mb-4">
            Last updated: March 15, 2024
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We collect information that you provide directly to us, including when you fill out a contact form, sign up for our newsletter, or communicate with us via email.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new products and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;