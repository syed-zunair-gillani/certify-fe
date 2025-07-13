'use client'

import React from 'react'
import classNames from 'classnames'

import TopicsFilter, { type TopicsFilterProps } from '../TopicsFilter'
import FilterAndSort from '../'

import styles from './styles.module.css'

export interface Props {
  label: string
  value: string
}

const Header: React.FC<
  {
    sorts?: Props[]
    sortChange: (value: string) => void
  } & TopicsFilterProps
> = ({
  sorts,
  sortChange,
  handleTagChange,
  handleTagClick,
  topics,
  topic,
  currentTag,
}) => {
  const isNotTopics = topics?.length != null

  return (
    <div
      className={classNames(styles.header, {
        [styles['is-not-topics-header']]: isNotTopics,
      })}
    >
      <TopicsFilter
        topics={topics}
        handleTagChange={handleTagChange}
        handleTagClick={handleTagClick}
        topic={topic}
        currentTag={currentTag}
      />
      <FilterAndSort sorts={sorts} sortChange={sortChange} />
    </div>
  )
}

export default Header
