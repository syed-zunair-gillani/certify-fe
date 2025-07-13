import React from 'react'

import { Link } from '@/components/Button'

import styles from './styles.module.css'

export interface HeaderProps {
  header: string
  body?: string
  button: {
    text: string
    href: string
  }
}

const Header = ({ data }: { data: HeaderProps }): JSX.Element => {
  return (
    <div className={styles.container} data-testid="header-container">
      <div>
        <h2 className={styles.title}>{data.header}</h2>
        {data.body != null && (
          <div className={`sans-body-normal ${styles.body}`}>{data.body}</div>
        )}
      </div>
      <Link
        href={data.button.href}
        text={data.button.text}
        btnClasses={styles.btn}
      />
    </div>
  )
}

export default Header
