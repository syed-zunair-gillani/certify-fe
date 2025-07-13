import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import DrawerModule from '../'

describe('DrawerModule', () => {
  const testProps = {
    title: 'Test Title',
    items: [
      {
        title: 'Item 1',
        description: 'Description 1',
      },
      {
        title: 'Item 2',
        description: ['Description 2', 'Description 3'],
      },
      {
        title: 'Item 3',
        description: [['Sub Description 1', 'Sub Description 2']],
      },
    ],
    classes: {
      title: 'custom-title',
      container: 'custom-container',
    },
  }

  test('renders the component with correct title and items', () => {
    render(<DrawerModule {...testProps} />)

    const titleElement = screen.getByText(testProps.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass(testProps.classes.title)

    const itemElements = screen.getAllByRole('listitem')
    expect(itemElements).toHaveLength(testProps.items.length)
  })
})
