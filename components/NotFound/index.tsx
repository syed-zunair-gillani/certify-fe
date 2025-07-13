'use client'
import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const NotFound: React.FC<{ searchKey: string }> = ({ searchKey }) => {
  React.useEffect(() => {
    const searchDiv = document.getElementById('search-box')
    searchDiv?.click()
  }, [])

  return (
    <div className={styles['not-found']}>
      <div>
        <h1 className={styles.title}>Sorry! We are unable to find any matches for {searchKey}.</h1>
        <p className={styles.body}>Check your spelling, try more general terms, or try one of the links below.</p>
        <ul className={styles.link}>
          <li><Link href='/products/credentialing'>Credentialing</Link></li>
          <li><Link href='/company/careers'>Careers</Link></li>
          <li><Link href='/company '>About Us</Link></li>
          <li><Link href='/company/news'>Press & News</Link></li>
          <li><Link href='/'>Home</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NotFound