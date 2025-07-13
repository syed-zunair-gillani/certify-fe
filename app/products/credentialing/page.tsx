import type { Metadata } from 'next'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import { getPageFromCache } from '@/services/page'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'
import { type Widget, contentRenderer } from '@/utils/contentRenderer'
import { urlForImage } from '@/services/helper'
import type { Image as SanityImage } from '@sanity/types'
import CachePurger from '@/components/CachePurger'
import data from './data'
import styles from './styles.module.css'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'products/credentialing'

const customizePropsConfig = {
  productHero: () => ({
    classes: {
      container: styles['hero-container'],
      title: styles.title,
      description: styles.description,
      images: styles.image,
    },
  }),
  productDrawer: () => ({
    classes: {
      title: styles['drawer-module-title'],
    },
  }),
  productBanner: () => ({
    classes: {
      title: styles['banner-module-title'],
      description: styles['banner-module-description'],
    },
  }),
  productWave: (widget?: Widget) => ({
    data: widget?.data.map((item: any, i: number) => {
      let width = 1
      let height = 1
      if (i === 0) {
        width = 326
        height = 196
      }
      if (i === 1) {
        width = 362
        height = 281
      }
      if (i === 2) {
        width = 362
        height = 223
      }
      if (i === 3) {
        width = 326
        height = 257
      }
      if (i === 4) {
        width = 326
        height = 376
      }

      return {
        src: urlForImage(item.image as SanityImage)?.url(),
        alt: item.image?.alt,
        width,
        height,
      }
    }),
  }),
  largeDrawer: (widget?: Widget) => {
    const isLargeType = widget?.collapseType === 'large'

    return {
      isQuestionModule: !isLargeType,
    }
  },
  visualWithCTA: () => ({
    containerClasses: styles['transform-section-container'],
  }),
}

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    ...data.document,
    alternates: {
      canonical: '/products/credentialing',
    },
  })

  return metadata
}

export default async function CredentialingPage({ searchParams } : Props): Promise<JSX.Element> {
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
