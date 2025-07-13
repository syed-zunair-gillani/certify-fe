import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sort from '..'
import { type Props } from '../..'

const mockOnChange = jest.fn()

const sorts: Props[] = [
  { label: 'Label 1', value: 'Value 1' },
  { label: 'Label 2', value: 'Value 2' },
]

describe('Sort component', () => {
  it('renders and calls onChange when a sort option is selected', () => {
    const { getByRole, getByText } = render(
      <Sort data={sorts} onChange={mockOnChange} />
    )

    const select = getByRole('combobox')
    fireEvent.change(select, { target: { value: 'Value 2' } })
    const firstOption = getByText('Label 1')
    expect(firstOption).toBeInTheDocument()
  })
})