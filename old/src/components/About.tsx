import React from 'react';
import TeamMember from './TeamMember';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Looper Logic</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Looper Logic is dedicated to helping businesses harness the power of AI and automation. 
            From small startups to large enterprises, we provide scalable, innovative solutions that 
            simplify processes and maximize ROI. With expertise in cutting-edge platforms like Make.com, 
            we transform your operations for the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <TeamMember
            name="Carlos Herrera"
            role="Founder & AI Architect"
            imageUrl="https://api.dicebear.com/7.x/personas/svg?seed=Carlos&backgroundColor=b6e3f4&eyes=variant26&hair=short03&hairColor=6c4545&mouth=variant26&skinColor=f2d3b1"
            bio="Software engineer with a background in corporate finance technology."
          />
          <TeamMember
            name="Javier Rivera"
            role="Lead Automation Engineer"
            imageUrl="https://api.dicebear.com/7.x/personas/svg?seed=Javier&backgroundColor=c0aede&eyes=variant02&hair=short02&hairColor=2c1b18&mouth=variant15&skinColor=f2d3b1&accessories=glasses"
            bio="Software engineer with experience in military defense systems."
          />
        </div>
      </div>
    </section>
  );
};

export default About;