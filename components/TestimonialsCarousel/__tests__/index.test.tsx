import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestimonialsCarousel from '..'

describe('TestimonialsCarousel', () => {
  const testimonialsData = [
    { content: 'Testimonial 1 content', name: ['John Doe'] },
    { content: 'Testimonial 2 content', name: ['Jane Smith'] },
  ]

  it('renders a carousel with testimonials', () => {
    render(<TestimonialsCarousel data={testimonialsData} />)
    expect(screen.queryAllByText(/Testimonial/i)).toHaveLength(2)

    expect(screen.getByAltText('prev')).toBeInTheDocument()
    expect(screen.getByAltText('next')).toBeInTheDocument()
  })

  it('renders an empty carousel when no testimonials are provided', () => {
    render(<TestimonialsCarousel data={[]} />)

    expect(screen.queryAllByText(/Testimonial/i)).toHaveLength(0)
  })

})