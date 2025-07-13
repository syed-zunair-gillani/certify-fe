import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ArticleCardList from '..'
import { type ArticleProps } from '../ListItem'
import styles from './styles.module.css'


const mockArticles: ArticleProps[] = [
  { title: 'Article 1', content: [], date: 'data 1', src: '/1.svg' },
  { title: 'Article 2', content: [], date: 'data 2', src: '/1.svg' },
  { title: 'Article 3', content: [], date: 'data 3', src: '/1.svg' },
]

describe('ArticleCardList', () => {
  it('should render the correct number of articles', () => {
    render(<ArticleCardList articles={mockArticles} />)

    const articleCards = screen.getAllByRole('img') 
    expect(articleCards.length).toBe(mockArticles.length + 1)
  })

  it('should render the load more button when canBeLoadMore is true', () => {
    render(<ArticleCardList articles={mockArticles} canBeLoadMore={true} />)

    const loadMoreButton = screen.getByText('Load More')
    expect(loadMoreButton).toBeInTheDocument()
  })

  it('should not render the load more button when canBeLoadMore is false', () => {
    render(<ArticleCardList articles={mockArticles} canBeLoadMore={false} />)

    const loadMoreButton = screen.queryByText('Load More')
    expect(loadMoreButton).not.toBeInTheDocument()
  })

  it('should call loadMore function when load more button is clicked', () => {
    const loadMoreMock = jest.fn()
    render(<ArticleCardList articles={mockArticles} canBeLoadMore={true} loadMore={loadMoreMock} />)

    const loadMoreButton = screen.getByText('Load More')
    fireEvent.click(loadMoreButton)

    expect(loadMoreMock).toHaveBeenCalledTimes(1)
  })

  it('should render carousel style when isCarousel is true', () => {
    render(<ArticleCardList articles={mockArticles} isCarousel={true} />)

    const articleCardList = document.querySelector('div.article-card-list')
    expect(articleCardList).toHaveClass(styles['is-carousel'])
  })

  it('should not render carousel style when isCarousel is false', () => {
    render(<ArticleCardList articles={mockArticles} isCarousel={false} />)
    const articleCardList = document.querySelector('div.article-card-list')
    expect(articleCardList).not.toHaveClass(styles['is-carousel'])
  })
})