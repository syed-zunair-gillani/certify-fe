'use client'
import React from 'react'
import { PortableText } from '@portabletext/react'
import { type PortableTextBlock } from '@portabletext/types'
import classNames from 'classnames'

import Title from '@/components/Title'

import DrawerModule from './DrawerModule'

import styles from './styles.module.css'

interface LargeDrawerModuleSectionProps {
  data: {
    header:
      | string
      | Array<string | { type?: string; text?: string }>
      | PortableTextBlock
    content: Array<{
      title: string
      body?: string | Array<string | { type?: string; text?: string }>
    }>
    bgColor?: {
      hex?: string
    }
  }
  classes?: {
    section?: string
    header?: string
    title?: string
    italic?: string
  }
  openSize?: number
  isQuestionModule?: boolean
}

const LargeDrawerModuleSection = ({
  data,
  classes,
  openSize,
  isQuestionModule = false,
}: LargeDrawerModuleSectionProps): JSX.Element => {
  const sectionClasses = classNames(styles.section, classes?.section, {
    [styles['question-section']]: isQuestionModule,
  })

  const openCount =
    typeof openSize === 'number' ? openSize : data?.content?.length

  const renderDrawerModule = (openCount: number): JSX.Element => {
    return (
      <ul className={styles['right-container']}>
        {data?.content?.map((item, index) => {
          return (
            <DrawerModule
              key={item.title}
              data={item}
              isOpen={index + 1 <= openCount}
              isQuestionModule={isQuestionModule}
            />
          )
        })}
      </ul>
    )
  }

  return (
    <section
      className={sectionClasses}
      style={{ backgroundColor: data?.bgColor?.hex ?? '#f4f4f4' }}
    >
      {(data.header as any)?.[0]?._type === 'block' ? (
        <div
          className={classNames(
            styles.header,
            classes?.header,
            isQuestionModule ? 'eyebrow' : '',
          )}
        >
          <PortableText value={data.header as PortableTextBlock} />
        </div>
      ) : (
        <h2
          className={classNames(
            styles.header,
            classes?.header,
            isQuestionModule ? 'eyebrow' : '',
          )}
        >
          <Title data={data.header as string} classes={classes} />
        </h2>
      )}
      {renderDrawerModule(openCount)}
    </section>
  )
}

export default LargeDrawerModuleSection
