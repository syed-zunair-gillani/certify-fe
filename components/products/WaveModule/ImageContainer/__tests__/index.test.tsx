import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import ImageContainer, { type WaveModuleProps } from '../'

jest.mock('react-hook-inview', () => ({
  useInView: jest.fn().mockReturnValue([jest.fn(), true]), // Mock useInView hook to always return true for visibility
}))

describe('ImageContainer', () => {
  const mockData: WaveModuleProps['data'] = [
    {
      src: '/image1.png',
      alt: 'Image 1',
      width: 100,
      height: 100,
    },
    {
      src: '/image2.png',
      alt: 'Image 2',
      width: 200,
      height: 200,
    },
  ]

  it('renders the image container', () => {
    render(<ImageContainer data={mockData} />)
    const imageContainerElement = screen.getByTestId('image-container')
    expect(imageContainerElement).toBeInTheDocument()
  })

  it('renders the correct number of images', () => {
    render(<ImageContainer data={mockData} />)
    const imageElements = screen.getAllByRole('img')
    expect(imageElements).toHaveLength(mockData.length)
  })
})
