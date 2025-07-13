'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './styles.module.css'

interface ArticleShareProps {
  host: string
  title?: string
}

export default function ArticleShare({
  host,
  title,
}: ArticleShareProps): JSX.Element {
  const pathname = usePathname()
  const url = `${host}${pathname}`

  let xShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`
  const linkedinShareUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${title} ${encodeURIComponent(url)}`
  const youtubeChannelUrl = 'https://www.youtube.com/@certifyos' // Replace with your channel
  
  if (title != null) {
    xShareUrl += `&text=${encodeURIComponent(title)}`
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.label} eyebrow`}>Share this article:</div>
      <div className={styles.platforms}>
        <a href={xShareUrl} target="_blank">
          <Image src="/x.png" height={32} width={32} alt="x" />
        </a>
        <a href={linkedinShareUrl} target="_blank">
          <Image src="/linkedin.png" height={32} width={32} alt="LinkedIn" />
        </a>
        <a href={youtubeChannelUrl} target="_blank">
          <Image src="/youtube.png" height={32} width={32} alt="YouTube" />
        </a>
      </div>
    </div>
  )
}
