import React from 'react';
import { Brain, Gauge, Trophy, Users, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Brain,
      title: "AI Expertise",
      description: "Deep expertise in cutting-edge AI platforms and technologies"
    },
    {
      icon: Gauge,
      title: "Rapid Implementation",
      description: "Swift deployment of automation solutions with minimal disruption"
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "Consistent success stories across various industries"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 expert support and maintenance for your solutions"
    },
    {
      icon: Zap,
      title: "Cost-Effective",
      description: "Tailored solutions that maximize ROI and minimize costs"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Looper Logic?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4 p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <reason.icon className="w-6 h-6 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;