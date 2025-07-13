import ImageContainer from './ImageContainer'
import styles from './styles.module.css'

export interface WaveModuleProps {
  title: string
  data: Array<{
    src: string
    alt: string
    width: number
    height: number
  }>
}

const WaveModule: React.FC<WaveModuleProps> = ({ title, data }) => {
  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} heading-1`}>{title}</h2>
      <ImageContainer data={data} />
    </section>
  )
}

export default WaveModule
