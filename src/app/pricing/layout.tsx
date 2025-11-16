import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Vercel Integration Test',
  description: 'Choose the perfect plan for your needs. Simple, transparent pricing with no hidden fees.',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
