import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

export interface BottomContentProps {
  data?: Array<{
    title?: string
    body?: string | string[]
    bgColor?: {
      hex?: string
    }
  }>
  classes?: {
    'bottom-container'?: string
  }
}

const BottomContent = ({ data, classes }: BottomContentProps): JSX.Element => {
  const containerClasses = classNames(
    styles.container,
    classes?.['bottom-container'],
    {
      [styles['center-container']]: data != null && data?.length < 3,
    },
  )
  return (
    <div className={containerClasses} data-testid="item">
      {data?.map((item) => (
        <div key={item.title} className={styles.item}>
          <div
            className={styles.title}
            data-testid="title"
            style={{ backgroundColor: item.bgColor?.hex ?? '#f3c948' }}
          >
            {item.title}
          </div>
          <div className={styles.body} data-testid="body">
            {Array.isArray(item.body)
              ? item.body.map((str) => <div key={str}>{str}</div>)
              : item.body}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BottomContent
