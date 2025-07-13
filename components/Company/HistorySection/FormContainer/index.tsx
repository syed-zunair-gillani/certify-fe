import styles from '../styles.module.css'
import classNames from 'classnames'
import { type PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'

export interface FormContainerProps {
  title: string | React.ReactElement
  body: PortableTextBlock
  classes?: {
     "form-container"?: string
  },
}

const FormContainer: React.FC<FormContainerProps> = ({ title, body, classes }) => {
  return (
    <div className={classNames(styles['form-container'], styles.col, classes?.['form-container'])}>
      <div className={styles.form}>
        <div className={styles['form-text']}>
          <h1 className={styles['form-title']}>{title}</h1>
          <div className={`sans-body-small ${styles['form-body']}`}>
            <PortableText value={body} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default FormContainer
