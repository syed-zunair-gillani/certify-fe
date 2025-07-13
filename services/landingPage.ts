import type { PortableTextBlock } from '@portabletext/types'
import { type Schema } from '@operationnation/sanity-plugin-schema-markup'
import { type Widget } from '@/components'
import { readClient } from '@/sanity/client'

interface Accordion {
  heading: string
  description: PortableTextBlock[]
}

export interface LandingPage {
  title: string
  slug: string
  schemaMarkup?: Schema[]
  canonical?: string
  pageTitle?: string
  metaRobots?: string
  metaDescription?: string
  ogTitle?: string
  ogType?: 'article' | 'website'
  ogDescription?: string
  ogUrl?: string
  logo1?: any
  logo2?: any
  bannerText?: PortableTextBlock[]
  accordions?: Accordion[]
  footerSimpleText?: string
  footerRichText?: PortableTextBlock[]
  widget?: Widget[]
}

export const fetchLandingPage = async (
  slug: string,
  enableDraft = false
): Promise<LandingPage> => {

  const query = `*[_type=="landingPage" && slug.current==$slug]{
    title,
    "slug": slug.current,
    schemaMarkup,
    canonical,
    pageTitle,
    metaRobots,
    metaDescription,
    ogTitle,
    ogType,
    ogDescription,
    ogUrl,
    logo1,
    logo2,
    bannerText,
    accordions,
    footerSimpleText,
    footerRichText,
    widget
  }[0]`

  const page = await readClient.fetch<LandingPage>(
    query,
    { slug },
    { next: { revalidate: 60, tags: [`landing-${slug}`] } }
  )
  return page
}

export const getLandingPageFromCache = async (slug: string, enableDraft = false) => {
  return fetchLandingPage(slug, enableDraft)
}