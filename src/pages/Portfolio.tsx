import React from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import CaseStudy from '../components/CaseStudy';

const Portfolio: React.FC = () => {
  const [selectedCase, setSelectedCase] = React.useState<any>(null);

  const cases = [
    {
      title: "AI-Powered Customer Service",
      company: "XYZ Corporation",
      description: "Implemented automated customer service workflows reducing response time by 60%",
      metrics: "60% faster response times",
      details: {
        challenge: "XYZ Corporation was struggling with long customer service response times, leading to customer dissatisfaction and increased churn rates.",
        solution: "We implemented a Make.com workflow that:\n\n- Integrated their ticketing system with OpenAI for intelligent ticket categorization\n- Automated response generation for common queries\n- Created smart routing based on ticket priority and agent expertise\n- Set up automated follow-ups and satisfaction surveys",
        results: "- Reduced average response time from 24 hours to under 10 hours\n- Increased customer satisfaction scores by 40%\n- Automated handling of 45% of routine queries\n- Improved agent productivity by 35%",
        technologies: "Make.com, OpenAI, Zendesk, Slack, Email Integration"
      }
    },
    {
      title: "Data Processing Automation",
      company: "ABC Industries",
      description: "Automated manual data entry processes saving 120+ hours monthly",
      metrics: "120+ hours saved monthly",
      details: {
        challenge: "ABC Industries' team was spending countless hours manually processing and entering data from various sources into their CRM and accounting systems.",
        solution: "We created a Make.com automation suite that:\n\n- Automatically captures data from emails and attachments\n- Processes Excel and PDF documents using OCR\n- Validates data using custom business rules\n- Syncs information across multiple systems",
        results: "- Eliminated 120+ hours of manual data entry monthly\n- Reduced data entry errors by 98%\n- Improved data accuracy and consistency\n- Freed up staff for higher-value tasks",
        technologies: "Make.com, OCR APIs, Salesforce, QuickBooks, Google Workspace"
      }
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-16">Our Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <div key={index} onClick={() => setSelectedCase(case_)} className="cursor-pointer">
              <CaseStudy {...case_} />
            </div>
          ))}
        </div>
      </div>

      <Dialog 
        open={!!selectedCase} 
        onClose={() => setSelectedCase(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl w-full bg-black border border-white/10 rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {selectedCase && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedCase.title}</h2>
                  <p className="text-gray-400">{selectedCase.company}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                  <p className="text-gray-300">{selectedCase.details.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Solution</h3>
                  {selectedCase.details.solution.split('\n\n').map((paragraph: string, i: number) => (
                    <div key={i} className="mb-4">
                      {paragraph.startsWith('-') ? (
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          {paragraph.split('\n').map((item: string, j: number) => (
                            <li key={j}>{item.substring(2)}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-300">{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Results</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {selectedCase.details.results.split('\n').map((result: string, i: number) => (
                      <li key={i}>{result.substring(2)}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <p className="text-gray-300">{selectedCase.details.technologies}</p>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Portfolio;