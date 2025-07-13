'use client'

import React from 'react'
import { type Props } from '../index'
import Icon from '@/components/Icon'
import styles from '../styles.module.css'

const Sort: React.FC<{
  data: Props[],
  onChange: (value: string) => void
}> = ({
  data,
  onChange
}) => {
  const [currentTag, setCurrentTag] = React.useState(data[0].value)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value

    setCurrentTag(value)
    onChange(value)
  }

  return (
    <div className={styles.filter}>
      <h6 className='sans-body-normal'>Sort:</h6>
      <div className={styles['sort-select']}>
        <select
          value={currentTag}
          className={styles.select}
          onChange={handleChange}
        >
          {
            data.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))
          }
        </select>
        <Icon name="ArrowDown2" className={styles.arrow} />
      </div>
    </div>
  )
}

export default Sort

