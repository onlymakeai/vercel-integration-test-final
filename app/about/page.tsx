import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              About This Project
            </h1>
            <p className="text-xl text-gray-600">
              Vercel Integration Test Final
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            {/* Project Overview */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                📋 Project Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This is a Next.js application designed to test and demonstrate Vercel integration capabilities. 
                It serves as a final testing ground for deployment workflows, continuous integration, and 
                various Vercel platform features.
              </p>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                🛠️ Tech Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Next.js 15 (App Router)</li>
                    <li>• React 19</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Deployment</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Vercel Platform</li>
                    <li>• Automatic CI/CD</li>
                    <li>• Preview Deployments</li>
                    <li>• Edge Functions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                ✨ Key Features
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▹</span>
                  <span><strong>Modern Architecture:</strong> Built with Next.js 15 App Router for optimal performance and developer experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▹</span>
                  <span><strong>Type Safety:</strong> Full TypeScript implementation for robust code quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▹</span>
                  <span><strong>Responsive Design:</strong> Mobile-first approach with Tailwind CSS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">▹</span>
                  <span><strong>Instant Deployment:</strong> Seamless integration with Vercel for automated deployments</span>
                </li>
              </ul>
            </section>

            {/* Purpose */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                🎯 Purpose
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This project serves as a comprehensive testing environment for validating Vercel integration patterns, 
                deployment strategies, and platform-specific features. It's designed to ensure smooth transitions from 
                development to production while maintaining code quality and performance standards.
              </p>
            </section>

            {/* Repository */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                🔗 Repository
              </h2>
              <p className="text-gray-700">
                <strong>GitHub:</strong>{' '}
                <a 
                  href="https://github.com/onlymakeai/vercel-integration-test-final" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  onlymakeai/vercel-integration-test-final
                </a>
              </p>
            </section>

            {/* Back Link */}
            <div className="pt-8 border-t border-gray-200">
              <Link 
                href="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-gray-600">
            <p>Built with ❤️ using Next.js and Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
