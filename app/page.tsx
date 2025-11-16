import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to Vercel Integration Test
        </h1>
        <p className="text-xl mb-8 text-center text-gray-600">
          Testing Vercel deployment and integration features
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}