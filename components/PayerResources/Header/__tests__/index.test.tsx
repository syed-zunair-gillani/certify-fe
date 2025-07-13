import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import Header, { type HeaderProps } from '../'

describe('Header', () => {
  const mockData: HeaderProps = {
    header: 'Header Title',
    body: 'Header Body',
    button: {
      text: 'Button Text',
      href: '/button-link',
    },
  }

  it('renders the header correctly with body', () => {
    render(<Header data={mockData} />)

    const headerContainer = screen.getByTestId('header-container')
    const headerTitle = screen.getByText(mockData.header)
    const button = screen.getByText(mockData.button.text)

    expect(headerContainer).toBeInTheDocument()
    expect(headerTitle).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    // Additional assertions for classes
    expect(headerContainer).toHaveClass('container')
    expect(headerTitle).toHaveClass('title')
  })

  it('renders the header correctly without body', () => {
    const { body, ...dataWithoutBody } = mockData
    render(<Header data={dataWithoutBody} />)
  })
})
