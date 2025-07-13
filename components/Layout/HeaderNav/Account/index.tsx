import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Link } from '@/components/Button'
import { BOOK_A_FREE_DEMO } from '@/constants'
import classNames from 'classnames'
import styles from './styles.module.css'
import { type formattedLayoutDataProps } from '@/services/layout'

const Account = ({
  loginIcon,
  searchIcon,
  button,
}: Partial<formattedLayoutDataProps['header']>): JSX.Element => {
  const [active, SetActive] = useState<boolean>(false)
  const [searchKey, SetSearchKey] = useState<string>('')

  useEffect(() => {
    const handleClick = (): void => {
      SetActive(false)
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const showSearch = (): void => {
    SetActive(true)
  }

  return (
    <div className={styles.container}>
      <a href={loginIcon?.href} className={styles.icon}>
        <Image
          alt="Log in"
          src={loginIcon?.icon?.url ?? '/layout/log-in.png'}
          width="16"
          height="18"
          quality={90}
        />
        <span className={styles.text}>Account</span>
      </a>
      <div
        className={classNames(styles.icon, styles.search, {
          [styles.active]: active,
        })}
        onClick={(event) => {
          event.stopPropagation()
          event.nativeEvent.stopImmediatePropagation()
          showSearch()
        }}
      >
        <div className={styles['search-icon']} id="search-box">
          <Image
            alt="Search"
            src={searchIcon?.url ?? '/layout/search.png'}
            width="17"
            height="17"
            quality={90}
          />
          <span className={styles.text}>Search</span>
        </div>
        <div className={styles['search-input-box']}>
          {active && (
            <div className={styles['search-input']}>
              <input
                ref={(input) => {
                  if (input !== null) {
                    input.focus()
                  }
                }}
                className={styles.input}
                placeholder="Search"
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    location.href = `/resources/blog?searchKey=${searchKey}`
                  }
                }}
                onChange={(e) => {
                  SetSearchKey(e?.target?.value ?? '')
                }}
              />

              <a
                href={`/resources/blog?searchKey=${searchKey}`}
                className={styles['search-arrow-icon']}
              >
                <Image
                  src={'/arrow-right12x6.svg'}
                  width={8}
                  height={12}
                  alt=""
                />
              </a>
            </div>
          )}
        </div>
      </div>
      <Link
        text={button?.text ?? BOOK_A_FREE_DEMO.text}
        btnClasses={styles.button}
        href={button?.href ?? BOOK_A_FREE_DEMO.href}
        {
          ...((Boolean((button?.bgColor))) && {
            style: {
              backgroundColor: button?.bgColor,
            }
          })
        }
      />
    </div>
  )
}

export default Account
