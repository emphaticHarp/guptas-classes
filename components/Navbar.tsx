'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Sun, Moon } from 'lucide-react';
import { AuthModal } from './application/modals/auth-modal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/courses', label: 'Courses' },
    { href: '/contact', label: 'Contact' },
  ];

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
              <div className="relative">
                <AuthModal 
                  buttonText="Enroll Now"
                  buttonClassName="btn-primary bg-gray-900 text-white hover:bg-gray-800 text-sm px-4 py-2 rounded-md font-medium transition-all"
                />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-yellow-300 dark:bg-yellow-600 text-gray-900 dark:text-white px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg animate-bounce">
                  ☁️ Enroll now before seats get occupied!
                </div>
              </div>
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
                <div className="relative px-4">
                  <AuthModal 
                    buttonText="Enroll Now"
                    buttonClassName="block w-full px-4 py-3 btn-primary bg-gray-900 text-white hover:bg-gray-800 text-center text-sm rounded-md"
                  />
                  <div className="mt-3 bg-yellow-300 dark:bg-yellow-600 text-gray-900 dark:text-white px-3 py-2 rounded-full text-xs font-semibold text-center shadow-lg">
                    ☁️ Enroll now before seats get occupied!
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
