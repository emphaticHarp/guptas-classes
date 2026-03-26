import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 md:mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <img src="/logo.jpg" alt="Gupta's Classes Logo" className="h-8 md:h-10 w-auto rounded-md" />
              <div>
                <h3 className="font-bold text-sm md:text-base text-white">Gupta's Classes</h3>
                <p className="text-xs text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
              Building strong academic foundations since 2014. Trusted by 500+ students with a 95% pass rate.
            </p>
            <div className="flex gap-2 md:gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors text-xs font-semibold">
                f
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors text-xs font-semibold">
                📷
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors text-xs font-semibold">
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm md:text-base mb-4 md:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm md:text-base mb-4 md:mb-6 text-white">Contact Info</h4>
            <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-gray-400">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-gray-500" />
                <span>Agartala, Tripura, India</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-gray-500" />
                <span>+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Mail size={16} className="flex-shrink-0 mt-0.5 text-gray-500" />
                <span>info@guptasclasses.com</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-gray-500" />
                <span>Mon-Sat: 10 AM - 8 PM</span>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-sm md:text-base mb-4 md:mb-6 text-white">Courses Offered</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-gray-600">▸</span>
                <span>Class 6-8 (Foundation)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-600">▸</span>
                <span>Class 9-10 (Board Prep)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-600">▸</span>
                <span>Class 11-12 (Advanced)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-600">▸</span>
                <span>One-on-One Sessions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="text-center md:text-left">
              <p className="text-xs md:text-sm text-gray-400">
                <span className="font-semibold text-white">Subjects:</span> English, Bengali, Social Science
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs md:text-sm text-gray-400">
                <span className="font-semibold text-white">Boards:</span> CBSE & TBSE
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs md:text-sm text-gray-400">
                <span className="font-semibold text-white">Experience:</span> 10+ Years
              </p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-xs">
            © 2024 Gupta's Classes. All rights reserved. | Designed for educational excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
