import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Message Sent Successfully',
  description: 'Your message has been sent successfully. We\'ll get back to you soon.',
};

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
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
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Message Sent!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Thank you for contacting us. We've received your message and will get back to you as soon as possible.
          </p>

          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </Link>
            
            <Link
              href="/contact"
              className="block w-full px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-md hover:bg-gray-200 transition-colors"
            >
              Send Another Message
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Expected response time: 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}