import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';
import '@testing-library/jest-dom';

describe('Testimonials Component', () => {
  it('renders the testimonials section heading', () => {
    render(<Testimonials />);
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Testimonials />);
    expect(screen.getByText(/Join thousands of satisfied customers/i)).toBeInTheDocument();
  });

  it('displays the average rating', () => {
    render(<Testimonials />);
    expect(screen.getByText('out of 5')).toBeInTheDocument();
  });

  it('renders all testimonial cards', () => {
    render(<Testimonials />);
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Michael Chen')).toBeInTheDocument();
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument();
    expect(screen.getByText('David Kumar')).toBeInTheDocument();
    expect(screen.getByText('Jessica Taylor')).toBeInTheDocument();
    expect(screen.getByText('Robert Martinez')).toBeInTheDocument();
  });

  it('displays customer roles and companies', () => {
    render(<Testimonials />);
    expect(screen.getByText('CTO at TechCorp Solutions')).toBeInTheDocument();
    expect(screen.getByText('Product Manager at InnovateLabs')).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    render(<Testimonials />);
    expect(screen.getByText('Get Started Today')).toBeInTheDocument();
  });

  it('displays testimonial content', () => {
    render(<Testimonials />);
    expect(screen.getByText(/This product has completely transformed/i)).toBeInTheDocument();
  });
});
