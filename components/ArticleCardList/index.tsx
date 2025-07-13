"use client"
import React from 'react'
import styles from './styles.module.css'
import ListItem, { type ArticleProps } from './ListItem'
import Button from '../Button'

interface ArticleCardListProps {
  perPage?: number;
  articles: ArticleProps[];
  isCarousel?: boolean;
  loadMore?: () => void;
  canBeLoadMore?: boolean;
  firstFull?: boolean
}

const ArticleCardList: React.FC<ArticleCardListProps> = ({
  perPage = 3,
  articles,
  loadMore,
  canBeLoadMore = true,
  isCarousel = false,
  firstFull = false
}) => {

  const _loadMore = (): void => {
    if (loadMore !== undefined) {
      loadMore()
    }
  }

  return (
    <div className={`${styles['article-card-list']}  ${isCarousel ? styles['is-carousel'] : ''}`}>
      <div className={styles['scrollbar-mask']}>
        <div className={`${styles.list}`}
        >
          {
            <ListItem
              data={articles}
              size={perPage}
              firstFull={firstFull} />
          }
        </div>
        <div className={styles.mask}></div>
      </div>
      {
        canBeLoadMore && <div className={styles['load-more']}><Button text='Load More' onClick={_loadMore} /></div>
      }
    </div>
  )
}

export default ArticleCardList