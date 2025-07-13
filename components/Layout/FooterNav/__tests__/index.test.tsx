import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import FooterNav from '../'

import layout from '../../fixtures/mockLayoutData'

describe('FooterNav', () => {
  it('renders the footer navigation correctly', () => {
    render(<FooterNav footer={layout.footer} />)

    const footerNav = screen.getByTestId('footer-nav')
    const logoImage = screen.getByAltText('Certify provider data management')
    const menu = screen.getByTestId('menu')
    const business = screen.getByTestId('business')

    expect(footerNav).toBeInTheDocument()
    expect(logoImage).toBeInTheDocument()
    expect(menu).toBeInTheDocument()
    expect(business).toBeInTheDocument()
  })
})
