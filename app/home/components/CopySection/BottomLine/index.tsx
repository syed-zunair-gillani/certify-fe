import styles from '../styles.module.css'

interface BottomLineProps {
  sections: Array<{
    title: string
    body: string
  }>
}

const BottomLine: React.FC<BottomLineProps> = ({
  sections,
}) => {
  return (
    <div className={styles['section-list']}>
      {
        sections.map(({ title, body }, index) => (<div className={styles['section-item']} key={index}>
          <div className={styles['item-title']}>{title}</div>
          <div className={styles['item-body']}>{body}</div>
        </div>))
      }
    </div>
  )
}

export default BottomLine