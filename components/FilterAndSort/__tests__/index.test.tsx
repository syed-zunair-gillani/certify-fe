import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import FilterAndSort from '..'

const mockSortChange = jest.fn()

const sorts = [
  { label: 'Label 1', value: 'Value 1' },
  { label: 'Label 2', value: 'Value 2' },
]

describe('FilterAndSort component', () => {
  it('renders Sort component with sorts provided', () => {
    const { getByText } = render(
      <FilterAndSort sorts={sorts} sortChange={mockSortChange} />
    )
    const sortComponent = getByText('Sort:')
    expect(sortComponent).toBeInTheDocument()
    const defaultOption = getByText('Label 1')
    expect(defaultOption).toBeInTheDocument()
  })
})