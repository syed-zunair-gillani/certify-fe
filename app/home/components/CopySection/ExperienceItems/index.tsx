import Image from 'next/image'
import styles from '../styles.module.css'

interface ExperienceItemsProps {
  sections: Array<{
    title: string
  }>
}

const ExperienceItems: React.FC<ExperienceItemsProps> = ({
  sections,
}) => {
  return (
    <div className={styles['experience-list']}>
      {
        sections.map(({ title }, index) => (<div className={styles['experience-item']} key={index}>
          <Image
            src='/group_613.svg'
            height={23}
            width={23}
            alt=''
          />
          <div className={`sans-body-small ${styles['experience-title']}`}>{title}</div>
        </div>))
      }
    </div>
  )
}

export default ExperienceItems