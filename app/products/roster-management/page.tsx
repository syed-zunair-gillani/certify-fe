import React from 'react'
import type { Metadata } from 'next'

import generateMetadataByPage from '@/action/generateMetadataByPage'
import { getPageFromCache } from '@/services/page'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'
import { type Widget, contentRenderer } from '@/utils/contentRenderer'
import type { Image as SanityImage } from '@sanity/types'
import { urlForImage } from '@/services/helper'
import CachePurger from '@/components/CachePurger'
import data from './data'
import styles from './styles.module.css'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'products/roster-management'

const customizePropsConfig = {
  productHero: () => ({
    imageWidth: 237,
    imageHeight: 366,
    classes: {
      container: styles['hero-container'],
      title: styles['hero-title'],
      description: styles.description,
      images: styles.image,
    },
  }),
  visualOnly: () => ({
    images: {
      width: 831,
      height: 333,
    },
    classes: {
      section: styles['visual-only-module-section'],
      body: styles.body,
    },
  }),
  largeDrawer: (widget?: Widget) => ({
    isQuestionModule: widget?.collapseType === 'small',
  }),
  visualWithCTA: () => ({
    containerClasses: styles['transform-section-container'],
    images: {
      width: 450,
      height: 450,
    },
  }),
  productBanner: () => ({
    classes: {
      title: styles['banner-module-title'],
      description: styles['banner-module-description'],
    },
  }),
  productWave: (widget?: Widget) => {
    const data = widget?.data.map((item: any, i: number) => {
      let width = 1
      let height = 1
      if (i === 0) {
        width = 326
        height = 231
      }
      if (i === 1) {
        width = 362
        height = 318
      }
      if (i === 2) {
        width = 362
        height = 244
      }

      if (i === 3) {
        width = 362
        height = 115
      }

      return {
        src: urlForImage(item.image as SanityImage)?.url(),
        alt: item.image?.alt,
        width,
        height,
      }
    })

    return { data }
  },
}

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    title: data.document.title,
    description: data.document.description,
    alternates: {
      canonical: '/products/roster-management',
    },
  })

  return metadata
}

const RosterManagement = async ({ searchParams } : Props): Promise<JSX.Element> => {
  const preview = Boolean(searchParams.preview)
  await redirectHandler(slug, preview)
  const page = await getPageFromCache(slug, preview)

  const content = contentRenderer({
    widgets: page?.widget,
    customizeConfig: customizePropsConfig,
  })

  return (
    <>
      <SchemaMarkup
        schema={page?.schemaMarkup}
        projectId={projectId}
        dataset={dataset}
      />
      {content}
      <CachePurger tag={`page-${slug}`} />
    </>
  )
}

export default RosterManagement
