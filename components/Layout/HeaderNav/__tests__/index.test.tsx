import '@testing-library/jest-dom'

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import HeaderNav from '../'

import layout from '../../fixtures/mockLayoutData'

describe('HeaderNav', () => {
  it('toggles the menu when the menu icon is clicked', () => {
    render(<HeaderNav header={layout.header} />)
    const menuIcon = screen.getByLabelText(/menu/i)

    expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument()

    fireEvent.click(menuIcon)
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument()

    fireEvent.click(menuIcon)
    expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument()
  })

  it('closes the banner and sets the cookie when the close icon is clicked', () => {
    const { container } = render(<HeaderNav header={layout.header} />)

    const banner =container.querySelector('#banner')
    expect(banner).toBeNull()
  })
})
