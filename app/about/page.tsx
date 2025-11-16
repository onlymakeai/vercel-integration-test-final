import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          
          <div className="prose prose-lg text-gray-700">
            <p className="mb-6">
              Welcome to our company! We are dedicated to providing innovative solutions
              and exceptional service to our customers.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Our Mission
            </h2>
            <p className="mb-6">
              To deliver cutting-edge technology solutions that empower businesses and
              individuals to achieve their goals efficiently and effectively.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Innovation: Constantly pushing the boundaries of what's possible</li>
              <li>Quality: Delivering excellence in everything we do</li>
              <li>Integrity: Building trust through transparency and honesty</li>
              <li>Customer Focus: Your success is our priority</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Company Information
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="mb-2"><strong>Founded:</strong> 2024</p>
              <p className="mb-2"><strong>Location:</strong> Global</p>
              <p className="mb-2"><strong>Industry:</strong> Technology & Software Development</p>
              <p><strong>Team Size:</strong> Growing team of passionate professionals</p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Get In Touch
            </h2>
            <p className="mb-6">
              We'd love to hear from you! Whether you have a question about our services,
              need support, or just want to say hello, our team is ready to help.
            </p>
            
            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Back to Home
              </Link>
              <a
                href="mailto:contact@example.com"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
