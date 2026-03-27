'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { analytics } from '@/lib/analytics';
import { useAuth } from '@/lib/auth-context';
import { ForgotPasswordModal } from './forgot-password-modal';
import './auth-modal.css';

interface AuthModalProps {
  buttonText?: string;
  buttonClassName?: string;
  adImage?: string;
}

export function AuthModal({ buttonText = 'Enroll Now', buttonClassName = '', adImage = '/logo.jpg' }: AuthModalProps) {
  const { login, signup, isLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    role: 'student',
    class: '9-10',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      analytics.trackEvent('auth_form_submit', 'conversion', activeTab);

      if (activeTab === 'login') {
        await login(formData.email, formData.password);
        toast.success('Login Successful', {
          description: 'Welcome back! You have been logged in successfully.',
        });
        analytics.trackEvent('login_success', 'conversion', 'auth-modal');
      } else {
        // Validate signup
        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match', {
            description: 'Please ensure both passwords are the same.',
          });
          return;
        }

        if (formData.password.length < 6) {
          toast.error('Password too short', {
            description: 'Password must be at least 6 characters long.',
          });
          return;
        }

        await signup({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role,
          class: formData.class,
        });

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
          name: '',
          phone: '',
          role: 'student',
          class: '9-10',
        });
      }, 1500);
    } catch (error: any) {
      toast.error('Authentication Error', {
        description: error.message || 'An error occurred. Please try again.',
      });
      analytics.trackEvent('auth_error', 'error', activeTab);
    }
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
                    <>
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                        >
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="class">Class</label>
                        <select
                          id="class"
                          name="class"
                          value={formData.class}
                          onChange={handleInputChange}
                        >
                          <option value="6-8">Class 6-8</option>
                          <option value="9-10">Class 9-10</option>
                          <option value="11-12">Class 11-12</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </>
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

                  <button type="submit" className="auth-submit-button" disabled={isLoading}>
                    {isLoading ? 'Processing...' : (activeTab === 'login' ? 'Login' : 'Sign Up')}
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
