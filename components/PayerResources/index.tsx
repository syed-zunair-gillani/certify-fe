import React from 'react'
import classNames from 'classnames'
import { Link } from '@/components/Button'

import { type Post } from '@/services/post'

import Header, { type HeaderProps } from './Header'
import PostList from './PostList'

import styles from './styles.module.css'

export interface PayerResourcesProps {
  data: Post[]
  headerData?: HeaderProps
  classes?: string
}

const PayerResources = ({
  data,
  headerData,
  classes,
}: PayerResourcesProps): JSX.Element => {
  return (
    <section
      className={classNames(styles.section, classes)}
      data-testid="payer-resources-section"
    >
      {headerData !== undefined && <Header data={headerData} />}
      <PostList data={data} />
      {headerData !== undefined && (
        <Link
          href={headerData.button.href}
          text={headerData.button.text}
          btnClasses={styles.btn}
        />
      )}
    </section>
  )
}

export default PayerResources
