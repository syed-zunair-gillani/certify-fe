import Image from 'next/image'
import type { Image as SanityImage } from '@sanity/types'
import { projectId, dataset } from '@/sanity/config'
import classNames from 'classnames'
import type { Metadata } from 'next'

import SchemaMarkup from '@/components/SchemaMarkup'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import { getPageFromCache } from '@/services/page'
import { type Post } from '@/services/post'
import BottomLine from './home/components/CopySection/BottomLine'
import ExperienceItems from './home/components/CopySection/ExperienceItems'
import styles from './home/styles.module.css'
import { urlForImage } from '../services/helper'
import { type Widget, contentRenderer } from '@/utils/contentRenderer'
import CachePurger from '@/components/CachePurger'
import data from './home/data'
import './home/home.css'
import { postsMapping } from './company/news/action'
import { readClient } from '@/sanity/client'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = '/'

const customizePropsConfig = {
  hero: () => ({
    form: {
      maxWidth: 557,
    },
    classes: {
      'section-image': styles['section-image'],
      image: styles['hero-section-image'],
    },
  }),
  visual: (widget?: Widget) => {
    const isBottomLineStyle =
      widget?.sections.sectionFooterType === 'bottomLine'
    const SectionFooter = isBottomLineStyle ? BottomLine : ExperienceItems

    return {
      sectionImage: (
        <Image
          {...{
            className: classNames(
              styles.image,
              isBottomLineStyle ? styles.provider : '',
            ),
            width: isBottomLineStyle ? 366 : 837,
            height: isBottomLineStyle ? 317 : 485,
            quality: 90,
          }}
          src={urlForImage(widget?.image as SanityImage)?.url()}
          alt={widget?.image?.alt}
        />
      ),
      sectionFooter: <SectionFooter sections={widget?.sections.items} />,
      bodyClasses: isBottomLineStyle ? '' : styles['max-w-full'],
    }
  },
}

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    title: data.document.title,
    description: data.document.description,
    alternates: {
      canonical: slug,
    },
  })

  return metadata
}

export default async function HomePage({ searchParams } : Props): Promise<JSX.Element> {
  const page = await getPageFromCache(slug, Boolean(searchParams.preview))
  page?.widget.forEach((item: Record<string, any>) => {
    if (item._type === 'payerResources') {
      item._type = 'homePayerResources'
      item.posts?.forEach((post: Post) => {
        post.mainImageUrl = urlForImage(post.mainImage)?.url()
      })

      item.articlePosts = (item.posts as boolean)
        ? postsMapping(item.posts as Post[])
        : []
    }
  })

  return (
    <>
      <div className={styles['home-page']}>
        <SchemaMarkup
          schema={page?.schemaMarkup}
          projectId={projectId}
          dataset={dataset}
        />
        {contentRenderer({
          widgets: page?.widget,
          customizeConfig: customizePropsConfig,
        })}
      </div>
      <CachePurger tag={`page-${slug}`} />
    </>
  )
}

