import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Icon from '@/components/Icon'
import styles from './styles.module.css'
import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset } from '@sanity/types'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

interface DrawerModuleProps {
  data: {
    name: string
    title: string
    avatar?: ImageAsset
    avatarUrl?: string
    introduction?: PortableTextBlock[]
    x?: string
    linkedin?: string
    isBodyOpen: boolean
    urlName: string
  }
  openChange: (name: string, isOpen: boolean) => void
}

const DrawerModule = ({ data, openChange }: DrawerModuleProps): JSX.Element => {
  const hasBody = data?.introduction != null && data.introduction !== undefined
  const containerClasses = classNames(styles.container, {
    [styles['has-body-container']]: hasBody,
  })
  const avatarAlt = data.avatar != null ? (data.avatar?.alt as string) : ''

  const renderIntroduction = (): JSX.Element => {
    if (data.introduction != null && data.introduction !== undefined) {
      return <PortableText value={data.introduction} />
    }

    return <></>
  }

  const renderBody = (): JSX.Element => {
    return (
      <>
        {hasBody && data.isBodyOpen && (
          <div
            className={classNames(
              styles['container-child'],
              styles['container-detail'],
            )}
          >
            <div>
              <div className={styles['container-avatar']}>
                {data.avatar != null && data.avatarUrl != null && (
                  <Image
                    className={styles.avatar}
                    src={data.avatarUrl ?? ''}
                    alt={avatarAlt}
                    fill
                    objectPosition="top"
                  />
                )}
              </div>
            </div>
            <div className={styles['container-body']}>
              <div className={`sans-body-small ${styles.body}`}>
                {renderIntroduction()}
              </div>
              {data.x != null || data.linkedin != null ? (
                <div className={styles['social-media-icons']}>
                  {data.x != null ? (
                    <Link className={styles['social-media-icon']} href={data.x}>
                      <Image
                        src={'/company/x.png'}
                        alt={'x'}
                        width={29.13}
                        height={29.13}
                      />
                    </Link>
                  ) : null}
                  {data.linkedin != null ? (
                    <Link
                      className={styles['social-media-icon']}
                      href={data.linkedin}
                    >
                      <Image
                        src={'/company/ins.png'}
                        alt="LinkedIn"
                        width={29.13}
                        height={29.13}
                      />
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </>
    )
  }

  const renderArrowIcon = (): JSX.Element => {
    if (hasBody) {
      return (
        <>
          {data.isBodyOpen ? (
            <div
              onClick={() => {
                handleOnClick()
              }}
            >
              <Icon name="ArrowUp2" className={styles.arrow} />
            </div>
          ) : (
            <div
              onClick={() => {
                handleOnClick()
              }}
            >
              <Icon name="ArrowDown2" className={styles.arrow} />
            </div>
          )}
        </>
      )
    }

    return <></>
  }

  const handleOnClick = (): void => {
    if (!data.isBodyOpen) {
      history.pushState({}, '', `/company/${data.urlName}`)
    }
    openChange(data.urlName, !data.isBodyOpen)
  }

  return (
    <>
      <li className={containerClasses} id={data.urlName}>
        <div
          className={[
            styles['container-child'],
            styles['container-header'],
          ].join(' ')}
          onClick={() => {
            handleOnClick()
          }}
        >
          <div className={styles['leader-name']}>{data.name}</div>
          <div className={`sans-body-small ${styles.title}`}>{data.title}</div>
        </div>
        {renderBody()}
        {renderArrowIcon()}
      </li>
    </>
  )
}

export default DrawerModule
