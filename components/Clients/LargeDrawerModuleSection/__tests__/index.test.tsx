import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import LargeDrawerModuleSection from '../'

describe('LargeDrawerModuleSection', () => {
  const data = {
    header: 'Section Header',
    content: [
      {
        title: 'Item 1',
        body: 'Item 1 Body',
      },
      {
        title: 'Item 2',
        body: 'Item 2 Body',
      },
      {
        title: 'Item 3',
        body: 'Item 3 Body',
      },
    ],
  }

  it('renders section header and drawer modules', () => {
    render(<LargeDrawerModuleSection data={data} />)

    // Assert section header is rendered
    const sectionHeader = screen.getByRole('heading', {
      name: /section header/i,
    })
    expect(sectionHeader).toBeInTheDocument()

    // Assert drawer modules are rendered
    const drawerModules = screen.getAllByRole('listitem')
    expect(drawerModules).toHaveLength(data.content.length)
  })

  it('renders the correct number of open drawer modules', () => {
    const openSize = 3
    render(<LargeDrawerModuleSection data={data} openSize={openSize} />)

    // Assert the correct number of open drawer modules
    const openDrawerModules = screen.getAllByRole('listitem', { hidden: true })
    expect(openDrawerModules).toHaveLength(openSize)
  })
})
