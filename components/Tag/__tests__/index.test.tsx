import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tag from '..'
import styles from './styles.module.css'

describe('Tag component', () => {
  it('should render with default props', () => {
    const { getByText }
      = render(<Tag />)

    const tagText = getByText('Press')  

    expect(tagText).toBeInTheDocument()
    expect(tagText).toHaveClass(styles.tag)
    expect(tagText).toHaveClass(styles.default)
  })

  it('should render with custom props', () => {
    const customColor = 'yellow-t'
    const customText = 'Click me'
    const { getByText } = render(<Tag color={customColor} text={customText} />)

    const tagText = getByText(customText)
    expect(tagText).toBeInTheDocument() 
    expect(tagText).toHaveTextContent(customText) 
  })

  it('should call onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<Tag onClick={onClickMock} />)

    const tagLabel = getByText('Press')
    fireEvent.click(tagLabel)

    expect(onClickMock).toHaveBeenCalledTimes(1) 
  })

  it('should accept additional classes', () => {
    const additionalClass = 'extra-class'
    const { getByText } = render(<Tag classes={additionalClass} />)

    const tagLabel = getByText('Press')

    expect(tagLabel).toHaveClass(additionalClass)
  })
})

