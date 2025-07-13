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

const slug = 'products/licensing'

const customizePropsConfig = {
  productHero: () => ({
    imageWidth: 230,
    imageHeight: 230,
    classes: {
      title: styles['hero-title'],
      container: styles['hero-container'],
      description: styles.description,
    },
  }),
  productDrawer: () => ({
    classes: {
      title: styles['max-w-dm'],
    },
  }),
  productBanner: () => ({
    classes: {
      title: styles['banner-max-w'],
    },
  }),
  largeDrawer: (widget?: Widget) => {
    const isLargeType = widget?.collapseType === 'large'

    return {
      isQuestionModule: !isLargeType,
    }
  },
  visualWithCTA: () => ({
    imageClasses: styles['transform-image'],
  }),
}

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    title: data.metaData.title,
    description: data.metaData.description,
    alternates: {
      canonical: '/products/licensing',
    },
  })

  return metadata
}

export default async function LicensingPage({ searchParams }: Props) : Promise<JSX.Element> {
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
