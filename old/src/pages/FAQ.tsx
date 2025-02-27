import React from 'react';
import FAQ from '../components/FAQ';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "What is AI automation?",
      answer: "AI automation combines artificial intelligence with workflow automation to streamline repetitive tasks and optimize business processes, making operations more efficient and intelligent."
    },
    {
      question: "How can AI automation benefit my business?",
      answer: "AI automation can reduce operational costs, improve efficiency, minimize errors, and free up your team to focus on strategic tasks that require human creativity and decision-making."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are customized to meet each industry's specific needs."
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-16">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQ key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;