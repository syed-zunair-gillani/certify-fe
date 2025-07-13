import React, { useState } from 'react'
import { PortableText } from '@portabletext/react'
import { type PortableTextBlock } from '@portabletext/types'
import classNames from 'classnames'

import Icon from '@/components/Icon'

import styles from './styles.module.css'

export interface DrawerModuleProps {
  data: {
    title: string
    body?: string | Array<string | { type?: string; text?: string }> | PortableTextBlock
  }
  isOpen: boolean
  isQuestionModule?: boolean
}

const DrawerModule = ({
  data,
  isOpen,
  isQuestionModule,
}: DrawerModuleProps): JSX.Element => {
  const [isBodyOpen, setIsBodyOpen] = useState(isOpen)
  const hasBody = data?.body != null
  const titleClasses = classNames(styles.title, {
    [styles['has-body-title']]: hasBody,
  })

  const renderBody = (): JSX.Element => {
    return (
      <div
        className={classNames('sans-body-small', styles.body, {
          [styles['question-body']]: isQuestionModule,
          hidden: !(hasBody && isBodyOpen),
        })}
      >
        {(hasBody && (data?.body as any)[0]?._type === 'block') ? (<PortableText value={data?.body as PortableTextBlock} />) : (
          Array.isArray(data.body) ? (
            <>
              {data.body.map((item, index) => {
                if (typeof item === 'string') {
                  return <span key={item}>{item}</span>
                }
                if (item?.type === 'p') {
                  return <p key={item.text}>{item.text}</p>
                }
                if (item?.type === 'br') {
                  return <br key={`br-${index}`} />
                } else {
                  return null
                }
              })}
            </>
          ) : (
            <>{data.body}</>
          )
        )}
      </div>
    )
  }

  const renderArrowIcon = (): JSX.Element => {
    if (hasBody) {
      return (
        <>
          {isBodyOpen ? (
            <Icon name="ArrowUp2" className={styles.arrow} />
          ) : (
            <Icon name="ArrowDown2" className={styles.arrow} />
          )}
        </>
      )
    }

    return <></>
  }

  const handleOnClick = (): void => {
    hasBody && setIsBodyOpen(!isBodyOpen)
  }

  return (
    <li className={styles.container}>
      <div
        className={titleClasses}
        onClick={() => {
          handleOnClick()
        }}
      >
        <span>{data.title}</span>
        {renderArrowIcon()}
      </div>

      {renderBody()}
    </li>
  )
}

export default DrawerModule
