import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      title: "AI Automation Guide",
      description: "A comprehensive guide to implementing AI automation in your business",
      content: `# AI Automation Implementation Guide

## Introduction
This guide provides a comprehensive overview of implementing AI automation in your business operations.

## Key Benefits of AI Automation
- Increased efficiency and productivity
- Reduced operational costs
- Improved accuracy and consistency
- Enhanced customer experience
- Scalable operations

## Implementation Steps
1. Assess Current Workflows
2. Identify Automation Opportunities
3. Select Appropriate Tools
4. Plan Integration Strategy
5. Test and Deploy
6. Monitor and Optimize

## Best Practices
- Start with simple processes
- Ensure data quality
- Train your team
- Monitor performance
- Iterate and improve

## Contact Us
For personalized assistance, contact us at info@looperlogic.com`
    },
    {
      title: "ROI Calculator",
      description: "Calculate the potential return on investment for your automation project",
      content: `# Automation ROI Calculator Guide

## Calculating Your ROI
Use this template to calculate potential savings:

1. Current Process Costs
   - Labor hours per task × Hourly rate
   - Error-related costs
   - Training costs

2. Automation Costs
   - Implementation costs
   - Maintenance fees
   - Training expenses

3. Potential Savings
   - Time savings
   - Error reduction
   - Increased throughput

## Example Calculations
Monthly savings = (Hours saved × Labor rate) + Error reduction savings

## Need Help?
Contact us for a personalized ROI analysis.`
    }
  ];

  const downloadResource = (resource: typeof resources[0]) => {
    // Create blob from content
    const blob = new Blob([resource.content], { type: 'text/markdown' });
    
    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${resource.title.toLowerCase().replace(/\s+/g, '-')}.md`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-16">Helpful Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="p-6 border border-white/10 rounded-lg bg-white/5">
              <FileText className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-400 mb-4">{resource.description}</p>
              <button 
                onClick={() => downloadResource(resource)}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
              >
                <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                Download Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;