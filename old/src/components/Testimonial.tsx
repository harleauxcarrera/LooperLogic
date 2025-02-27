import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company }) => {
  return (
    <div className="p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
      <Quote className="w-8 h-8 text-white/40 mb-4" />
      <p className="text-lg text-gray-300 mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-400">{role}, {company}</p>
      </div>
    </div>
  );
};

export default Testimonial;