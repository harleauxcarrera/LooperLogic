import React from 'react';
import Testimonial from './Testimonial';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Looper Logic transformed our customer service operations. The AI automation solutions they implemented have significantly improved our response times and customer satisfaction.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc."
    },
    {
      quote: "Working with Looper Logic was a game-changer for our business. Their expertise in AI automation helped us streamline our workflows and reduce operational costs.",
      author: "Michael Chen",
      role: "Operations Director",
      company: "Global Solutions Ltd."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;