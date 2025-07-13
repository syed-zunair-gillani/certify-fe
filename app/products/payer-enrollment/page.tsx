import React from 'react'
import type { Metadata } from 'next'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import { getPageFromCache } from '@/services/page'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'
import { type Widget, contentRenderer } from '@/utils/contentRenderer'
import CachePurger from '@/components/CachePurger'
import data from './data'

import styles from './styles.module.css'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'products/payer-enrollment'

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    ...data.document,
    alternates: {
      canonical: '/products/payer-enrollment',
    },
  })

  return metadata
}

const customizePropsConfig = {
  productHero: (widget?: Widget) => ({
    imageWidth: 414,
    imageHeight: 320,
    classes: {
      container: styles['hero-container'],
      title: styles['hero-title'],
      description: styles.description,
      images: styles.image,
    },
  }),
  productBanner: (widget?: Widget) => {
    return {
      classes: {
        description: styles['banner-module-description'],
        portable:
          widget?.description === undefined
            ? styles['banner-module2-title']
            : styles['banner-module-title'],
      },
    }
  },
  largeDrawer: (widget?: Widget) => {
    const isLargeType = widget?.collapseType === 'large'

    return {
      isQuestionModule: !isLargeType,
    }
  },
  visualWithCTA: (widget?: Widget) => ({
    images: {
      width: 375,
      height: 332,
    },
  }),
}

export default async function RosterManagement({ searchParams }: Props): Promise<JSX.Element> {
  const preview = Boolean(searchParams.preview)
  await redirectHandler(slug, preview)
  const page = await getPageFromCache(slug, preview)

  return (
    <>
      <SchemaMarkup
        schema={page?.schemaMarkup}
        projectId={projectId}
        dataset={dataset}
      />
      {contentRenderer({
        widgets: page?.widget,
        customizeConfig: customizePropsConfig,
      })}
      <CachePurger tag={`page-${slug}`} />
    </>
  )
}
