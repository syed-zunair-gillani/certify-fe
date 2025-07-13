import React from 'react'
import styles from './styles.module.css'

interface BackButtonProps {
  text?: string
  href: string
}

export default function BackButton({ text = 'Back to list', href }: BackButtonProps): JSX.Element {
  return <a className={styles.link} href={href}>
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 13L1 7L7 1" stroke="#040610"/>
    </svg>
    {text}
  </a>
}