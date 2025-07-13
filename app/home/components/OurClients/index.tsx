import styles from './styles.module.css'

interface Props {
  title: string
  body: string[]
  bgColor?: {
    hex?: string
  }
}

const OurClientsSection: React.FC<{
  data: Props[]
  title?: string
  bgColor?: string
}> = ({ data, title = 'Our Clients Include:', bgColor }) => {
  const Item: React.FC<{ item: Props }> = ({ item }) => {
    return (
      <div className={styles.item}>
        <div
          className={styles.title}
          style={{ backgroundColor: item?.bgColor?.hex ?? '#f3c948' }}
        >
          {item.title}
        </div>
        <div className={styles.body}>
          {item.body.map((str, index) => (
            <div key={index}>{str}</div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section
      className={styles['our-clients-section']}
      style={{ backgroundColor: bgColor ?? '#fff38b' }}
    >
      <div className={styles['section-container']}>
        <h2>{title}</h2>
        <div className={styles.list}>
          {data.map((item, key) => (
            <Item key={key} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurClientsSection
