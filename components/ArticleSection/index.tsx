'use client'

import React from 'react'
import { Link } from '@/components/Button'
import ArticleCardList from '@/components/ArticleCardList'
import styles from './styles.module.css'
import { type ArticleProps } from '@/components/ArticleCardList/ListItem'

const ArticleSection: React.FC<{
  initArticles: ArticleProps[]
  title?: JSX.Element | string
  text?: string
  href?: string
}> = ({ initArticles, title = 'news', text = 'Visit The Press Center', href = '/company/news' }): JSX.Element => {
  return (
    <section className={styles['article-section']}>
      <div className={styles['section-title']}>
        <h2 className={styles.title}>{title}</h2>
        <Link
          btnClasses={styles['desktop-btn']}
          text={text}
          href={href} />
      </div>
      <div className={styles['card-list']}>
        <ArticleCardList
          articles={initArticles}
          isCarousel={true}
          perPage={3}
          canBeLoadMore={false}
        />
      </div>
      <div className={styles['mobile-btn']}>
        <Link
          text={text}
          href={href}
        />
      </div>
    </section>
  )
}

export default ArticleSection
