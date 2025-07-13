import classNames from 'classnames'
import { PortableText } from '@portabletext/react'
import { type PortableTextBlock } from '@portabletext/types'

import styles from './styles.module.css'

interface DrawerModuleProps {
  title?: string | React.ReactNode | PortableTextBlock
  items: Array<{
    title: string
    description: string | Array<string | string[]> | PortableTextBlock
  }>
  classes?: {
    title?: string
    container?: string
  }
}

const DrawerModule: React.FC<DrawerModuleProps> = ({
  title,
  items,
  classes,
}) => {
  return (
    <div className={classNames(styles.container, classes?.container)}>
      {(title as any)[0]?._type === 'block' ? (
        <div className={classNames(styles.title, classes?.title, styles.portableText)}>
          <PortableText value={title as PortableTextBlock} />
        </div>
      ) : (
        <h2 className={classNames(styles.title, classes?.title)}>
          {title as string | React.ReactNode}
        </h2>
      )}
      <ul className={styles['right-container']}>
        {items.map(({ title, description }) => (
          <li className={styles.item} key={title}>
            <h3>{title}</h3>

            {(description as any)?.[0]?._type === 'block' ? (
              <div
                className={classNames('sans-body-small', styles.description, styles.portableText)}
              >
                <PortableText value={description as PortableTextBlock} />
              </div>
            ) : typeof description === 'string' ? (
              <p className={classNames('sans-body-small', styles.description)}>
                {description}
              </p>
            ) : (
              <>
                {(description as Array<string | string[]>)?.map(
                  (subDes, index) =>
                    typeof subDes === 'string' ? (
                      <p
                        key={index}
                        className={classNames(
                          'sans-body-small',
                          styles['description-sub'],
                        )}
                      >
                        {subDes}
                      </p>
                    ) : (
                      <div
                        key={index}
                        className={styles['description-child-container']}
                      >
                        {subDes.map((childDes, childIndex) => (
                          <p
                            key={childIndex}
                            className={classNames(
                              'sans-body-small',
                              styles['description-child'],
                            )}
                          >
                            {childDes}
                          </p>
                        ))}
                      </div>
                    ),
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DrawerModule
