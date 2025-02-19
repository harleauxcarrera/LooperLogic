import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert">
          <p className="text-gray-300 mb-4">
            Last updated: March 15, 2024
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Terms</h2>
          <p className="text-gray-300 mb-4">
            By accessing this website, you are agreeing to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
          <p className="text-gray-300 mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on Looper Logic's website for personal, non-commercial transitory viewing only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;