import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import styles from './styles.module.css'

interface BannerProps {
  text: PortableTextBlock[]
}

export default function Banner({ text }: any) {
  if (!text || text.length === 0) return null

  return (
    <section className={styles.banner}>
      <PortableText value={text} />
    </section>
  )
}
