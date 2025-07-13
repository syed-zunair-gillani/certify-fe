import '@testing-library/jest-dom'

import React from 'react'
import { render, type RenderResult } from '@testing-library/react'
import Icon, { type nameType } from '../'

describe('Icon', () => {
  test('renders the correct icon based on the name prop', () => {
    const name: nameType = 'ArrowUp'
    const props = {
      className: 'icon-class',
      width: '24px',
      height: '24px',
    }

    const { container }: RenderResult = render(<Icon name={name} {...props} />)

    const renderedIcon: HTMLElement | null = container.firstChild as HTMLElement
    expect(renderedIcon).toBeInTheDocument()
    expect(renderedIcon).toHaveClass('icon-class')
    expect(renderedIcon).toHaveAttribute('width', '24px')
    expect(renderedIcon).toHaveAttribute('height', '24px')
  })
})
