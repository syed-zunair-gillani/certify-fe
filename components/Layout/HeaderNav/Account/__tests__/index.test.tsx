import '@testing-library/jest-dom'

import React from 'react'

import { render, screen } from '@testing-library/react'

import Account from '..'

describe('Account component', () => {
  test('renders Account component correctly', () => {
    render(<Account />)

    expect(screen.getByText('Account')).toBeInTheDocument()
  })
})
