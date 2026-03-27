'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, LogOut, User, Settings, ChevronDown } from 'lucide-react';
import { AuthModal } from './application/modals/auth-modal';
import { useAuth } from '@/lib/auth-context';
import { toast } from 'sonner';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const { user, logout, isAuthenticated } = useAuth();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/courses', label: 'Courses' },
    { href: '/contact', label: 'Contact' },
  ];

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully', {
        description: 'You have been logged out from your account.',
      });
      setIsProfileOpen(false);
    } catch (error) {
      toast.error('Logout failed', {
        description: 'An error occurred while logging out.',
      });
    }
  };

  // Generate avatar initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-gray-900 text-white py-3 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 7005288084</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@guptasclasses.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Mon-Sat: 10 AM - 8 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-300 transition-colors">Facebook</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Branding */}
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Gupta's Classes Logo" className="h-12 w-auto rounded-md shadow-sm" />
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg text-gray-900">Gupta's Classes</h1>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all text-sm rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-4">
              {isAuthenticated && user ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Profile menu"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      {getInitials(user.name)}
                    </div>
                    <ChevronDown size={18} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-in fade-in slide-in-from-top-2">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="font-semibold text-gray-900 text-sm">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded capitalize text-xs font-medium">
                            {user.role}
                          </span>
                        </p>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <Link
                          href="/profile"
                          className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User size={16} />
                          <span>My Profile</span>
                        </Link>
                        <Link
                          href="/settings"
                          className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <Settings size={16} />
                          <span>Settings</span>
                        </Link>
                      </div>

                      {/* Logout */}
                      <div className="border-t border-gray-200 py-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 text-sm transition-colors"
                        >
                          <LogOut size={16} />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative">
                  <AuthModal 
                    buttonText="Enroll Now"
                    buttonClassName="btn-primary bg-gray-900 text-white hover:bg-gray-800 text-sm px-4 py-2 rounded-md font-medium transition-all"
                  />
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-yellow-300 dark:bg-yellow-600 text-gray-900 dark:text-white px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg animate-bounce">
                    ☁️ Enroll now before seats get occupied!
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-6 border-t border-gray-200 bg-gray-50">
              <div className="space-y-2 mb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-white font-medium text-sm rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-2">
                {isAuthenticated && user ? (
                  <div className="px-4 space-y-2">
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        {getInitials(user.name)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                      </div>
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-white text-sm rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-gray-700 hover:bg-white text-sm rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 text-sm rounded-md transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="relative px-4">
                    <AuthModal 
                      buttonText="Enroll Now"
                      buttonClassName="block w-full px-4 py-3 btn-primary bg-gray-900 text-white hover:bg-gray-800 text-center text-sm rounded-md"
                    />
                    <div className="mt-3 bg-yellow-300 dark:bg-yellow-600 text-gray-900 dark:text-white px-3 py-2 rounded-full text-xs font-semibold text-center shadow-lg">
                      ☁️ Enroll now before seats get occupied!
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
