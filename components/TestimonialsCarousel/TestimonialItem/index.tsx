import styles from '../styles.module.css'

export interface TestimonialProps {
  content: string
  name: string[]
  maxWidth?: number
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  name = [],
  maxWidth,
}) => (
  <div className={styles.testimonial}>
    <div className={styles['testimonial-content']} style={{ maxWidth }}>
      <h2 className={styles['content-body']}>&ldquo;{content}&rdquo;</h2>
      <p className={`sans-body-small ${styles['content-foot']}`}>
        <label className={styles.name}>
          {name.map((n, index) => (
            <span key={index}>{n}</span>
          ))}
        </label>
      </p>
    </div>
  </div>
)

export default Testimonial
