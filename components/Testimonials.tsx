import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Solutions',
    content: 'This product has completely transformed how we work. The integration was seamless and the results have exceeded our expectations. Our team productivity has increased by 40%.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLabs',
    content: 'Outstanding service and support! The features are exactly what we needed, and the customer support team has been incredibly responsive. Highly recommended for any growing business.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Growth Dynamics',
    content: 'We\'ve tried several solutions, but this one stands out. The user interface is intuitive, and the analytics features have given us insights we never had before. Worth every penny!',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
  },
  {
    id: 4,
    name: 'David Kumar',
    role: 'Founder & CEO',
    company: 'StartupHub',
    content: 'As a startup, we needed something reliable and scalable. This platform delivered on both fronts. The ROI has been impressive, and implementation was faster than expected.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
  },
  {
    id: 5,
    name: 'Jessica Taylor',
    role: 'Operations Lead',
    company: 'Efficient Systems',
    content: 'The automation features have saved us countless hours. What used to take our team days now takes minutes. The platform is robust and continuously improving.',
    rating: 4,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica'
  },
  {
    id: 6,
    name: 'Robert Martinez',
    role: 'Engineering Manager',
    company: 'CodeCraft Inc',
    content: 'Excellent documentation and API. Integration with our existing systems was straightforward. The development team clearly knows what they\'re doing. Great product overall!',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert'
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full bg-gray-200"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Join thousands of satisfied customers who trust our platform
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              <StarRating rating={5} />
            </div>
            <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
            <span className="text-gray-600">out of 5</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{testimonials.length} reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to join our satisfied customers?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;