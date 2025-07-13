import { PortableText } from '@portabletext/react'
import classNames from 'classnames'
import styles from './styles.module.css'
import { Link } from '@/components/Button'
import { BOOK_A_FREE_DEMO } from '@/constants'
import { type PortableTextBlock } from '@portabletext/types'

interface BannerModuleProps {
  title: string | React.ReactNode | PortableTextBlock
  description?: string
  bgColor?: string
  classes?: {
    title?: string
    description?: string
    btn?: string
    portable?: string
  }
  bottomButton?: boolean
  button?: {
    text?: string
    href?: string
  }
}

const BannerModule: React.FC<BannerModuleProps> = ({
  title,
  description,
  bgColor = '#FFF38B',
  classes,
  bottomButton = true,
  button,
}) => {
  const buttonText = button != null ? button.text : BOOK_A_FREE_DEMO.text
  const buttonHref = button != null ? button.href : BOOK_A_FREE_DEMO.href
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: bgColor }}
      data-testid="banner-module"
    >
      <div className={classNames(styles.title, styles.portableText, classes?.title, classes?.portable)}>
        {
          (title as any)?.[0]?._type === 'block' ? <PortableText value={title as PortableTextBlock} /> : <h2 className={classNames(styles.title, classes?.title)}>
            {title  as string | React.ReactElement}
          </h2>
        }
      </div>
      {typeof description === 'string' && description !== '' && (
        <p
          className={classNames(
            'sans-body-big',
            styles.description,
            classes?.description,
          )}
        >
          {description}
        </p>
      )}
      {bottomButton && (
        <Link
          text={buttonText}
          href={buttonHref}
          btnClasses={classNames(styles.btn, classes?.btn)}
        />
      )}
    </div>
  )
}

export default BannerModule
