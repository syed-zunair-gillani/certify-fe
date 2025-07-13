import { PortableText } from '@portabletext/react'
import { type PortableTextBlock } from '@portabletext/types'
import { Link } from '@/components/Button'
import { BOOK_A_FREE_DEMO } from '@/constants'
import styles from '../styles.module.css'
import classNames from 'classnames'

export interface FormContainerProps {
  title: string | React.ReactElement | PortableTextBlock
  body: string
  classes?: {
    title?: string
    'form-container'?: string
    'form-text'?: string
    'btn-classes'?: string
  }
  button?: {
    text?: string
    href?: string
  }
  maxWidth?: number
  bgColor?: string
}

const FormContainer: React.FC<FormContainerProps> = ({
  title,
  body,
  classes,
  button,
  maxWidth,
  bgColor,
}) => {
  const buttonText = button != null ? button.text : BOOK_A_FREE_DEMO.text
  const buttonHref = button != null ? button.href : BOOK_A_FREE_DEMO.href
  return (
    <div
      className={classNames(
        styles['form-container'],
        styles.col,
        classes?.['form-container'],
      )}
      style={{ backgroundColor: bgColor ?? '#79709d' }}
    >
      <div className={styles.form}>
        <div className={classNames(
          styles['form-text'],
          classes?.['form-text'],
        )}>
          <div
            style={{ maxWidth }}
            className={classNames(styles['title-body'], classes?.title)}
          >
            {title !== undefined && (title as any)[0]?._type === 'block' ? (
              <PortableText value={title as PortableTextBlock} />
            ) : (
              <h1 className={styles['form-title']}>
                {title as string | React.ReactElement}
              </h1>
            )}
            <p className={`sans-body-small ${styles['form-body']}`}>{body}</p>
          </div>
          <div>
            <Link
              text={buttonText}
              href={buttonHref}
              btnClasses={classes?.['btn-classes']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormContainer
