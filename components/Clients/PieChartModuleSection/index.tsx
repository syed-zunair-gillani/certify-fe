import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import PieChartModule, { type PieChartModuleClasses } from './PieChartModule'
import BottomContent, { type BottomContentProps } from './BottomContent'

import styles from './styles.module.css'

export interface PieChartModuleSectionProps {
  data: {
    header: string
    pieChartModule: {
      content: Array<{
        title: string
        body: string
      }>
      bottomContent?: Array<{
        title?: string
        body?: string | string[]
      }>
    }
    images: {
      src?: string
      alt: string
    }
  }
  classes?: {
    'pie-chart-module-container'?: string
    image?: string
  } & PieChartModuleClasses['classes'] &
    BottomContentProps['classes']
}

const PieChartModuleSection = ({
  data,
  classes,
}: PieChartModuleSectionProps): JSX.Element => {
  const srcImage =
    data.images?.src !== undefined
      ? data.images.src
      : '/clients/health-system-benefits.png'
  return (
    <section className={styles.section} data-testid="pie-chart-module">
      <h2 className={styles.header}>{data.header}</h2>
      <div
        className={classNames(
          styles['pie-chart-module-container'],
          classes?.['pie-chart-module-container'],
        )}
      >
        <div className={styles['image-container']}>
          <Image
            className={classNames(styles.image, classes?.image)}
            src={srcImage}
            alt={data.images.alt}
            width="314"
            height="314"
          />
          <div className={styles['arrow-left']} />
          <div className={styles['arrow-right']} />
          <div className={styles['arrow-down']} />
        </div>
        <PieChartModule data={data.pieChartModule.content} classes={classes} />
      </div>
      {data.pieChartModule?.bottomContent != null && (
        <BottomContent
          data={data.pieChartModule?.bottomContent}
          classes={classes}
        />
      )}
    </section>
  )
}

export default PieChartModuleSection
