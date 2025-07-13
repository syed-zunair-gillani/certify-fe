import type { Metadata } from 'next'
import { getPageFromCache } from '@/services/page'
import mergeWith from 'lodash/mergeWith'

async function generateMetadataByPage(slug: string, defaultMetadata: Metadata): Promise<Metadata> {
  const page = await getPageFromCache(slug)
  let pageMetadata

  if (page != null) {
    pageMetadata = {
      title: page.pageTitle,
      description: page.metaDescription,
      robots: page.metaRobots,
      alternates: {
        canonical: page.canonical
      },
      openGraph: {
        ...(page.ogType != null ? { type: page.ogType } : {}),
        title: page.ogTitle ?? page.pageTitle,
        description: page.ogDescription ?? page.metaDescription,
        url: page.ogUrl ?? page.canonical
      }
    }
  } else {
    pageMetadata = {}
  }

  return mergeWith(
    {},
    {
      ...defaultMetadata,
      title: page?.ogTitle ?? defaultMetadata.title,
      description: page?.ogDescription ?? defaultMetadata.description
    },
    pageMetadata,
    (a: string | undefined, b: string | null) => b === null ? a : undefined
  )
}

export default generateMetadataByPage
