import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import NCQAAccreditedModule from '../'

describe('NCQAAccreditedModule', () => {
  test('renders the component with the correct content', () => {
    render(<NCQAAccreditedModule />)

    // 断言渲染结果
    const imageElement = screen.getByAltText(
      'Certified NCQA health information product',
    )
    const titleElement = screen.getByText('NCQA-Certified')
    const paragraphElement = screen.getByText(
      'Partner with an experienced CVO that’s NCQA-certified for 11 out of 11 verification services.',
    )

    expect(imageElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(paragraphElement).toBeInTheDocument()
  })
})
