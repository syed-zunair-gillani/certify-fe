import Image from 'next/image'
import classNames from 'classnames'
import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import styles from '../styles.module.css'

export interface SectionImageProps {
  src: string | StaticImport
  alt: string
  width?: number
  height?: number
  classes?: {
    'section-image'?: string
    image?: string
  }
  bgColor?: string
}

const SectionImage: React.FC<SectionImageProps> = ({
  src,
  alt,
  width = 1171,
  height = 1012,
  classes,
  bgColor,
}) => {
  return (
    <div
      className={classNames(
        styles['section-image'],
        styles.col,
        classes?.['section-image'],
      )}
      style={{ backgroundColor: bgColor ?? '#d9d5f7' }}
    >
      <Image
        className={classNames(styles.image, classes?.image)}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
      />
    </div>
  )
}

export default SectionImage
