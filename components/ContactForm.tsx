'use client';

import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { rateLimit } from '@/lib/rate-limit';
import { analytics } from '@/lib/analytics';
import { handleKeyboardNavigation, KEYS } from '@/lib/keyboard-navigation';
import { FormSkeleton } from '@/components/SkeletonLoaders';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    class: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limit (5 submissions per minute per IP)
    const rateLimitResult = rateLimit('contact-form', 5, 60000);

    if (!rateLimitResult.success) {
      const resetTime = new Date(rateLimitResult.resetTime);
      toast.error('Too Many Requests', {
        description: `Please wait ${Math.ceil(
          (rateLimitResult.resetTime - Date.now()) / 1000
        )} seconds before submitting again.`,
      });
      analytics.trackEvent('form_submit_rate_limited', 'error', 'contact-form');
      return;
    }

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Validation Error', {
        description: 'Please fill in all required fields.',
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid Email', {
        description: 'Please enter a valid email address.',
      });
      return;
    }

    // Validate phone format
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast.error('Invalid Phone', {
        description: 'Please enter a valid 10-digit phone number.',
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Track analytics
      analytics.trackFormSubmission('contact-form', true);
      analytics.trackEvent('contact_form_submit', 'conversion', formData.class);

      toast.success('Message Sent Successfully!', {
        description: 'We will get back to you within 24 hours.',
      });

      setSubmitted(true);
      setIsLoading(false);

      // Reset form
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', class: '', message: '' });
        setSubmitted(false);
      }, 2000);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // Allow form submission with Ctrl+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  if (isLoading) {
    return <FormSkeleton />;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      className="space-y-6 max-w-2xl"
      noValidate
      aria-label="Contact form"
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          aria-required="true"
          aria-label="Full name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          tabIndex={0}
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          aria-required="true"
          aria-label="Email address"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          tabIndex={0}
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your 10-digit phone number"
          required
          aria-required="true"
          aria-label="Phone number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          tabIndex={0}
        />
      </div>

      {/* Class Field */}
      <div>
        <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">
          Class/Level
        </label>
        <select
          id="class"
          name="class"
          value={formData.class}
          onChange={handleChange}
          aria-label="Class or level"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          tabIndex={0}
        >
          <option value="">Select your class</option>
          <option value="6-8">Class 6-8</option>
          <option value="9-10">Class 9-10</option>
          <option value="11-12">Class 11-12</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your inquiry..."
          required
          aria-required="true"
          aria-label="Message"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          tabIndex={0}
        />
        <p className="text-xs text-gray-500 mt-1">
          Tip: Press Ctrl+Enter to submit the form
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || submitted}
        aria-label="Submit contact form"
        className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        tabIndex={0}
      >
        {isLoading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
      </button>

      {/* Form Info */}
      <p className="text-xs text-gray-500 text-center">
        <span className="text-red-500">*</span> Required fields
      </p>
    </form>
  );
}
