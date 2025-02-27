import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dialog } from '@headlessui/react';
import { X, ArrowRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  imageUrl: string;
  metrics: string;
  details: {
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
  };
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
  onClick: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, className = "", onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-lg group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black/70 z-10" />
      <img
        src={caseStudy.imageUrl}
        alt={caseStudy.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-bold mb-2">{caseStudy.metrics}</h3>
        <h4 className="text-xl font-semibold mb-2">{caseStudy.title}</h4>
        <p className="text-gray-300">{caseStudy.description}</p>
        <div className="mt-4 flex items-center gap-2 text-[#7FE7D9] group-hover:translate-x-2 transition-transform">
          <span>View case study</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const cases: CaseStudy[] = [
    {
      title: "Elite Law Firm Automation",
      description: "Revolutionized client intake and case management for a prestigious law firm through intelligent automation.",
      metrics: "300% increase in case processing efficiency",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
      details: {
        challenge: "A leading law firm was struggling with manual client intake processes, document management, and case tracking, leading to delays and potential errors in critical legal procedures.",
        solution: "We implemented a comprehensive automation system that streamlined their entire workflow, including:\n\n- AI-powered document analysis and classification\n- Automated client intake and screening\n- Smart case assignment and tracking\n- Automated court filing preparation\n- Real-time case status updates for clients",
        results: [
          "Reduced client intake time from 2 hours to 20 minutes",
          "Automated processing of 85% of standard legal documents",
          "Decreased case management overhead by 60%",
          "Improved client satisfaction scores by 45%",
          "Enabled attorneys to handle 40% more cases simultaneously"
        ],
        technologies: [
          "Document OCR & Analysis",
          "Workflow Automation",
          "Client Portal Integration",
          "E-signature Solutions",
          "Case Management System"
        ]
      }
    },
    {
      title: "Mortgage Processing Revolution",
      description: "Transformed mortgage application processing through AI-driven automation and intelligent document handling.",
      metrics: "75% faster loan processing",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
      details: {
        challenge: "A growing mortgage company was bottlenecked by manual document processing, leading to lengthy loan approval times and frustrated clients.",
        solution: "We developed an end-to-end mortgage processing automation solution featuring:\n\n- Automated document collection and verification\n- Real-time credit analysis integration\n- Intelligent underwriting assistance\n- Automated compliance checking\n- Digital closing preparation",
        results: [
          "Reduced average loan processing time from 30 to 7 days",
          "Automated verification of 90% of required documents",
          "Decreased processing costs by 65% per loan",
          "Improved accuracy rate to 99.9%",
          "Increased monthly loan volume by 200%"
        ],
        technologies: [
          "OCR Technology",
          "Credit API Integration",
          "Automated Underwriting",
          "Compliance Checking",
          "Digital Closing Platform"
        ]
      }
    },
    {
      title: "Accounting Firm Transformation",
      description: "Automated core accounting processes and client financial reporting for a major accounting firm.",
      metrics: "10,000+ hours saved annually",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
      details: {
        challenge: "A large accounting firm was struggling with manual data entry, report generation, and client communication, leading to inefficiencies and potential errors.",
        solution: "We implemented a comprehensive automation solution including:\n\n- Automated bank feed reconciliation\n- Smart expense categorization\n- Automated financial report generation\n- Client portal with real-time updates\n- Automated tax preparation assistance",
        results: [
          "Automated 95% of routine bookkeeping tasks",
          "Reduced monthly closing time by 80%",
          "Eliminated 99% of data entry errors",
          "Increased client capacity by 150%",
          "Improved profit margins by 45%"
        ],
        technologies: [
          "Bank Integration APIs",
          "ML-based Categorization",
          "Automated Reporting",
          "Client Portal",
          "Tax Preparation Software"
        ]
      }
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-[#7FE7D9] tracking-wide uppercase mb-3">
            OUR WORK
          </h2>
          <h3 className="text-4xl font-bold">
            Case studies & projects
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CaseStudyCard
            caseStudy={cases[0]}
            className="aspect-[4/3]"
            onClick={() => setSelectedCase(cases[0])}
          />
          <div className="grid grid-cols-1 gap-6">
            <CaseStudyCard
              caseStudy={cases[1]}
              className="aspect-[2/1]"
              onClick={() => setSelectedCase(cases[1])}
            />
            <CaseStudyCard
              caseStudy={cases[2]}
              className="aspect-[2/1]"
              onClick={() => setSelectedCase(cases[2])}
            />
          </div>
        </div>
      </div>

      <Dialog 
        open={!!selectedCase} 
        onClose={() => setSelectedCase(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-3xl w-full bg-[#0B1221] border border-white/10 rounded-lg p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {selectedCase && (
              <div className="space-y-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={selectedCase.imageUrl}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedCase.title}</h2>
                  <p className="text-2xl text-[#7FE7D9] font-semibold">{selectedCase.metrics}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedCase.details.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                  {selectedCase.details.solution.split('\n\n').map((paragraph, i) => (
                    <div key={i} className="mb-4">
                      {paragraph.startsWith('-') ? (
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          {paragraph.split('\n').map((item, j) => (
                            <li key={j} className="text-gray-300">{item.substring(2)}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-300 leading-relaxed">{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Results</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedCase.details.results.map((result, i) => (
                      <li key={i} className="text-gray-300">{result}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.details.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default CaseStudies;