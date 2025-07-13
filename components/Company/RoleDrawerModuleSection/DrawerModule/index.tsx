import React, { useState } from 'react'
import classNames from 'classnames'
import Icon from '@/components/Icon'
import styles from './styles.module.css'
import Link from 'next/link'

interface Job {
  name: string
  url: string
  location?: string
  department?: string
}

interface DrawerModuleProps {
  data: Job[]
  bgColor?: string
}

const DrawerModule = ({ data, bgColor }: DrawerModuleProps): JSX.Element => {
  const [isRolesOpen, setIsRolesOpen] = useState(false)
  const hasRoles = data.length > 0
  const containerClasses = classNames(styles.container, {
    [styles['has-body-container']]: hasRoles,
  })

  const renderRole = (curRole: Job): JSX.Element => {
    return (
      <Link className={styles['container-role-detail']} href={curRole.url}>
        <div className={styles['role-detail-primary-text-container']}>
          {curRole.name}
          <div>
            <Icon name="ArrowRight" className={styles['arrow-right-mobile']} />
          </div>
        </div>
        <div className={styles['role-detail-secondary-text-container']}>
          <div
            className={styles['role-detail-secondary-text-container-single']}
          >
            <p className={styles['role-detail-secondary-text']}>
              {curRole.location}
            </p>
          </div>
          <div
            className={styles['role-detail-secondary-text-container-mobile']}
          >
            <p className={styles['role-detail-secondary-text']}>
              {curRole.location}
            </p>
          </div>
        </div>
        <div>
          <Icon name="ArrowRight" className={styles['arrow-right']} />
        </div>
      </Link>
    )
  }

  const renderBody = (): JSX.Element => {
    return (
      <>
        {/* {hasRoles && isRolesOpen && ( */}
        <div className={styles['container-child']}>
          {data.map((role, index) => (
            <div
              key={index}
              className={styles['container-role']}
              style={{
                display: hasRoles && isRolesOpen ? '' : ' none',
                backgroundColor: bgColor ?? '#f3c948',
              }}
            >
              {renderRole(role)}
            </div>
          ))}
        </div>
        {/* )} */}
      </>
    )
  }

  const renderArrowIcon = (): JSX.Element => {
    if (hasRoles) {
      return (
        <>
          {isRolesOpen ? (
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
    hasRoles && setIsRolesOpen(!isRolesOpen)
  }

  return (
    <>
      <li className={containerClasses}>
        <div
          className={styles['container-child']}
          onClick={() => {
            handleOnClick()
          }}
        >
          <div className={styles['role-name-container']}>
            <p className={styles['role-name-text']}>{data[0].department}</p>
          </div>
        </div>
        {renderBody()}
        {renderArrowIcon()}
      </li>
    </>
  )
}

export default DrawerModule
