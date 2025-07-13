import Image from 'next/image'
import classNames from 'classnames'
import styles from '../styles.module.css'
import type { Image as SanityImage } from '@sanity/types'
import { urlForImage } from '@/services/helper'
export interface SectionImageProps {
  image: SanityImage
  imageWidth?: number
  imageHeight?: number
  classes?: {
    'section-image'?: string
    image?: string
  }
}

const SectionImage: React.FC<SectionImageProps> = ({
  image,
  classes,
  imageWidth = 1171,
  imageHeight = 1012,
}) => {
  const src = urlForImage(image)?.url()
  const alt = image?.alt as string

  return (
    <div
      className={classNames(
        styles['section-image'],
        styles.col,
        classes?.['section-image'],
      )}
    >
      <Image
        className={classNames(styles.image, classes?.image)}
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
      />
    </div>
  )
}

export default SectionImage
