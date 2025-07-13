import React from 'react'

import type { Metadata } from 'next'

import generateMetadataByPage from '@/action/generateMetadataByPage'
import data from './data'
import { getPageFromCache } from '@/services/page'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'
import { type Widget, contentRenderer } from '@/utils/contentRenderer'
import CachePurger from '@/components/CachePurger'

import styles from './styles.module.css'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'clients/digital-health'

const customizePropsConfig = {
  hero: () => ({
    classes: {
      'section-image': styles['hero-section-image'],
      image: styles.image,
    },
  }),
  pieChart: () => ({
    classes: {
      'pie-chart-module-container': styles['pie-chart-module-container'],
      'content-container': styles['content-container'],
      content: styles.content,
      'content-body': styles['content-body'],
      'bottom-container': styles['bottom-container'],
    },
  }),
  largeDrawer: (widget?: Widget) => {
    const hasBody = widget?.content?.[0]?.body !== undefined
    const classes = hasBody
      ? {}
      : {
        section: styles['large-open-drawer-module-section'],
        header: styles.header,
      }

    return {
      classes,
    }
  },
  visualOnly: () => ({
    classes: {
      section: styles['visual-only-module-section'],
      body: styles.body,
    },
    images: {
      width: 796,
      height: 421,
    },
  }),
  visualWithCTA: () => ({
    containerClasses: styles['transform-section-container'],
  }),
}

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    title: data.document.title,
    description: data.document.description,
    alternates: {
      canonical: '/clients/digital-health',
    },
  })

  return metadata
}

const DigitalHealth = async ({ searchParams } : Props): Promise<JSX.Element> => {
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

export default DigitalHealth
