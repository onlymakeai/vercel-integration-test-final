import { Check, X } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Up to 3 projects',
      '100 API calls per day',
      'Community support',
      'Basic analytics',
      '1 team member',
    ],
    notIncluded: [
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Best for growing teams',
    features: [
      'Unlimited projects',
      '10,000 API calls per day',
      'Priority email support',
      'Advanced analytics',
      'Up to 10 team members',
      'Custom integrations',
      'Advanced security features',
    ],
    notIncluded: [
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: [
      'Unlimited everything',
      'Unlimited API calls',
      '24/7 phone & email support',
      'Advanced analytics & reporting',
      'Unlimited team members',
      'Custom integrations & workflows',
      'Enterprise-grade security',
      'Dedicated account manager',
      '99.9% SLA guarantee',
      'Custom contract terms',
    ],
    cta: 'Contact Sales',
  },
];

const comparisonFeatures = [
  {
    category: 'Core Features',
    features: [
      { name: 'Projects', free: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'API Calls/Day', free: '100', pro: '10,000', enterprise: 'Unlimited' },
      { name: 'Team Members', free: '1', pro: '10', enterprise: 'Unlimited' },
      { name: 'Storage', free: '1 GB', pro: '50 GB', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Community Support', free: true, pro: true, enterprise: true },
      { name: 'Email Support', free: false, pro: true, enterprise: true },
      { name: 'Priority Support', free: false, pro: true, enterprise: true },
      { name: '24/7 Phone Support', free: false, pro: false, enterprise: true },
      { name: 'Dedicated Account Manager', free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Analytics & Reporting',
    features: [
      { name: 'Basic Analytics', free: true, pro: true, enterprise: true },
      { name: 'Advanced Analytics', free: false, pro: true, enterprise: true },
      { name: 'Custom Reports', free: false, pro: false, enterprise: true },
      { name: 'Data Export', free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Security & Compliance',
    features: [
      { name: 'SSL Certificate', free: true, pro: true, enterprise: true },
      { name: 'Two-Factor Authentication', free: true, pro: true, enterprise: true },
      { name: 'Advanced Security Features', free: false, pro: true, enterprise: true },
      { name: 'SSO/SAML', free: false, pro: false, enterprise: true },
      { name: 'SOC 2 Compliance', free: false, pro: false, enterprise: true },
      { name: 'Custom SLA', free: false, pro: false, enterprise: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl ${
                tier.highlighted
                  ? 'bg-blue-600 text-white shadow-2xl scale-105 z-10'
                  : 'bg-white text-gray-900 shadow-lg'
              } p-8 transition-transform hover:scale-105`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0">
                  <span className="inline-flex items-center rounded-full bg-green-500 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className={`mt-2 text-sm ${
                  tier.highlighted ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {tier.description}
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className={`ml-2 text-lg ${
                      tier.highlighted ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      /month
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                      tier.highlighted ? 'text-blue-200' : 'text-green-500'
                    }`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                {tier.notIncluded?.map((feature) => (
                  <li key={feature} className="flex items-start opacity-50">
                    <X className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Compare Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See all features side by side
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Free
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-blue-50">
                    Pro
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <>
                    <tr key={category.category} className="bg-gray-100">
                      <td
                        colSpan={4}
                        className="px-6 py-3 text-sm font-semibold text-gray-900"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr
                        key={`${categoryIndex}-${featureIndex}`}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {feature.name}
                        </td>
                        <td className="px-6 py-4 text-center text-sm">
                          {typeof feature.free === 'boolean' ? (
                            feature.free ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.free}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm bg-blue-50">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700 font-medium">{feature.pro}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can I change plans later?
            </h3>
            <p className="text-gray-600">
              Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Is there a free trial?
            </h3>
            <p className="text-gray-600">
              Yes! All paid plans include a 14-day free trial. No credit card required to start.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What happens if I exceed my plan limits?
            </h3>
            <p className="text-gray-600">
              We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional resources as needed.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help you choose the right plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Sales
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-blue-400">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
