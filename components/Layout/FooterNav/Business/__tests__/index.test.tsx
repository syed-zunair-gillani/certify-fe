import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { footerNav } from '../../../data'

import Business from '../'

describe('Business', () => {
  test('renders business information correctly', () => {
    render(<Business data={footerNav.business} />)

    const copyRightElement = screen.getByText(footerNav.business.copyRight)
    expect(copyRightElement).toBeInTheDocument()

    const privacyPolicyLink = screen.getByRole('link', {
      name: footerNav.business.privacyPolicy.text,
    })
    expect(privacyPolicyLink).toHaveAttribute(
      'href',
      footerNav.business.privacyPolicy.href,
    )

    const termsOfServiceLink = screen.getByRole('link', {
      name: footerNav.business.termsOfService.text,
    })
    expect(termsOfServiceLink).toHaveAttribute(
      'href',
      footerNav.business.termsOfService.href,
    )
  })
})
