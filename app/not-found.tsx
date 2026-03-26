import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        {/* Lottie Animation */}
        <div className="mb-8 flex justify-center">
          <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-6xl font-bold text-gray-300">404</div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Suggestions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-700 mb-4">
            Here are some helpful links instead:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                → Go to Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-blue-600 hover:text-blue-700 font-medium">
                → Browse Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                → Learn About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                → Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            <Home size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 border border-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-8">
          Error Code: 404 | If you believe this is a mistake, please{' '}
          <Link href="/contact" className="text-blue-600 hover:underline">
            contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
