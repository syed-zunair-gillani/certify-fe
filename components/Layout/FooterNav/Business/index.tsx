import React from 'react'

import styles from './styles.module.css'

interface BusinessProps {
  data: {
    copyRight: string
    privacyPolicy: {
      href: string
      text: string
    }
    termsOfService: {
      href: string
      text: string
    }
  }
}

const Business = ({ data }: BusinessProps): JSX.Element => {
  return (
    <div className={styles.container} data-testid="business">
      <div>{data.copyRight}</div>
      <div className={styles.business}>
        <a href={data.privacyPolicy.href} className={styles.link}>
          {data.privacyPolicy.text}
        </a>
        <a href={data.termsOfService.href} className={styles.link}>
          {data.termsOfService.text}
        </a>
      </div>
    </div>
  )
}

export default Business
