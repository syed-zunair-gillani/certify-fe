import Image from 'next/image'
import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import styles from '../styles.module.css'

export interface SectionImageProps {
  src: string | StaticImport
  alt: string
  width?: number
  height?: number
  classes?: string
}

const SectionImage: React.FC<SectionImageProps> = ({
  src,
  alt,
  width = 1171,
  height = 1012,
  classes,
}) => {
  return (
    <div className={`${styles['section-image']} ${styles.col} ${classes}`}>
      <Image
        className={styles.image}
        src={src}
        alt={alt}
        quality={90}
        width={width}
        height={height}
      />
    </div>
  )
}

export default SectionImage
