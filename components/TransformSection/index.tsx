import { PortableText } from '@portabletext/react'
import { type PortableTextBlock } from '@portabletext/types'
import { Link } from '../Button'
import SectionImage, { type SectionImageProps } from './SectionImage'
import styles from './styles.module.css'
import { BOOK_A_FREE_DEMO } from '@/constants'
import classNames from 'classnames'

interface TransformSectionProps {
  title: string | React.ReactElement | PortableTextBlock
  images: SectionImageProps
  containerClasses?: string
  transformSectionClasses?: string
  imageClasses?: string
  body?: string
  button?: {
    text?: string
    href?: string
  }
  classes?: Record<string, string>
}

const TransformSection: React.FC<TransformSectionProps> = ({
  title,
  images,
  transformSectionClasses,
  containerClasses,
  imageClasses,
  classes,
  body,
  button,
}) => {
  const buttonText = button != null ? button.text : BOOK_A_FREE_DEMO.text
  const buttonHref = button != null ? button.href : BOOK_A_FREE_DEMO.href
  return (
    <section
      className={`${styles['transform-section']} ${transformSectionClasses}`}
    >
      <div
        className={`${styles['form-container']} ${styles.col} ${containerClasses}`}
      >
        <div className={styles.form}>
          <div className={classNames(styles['form-text'], classes?.title)}>
            {(title as any)[0]?._type === 'block' ? (
              <PortableText value={title as PortableTextBlock} />
            ) : (
              <h2 className={styles['form-title']}>
                {title as string | React.ReactElement}
              </h2>
            )}
            {body != null && <h3 className={styles['form-body']}>{body}</h3>}
            <SectionImage {...images} classes={styles['mobile-image']} />
            <div>
              <Link
                text={buttonText}
                btnClasses={styles.button}
                href={buttonHref}
              ></Link>
            </div>
          </div>
        </div>
      </div>
      <SectionImage
        {...images}
        classes={`${styles['desktop-image']} ${imageClasses}`}
      />
    </section>
  )
}

export default TransformSection
