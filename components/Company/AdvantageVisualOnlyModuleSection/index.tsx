import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import styles from './styles.module.css'

interface image {
  alt: string
  src: string
  width: number
  height: number
  title: string
  description: string
}

interface VisualOnlyModuleSectionProps {
  data: {
    header: string
    body: string
    images: image[]
  }
  classes?: {
    section?: string
    header?: string
    body?: string
    image?: string
  }
  bottomComponent?: React.ReactNode
}

const VisualOnlyModuleSection = ({
  data,
  classes,
  bottomComponent,
}: VisualOnlyModuleSectionProps): JSX.Element => {
  const sectionClasses = classNames(styles.section, classes?.section)

  const renderImageItemComponent = (
    startIdex: number,
    endIndex: number,
  ): JSX.Element => {
    return (
      <div className={styles['images-container-sub']}>
        {data.images.slice(startIdex, endIndex).map((subImage, index) => (
          <div key={index} className={styles['images-container-item']}>
            <Image
              key={index}
              className={classNames(styles.image, classes?.image)}
              src={subImage.src}
              alt={subImage.alt}
              width={subImage.width}
              height={subImage.height}
            />
            <p className={styles['images-container-item-title']}>
              {subImage.title}
            </p>
            <p className={styles['images-container-item-description']}>
              {subImage.description}
            </p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className={sectionClasses}>
      <h2 className={classNames(styles.header, classes?.header)}>
        {data.header}
      </h2>
      <div className={classNames('sans-body-big', styles.body, classes?.body)}>
        {data.body}
      </div>
      <div className={styles['images-container']}>
        {renderImageItemComponent(0, 3)}
        {renderImageItemComponent(3, 6)}
      </div>
      {bottomComponent}
    </section>
  )
}

export default VisualOnlyModuleSection
