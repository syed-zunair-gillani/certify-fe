import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import HeaderNav from '../HeaderNav'
import FooterNav from '../FooterNav'
import layout from '../fixtures/mockLayoutData'

describe('Layout', () => {
  it('renders the header, main content, and footer', () => {
    render(
      <>
        <HeaderNav header={layout?.header} />
        <main>
          <div data-testid="main-content">Main Content</div>
        </main>
        <FooterNav footer={layout?.footer} />
      </>,
    )

    const header = screen.getByTestId('header-nav')
    const mainContent = screen.getByTestId('main-content')
    const footer = screen.getByTestId('footer-nav')

    expect(header).toBeInTheDocument()
    expect(mainContent).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })
})
