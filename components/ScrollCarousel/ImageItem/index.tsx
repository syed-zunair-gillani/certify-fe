import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import styles from '../styles.module.css'

export interface ImageItemProps {
  src: string | StaticImport
  width?: number | `${number}` | undefined
  height?: number | `${number}` | undefined
  alt?: string
}

const ImageItem: React.FC<ImageItemProps> = ({ src, width, height, alt }) => {
  return (
    <div className={styles['image-item']}>
      <Image
        src={src}
        width={width ?? 83}
        height={height ?? 25}
        quality={90}
        alt={alt ?? 'CertifyOS customers'}
      />
    </div>
  )
}

export default ImageItem
