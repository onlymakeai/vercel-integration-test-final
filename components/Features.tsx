import { Zap, Shield, Globe, Users, TrendingUp, Heart } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance that delivers content at blazing speeds to your users worldwide.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security with automatic SSL, DDoS protection, and data encryption.',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Distributed infrastructure across 6 continents ensuring low latency everywhere.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in tools for seamless teamwork with role-based access and permissions.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Insights',
    description: 'Real-time monitoring and detailed analytics to track performance and user behavior.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Heart,
    title: '24/7 Support',
    description: 'Dedicated support team ready to help you succeed at any time, day or night.',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  }
];

export default function Features() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you build and scale your applications with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
              >
                <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
