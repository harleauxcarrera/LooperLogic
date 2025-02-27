import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';

interface IntroCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroCallModal: React.FC<IntroCallModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    otherBusinessType: '',
    description: '',
    helpNeeded: '',
    projectType: '',
    website: '',
    revenue: '',
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        if (formData.businessType === 'Other') {
          return !!formData.otherBusinessType;
        }
        return !!formData.businessType;
      case 2:
        return !!formData.description;
      case 3:
        return !!formData.helpNeeded;
      case 4:
        return !!formData.projectType;
      case 5:
        return true; // Website is optional
      case 6:
        return !!formData.revenue;
      case 7:
        return !!(
          formData.firstName.trim() && 
          formData.lastName.trim() && 
          formData.company.trim() && 
          isEmailValid(formData.email)
        );
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!isStepValid()) return;
    
    if (step === 7) {
      setStep(8);
    } else if (step < 8) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      onClose();
    } else {
      setStep(prev => prev - 1);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (['businessType', 'projectType', 'revenue'].includes(field)) {
      if (field === 'businessType' && value === 'Other') {
        return;
      }
      setTimeout(() => handleNext(), 300);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        <div className="inline-block w-full max-w-2xl p-8 my-8 text-left align-middle bg-[#0A192F] rounded-lg shadow-xl transform transition-all">
          <div className="mb-8">
            <div className="w-full bg-gray-800 h-1 rounded-full">
              <div
                className="h-full bg-[#BD34FE] transition-all duration-300"
                style={{ width: `${(step / 7) * 100}%` }}
              />
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">What type of business do you run?</h2>
              <div className="space-y-3">
                {['Service', 'E-commerce', 'Software', 'Brick-and-mortar', 'Other'].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleInputChange('businessType', type)}
                    className={`w-full px-4 py-3 border rounded-lg text-left transition-colors ${
                      formData.businessType === type
                        ? 'border-[#BD34FE] bg-[#BD34FE]/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    {type}
                  </button>
                ))}
                {formData.businessType === 'Other' && (
                  <input
                    type="text"
                    value={formData.otherBusinessType}
                    onChange={(e) => handleInputChange('otherBusinessType', e.target.value)}
                    placeholder="Please specify your business type..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white"
                    autoFocus
                  />
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-2">What does it do?</h2>
              <p className="text-gray-400 mb-4">Tell us about your business. This helps us understand your needs and customize our solutions accordingly.</p>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Brief description of your business..."
                className="w-full h-32 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white resize-none"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-2">What would you like help with?</h2>
              <p className="text-gray-400 mb-4">Be as detailed as possible. We'll use this to prepare for our call.</p>
              <textarea
                value={formData.helpNeeded}
                onChange={(e) => handleInputChange('helpNeeded', e.target.value)}
                placeholder="Your main challenges or goals..."
                className="w-full h-32 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white resize-none"
              />
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Are you looking for a one-time project or an ongoing monthly relationship?</h2>
              <div className="space-y-3">
                {['One-time project', 'Monthly retainer', 'Not sure yet'].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleInputChange('projectType', type)}
                    className={`w-full px-4 py-3 border rounded-lg text-left transition-colors ${
                      formData.projectType === type
                        ? 'border-[#BD34FE] bg-[#BD34FE]/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-2">What's your website URL?</h2>
              <p className="text-gray-400 mb-4">Optional - enter 'no website' if you don't have one yet</p>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https:// or 'no website'"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white"
              />
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">What's your current monthly revenue?</h2>
              <div className="space-y-3">
                {['$0-$10k', '$10k-$50k', '$50k-$100k', '$100k+'].map((range) => (
                  <button
                    key={range}
                    onClick={() => handleInputChange('revenue', range)}
                    className={`w-full px-4 py-3 border rounded-lg text-left transition-colors ${
                      formData.revenue === range
                        ? 'border-[#BD34FE] bg-[#BD34FE]/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">How do we reach you?</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-[#BD34FE] text-white ${
                  formData.email && !isEmailValid(formData.email) 
                    ? 'border-red-500' 
                    : 'border-white/10'
                }`}
              />
              <input
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white"
              />
            </div>
          )}

          {step === 8 && (
            <div className="h-[600px]">
              <InlineWidget
                url="https://calendly.com/carlos-looperlogic/consultation-call"
                prefill={{
                  email: formData.email,
                  name: `${formData.firstName} ${formData.lastName}`,
                  customAnswers: {
                    a1: formData.businessType === 'Other' ? formData.otherBusinessType : formData.businessType,
                    a2: formData.company,
                    a3: formData.description,
                    a4: formData.helpNeeded,
                    a5: formData.projectType,
                    a6: formData.website,
                    a7: formData.revenue
                  }
                }}
                styles={{
                  height: '100%',
                  width: '100%'
                }}
              />
            </div>
          )}

          {step < 8 && (
            <div className="mt-8 flex justify-between">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                {step === 1 ? 'Close' : 'Back'}
              </button>
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-colors ${
                  !isStepValid()
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-[#BD34FE] hover:bg-[#A020F0]'
                }`}
              >
                Continue
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroCallModal;