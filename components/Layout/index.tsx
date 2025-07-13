import React from 'react'
import HeaderNav from './HeaderNav'
import FooterNav from './FooterNav'
import styles from './styles.module.css'
import { type formattedLayoutDataProps, fetchLayout } from '@/services/layout'
import MainLayout from './layout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = async ({ children }: LayoutProps): Promise<JSX.Element> => {
  const layoutInfo: formattedLayoutDataProps = await fetchLayout()

  return (
    <>
      <HeaderNav header={layoutInfo?.header} />
      <MainLayout children={children}/>
      <FooterNav footer={layoutInfo?.footer} />
    </>
  )
}

export default Layout
