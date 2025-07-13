import React from 'react'

import MenuItem from '../MenuItem'

import styles from './styles.module.css'
import { type linkProps } from '@/services/layout'

interface MenuProps {
  data: linkProps[]
}

const Menu = ({ data }: MenuProps): JSX.Element => {
  const renderMenuItems = (): JSX.Element[] =>
    data.map((item, index) => (
      <MenuItem key={item.title} data={item} index={index} />
    ))

  return (
    <ul className={styles.container} data-testid="menu">
      {renderMenuItems()}
    </ul>
  )
}

export default Menu
