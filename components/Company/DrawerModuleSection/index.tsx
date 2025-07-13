import React from 'react'
import classNames from 'classnames'
import { PortableText } from '@portabletext/react'
import { type PortableTextBlock } from '@portabletext/types'

import DrawerModule from './DrawerModule'
import type { Image as SanityImage } from '@sanity/types'

import styles from './styles.module.css'

interface LargeDrawerModuleSectionProps {
  data: {
    header: PortableTextBlock
    images: Array<{
      title: string
      image: SanityImage
    }>
  }
  classes?: {
    section?: string
    header?: string
    italic?: string
  }
}

const LargeDrawerModuleSection = ({
  data: { images, header },
  classes,
}: LargeDrawerModuleSectionProps): JSX.Element => {
  const sectionClasses = classNames(styles.section, classes?.section)

  const renderDrawerModule = (): JSX.Element => {
    return (
      <ul className={styles['right-container']}>
        {images?.map((item) => {
          return <DrawerModule key={item.title} data={item} />
        })}
      </ul>
    )
  }

  return (
    <section className={sectionClasses}>
      <div className={classNames(styles.header, classes?.header)}>
        <PortableText value={header} />
      </div>
      {renderDrawerModule()}
    </section>
  )
}

export default LargeDrawerModuleSection
