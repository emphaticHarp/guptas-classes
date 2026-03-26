'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import './forgot-password-modal.css';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ForgotPasswordStep = 'role' | 'email' | 'otp' | 'reset';

export function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [step, setStep] = useState<ForgotPasswordStep>('role');
  const [selectedRole, setSelectedRole] = useState<'teacher' | 'student' | 'admin' | null>(null);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRoleSelect = (role: 'teacher' | 'student' | 'admin') => {
    setSelectedRole(role);
    setStep('email');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('OTP Sent', {
        description: `Verification code has been sent to ${email}`,
      });
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      toast.success('OTP Verified', {
        description: 'Your OTP has been verified successfully.',
      });
      setStep('reset');
    }
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword && newPassword.length >= 6) {
      toast.success('Password Reset Successful', {
        description: 'Your password has been reset successfully. Please login with your new password.',
      });
      
      console.log('Password reset:', { role: selectedRole, email, otp, newPassword });
      
      setTimeout(() => {
        onClose();
        // Reset form
        setStep('role');
        setSelectedRole(null);
        setEmail('');
        setOtp('');
        setNewPassword('');
        setConfirmPassword('');
      }, 1500);
    }
  };

  const handleBack = () => {
    if (step === 'email') {
      setStep('role');
      setSelectedRole(null);
    } else if (step === 'otp') {
      setStep('email');
      setOtp('');
    } else if (step === 'reset') {
      setStep('otp');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="forgot-password-overlay" onClick={onClose}>
      <div className="forgot-password-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="forgot-password-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Step 1: Select Role */}
        {step === 'role' && (
          <div className="forgot-password-content">
            <h2 className="forgot-password-title">Reset Password</h2>
            <p className="forgot-password-subtitle">Select your account type</p>

            <div className="role-selection">
              <button
                className="role-button"
                onClick={() => handleRoleSelect('teacher')}
              >
                <div className="role-icon">👨‍🏫</div>
                <div className="role-name">Teacher</div>
              </button>
              <button
                className="role-button"
                onClick={() => handleRoleSelect('student')}
              >
                <div className="role-icon">👨‍🎓</div>
                <div className="role-name">Student</div>
              </button>
              <button
                className="role-button"
                onClick={() => handleRoleSelect('admin')}
              >
                <div className="role-icon">👨‍💼</div>
                <div className="role-name">Admin</div>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Enter Email */}
        {step === 'email' && (
          <div className="forgot-password-content">
            <h2 className="forgot-password-title">Enter Your Email</h2>
            <p className="forgot-password-subtitle">
              We'll send a verification code to your {selectedRole} email
            </p>

            <form onSubmit={handleEmailSubmit} className="forgot-password-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="forgot-password-button">
                Send OTP
              </button>
            </form>

            <button className="forgot-password-back" onClick={handleBack}>
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Enter OTP */}
        {step === 'otp' && (
          <div className="forgot-password-content">
            <h2 className="forgot-password-title">Verify OTP</h2>
            <p className="forgot-password-subtitle">
              Enter the 6-digit code sent to {email}
            </p>

            <form onSubmit={handleOtpSubmit} className="forgot-password-form">
              <div className="otp-input-wrapper">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={setOtp}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <button type="submit" className="forgot-password-button" disabled={otp.length !== 6}>
                Verify OTP
              </button>
            </form>

            <button className="forgot-password-back" onClick={handleBack}>
              ← Back
            </button>
          </div>
        )}

        {/* Step 4: Reset Password */}
        {step === 'reset' && (
          <div className="forgot-password-content">
            <h2 className="forgot-password-title">Create New Password</h2>
            <p className="forgot-password-subtitle">
              Enter your new password
            </p>

            <form onSubmit={handleResetSubmit} className="forgot-password-form">
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>

              {newPassword !== confirmPassword && newPassword && confirmPassword && (
                <p className="error-message">Passwords do not match</p>
              )}

              <button 
                type="submit" 
                className="forgot-password-button"
                disabled={newPassword !== confirmPassword || newPassword.length < 6}
              >
                Reset Password
              </button>
            </form>

            <button className="forgot-password-back" onClick={handleBack}>
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
