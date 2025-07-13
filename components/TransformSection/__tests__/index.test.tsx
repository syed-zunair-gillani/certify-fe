import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TransformSection from '..'
import { BOOK_A_FREE_DEMO } from '@/constants'

describe('TransformSection component', () => {
  it('renders with default props', () => {
    render(
      <TransformSection
        title="Default Title"
        images={{ 
          src: '/image.svg',
          alt: ''
        }}
      />
    )

    const title = screen.getByRole('heading', { level: 2 })
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Default Title')
    expect(screen.getByText(BOOK_A_FREE_DEMO.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: BOOK_A_FREE_DEMO.text })).toHaveAttribute('href', BOOK_A_FREE_DEMO.href)
  })

  it('renders with custom button text and href', () => {
    const customButtonText = 'Custom Button Text'
    const customButtonHref = 'custom-href'

    render(
      <TransformSection
        title="Custom Title"
        images={{
          src: '/image.svg',
          alt: ''
        }}
        button={{ text: customButtonText, href: customButtonHref }}
      />
    )

    expect(screen.getByText('Custom Title')).toBeInTheDocument()
    expect(screen.getByText(customButtonText)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: customButtonText })).toHaveAttribute('href', customButtonHref)
  })

  it('renders with body text', () => {
    const bodyText = 'This is the body text.'

    render(
      <TransformSection
        title="Title with Body"
        images={{
          src: '/image.svg',
          alt: ''
        }}
        body={bodyText}
      />
    )

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Title with Body')
    expect(screen.getByText(bodyText)).toBeInTheDocument()
  })

})