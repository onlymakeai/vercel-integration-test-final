import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of productivity with our innovative solutions
          </p>
        </div>
        
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Powerful Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Advanced analytics and reporting
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Seamless integrations
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                24/7 customer support
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Enterprise-grade security
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 mb-4">
              We provide cutting-edge solutions that help businesses grow and succeed in the digital age.
            </p>
            <p className="text-gray-600">
              Our platform is trusted by thousands of companies worldwide, delivering results that matter.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
