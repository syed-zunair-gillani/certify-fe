import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import PayerResources, { type PayerResourcesProps } from '../'
import { type Post } from '@/services/post'

describe('PayerResources', () => {
  const mockData: Post[] = [
    {
      title: 'Post 1',
      slug: 'post-1',
      dek: [],
      mainImageUrl: 'https://example.com/image-1.jpg',
      body: [],
      tag: {
        name: 'Tag 1',
        slug: 'tag-1',
        color: '#ff0000',
      },
      topic: {
        name: 'blog',
        slug: {
          current: 'blog',
          _type: 'string'
        },
        postCount: 1
      },
      pageTitle: 'Page Title 1',
      metaDescription: 'Meta Description 1',
      ogTitle: 'Open Graph Title 1',
      ogDescription: 'Open Graph Description 1',
      ogUrl: 'https://example.com/post-1',
      ogType: 'article',
      ogImageUrl: 'https://example.com/og-image-1.jpg',
      publishedAt: '2022-01-01',
      postType: 'Type 1',
      keywords: 'Keyword 1',
      canonical: 'https://example.com/post-1',
      metaRobots: 'index,follow',
      schemaMarkup: [
        {
          type: 'type',
        },
      ],
    },
  ]

  const mockHeaderData = {
    header: 'Header Title',
    body: 'Header Body',
    button: {
      text: 'Button Text',
      href: '/button-link',
    },
  }

  const mockClasses = 'custom-classes'

  it('renders the payer resources section correctly with header', () => {
    const props: PayerResourcesProps = {
      data: mockData,
      headerData: mockHeaderData,
      classes: mockClasses,
    }
    render(<PayerResources {...props} />)

    const section = screen.getByTestId('payer-resources-section')
    const header = screen.getByTestId('header-container')
    const postList = screen.getByTestId('post-list')

    expect(section).toBeInTheDocument()
    expect(header).toBeInTheDocument()
    expect(postList).toBeInTheDocument()

    // Additional assertions for classes
    expect(section).toHaveClass('section')
    expect(section).toHaveClass(mockClasses)
    expect(header).toHaveClass('container')
  })

  it('renders the payer resources section correctly without header', () => {
    const props: PayerResourcesProps = {
      data: mockData,
      classes: mockClasses,
    }
    render(<PayerResources {...props} />)

    const header = screen.queryByTestId('header-container')

    expect(header).not.toBeInTheDocument()
  })
})
