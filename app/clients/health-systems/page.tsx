import React from 'react'
import type { Metadata } from 'next'

import generateMetadataByPage from '@/action/generateMetadataByPage'
import data from './data'
import { getPageFromCache } from '@/services/page'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'
import { contentRenderer } from '@/utils/contentRenderer'
import CachePurger from '@/components/CachePurger'

import styles from './styles.module.css'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'clients/health-systems'

const customizePropsConfig = {
  hero: () => ({
    classes: {
      'section-image': styles['hero-section-image'],
      image: styles.image,
    },
  }),
  visualOnly: () => ({
    classes: {
      section: styles['visual-only-module-section'],
      image: styles.image,
    },
    images: {
      width: 1080,
      height: 275,
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
      canonical: '/clients/health-systems',
    },
  })

  return metadata
}

const HealthSystems = async ({ searchParams } : Props): Promise<JSX.Element> => {
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

export default HealthSystems
