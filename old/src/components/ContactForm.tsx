import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    to_email: 'info@looperlogic.com'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setStatus('sending');
      
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '', to_email: 'info@looperlogic.com' });
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Message Sent!';
      case 'error':
        return 'Failed to Send';
      default:
        return 'Send Message';
    }
  };

  const getButtonClass = () => {
    switch (status) {
      case 'success':
        return 'bg-green-500 hover:bg-green-600';
      case 'error':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-white text-black hover:bg-gray-200';
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <input type="hidden" name="to_email" value={formData.to_email} />
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-white placeholder-gray-400 transition-colors"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-white placeholder-gray-400 transition-colors"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-white placeholder-gray-400 transition-colors resize-none"
          onChange={handleChange}
          value={formData.message}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group ${getButtonClass()}`}
      >
        {getButtonText()}
        <Send size={18} className={`${status === 'idle' ? 'group-hover:translate-x-1' : ''} transition-transform`} />
      </button>
    </form>
  );
};

export default ContactForm;