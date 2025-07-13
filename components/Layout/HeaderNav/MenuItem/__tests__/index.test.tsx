import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import MenuItem from '../'
import layout from '@/components/Layout/fixtures/mockLayoutData'

describe('MenuItem', () => {
  const testMenuItemData = layout.header.menus[0]

  test('renders the component with menu item data', () => {
    render(<MenuItem data={testMenuItemData} />)

    const menuItemElement = screen.getByTestId('menu-item')
    expect(menuItemElement).toBeInTheDocument()

    const menuItemTitle = screen.getByText(testMenuItemData.title)
    expect(menuItemTitle).toBeInTheDocument()
  })
})
