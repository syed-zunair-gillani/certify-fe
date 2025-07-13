import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from '@/sanity/lib/utils'
import styles from './styles.module.css'

interface LogoSectionProps {
  logo1?: any
  logo2?: any
}

const builder = imageUrlBuilder(sanityClient)
function urlFor(source: any) {
  return builder.image(source).url()
}

export default function LogoSection({ logo1, logo2 }: LogoSectionProps) {
  if (!logo1 && !logo2) return null

  return (
    <div className={styles.logoContainer}>
      {logo1 && (
        <img
          src={urlFor(logo1)}
          alt="Logo 1"
          // width={150}
          // height={60}
          className={styles.logo}
        />
      )}
      {logo2 && (
        <img
          src={urlFor(logo2)}
          alt="Logo 2"
          // width={150}
          // height={60}
          className={styles.logo}
        />
      )}
    </div>
  )
}
