'use client'

import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import Cookies from 'js-cookie'
import dayjs from 'dayjs'
import Image from 'next/image'

import Icon from '@/components/Icon'
import Menu from './Menu'
import Account from './Account'

import styles from './styles.module.css'
import { type formattedLayoutDataProps } from '@/services/layout'
import { usePathname } from 'next/navigation'

const HeaderNav = ({
  header,
}: Pick<formattedLayoutDataProps, 'header'>): JSX.Element => {
   const path:any = usePathname()
   if (path.startsWith('/landing-pages/')) return;

  const [isMenuOpen, setIsMenuOpenOpen] = useState(false)
  const [isBannerClosed, setIsBannerClosed] = useState(
    Cookies.get('bannerClose') === 'true',
  )
  const headerClasses = classNames(styles.header, {
    [styles['header-menu-open-mb']]: isMenuOpen,
  })
  const toggleMenu = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    setIsMenuOpenOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  useEffect(() => {
    const mainElement = document.getElementById('has-banner-main-container')
    if (isBannerClosed && mainElement != null) {
      mainElement.removeAttribute('id')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCloseIconClick = (): void => {
    const mainElement = document.getElementById('has-banner-main-container')
    if (mainElement != null) {
      mainElement.removeAttribute('id')
    }

    Cookies.set('bannerClose', 'true')
    setIsBannerClosed(true)
  }

  const renderBanner = (): JSX.Element => {
    return (
      <div
        className={styles['banner-container']}
        id="banner"
        style={{ display: 'none' }}
      >
        CertifyOS is now Certify! Have a look around our&nbsp;
        <a href="/company/news/new-brand-new-website" className={styles.link}>
          new site
        </a>
        !
        <Icon
          name="Close"
          className={styles.icon}
          onClick={handleCloseIconClick}
        />
      </div>
    )
  }

  const menuAriaLabel = isMenuOpen ? 'close menu' : 'open menu'
  const getBannerDisplayTime = dayjs().isBefore('2024-04-25')

  const logoUrl = header?.logo?.url ?? '/certify-logo.svg'
  const logoAlt = header?.logo?.alt ?? 'Certify provider network management'

  return (
    <header className={headerClasses} data-testid="header-nav">
      {!isBannerClosed && getBannerDisplayTime && renderBanner()}
      <div className={styles.navbar}>
        <a href="/">
          <Image
            className={styles.logo}
            src={logoUrl}
            alt={logoAlt}
            width={182}
            height={37}
          />
        </a>
        <a
          className={styles['close-icon']}
          href="#"
          onClick={toggleMenu}
          aria-label={menuAriaLabel}
        >
          {isMenuOpen ? <Icon name="Close" /> : <Icon name="Menu" />}
        </a>
        <div
          className={classNames(styles['right-container'], {
            [styles['menu-open-mb']]: !isMenuOpen,
          })}
        >
          <Menu menus={header.menus} />
          <Account
            loginIcon={header.loginIcon}
            searchIcon={header.searchIcon}
            button={header.button}
          />
        </div>
      </div>
    </header>
  )
}

export default HeaderNav
