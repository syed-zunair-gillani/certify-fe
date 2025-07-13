import React from 'react'

import MenuItem from '../MenuItem'

import styles from './styles.module.css'

import { type menusProps } from '@/services/layout'

const Menu = ({ menus }: { menus: menusProps[] }): JSX.Element => {
  const renderMenuItems = (): JSX.Element[] =>
    menus.map((item) => <MenuItem key={item.title} data={item} />)

  return (
    <ul className={styles.container} data-testid="menu-container">
      {renderMenuItems()}
    </ul>
  )
}

export default Menu
