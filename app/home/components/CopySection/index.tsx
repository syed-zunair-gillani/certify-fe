import { PortableText } from '@portabletext/react'
import { type PortableTextBlock } from '@portabletext/types'
import styles from './styles.module.css'

interface CopySectionProps {
  title: PortableTextBlock
  body: string
  bgColor?: string
  sectionClasses?: string
  titleClasses?: string
  bodyClasses?: string
  sectionImage?: React.ReactElement
  sectionFooter?: React.ReactElement
}

const CopySection: React.FC<CopySectionProps> = ({
  title,
  body,
  bgColor,
  sectionClasses,
  sectionImage,
  sectionFooter,
  titleClasses,
  bodyClasses,
}) => {
  return (
    <section
      className={`${styles['copy-section']} ${sectionClasses}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`${styles['section-container']}`}>
        <PortableText value={title} />
        <p className={`${styles['section-describe']} ${bodyClasses}`}>{body}</p>
      </div>
      <div className={styles['section-image']}>{sectionImage}</div>
      {sectionFooter}
    </section>
  )
}

export default CopySection
