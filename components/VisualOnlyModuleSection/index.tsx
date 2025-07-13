import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import VisualHighlights from '@/components/VisualOnlyModuleSection/VisualHighlights'
import { Link } from '@/components/Button'

import styles from './styles.module.css'

interface VisualOnlyModuleSectionProps {
  data: {
    header: string
    body: string
    images: {
      alt: string
      src: string
      width?: number
      height?: number
    }
    visualHighlights?: Array<{
      title: string
      body: string
    }>
    button?: {
      text: string
      href: string
    }
    bgColor?: string
  }
  classes?: {
    section?: string
    header?: string
    body?: string
    image?: string
  }
  bottomComponent?: React.ReactNode
  images?: {
    width?: number
    height?: number
  }
}

const VisualOnlyModuleSection = ({
  data,
  classes,
  bottomComponent,
  images,
}: VisualOnlyModuleSectionProps): JSX.Element => {
  const sectionClasses = classNames(styles.section, classes?.section)

  const imageWidth = images !== undefined ? images.width : data.images.width
  const imageHeight = images !== undefined ? images.height : data.images.height

  return (
    <section
      className={sectionClasses}
      style={{ backgroundColor: data?.bgColor ?? '#d9d5f7' }}
    >
      <h2 className={classNames(styles.header, classes?.header)}>
        {data.header}
      </h2>
      <div className={classNames('sans-body-big', styles.body, classes?.body)}>
        {data.body}
      </div>
      <Image
        className={classNames(styles.image, classes?.image)}
        src={data.images.src}
        alt={data.images.alt}
        width={imageWidth}
        height={imageHeight}
        quality={90}
      />
      {data.visualHighlights !== undefined && (
        <VisualHighlights data={data.visualHighlights} />
      )}
      {data.button !== undefined && (
        <div className={styles['button-container']}>
          <Link text={data.button?.text} href={data.button?.href} />
        </div>
      )}

      {bottomComponent}
    </section>
  )
}

export default VisualOnlyModuleSection
