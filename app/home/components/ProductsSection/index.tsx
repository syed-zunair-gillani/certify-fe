import { BOOK_A_FREE_DEMO } from '@/constants'
import { Link } from '@/components/Button'
import ProductItem from './ProductItem'
import CertificationItem from './CertificationItem'
import styles from './styles.module.css'

interface SectionProps {
  title: string
  desc: string
  items: Array<{
    title: string
    desc?: string
    href?: string
    image: {
      src: string
      alt: string
    }
    bgColor?: string
  }>
}

const SectionHeader: React.FC<{
  title: string
  desc: string
  children: React.ReactNode
  classes?: string
}> = ({ title, desc, classes, children }) => {
  return (
    <div className={`${styles['section-header']} ${classes}`}>
      <div className={`${styles['section-text']}`}>
        <h2 className={`sans-body-small ${styles['section-title']}`}>
          {title}
        </h2>
        <p className={`sans-body-big ${styles['section-describe']}`}>{desc}</p>
      </div>
      {children}
    </div>
  )
}

const ProductsSection: React.FC<{
  product: SectionProps
  certification: SectionProps
  button?: {
    text: string
    href: string
  }
}> = ({ product, certification, button }) => {
  const buttonText = button != null ? button.text : BOOK_A_FREE_DEMO.text
  const buttonHref = button != null ? button.href : BOOK_A_FREE_DEMO.href
  return (
    <section className={`${styles['product-section']}`}>
      <div>
        <SectionHeader
          title={product.title}
          desc={product.desc}
          classes={styles['flex-end']}
        >
          <Link text={buttonText} href={buttonHref} />
        </SectionHeader>
        <div className={styles['product-items']}>
          {product.items.map((props, index) => (
            <ProductItem {...props} key={index} />
          ))}
        </div>
      </div>
      <SectionHeader title={certification.title} desc={certification.desc}>
        <div className={styles['certification-items']}>
          {certification.items.map((props, index) => (
            <CertificationItem {...props} key={index} />
          ))}
        </div>
      </SectionHeader>
    </section>
  )
}

export default ProductsSection
