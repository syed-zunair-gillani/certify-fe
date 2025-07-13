'use client'
import React from 'react'
import ArticleCardList from '@/components/ArticleCardList'
import Header from '@/components/FilterAndSort/Header'
import { getArticles } from '../action'
import { type ArticleProps } from '@/components/ArticleCardList/ListItem'
import { type Post } from '@/services/post'

const ArticleList: React.FC<{
  initArticles: ArticleProps[]
  totalNum: number
  topics?: Array<Post['topic']>
}> = ({ initArticles, totalNum, topics }): JSX.Element => {
  const [page, SetPage] = React.useState<number>(1)
  const [sortOrder, SetOrder] = React.useState<string>('desc')
  const [articles, setArticles] = React.useState<ArticleProps[]>(initArticles)
  const [topic, setTopic] = React.useState('all')
  const [articleTotalNum, setArticleTotalNum] = React.useState(totalNum)
  const [currentTag, setCurrentTag] = React.useState('all')

  const loadMore = (): void => {
    const cPage = page + 1
    fetchList({ page: cPage, sortOrder, oldest: articles, topic })
  }

  const fetchList = ({
    page,
    sortOrder,
    oldest,
    topic,
  }: {
    page: number
    sortOrder: string
    oldest: ArticleProps[]
    topic: string
  }): void => {
    getArticles({ page, sortOrder, topic })
      .then((result) => {
        const news = result?.posts
        setArticleTotalNum(result.totalNum)
        if (Array.isArray(news)) {
          setArticles([...oldest, ...news])
          if (news.length > 0) {
            SetPage(page)
          }
        }
      })
      .catch((e) => {
        console.warn(e)
      })
  }

  const sortChange = (value: string): void => {
    SetOrder(value)
    SetPage(1)
    fetchList({ page: 1, sortOrder: value, oldest: [], topic })
  }

  const handleTag = (value: string): void => {
    setTopic(value)
    fetchList({
      page: 1,
      sortOrder,
      oldest: [],
      topic: value,
    })
    setCurrentTag(value)
  }

  const handleTagClick = (item: {
    name: string
    slug: {
      current: string
    }
  }): void => {
    if (item.slug.current !== topic) {
      handleTag(item.slug.current)
    }
  }

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value

    handleTag(value)
  }

  return (
    <>
      <Header
        topics={topics}
        handleTagChange={handleTagChange}
        handleTagClick={handleTagClick}
        topic={topic}
        currentTag={currentTag}
        sortChange={sortChange}
        sorts={[
          {
            label: 'Newest',
            value: 'desc',
          },
          {
            label: 'Oldest',
            value: 'asc',
          },
        ]}
      />
      <ArticleCardList
        loadMore={loadMore}
        canBeLoadMore={articles.length < articleTotalNum}
        perPage={3}
        firstFull={true}
        articles={articles}
      />
    </>
  )
}

export default ArticleList
