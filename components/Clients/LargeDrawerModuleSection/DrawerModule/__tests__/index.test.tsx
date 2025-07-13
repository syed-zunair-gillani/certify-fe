import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import DrawerModule, { type DrawerModuleProps } from '../'

describe('DrawerModule', () => {
  const mockData: DrawerModuleProps['data'] = {
    title: 'Module Title',
    body: ['Item 1', 'Item 2', { type: 'p', text: 'Paragraph' }],
  }

  it('renders module title', () => {
    render(<DrawerModule data={mockData} isOpen={true} />)
    const titleElement = screen.getByText(/module title/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders module body when isOpen is true', () => {
    render(<DrawerModule data={mockData} isOpen={true} />)
    const bodyElement = screen.getByText(/item 1/i)
    expect(bodyElement).toBeInTheDocument()
  })
})
