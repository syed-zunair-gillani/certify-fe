import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import PieChartModule, { type PieChartModuleProps } from '../'

describe('PieChartModule', () => {
  const mockData: PieChartModuleProps['data'] = [
    {
      title: 'Item 1',
      body: 'Item 1 Body',
    },
    {
      title: 'Item 2',
      body: 'Item 2 Body',
    },
  ]

  const mockClasses: PieChartModuleProps['classes'] = {
    'content-container': 'custom-container',
    content: 'custom-content',
    'content-title': 'custom-title',
    'content-body': 'custom-body',
  }

  it('renders the correct number of items', () => {
    render(<PieChartModule data={mockData} />)
    const itemElements = screen.getAllByTestId('item')
    expect(itemElements).toHaveLength(mockData.length)
  })

  it('renders item titles and bodies', () => {
    render(<PieChartModule data={mockData} />)
    const titleElements = screen.getAllByTestId('title')
    const bodyElements = screen.getAllByTestId('body')

    expect(titleElements).toHaveLength(mockData.length)
    expect(bodyElements).toHaveLength(mockData.length)

    expect(titleElements[0]).toHaveTextContent('Item 1')
    expect(bodyElements[0]).toHaveTextContent('Item 1 Body')

    expect(titleElements[1]).toHaveTextContent('Item 2')
    expect(bodyElements[1]).toHaveTextContent('Item 2 Body')
  })

  it('applies custom classes', () => {
    render(<PieChartModule data={mockData} classes={mockClasses} />)
    const containerElement = screen.getByTestId('container')
    const contentElements = screen.getAllByTestId('item')
    const titleElements = screen.getAllByTestId('title')
    const bodyElements = screen.getAllByTestId('body')

    expect(containerElement).toHaveClass('custom-container')
    contentElements.forEach((contentElement) => {
      expect(contentElement).toHaveClass('custom-content')
    })
    titleElements.forEach((titleElement) => {
      expect(titleElement).toHaveClass('custom-title')
    })
    bodyElements.forEach((bodyElement) => {
      expect(bodyElement).toHaveClass('custom-body')
    })
  })
})
