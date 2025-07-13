'use client'
import React from 'react'
import ImageItem, { type ImageItemProps } from './ImageItem'
import styles from './styles.module.css'

interface CarouselProps {
  maxWidth?: number
  speed?: number
  offsetSpeed?: number
  imageItem?: ImageItemProps[]
  bgColor?: string
}

const Carousel: React.FC<CarouselProps> = ({
  maxWidth = 4000,
  speed = 100,
  offsetSpeed = 2,
  imageItem = [],
  bgColor,
}) => {
  const [offset, setOffset] = React.useState(0)
  const [data, setData] = React.useState(['1'])
  const latestOffset = React.useRef(offset)
  const divRef = React.useRef<HTMLDivElement | null>(null)
  let timer: NodeJS.Timeout | undefined

  React.useEffect(() => {
    if (offset !== latestOffset.current) {
      latestOffset.current = offset
      if (latestOffset.current === 0) {
        const firstElement = data.shift()
        if (firstElement !== undefined) {
          data.push(firstElement)
        }
        setData(data)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  React.useEffect(() => {
    if (typeof divRef?.current?.clientWidth === 'number') {
      const currentWidth = divRef.current.clientWidth
      const count = Math.floor(maxWidth / currentWidth)
      const newData = Array(count).fill('1')
      setData(newData)
      move(currentWidth)
    }
    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const move = (currentWidth: number): void => {
    setTimeout(() => {
      timer = setInterval(() => {
        if (latestOffset.current <= -currentWidth) {
          setOffset(0)
        } else if (latestOffset.current > -currentWidth) {
          setOffset((prevOffset) => prevOffset - offsetSpeed)
        }
      }, speed)
    }, 500)
  }

  return (
    <div
      className={styles['carousel-container']}
      style={{ backgroundColor: bgColor ?? '#fff38b' }}
    >
      <div style={{ width: maxWidth }}>
        <div
          className={
            latestOffset.current !== 0 ? styles['carousel-content'] : ''
          }
          style={{ transform: `translateX(${latestOffset.current}px)` }}
        >
          {data.map((_, index) => {
            return (
              <div
                key={index}
                ref={index === 0 ? divRef : null}
                className={styles['image-box']}
              >
                {imageItem.concat(imageItem).map((item, index) => (
                  <ImageItem key={index} {...item} />
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel
