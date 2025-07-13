import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { headerNav } from '../../../data'
import Menu from '../'

import layout from '@/components/Layout/fixtures/mockLayoutData'

describe('Menu', () => {
  test('renders the component with menu items', () => {
    render(<Menu menus={layout.header.menus}/>)

    const containerElement = screen.getByTestId('menu-container')
    expect(containerElement).toBeInTheDocument()
    expect(containerElement).toHaveClass('container')

    const menuItemElements = screen.getAllByTestId('menu-item')
    expect(menuItemElements).toHaveLength(headerNav.length)
  })
})
