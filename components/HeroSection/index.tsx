import FormContainer, { type FormContainerProps } from './FormContainer'
import SectionImage, { type SectionImageProps } from './SectionImage'
import styles from './styles.module.css'

interface HeroSectionProps {
  form: FormContainerProps
  images: SectionImageProps
  classes?: {
    title?: string
    'form-container'?: string
    'section-image'?: string
    'form-text'?: string
    'btn-classes'?: string
    image?: string
  }
  bgColor?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  form,
  images,
  classes,
  bgColor,
}) => {
  return (
    <section className={`${styles['hero-section']}`}>
      <SectionImage {...images} classes={classes} bgColor={bgColor} />
      <FormContainer {...form} classes={classes} />
    </section>
  )
}

export default HeroSection
