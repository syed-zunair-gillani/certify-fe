'use client'

import Image from 'next/image'
import classNames from 'classnames'
import { useInView } from 'react-hook-inview'

import styles from './styles.module.css'

export interface WaveModuleProps {
  data: Array<{
    src: string
    alt: string
    width: number
    height: number
  }>
}

const ImageContainer: React.FC<WaveModuleProps> = ({ data }) => {
  const [ref, isVisible] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  })

  const isFourCards = data.length === 4
  const isFiveCards = data.length === 5

  const renderCards = (): JSX.Element => {
    return (
      <>
        {data.map((item) => {
          return (
            <div className={styles.item} key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={styles.image}
                quality={90}
              />
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div
      ref={ref}
      className={classNames(styles.container, {
        [styles['four-cards-container']]: isFourCards,
        [styles['five-cards-container']]: isFiveCards,
        [styles.visible]: isVisible,
      })}
      data-testid="image-container"
    >
      {renderCards()}
    </div>
  )
}

export default ImageContainer
