import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import Menu from '../'

import layout from '@/components/Layout/fixtures/mockLayoutData'

describe('Menu', () => {
  const mockData = layout.footer.links
  it('renders menu items correctly', () => {
    render(<Menu data={mockData} />)

    const menuItems = screen.getAllByTestId('menu-item')

    expect(menuItems).toHaveLength(mockData.length)

    menuItems.forEach((menuItem, index) => {
      expect(menuItem).toHaveTextContent(mockData[index].title)
    })
  })
})
