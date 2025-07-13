import React from 'react'
import { type Post } from '@/services/post'
import { toPlainText } from '@portabletext/react'
import Tag from '@/components/Tag'
import Icon from '@/components/Icon'
import styles from './styles.module.css'
import { renderDateTime } from '@/utils/renderDateTime'

const PostList = ({ data }: { data: Post[] }): JSX.Element => {
  return (
    <ul className={styles.postList} data-testid="post-list" id="post-list">
      {data.map((item) => {
        const publishedAt = renderDateTime(item.publishedAt)
        const getHref =
          item.postType === 'news'
            ? `/company/${item.postType}/${item.slug}`
            : `/resources/${item.postType}/${item.slug}`
        return (
          <li key={item.title} className={styles.item}>
            <a href={getHref} className={styles.link}></a>
            <div className={styles.itemContainer}>
              <div className={styles['left-container']}>
                {item.tag !== null && item.tag !== undefined ? (
                  <Tag
                    text={item.tag.name}
                    color={item.tag.color}
                    classes={styles['mobile-tag']}
                    href={getHref}
                  />
                ) : (
                  <></>
                )}
                <div className={`${styles['title-box']}`}>
                  <div className={`${styles.title}`}>{item.title}</div>
                </div>
                <div className={styles['published-at']}>{publishedAt}</div>
              </div>
              <div className={styles['right-container']}>
                {item.tag !== null && item.tag !== undefined ? (
                  <Tag
                    text={item.tag.name}
                    color={item.tag.color}
                    classes={styles['desktop-tag']}
                    href={getHref}
                  />
                ) : (
                  <></>
                )}
                <div className={styles['portable-text']}>
                  {Array.isArray(item.body) &&
                    item.body.length > 0 &&
                    toPlainText(item.body[0])}
                </div>
              </div>
              <Icon name="ArrowRightThin" width="18" height="36" className={styles.icon} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default PostList
