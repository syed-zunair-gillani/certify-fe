import type { Metadata } from 'next'

import generateMetadataByPage from '@/action/generateMetadataByPage'
import { getPageFromCache } from '@/services/page'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'

import data from './data'

import styles from './styles.module.css'
import { type Widget, contentRenderer } from '@/utils/contentRenderer'
import CachePurger from '@/components/CachePurger'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'products/compliance-monitoring'

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(
    slug,
    {
      title: data.metaData.title,
      description: data.metaData.description,
      alternates: {
        canonical: '/products/compliance-monitoring',
      },
    },
  )

  return metadata
}

const customizePropsConfig = {
  productHero: () => ({
    imageWidth: 230,
    imageHeight: 230,
    classes: {
      title: styles['hero-title'],
      description: styles.description,
    },
  }),
  largeDrawer: (widget: Widget) => {
    const isSmallWidget = widget?.collapseType === 'small'
    const customProps = {
      classes: {
        header: isSmallWidget ? '' : styles['large-drawer-header'],
      },
    }
    return customProps
  },
}

export default async function MonitoringPage({ searchParams } : Props): Promise<JSX.Element> {
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
