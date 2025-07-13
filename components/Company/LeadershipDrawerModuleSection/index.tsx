'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import DrawerModule from './DrawerModule'
import styles from './styles.module.css'
import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset } from '@sanity/types'

interface LeadershipDrawerModuleSectionProps {
  title: string
  data: Array<{
    name: string
    title: string
    avatar?: ImageAsset
    avatarUrl?: string
    introduction?: PortableTextBlock[]
    x?: string
    facebook?: string
    instagram?: string
  }>
  classes?: {
    section?: string
    italic?: string
  }
  leaderName?: string
}

const LeadershipDrawerModuleSection = ({
  title,
  data,
  classes,
  leaderName,
}: LeadershipDrawerModuleSectionProps): JSX.Element => {
  const sectionClasses = classNames(styles.section, classes?.section)
  const pathnames = (usePathname() ?? '').split('/')
  const urlName = leaderName ?? pathnames[pathnames.length - 1]
  const [lists, setList] = useState(
    data?.map((item) => {
      const name = (item.name ?? '').replace(/\s/g, '-').toLocaleLowerCase()
      return {
        ...item,
        urlName: name,
        isBodyOpen: name === urlName,
      }
    }),
  )

  useEffect(() => {
    const element = document.getElementById(urlName)
  if (element) {
    element.scrollIntoView()
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const openChange = (name: string, isBodyOpen: boolean): void => {
    const newList = lists.map((list) => {
      return {
        ...list,
        isBodyOpen: isBodyOpen && name === list.urlName,
      }
    })
    setList([...newList])
  }

  const renderDrawerModule = (): JSX.Element => {
    return (
      <ul className={styles['right-container']}>
        {lists?.map((item) => {
          return (
            <DrawerModule key={item.name} data={item} openChange={openChange} />
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <div className={styles['title-container']}>
        <p className={styles.title}>{title}</p>
      </div>
      <section className={sectionClasses}>{renderDrawerModule()}</section>
    </>
  )
}

export default LeadershipDrawerModuleSection
