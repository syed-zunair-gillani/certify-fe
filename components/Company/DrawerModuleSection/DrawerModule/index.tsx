import React from 'react'
import Image from 'next/image'
import type { Image as SanityImage } from '@sanity/types'
import styles from './styles.module.css'
import classNames from 'classnames'
import { urlForImage } from '@/services/helper'

interface DrawerModuleProps {
  data: {
    title: string
    image: SanityImage,
  }
}

const DrawerModule = ({ data }: DrawerModuleProps): JSX.Element => {
  const containerClasses = classNames(styles.container)
  const src = urlForImage(data?.image)?.url()
  const renderIcon = (): JSX.Element => {
    return (
      <>
        <Image
          className={styles['drawer-icon']}
          src={src}
          alt={data?.image?.alt as string}
          width={99}
          height={99}
        />
      </>
    )
  }

  return (
    <li
      className={containerClasses}
    >
      {data.title}
      {renderIcon()}
    </li>
  )
}

export default DrawerModule
