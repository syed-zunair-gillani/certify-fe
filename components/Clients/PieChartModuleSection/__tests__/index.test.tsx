import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import PieChartModuleSection, { type PieChartModuleSectionProps } from '../'

describe('PieChartModuleSection', () => {
  const mockData: PieChartModuleSectionProps['data'] = {
    header: 'Header',
    pieChartModule: {
      content: [
        {
          title: 'Item 1',
          body: 'Item 1 Body',
        },
        {
          title: 'Item 2',
          body: 'Item 2 Body',
        },
      ],
      bottomContent: [
        {
          title: 'Bottom Item 1',
          body: 'Bottom Item 1 Body',
        },
      ],
    },
    images: {
      alt: 'Image Alt',
    },
  }

  const mockClasses: PieChartModuleSectionProps['classes'] = {
    'pie-chart-module-container': 'custom-container',
    image: 'custom-image',
  }

  it('renders the header', () => {
    render(<PieChartModuleSection data={mockData} />)
    const headerElement = screen.getByText('Header')
    expect(headerElement).toBeInTheDocument()
  })

  it('renders the pie chart module', () => {
    render(<PieChartModuleSection data={mockData} />)
    const pieChartModuleElement = screen.getByTestId('pie-chart-module')
    expect(pieChartModuleElement).toBeInTheDocument()
  })

  it('applies custom classes', () => {
    render(<PieChartModuleSection data={mockData} classes={mockClasses} />)
    const imageElement = screen.getByAltText('Image Alt')

    expect(imageElement).toHaveClass('custom-image')
  })
})
