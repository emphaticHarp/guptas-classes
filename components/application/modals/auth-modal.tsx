'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { analytics } from '@/lib/analytics';
import { ForgotPasswordModal } from './forgot-password-modal';
import './auth-modal.css';

interface AuthModalProps {
  buttonText?: string;
  buttonClassName?: string;
  adImage?: string;
}

export function AuthModal({ buttonText = 'Enroll Now', buttonClassName = '', adImage = '/logo.jpg' }: AuthModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { tab: activeTab, data: formData });
    
    // Track analytics
    analytics.trackEvent('auth_form_submit', 'conversion', activeTab);
    
    if (activeTab === 'login') {
      toast.success('Login Successful', {
        description: 'Welcome back! You have been logged in successfully.',
      });
      analytics.trackEvent('login_success', 'conversion', 'auth-modal');
    } else {
      toast.success('Account Created', {
        description: 'Your account has been created successfully. Welcome to Gupta\'s Classes!',
      });
      analytics.trackEvent('signup_success', 'conversion', 'auth-modal');
    }
    
    // Reset form and close modal
    setTimeout(() => {
      setIsOpen(false);
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
      });
    }, 1500);
  };

  return (
    <>
      <button onClick={() => {
        setIsOpen(true);
        analytics.trackModalOpen('auth-modal');
      }} className={buttonClassName}>
        {buttonText}
      </button>

      {isOpen && (
        <div className="auth-modal-overlay" onClick={() => {
          setIsOpen(false);
          analytics.trackModalClose('auth-modal');
        }}>
          <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="auth-modal-close"
              onClick={() => {
                setIsOpen(false);
                analytics.trackModalClose('auth-modal');
              }}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="auth-modal-content">
              {/* Left Side - Ad Image */}
              <div className="auth-modal-left">
                <img src={adImage} alt="Institution Ad" className="auth-modal-image" />
              </div>

              {/* Right Side - Form */}
              <div className="auth-modal-right">
                {/* Header */}
                <div className="auth-modal-header">
                  <h2 className="auth-modal-title">Join Gupta's Classes</h2>
                  <p className="auth-modal-subtitle">Start your journey to excellence in education</p>
                </div>

                {/* Tabs */}
                <div className="auth-tabs">
                  <button
                    className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                    onClick={() => setActiveTab('login')}
                  >
                    Login
                  </button>
                  <button
                    className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
                    onClick={() => setActiveTab('signup')}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="auth-form">
                  {activeTab === 'signup' && (
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {activeTab === 'signup' && (
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}

                  {activeTab === 'login' && (
                    <div className="auth-forgot-password">
                      <button type="button" className="auth-forgot-link" onClick={() => setShowForgotPassword(true)}>Forgot Password?</button>
                    </div>
                  )}

                  <button type="submit" className="auth-submit-button">
                    {activeTab === 'login' ? 'Login' : 'Sign Up'}
                  </button>
                </form>

                {activeTab === 'signup' && (
                  <p className="auth-terms-text">
                    By signing up, you agree to our <button type="button" className="auth-link">Terms of Service</button> and <button type="button" className="auth-link">Privacy Policy</button>
                  </p>
                )}

                {activeTab === 'login' && (
                  <>
                    <p className="auth-footer-text">
                      Don't have an account? <button type="button" onClick={() => setActiveTab('signup')} className="auth-link">Sign up here</button>
                    </p>
                    <div className="auth-benefits">
                      <p className="auth-benefits-title">Why join us?</p>
                      <ul className="auth-benefits-list">
                        <li>Expert instructors with years of experience</li>
                        <li>Personalized learning approach</li>
                        <li>Flexible class schedules</li>
                      </ul>
                    </div>
                  </>
                )}

                {activeTab === 'signup' && (
                  <>
                    <p className="auth-footer-text">
                      Already have an account? <button type="button" onClick={() => setActiveTab('login')} className="auth-link">Login here</button>
                    </p>
                    <div className="auth-benefits">
                      <p className="auth-benefits-title">Get started today!</p>
                      <ul className="auth-benefits-list">
                        <li>Free trial classes available</li>
                        <li>Affordable pricing plans</li>
                        <li>24/7 student support</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <ForgotPasswordModal isOpen={showForgotPassword} onClose={() => setShowForgotPassword(false)} />
    </>
  );
}
