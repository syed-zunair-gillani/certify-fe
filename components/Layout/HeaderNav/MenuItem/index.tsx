import React, { useState } from 'react'
import classNames from 'classnames'

import Icon from '@/components/Icon'
import useIsMobile from '@/hook/useIsMobile'

import SubMenuItem from '../SubMenuItem'

import styles from './styles.module.css'
import { type menusProps } from '@/services/layout'

const MenuItem = ({ data }: { data: menusProps }): JSX.Element => {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHoverSubMenuOpen, setIsHoverSubMenuOpen] = useState(false)

  const contentClasses = classNames(styles['sub-menu-content'], {
    [styles['has-sub-content-hover']]:
      isHoverSubMenuOpen && data.subMenus.some((item) => item.preview),
    [styles['has-sub-content']]: data.subMenus.some((item) => item.preview),
  })

  const handleMouseEnter = (): void => {
    !isMobile && setIsMenuOpen(true)
  }

  const handleMouseLeave = (): void => {
    !isMobile && setIsMenuOpen(false)
  }

  const toggleSubMenu = (): void => {
    isMobile && setIsMenuOpen(!isMenuOpen)
  }

  const renderMenuItemList = (): JSX.Element => {
    return (
      <div className={styles['sub-menu']}>
        <div className={contentClasses}>
          {data.subMenus.map((item, index) => (
            <SubMenuItem
              index={index}
              key={item.text}
              data={item}
              setIsHoverSubMenuOpen={setIsHoverSubMenuOpen}
            />
          ))}
        </div>
      </div>
    )
  }

  const renderArrowIcon = (): JSX.Element => {
    return (
      <>
        <div className={styles['arrow-icon-desktop']}>
          {isMenuOpen ? (
            <Icon
              name="ArrowUp"
              className={`${styles['arrow-icon']} ${styles['arrow-up-icon']}`}
            />
          ) : (
            <Icon name="ArrowDown" className={styles['arrow-icon']} />
          )}
        </div>
        <div className={styles['arrow-icon-mb']}>
          {isMenuOpen ? (
            <Icon name="ArrowUp2" className={styles['arrow-icon']} />
          ) : (
            <Icon name="ArrowDown2" className={styles['arrow-icon']} />
          )}
        </div>
      </>
    )
  }

  return (
    <li
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleSubMenu}
      data-testid="menu-item"
    >
      <div
        className={classNames('sans-body-small', styles['menu-item-title'], {
          [styles['menu-item-title-hover']]: isMenuOpen,
        })}
      >
        {data.title}
        {renderArrowIcon()}
      </div>

      {isMenuOpen && renderMenuItemList()}
    </li>
  )
}

export default MenuItem
