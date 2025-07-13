import styles from './styles.module.css'
import Image from 'next/image'

const NCQAAccreditedModule: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/products/NCQA-certified.png"
        alt="Certified NCQA health information product"
        height={150}
        width={150}
      />
      <h2 className={`${styles.title} heading-1`}>NCQA-Certified</h2>
      <p className="sans-body-normal">
        Partner with an experienced CVO that’s NCQA-certified for 11 out of 11
        verification services.
      </p>
    </div>
  )
}

export default NCQAAccreditedModule
