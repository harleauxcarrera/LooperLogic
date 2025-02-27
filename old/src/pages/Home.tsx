import React from 'react';
import Hero from '../components/Hero';
import Operations from '../components/Operations';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import PricingSection from '../components/pricing/PricingSection';
import ProcessSteps from '../components/ProcessSteps';
import FAQSection from '../components/FAQ';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div className="space-y-1">
      <Hero />
      <Operations />
      <Services />
      <CaseStudies />
      <ProcessSteps />
      <PricingSection />
      <FAQSection />
      <CallToAction />
    </div>
  );
};

export default Home;