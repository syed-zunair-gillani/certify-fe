'use client'

import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const path = usePathname()
  const isLandingPage = path?.includes('landing-pages')

  return (
    <main
      className={!isLandingPage ? styles['main-container'] : undefined}
      id="has-banner-main-container"
    >
      {children}
    </main>
  )
}

export default MainLayout
