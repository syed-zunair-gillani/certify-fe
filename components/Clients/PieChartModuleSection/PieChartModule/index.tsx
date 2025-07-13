import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

export interface PieChartModuleProps extends PieChartModuleClasses {
  data: Array<{
    title: string
    body: string
  }>
}

export interface PieChartModuleClasses {
  classes?: {
    'content-container'?: string
    content?: string
    'content-title'?: string
    'content-body'?: string
  }
}

const PieChartModule = ({
  data,
  classes,
}: PieChartModuleProps): JSX.Element => {
  return (
    <div
      className={classNames(
        styles['content-container'],
        classes?.['content-container'],
      )}
      data-testid="container"
    >
      {data.map((item) => {
        return (
          <div
            key={item.title}
            data-testid="item"
            className={classNames(styles.content, classes?.content)}
          >
            <p
              className={classNames(
                styles['content-title'],
                classes?.['content-title'],
              )}
              data-testid="title"
            >
              {item.title}
            </p>
            <p
              className={classNames(
                'sans-body-small',
                styles['content-body'],
                classes?.['content-body'],
              )}
              data-testid="body"
            >
              {item.body}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default PieChartModule
