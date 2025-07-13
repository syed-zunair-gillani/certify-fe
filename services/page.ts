import { cache } from 'react'
import { readClient } from '@/sanity/client'
import type { PortableTextBlock } from '@portabletext/types'
import { type Schema } from '@operationnation/sanity-plugin-schema-markup'
import { type Widget } from '@/components'

export interface Page {
  title: string
  slug: string
  body: PortableTextBlock[]
  schemaMarkup: Schema[]
  canonical?: string
  pageTitle?: string
  metaRobots?: string
  metaDescription?: string
  ogTitle?: string
  ogType: 'article' | 'website' | undefined
  ogDescription?: string
  ogUrl?: string
  widget: Widget[]
}

export const fetchPage = async (slug: string, enableDraft: boolean = false): Promise<Page> => {
  const page = await readClient.fetch<Page>(
    `
    *[_type=="page" && slug.current=="${slug}" ${enableDraft ? '' : '&& !(_id in path("drafts.**"))'}]${enableDraft ? ' | order(_updatedAt desc)' : ''} {
      title,
      "slug": slug.current,
      body,
      schemaMarkup,
      canonical,
      metaRobots,
      pageTitle,
      metaDescription,
      ogTitle,
      ogDescription,
      ogType,
      ogUrl,
      widget[]{
        ...,
        image {
          _type,
          "asset": asset,
          "alt": asset->altText
        },
        images[] {
          ...,
          image {
            _type,
            "asset": asset,
            "alt": asset->altText
          }
        },
        posts[]->{
          title,
          dek,
          "slug": slug.current,
          postType,
          mainImage {
            _type,
            "asset": asset,
            "alt": asset->altText
          },
          body,
          publishedAt,
          "tag": tag->{"name": name, "slug": slug.current, "color": color.hex,  },
          "topic": topic->{"name": name, "slug": slug.current}
        },
        leaderships[]->{
          name,
          title,
          avatar {
            _type,
            "asset": asset,
            "alt": asset->altText
          },
          introduction,
          x,
          linkedin,
          position
        },
        jobs[]->{
          name,
          url,
          location,
          department
        }
      }
    }[0]
  `, {}, { next: { revalidate: 60, tags: [`page-${slug}`] } })
  return page
}

export const getPageFromCache = cache(async (slug: string, enableDraft: boolean = false) => {
  const page = await fetchPage(slug, enableDraft)

  return page
})
