import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { type PortableTextBlock } from '@portabletext/types'
import styles from './styles.module.css'

interface AccreditedModuleProps {
  title: string | React.ReactNode | PortableTextBlock
  description?: string
  image: {
    src: string
    alt: string
  }
  height?: number
  width?: number
  bgColor?: string
}

const AccreditedModule: React.FC<AccreditedModuleProps> = ({
  title,
  description,
  image,
  height = 150,
  width = 150,
  bgColor,
}) => {
  console.log(bgColor)
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: bgColor ?? '#d9d5f7' }}
    >
      <Image src={image.src} alt={image.alt} height={height} width={width} />
      {(title as any)?.[0]?._type === 'block' ? (
        <div className="heading-1">
          <PortableText value={title as PortableTextBlock} />
        </div>
      ) : (
        <h2 className={`${styles.title} heading-1`}>
          {title as string | React.ReactElement}
        </h2>
      )}
      {description !== '' && <p className="sans-body-normal">{description}</p>}
    </div>
  )
}

export default AccreditedModule
