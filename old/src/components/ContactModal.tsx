import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    question: '',
    to_email: 'info@looperlogic.com'
  });

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.subject.trim() !== '' &&
      formData.question.trim() !== '' &&
      isEmailValid(formData.email)
    );
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;
    
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        question: '',
        to_email: 'info@looperlogic.com'
      });

      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-2xl bg-[#0A192F] rounded-lg p-8 mx-4 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact the Team</h2>
          <p className="text-gray-400">
            Have a question? We'll get back to you within two business days.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-[#BD34FE] text-white ${
                  formData.email && !isEmailValid(formData.email) 
                    ? 'border-red-500' 
                    : 'border-white/10'
                }`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Subject *
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Question *
              </label>
              <textarea
                required
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#BD34FE] text-white resize-none"
                rows={4}
                placeholder="Enter your question"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                !isFormValid() || isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-[#BD34FE] hover:bg-[#A020F0]'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit message'}
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
            <p className="text-gray-400">
              We'll get back to you within two business days.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactModal;