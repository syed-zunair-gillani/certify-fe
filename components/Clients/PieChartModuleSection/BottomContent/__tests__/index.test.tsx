import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import BottomContent, { type BottomContentProps } from '../'

describe('BottomContent', () => {
  const mockData: BottomContentProps['data'] = [
    {
      title: 'Item 1',
      body: 'Item 1 Body',
    },
    {
      title: 'Item 2',
      body: ['Line 1', 'Line 2'],
    },
  ]

  it('renders the correct number of items', () => {
    render(<BottomContent data={mockData} />)
    const itemElements = screen.getAllByTestId('item')
    expect(itemElements).toHaveLength(1)
  })

  it('renders item titles and bodies', () => {
    render(<BottomContent data={mockData} />)
    const titleElements = screen.getAllByTestId('title')
    const bodyElements = screen.getAllByTestId('body')

    expect(titleElements).toHaveLength(mockData.length)
    expect(bodyElements).toHaveLength(mockData.length)

    expect(titleElements[0]).toHaveTextContent('Item 1')
    expect(bodyElements[0]).toHaveTextContent('Item 1 Body')

    expect(titleElements[1]).toHaveTextContent('Item 2')
    expect(bodyElements[1]).toHaveTextContent('Line 1')
    expect(bodyElements[1]).toHaveTextContent('Line 2')
  })
})
