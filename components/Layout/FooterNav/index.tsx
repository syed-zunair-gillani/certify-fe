"use client"
import React from 'react'
import Image from 'next/image'

import Menu from './Menu'
import Business from './Business'

import styles from './styles.module.css'
import { type formattedLayoutDataProps } from '@/services/layout'
import { usePathname } from 'next/navigation'

const FooterNav = ({
  footer,
}: Pick<formattedLayoutDataProps, 'footer'>): JSX.Element => {
  const path:any = usePathname()
  if (path.startsWith('/landing-pages/')) return;

  return (
    <footer
      className={styles.footer}
      data-testid="footer-nav"
      {...(Boolean(footer?.bgColor) && {
        style: {
          backgroundColor: footer?.bgColor,
        },
      })}
    >
      <div className={styles.container}>
        <Image
          className={styles.logo}
          src={footer?.logo?.url ?? '/certify-footer.svg'}
          alt={footer?.logo?.alt ?? 'Certify provider data management'}
          width={332}
          height={64}
        />
        <Menu data={footer?.links} />
      </div>
      <Business
        data={{
          termsOfService: footer?.tos,
          privacyPolicy: footer?.pp,
          copyRight: footer?.copyRight,
        }}
      />
    </footer>
  )
}

export default FooterNav
