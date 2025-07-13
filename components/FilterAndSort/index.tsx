"use client"
import React from 'react'
import Sort from './Sort'
import styles from './styles.module.css'

export interface Props {
  label: string,
  value: string
}

const FilterAndSort: React.FC<{
  sorts?: Props[],
  sortChange: (value: string) => void,
}> = ({
  sorts,
  sortChange
}) => {
  return (
    <div className={styles['filters-and-sorts']}>
      {sorts !== undefined && <Sort data={sorts} onChange={sortChange} />}
    </div>
  )
}

export default FilterAndSort

