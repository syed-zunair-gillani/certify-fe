import type { Metadata } from 'next'
import { projectId, dataset } from '@/sanity/config'
import SchemaMarkup from '@/components/SchemaMarkup'
import { getPageFromCache } from '@/services/page'
import { type Widget, contentRenderer } from '@/utils/contentRenderer'
import { Link } from '@/components/Button'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import CachePurger from '@/components/CachePurger'
import data from '../careers/data'
import styles from '../careers/styles.module.css'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'company/careers'

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage('company/careers', {
    title: data.document.title,
    description: data.document.description,
    alternates: {
      canonical: '/company/careers',
    },
  })

  return metadata
}

const renderAdvantageVisualOnlyModuleSectionBottomComponent = (
  bottomComponent: any,
): JSX.Element => {
  return (
    <>
      <div className={styles['button-container-advantage']}>
        <Link
          text={bottomComponent.button.text}
          href={bottomComponent.button.href}
        />
      </div>
    </>
  )
}

const customizePropsConfig = {
  productHero: (widget?: Widget) => ({
    imageWidth: 512,
    imageHeight: 341,
    classes: {
      description: styles['hero-section-description'],
      images: styles['hero-section-image'],
    },
  }),
  productDrawer: (widget?: Widget) => ({}),
  visualOnly: (widget?: Widget) => ({
    classes: {
      section: styles['visual-only-module-section'],
      body: styles.body,
    },
    images: {
      width: 796,
      height: 421,
    },
  }),
  advantageVisualOnly: (widget?: Widget) => ({
    classes: {
      section: styles['visual-only-module-section'],
      body: styles.body,
    },
    bottomComponent: renderAdvantageVisualOnlyModuleSectionBottomComponent(
      widget?.bottomComponent,
    ),
  }),
}

export default async function CompanyCareersPage({ searchParams } : Props): Promise<JSX.Element> {
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
