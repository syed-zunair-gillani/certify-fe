import Link from 'next/link'
import styles from './styles.module.css'

interface Props {
  selectedLetter: string
  basePath: string
  search?: string
}

export default function AlphabetFilter({ selectedLetter, basePath, search }: Props) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className={`alphabet`}>
      {alphabet.map((letter) => {
        const params = new URLSearchParams()
        if (letter) params.set('letter', letter)
        if (search) params.set('search', search)

        return (
          <Link
            key={letter}
            href={`${basePath}?${params.toString()}`}
            className={`button`}
          >
            {letter}
          </Link>
        )
      })}

      {/* Optional: Clear button */}
      {(selectedLetter || search) && (
        <Link href={basePath} className={styles.clearButton}>
          Clear
        </Link>
      )}
    </div>
  )
}
