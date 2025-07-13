import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { BOOK_A_FREE_DEMO } from '@/constants'
import ProductHeroSection from '../'

describe('ProductHeroSection', () => {
  const mockData = {
    bgColor: '#FFF38B',
    title: 'Hero Title',
    description: 'Hero Description',
    imageURL: '/hero-image.jpg',
    imageALT: 'Hero Image',
    imageWidth: 192,
    imageHeight: 192,
    classes: {
      container: 'custom-container',
      title: 'custom-title',
      images: 'custom-images',
      description: 'custom-description',
    },
    button: {
      text: 'Custom Button',
      href: '/custom-button',
    },
  }

  it('renders the product hero section correctly', () => {
    render(<ProductHeroSection {...mockData} />)

    const heroSection = screen.getByTestId('product-hero-section')
    const title = screen.getByText(mockData.title)
    const description = screen.getByText(mockData.description)
    const image = screen.getByAltText(mockData.imageALT)
    const button = screen.getByText(mockData.button.text)

    expect(heroSection).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    // Additional assertions for classes and styles
    expect(heroSection).toHaveClass('custom-container')
    expect(title).toHaveClass('custom-title')
    expect(image).toHaveClass('custom-images')
    expect(description).toHaveClass('custom-description')
    expect(heroSection).toHaveStyle({ backgroundColor: mockData.bgColor })
  })

  it('uses default button text and href when button prop is not provided', () => {
    const { button, ...dataWithoutButton } = mockData
    render(<ProductHeroSection {...dataWithoutButton} />)

    const defaultButtonText = screen.getByText(BOOK_A_FREE_DEMO.text)
    const defaultButtonHref = screen.getByRole('link', {
      name: BOOK_A_FREE_DEMO.text,
    })

    expect(defaultButtonText).toBeInTheDocument()
    expect(defaultButtonHref).toHaveAttribute('href', BOOK_A_FREE_DEMO.href)
  })
})
