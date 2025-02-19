import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div 
      initial={false}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold">{question}</span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto", marginBottom: 24 },
          collapsed: { opacity: 0, height: 0, marginBottom: 0 }
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden text-gray-400 leading-relaxed"
      >
        {answer}
      </motion.div>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Why choose automation over hiring?",
      answer: "Automation provides consistent, scalable results at a fraction of the cost of traditional hiring. While a full-time employee costs $80,000+ annually plus benefits, our automation solutions deliver greater efficiency 24/7 with no overhead. You get enterprise-grade systems that grow with your business, plus the flexibility to adjust or pause services as needed."
    },
    {
      question: "What's the ROI on automation?",
      answer: "Our clients typically see 3-5x ROI within the first 6 months. This comes from reduced labor costs, faster processing times, and eliminated errors. For example, automating customer service can save 60-80% in support costs while improving response times by 90%. Plus, our solutions scale seamlessly as you grow without additional overhead."
    },
    {
      question: "How does billing work?",
      answer: "Choose between monthly or quarterly billing through our secure payment system. Monthly plans offer maximum flexibility, while quarterly commitments include significant savings. All plans include unlimited support and system updates. You can upgrade, downgrade, or cancel anytime with no long-term contracts required."
    },
    {
      question: "How do I request new automations?",
      answer: "After your onboarding, you'll get access to our client portal where you can submit and track automation requests. Each request is analyzed, prioritized, and implemented by our team. We typically deliver new automations within 1-2 weeks, with critical systems often completed in just days."
    },
    {
      question: "What's included in the service?",
      answer: "Every plan includes full system design, implementation, testing, and deployment. You get detailed documentation, team training, ongoing support, and regular optimization reviews. We also provide real-time monitoring and proactive maintenance to ensure your automations run smoothly 24/7."
    },
    {
      question: "What's your satisfaction guarantee?",
      answer: "We stand behind our work with a 100% satisfaction guarantee. If any automation doesn't perform as specified, we'll fix it immediately at no extra cost. We continuously monitor and optimize your systems to ensure they deliver the expected results and adapt to your changing needs."
    },
    {
      question: "What does unlimited really mean?",
      answer: "Unlimited means no artificial caps on your automation requests or usage. While we work on one major implementation at a time to ensure quality, you can submit as many requests as needed. Most clients have 5-10 automations in progress at any time, with new systems deployed every 1-2 weeks."
    },
    {
      question: "How do we stay in touch?",
      answer: "We maintain clear communication through your dedicated client portal and regular check-ins. While we minimize unnecessary meetings to maximize productivity, you'll have direct access to our team for questions and updates. We also provide monthly performance reports and quarterly strategy reviews."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0A192F]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#112240] text-[#BD34FE] rounded-full text-sm font-medium mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl font-bold">FAQ</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;