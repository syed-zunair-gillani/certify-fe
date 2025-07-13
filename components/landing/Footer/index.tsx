import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import styles from './styles.module.css'

interface FooterProps {
  text?: string
  richText?: PortableTextBlock[]
}

export default function Footer({ text, richText }: FooterProps) {
  if (!text && (!richText || richText.length === 0)) return null

  return (
    <footer className={styles.footer}>
      <div className={styles.f_wrapper}>
        {text && <p className={styles.footerText}>{text}</p>}

      {richText && richText.length > 0 && (
        <div className={styles.footerRichText}>
          <PortableText value={richText} />
        </div>
      )}
      </div>
    </footer>
  )
}
