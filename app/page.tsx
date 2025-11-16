import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Vercel Integration Test
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A Next.js application for testing Vercel integration and deployment workflows
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/about" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Learn More
          </Link>
          <a 
            href="https://github.com/onlymakeai/vercel-integration-test-final" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
