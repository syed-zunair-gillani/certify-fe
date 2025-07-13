import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from '../'

describe('Title', () => {
  it('renders a single string title', () => {
    const title = 'Example Title'
    render(<Title data={title} />)

    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders an array of strings and italicized text', () => {
    const data = [
      'Example',
      { type: 'italic', text: 'Italicized Text' },
      'Title',
    ]
    render(<Title data={data} />)

    const titleElement = screen.getByText('Example')
    expect(titleElement).toBeInTheDocument()

    const italicizedTextElement = screen.getByText('Italicized Text')
    expect(italicizedTextElement).toBeInTheDocument()

    const titleElement2 = screen.getByText('Title')
    expect(titleElement2).toBeInTheDocument()
  })

  it('applies custom CSS classes', () => {
    const data = 'Example Title'
    const customClasses = {
      title: 'custom-title-class',
      italic: 'custom-italic-class',
    }
    render(<Title data={data} classes={customClasses} />)

    const titleElement = screen.getByText(data)
    expect(titleElement).toHaveClass(customClasses.title)
  })
})
