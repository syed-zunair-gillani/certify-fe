import Image from 'next/image'
import styles from '../styles.module.css'

interface ProductItemProps {
  title: string
  image: {
    src: string
    alt: string
  }
  bgColor?: string
}

const CertificationItem: React.FC<ProductItemProps> = ({
  title,
  image,
  bgColor,
}) => {
  return (
    <div
      className={styles['certification-item']}
      style={{ backgroundColor: bgColor ?? '#e2dff7' }}
    >
      <Image
        className={styles.image}
        src={image.src}
        width={123}
        height={123}
        quality={90}
        alt={image.alt}
      />
      <div className={`eyebrow ${styles['certification-title']}`}>{title}</div>
    </div>
  )
}

export default CertificationItem
