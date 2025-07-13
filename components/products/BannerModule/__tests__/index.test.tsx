import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { BOOK_A_FREE_DEMO } from '@/constants'
import BannerModule from '../'

describe('BannerModule', () => {
  const mockData = {
    title: 'Banner Title',
    description: 'Banner Description',
    bgColor: '#FFF38B',
    classes: {
      title: 'custom-title',
      description: 'custom-description',
    },
    bottomButton: true,
  }

  it('renders the banner module correctly', () => {
    render(<BannerModule {...mockData} />)

    const bannerModule = screen.getByTestId('banner-module')
    const title = screen.getByText(mockData.title)
    const description = screen.getByText(mockData.description)
    const button = screen.getByText(BOOK_A_FREE_DEMO.text)

    expect(bannerModule).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    // Additional assertions for classes and styles
    expect(title).toHaveClass('custom-title')
    expect(description).toHaveClass('custom-description')
    expect(bannerModule).toHaveStyle({ backgroundColor: mockData.bgColor })
  })

  it('does not render description when it is not provided', () => {
    const { description, ...dataWithoutDescription } = mockData
    render(<BannerModule {...dataWithoutDescription} />)

    const descriptionElement = screen.queryByText(mockData.description)

    expect(descriptionElement).not.toBeInTheDocument()
  })

  it('does not render bottom button when bottomButton prop is set to false', () => {
    const dataWithoutButton = { ...mockData, bottomButton: false }
    render(<BannerModule {...dataWithoutButton} />)

    const button = screen.queryByText(BOOK_A_FREE_DEMO.text)

    expect(button).not.toBeInTheDocument()
  })
})
