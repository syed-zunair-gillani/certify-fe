import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles.module.css'

interface ProductItemProps {
  title: string
  desc?: string
  href?: string
  image: {
    src: string
    alt: string
  }
  bgColor?: string
}

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  desc,
  href,
  image,
  bgColor
}) => {
  return (
    <Link className={styles['product-item']} href={href ?? ''}>
      <div className={styles['product-text']}>
        <div className={styles['product-logo']}>
          <div className={styles.logo} style={{ backgroundColor: bgColor }}>
            <Image
              src={image.src}
              width={53}
              height={42}
              alt={image.alt}
            />
          </div>
          <div className={styles['product-title']}>{title}</div>
        </div>
        <div className={`sans-body-small ${styles['product-desc']}`}>{desc}</div>
      </div>
      <div className={styles['product-link']}>
        <Image
          src='/arrow-right30x15.svg'
          width={18}
          height={36} alt=''
        />
      </div>
    </Link>
  )
}

export default ProductItem