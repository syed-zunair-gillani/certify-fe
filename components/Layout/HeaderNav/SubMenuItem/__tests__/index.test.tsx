import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'

import SubMenuItem from '../'

import layout from '@/components/Layout/fixtures/mockLayoutData'

describe('SubMenuItem', () => {
  const mockData = layout.header.menus[0].subMenus[0]
  test('renders the component with sub menu item data', () => {
    render(
      <SubMenuItem index={0} data={mockData} setIsHoverSubMenuOpen={jest.fn()} />,
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()

    const menuItemTitle = screen.getByText(mockData.text)
    expect(menuItemTitle).toBeInTheDocument()
  })
})
