import React, { useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import Icon from '@/components/Icon'
import useIsMobile from '@/hook/useIsMobile'

// import { type subTypeTitleProps } from '../../type'

import styles from './styles.module.css'
import { type subMenuProps } from '@/services/layout'

interface MenuItemProps {
  index: number
  data: subMenuProps
  setIsHoverSubMenuOpen: (value: boolean) => void
}

const SubMenuItem = ({
  index,
  data,
  setIsHoverSubMenuOpen,
}: MenuItemProps): JSX.Element => {
  const isMobile = useIsMobile()
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const containerClasses = classNames(styles.container, {
    [styles['hover-container']]: data?.preview === undefined,
  })

  const subMenuTitleClasses = classNames(styles['sub-menu-title-text'], {
    [styles['is-hover']]: isSubMenuOpen,
    [styles['has-icon-mb']]: data?.preview,
  })

  const handleMouseEnter = (): void => {
    !isMobile && setIsSubMenuOpen(true)
    !isMobile && setIsHoverSubMenuOpen(true)
  }

  const handleMouseLeave = (): void => {
    !isMobile && setIsSubMenuOpen(false)
    !isMobile && setIsHoverSubMenuOpen(false)
  }

  const renderIconMb = (): JSX.Element => {
    const designSizes = [
      [28, 24],
      [29, 23],
      [24, 24],
      [24, 24],
      [24, 24],
    ]
    const [width, height] = designSizes[index]
    return (
      <>
        {data?.preview != null && (
          <div
            className={styles['icon-mb']}
            style={{ backgroundColor: data?.preview?.thumbnailBgColor }}
          >
            <Image
              src={data.iconUrl ?? ''}
              alt={data.iconAlt ?? ''}
              width={width}
              height={height}
              className={styles.icon}
              quality={90}
            />
          </div>
        )}
      </>
    )
  }

  const renderContent = (): JSX.Element => {
    const designSizes = [
      [90, 77],
      [112, 74],
      [82, 82],
      [106, 75],
      [70, 90],
    ]
    const [width, height] = designSizes[index]
    return (
      <>
        {data?.preview != null && isSubMenuOpen && (
          <>
            <Icon name="ArrowRight" className={styles['arrow-right']} />
            <div
              className={styles['sub-menu-content']}
              style={{ top: `-${index * 35.5 + 20}px` }}
            >
              <div
                className={styles['sub-menu-content-icon']}
                style={{ backgroundColor: data?.preview.thumbnailBgColor }}
              >
                <Image
                  src={data.preview.thumbnailUrl}
                  alt={data.preview.thumbnailAlt ?? ''}
                  width={width}
                  height={height}
                  className={styles['arrow-down']}
                  quality={90}
                />
              </div>
              {data?.preview?.dek}
            </div>
          </>
        )}
      </>
    )
  }

  return (
    <a
      href={data.href}
      className={styles.link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={containerClasses}
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <div className={subMenuTitleClasses}>
          <div className={`sans-body-small ${styles.title}`}>
            {data.text}
            {renderIconMb()}
            {renderContent()}
          </div>
        </div>
      </div>
    </a>
  )
}

export default SubMenuItem
