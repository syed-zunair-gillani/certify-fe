import Image from 'next/image'
import { toPlainText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Tag, { type TagProps } from '../../Tag'
import styles from '../styles.module.css'
import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'

export interface ArticleProps {
  title: string;
  content: PortableTextBlock[];
  date: string;
  src: string | StaticImport;
  href?: string,
  tag?: TagProps,
  alt?: string,
}

export interface ListItemProps {
  size?: number;
  firstFull: boolean;
  data: ArticleProps[]
}

const ListItem: React.FC<ListItemProps> = ({
  data,
  size = 1,
  firstFull
}) => {
  return data.map((item, index) => {
    const num = index + 1
    const isRowEnd = (firstFull ? num - 1 : num) % size === 0
    const { title, content, tag, date, src, href = '/', alt = '' } = item
    return (
      <div key={index} className={`${styles['list-item']} ${isRowEnd ? styles['line-end'] : ''} ${(firstFull && num === 1) ? styles.full : ''}`} style={{
        width: `calc((100% - 1rem * ${size - 1}) / ${size} )`
      }}>
        <div className={`${styles['image-box']}`}>
          <Link href={href}>
            <Image className={styles.image}
              src={src}
              fill
              quality="100"
              style={{ objectFit: "cover" }}
              alt={alt} />
          </Link>
        </div>
        <div className={`${styles['text-box']}`}>
          <div className={`sans-body-small ${styles['tag-date']}`}>
            {tag === undefined ? <div /> : <Tag text={tag.text} color={tag.color} href={href} />}
            <span className={styles.date}>{date}</span>
          </div>
          <div>
            <div className={styles.title}>
              <Link href={href}>{title}</Link>
            </div>
            <div className={`sans-body-small ${styles.content}`}>
              <Link href={href}>
                {Array.isArray(content) && content.length > 0 && toPlainText(content[0] ?? '')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  })

}

export default ListItem