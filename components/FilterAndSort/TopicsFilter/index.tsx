'use client'

import React, { Fragment } from 'react'
import classNames from 'classnames'
import Tag from '@/components/Tag'
import Icon from '@/components/Icon'
import { type Post } from '@/services/post'

import styles from './styles.module.css'

export interface TopicsFilterProps {
  handleTagChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handleTagClick?: (value: Post['topic']) => void
  topics?: Array<Post['topic']>
  topic?: string
  currentTag?: string
}

const TopicsFilter: React.FC<TopicsFilterProps> = ({
  handleTagChange,
  handleTagClick,
  topics,
  topic,
  currentTag,
}) => {
  const isNotTopics = topics?.length != null

  const handleClick = (item: Post['topic']): void => {
    if (handleTagClick !== null && handleTagClick !== undefined) {
      handleTagClick(item)
    }
  }

  const renderDesktopTags = (): JSX.Element => {
    return (
      <>
        {topics?.map((item, index) => {
          const tagClasses = classNames(styles.tag, {
            [styles['active-tag']]: item.slug.current === topic,
          })
          return (
            <Fragment key={`${item.name}${index}`}>
              {item.postCount !== 0 && (
                <Tag
                  text={item.name}
                  onClick={() => {
                    handleClick(item)
                  }}
                  classes={tagClasses}
                />
              )}
            </Fragment>
          )
        })}
      </>
    )
  }

  const renderMobileTags = (): JSX.Element => {
    return (
      <>
        <select
          value={currentTag}
          className={styles.select}
          onChange={handleTagChange}
        >
          {topics?.map((item, index) => (
            <Fragment key={`${item.slug.current}${index}`}>
              {item.postCount !== 0 && (
                <option value={item.slug.current}>{item.name}</option>
              )}
            </Fragment>
          ))}
        </select>
        <Icon name="ArrowDown2" className={styles.arrow} />
      </>
    )
  }

  return (
    <>
      {isNotTopics && (
        <div className={styles['topics-container']}>
          <div className={styles['topics-text']}>FILTER:</div>
          <div className={styles['tag-container']}>
            {renderDesktopTags()}
            {renderMobileTags()}
          </div>
        </div>
      )}
    </>
  )
}

export default TopicsFilter
