import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

interface VisualHighlightsProps {
  data: Array<{
    title: string
    body: string
  }>
  classes?: {
    container?: string
  }
}

const VisualHighlights = ({
  data,
  classes,
}: VisualHighlightsProps): JSX.Element => {
  return (
    <div className={classNames(styles.container, classes?.container)}>
      {data.map((item) => (
        <div key={item.title} className={styles.item}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.body}>{item.body}</div>
        </div>
      ))}
    </div>
  )
}

export default VisualHighlights
