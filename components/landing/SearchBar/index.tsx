// components/landing/SearchBar/index.tsx
import styles from './styles.module.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      // placeholder="Search by state..."
      id='stateSearch'
      className={styles.searchInput}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
