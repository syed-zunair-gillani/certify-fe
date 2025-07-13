import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import MenuItem from '../'

import layout from '@/components/Layout/fixtures/mockLayoutData'

describe('MenuItem', () => {
  const mockData = layout.footer.links
  const index = 0

  it('renders menu item with closed submenu by default', () => {
    render(<MenuItem data={mockData[index]} index={index} />)

    const menuItem = screen.getByTestId('menu-item')
    const menuTitle = screen.getByText(mockData[index].title)

    expect(menuItem).toBeInTheDocument()
    expect(menuTitle).toBeInTheDocument()
  })
})
