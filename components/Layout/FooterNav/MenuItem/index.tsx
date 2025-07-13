'use client'

import React, { useState } from 'react'

import Icon from '@/components/Icon'
import useIsMobile from '@/hook/useIsMobile'

import { type linkProps } from '@/services/layout'
import styles from './styles.module.css'

interface MenuItemProps {
  data: linkProps
  index: number
}

const MenuItem = ({ data, index }: MenuItemProps): JSX.Element => {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(index === 0)

  const toggleSubMenu = (): void => {
    isMobile && setIsMenuOpen(!isMenuOpen)
  }

  const renderMenuItemList = (): JSX.Element => {
    return (
      <div>
        {data.subLinks.map((item) => (
          <div
            key={item.text}
            className={`sans-body-small ${styles['sub-title']}`}
          >
            <a href={item.href} className={styles.link}>
              {item.text}
            </a>
          </div>
        ))}
      </div>
    )
  }

  return (
    <li className={styles.container} data-testid="menu-item">
      <div className={styles['menu-title']} onClick={toggleSubMenu}>
        {data.title}
        {isMenuOpen ? (
          <Icon name="ArrowUp2" className={styles['arrow-icon']} />
        ) : (
          <Icon name="ArrowDown2" className={styles['arrow-icon']} />
        )}
      </div>
      {(isMenuOpen || !isMobile) && renderMenuItemList()}
    </li>
  )
}

export default MenuItem
