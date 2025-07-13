import React from 'react'

import styles from './styles.module.css'

interface BottomContentProps {
  data?: Array<{
    iconContent?: string
    bottomContent?: string
    bgColor?: {
      hex?: string
    }
  }>
  bgColor?: string
  classes?: {
    'pie-chart-module-container'?: string
    image?: string
  }
}

const BottomContent = ({ data, bgColor }: BottomContentProps): JSX.Element => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: bgColor ?? '#fff38b' }}
    >
      <div className={styles.items}>
        {data?.map((item) => (
          <div key={item?.iconContent} className={styles.item}>
            <div
              className={styles.title}
              style={{ backgroundColor: item?.bgColor?.hex ?? '#f3c948' }}
            >
              {item?.iconContent}
            </div>
            <div className={styles.body}>{item?.bottomContent}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottomContent
