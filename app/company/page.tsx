import React from 'react'
import type { Metadata } from 'next'

import SchemaMarkup from '@/components/SchemaMarkup'
import data from './home/data'
import { projectId, dataset } from '@/sanity/config'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import { getPageFromCache } from '@/services/page'
import styles from './home/styles.module.css'
import { type Widget, contentRenderer } from '@/utils/contentRenderer'
import CachePurger from '@/components/CachePurger'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'company'

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage('company', {
    title: data.document.title,
    description: data.document.description,
    alternates: {
      canonical: '/company',
    },
  })

  return metadata
}

const customizePropsConfig = {
  hero: (widget: Widget) => ({
    form: {
      button: {
        text: widget?.form?.button?.text,
        href: widget?.form?.button?.href,
      },
    },
    classes: {
      title: styles['hero-section-form-container-title'],
      'form-container': styles['hero-section-form-container'],
      image: styles.image,
    },
  }),
  historySection: () => ({
    imageWidth: 721,
    imageHeight: 646,
  }),
  companyLargeDrawerModule: () => ({
    classes: {
      section: styles['large-open-drawer-module-section'],
      header: styles.header,
      italic: styles.italic,
    },
  }),
  visualWithCTA: () => ({
    images: {
      width: 758,
      height: 400,
    },
    transformSectionClasses: styles['transform-section'],
    containerClasses: styles['transform-section-container'],
    imageClasses: styles['transform-section-image'],
    classes: {
      title: styles['transform-section-title'],
    },
  }),
}

const CompanyAboutUsPage = async ({ searchParams } : Props): Promise<JSX.Element> => {
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

export default CompanyAboutUsPage
