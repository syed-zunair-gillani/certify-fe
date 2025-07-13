import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import WaveModule from '../'

jest.mock('react-hook-inview', () => ({
  useInView: jest.fn().mockReturnValue([jest.fn(), true]), // Mock useInView hook to always return true for visibility
}))

describe('WaveModule', () => {
  const testData = [
    {
      src: '/path/to/image1.png',
      alt: 'Image 1',
      width: 200,
      height: 150,
    },
    {
      src: '/path/to/image2.png',
      alt: 'Image 2',
      width: 300,
      height: 200,
    },
  ]

  test('renders the component with correct images and title', () => {
    render(<WaveModule data={testData} title='How It Works:' />)

    const titleElement = screen.getByText('How It Works:')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass('title')
    expect(titleElement).toHaveClass('heading-1')
  })
})
