import styles from './styles.module.css'
import Image from 'next/image'
import { Link } from '@/components/Button'
import { BOOK_A_FREE_DEMO } from '@/constants'
import classNames from 'classnames'
import { PortableText } from '@portabletext/react'
import { type PortableTextBlock } from '@portabletext/types'

interface HeroSectionProps {
  bgColor: string
  title: string | React.ReactNode | PortableTextBlock
  description?: string
  imageURL: string
  imageALT: string
  imageWidth?: number
  imageHeight?: number
  classes?: {
    title?: string
    container?: string
    description?: string
    images?: string
  }
  button?: {
    text?: string
    href?: string
  }
}

const ProductHeroSection: React.FC<HeroSectionProps> = ({
  bgColor,
  title,
  description,
  imageURL,
  imageALT,
  imageWidth = 192,
  imageHeight = 192,
  classes,
  button,
}) => {
  const buttonText = button != null ? button.text : BOOK_A_FREE_DEMO.text
  const buttonHref = button != null ? button.href : BOOK_A_FREE_DEMO.href
  return (
    <div
      className={classNames(styles.container, classes?.container)}
      style={{ backgroundColor: bgColor }}
      data-testid="product-hero-section"
    >
      <div className={styles['text-box']}>
        <Image
          className={classNames(styles.image, classes?.images)}
          src={imageURL}
          alt={imageALT}
          width={imageWidth}
          height={imageHeight}
          priority
        />
        {(title as any)[0]?._type === 'block' ? (
          <div
            className={classNames(`${styles.title} heading-1`, styles.portableText, classes?.title)}
          >
            <PortableText value={title as PortableTextBlock} />
          </div>
        ) : (
          <h1
            className={classNames(`${styles.title} heading-1`, classes?.title)}
          >
            {title as string | React.ReactNode}
          </h1>
        )}
        <p
          className={classNames(
            'sans-body-big',
            styles.description,
            classes?.description,
          )}
        >
          {description}
        </p>
      </div>
      <Link text={buttonText} href={buttonHref} />
    </div>
  )
}

export default ProductHeroSection
