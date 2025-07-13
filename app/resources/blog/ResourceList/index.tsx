'use client'

import React from 'react'
import Header from '@/components/FilterAndSort/Header'
import PayerResources from '@/components/PayerResources'
import { getLists } from '../../action'
import { type Post } from '@/services/post'
import Button from '@/components/Button'
import styles from '../styles.module.css'

interface ResourceListProps {
  list: Post[]
  searchKey?: string
  totalNum: number
  topics?: Array<Post['topic']>
}

const ResourceList: React.FC<ResourceListProps> = ({
  list,
  searchKey,
  totalNum,
  topics,
}) => {
  const [page, SetPage] = React.useState<number>(1)
  const [sortOrder, SetOrder] = React.useState<string>('desc')
  const [lists, setList] = React.useState<Post[]>(list)
  const [topic, setTopic] = React.useState('all')
  const [articleTotalNum, setArticleTotalNum] = React.useState(totalNum)
  const [currentTag, setCurrentTag] = React.useState('all')

  const loadMore = (): void => {
    const cPage = page + 1
    fetchList({ page: cPage, sortOrder, oldest: lists, topic })
  }

  const fetchList = ({
    page,
    sortOrder,
    oldest,
    topic,
  }: {
    page: number
    sortOrder: string
    oldest: Post[]
    topic: string
  }): void => {
    getLists({ page, sortOrder, searchKey, topic })
      .then((result) => {
        const news = result?.posts
        setArticleTotalNum(result.totalNum)

        if (Array.isArray(news)) {
          setList([...oldest, ...news])
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
      <PayerResources data={lists} classes={styles['payer-resources']} />
      {lists.length < articleTotalNum && (
        <div className={styles['load-more']}>
          <Button text="Load More" onClick={loadMore} />
        </div>
      )}
    </>
  )
}

export default ResourceList
