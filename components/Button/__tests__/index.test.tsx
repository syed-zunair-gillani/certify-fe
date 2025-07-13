import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '..'

describe('Button Component', () => {
  it('renders correctly with primary type', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button text="Primary Button" type="primary" onClick={onClickMock} textClasses='bg-coms-yellow' />
    )

    const span = getByText('Primary Button')
    expect(span).toBeInTheDocument()
    expect(span).toHaveClass('bg-coms-yellow')
  })

  it('calls onClick function when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button text="Click me" onClick={onClickMock} />
    )

    const button = getByText('Click me')
    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('renders icon correctly', () => {
    const onClickMock = jest.fn()
    const iconProps = {
      src: '/test-icon.svg',
      width: 20,
      height: 20,
      iconClasses: 'test-icon-class',
    }

    const { container } = render(
      <Button text="Button with Icon" onClick={onClickMock} iconProps={iconProps} />
    )

    const icon = container.querySelector('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('src', '/test-icon.svg')
    expect(icon).toHaveAttribute('width', '20')
    expect(icon).toHaveAttribute('height', '20')
    expect(icon).toHaveClass('test-icon-class')
  })
})

