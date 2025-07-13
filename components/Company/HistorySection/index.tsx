import FormContainer from './FormContainer'
import SectionImage from './SectionImage'
import styles from './styles.module.css'
import { type PortableTextBlock } from '@portabletext/types'
import type { Image as SanityImage } from '@sanity/types'

interface HistorySectionProps {
  title: string
  body: PortableTextBlock
  image: SanityImage
  imageWidth?: number
  imageHeight?: number
  classes?: {
    'form-container'?: string
    'section-image'?: string
    image?: string
  }
  bgColor?: {
    hex?: string
  }
}

const HistorySection: React.FC<HistorySectionProps> = ({
  title,
  body,
  image,
  imageWidth,
  imageHeight,
  classes,
  bgColor,
}) => {
  return (
    <section
      className={`${styles['history-section']}`}
      style={{ backgroundColor: bgColor?.hex ?? '#c9bee9' }}
    >
      <SectionImage
        image={image}
        classes={classes}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
      <FormContainer title={title} body={body} classes={classes} />
    </section>
  )
}

export default HistorySection
