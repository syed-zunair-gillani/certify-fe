import { readClient } from '@/sanity/client'
import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset } from '@sanity/types'
import { type Schema } from '@operationnation/sanity-plugin-schema-markup'
import { urlForImage } from './helper'

export interface PostImageAsset extends ImageAsset {
  alt: string
}

export interface Post {
  title: string
  slug: string
  dek?: PortableTextBlock[]
  mainImage?: PostImageAsset
  mainImageUrl?: string
  body: PortableTextBlock[]
  tag: {
    name: string
    slug: string
    color: string
  }
  topic: {
    name: string
    slug: {
      current: string
      _type: string
    }
    postCount: number
  }
  pdfUrl?: string 
  pageTitle?: string
  metaDescription?: string
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
  ogType?: 'article' | 'website' | undefined
  ogImage?: PostImageAsset
  ogImageUrl?: string
  publishedAt: string
  postType: string
  keywords: string
  canonical?: string
  metaRobots?: string
  schemaMarkup: Schema[]
}

export const fetchSlugPayerResources = async (
  slugs: string[],
): Promise<{ posts: Post[] }> => {
  const slugString = slugs.join('","')

  const posts = await readClient.fetch<Post[]>(
    `
    *[_type=="post" && slug.current in ["${slugString}"] && !(_id in path("drafts.**"))] {
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
      metaDescription,
      ogDescription,
      ogTitle,
      ogUrl,
      publishedAt,
      schemaMarkup,
      keywords,
      canonical,
      metaRobots,
      "tag": tag->{"name": name, "slug": slug.current, "color": color.hex}
    } | order(publishedAt desc)
  `,
    {},
    { next: { revalidate: 60, tags: [`payer-resources-${slugString}`] } },
  )

  posts.forEach((post) => {
    post.mainImageUrl = urlForImage(post.mainImage)?.url()
  })

  return { posts }
}

export const fetchPostDetail = async (slug: string, enableDraft: boolean = false): Promise<Post> => {
  const post = await readClient.fetch<Post>(
    `
    *[_type=="post" && slug.current=="${slug}" ${enableDraft ? '' : '&& !(_id in path("drafts.**"))'}]${enableDraft ? ' | order(_updatedAt desc)' : ''} {
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
      pageTitle,
      metaDescription,
      ogDescription,
      ogType,
      "ogTitle": ogTitle || title,
      ogUrl,
      ogImage,
      publishedAt,
      schemaMarkup,
      keywords,
      canonical,
      metaRobots,
      "pdfUrl": pdfFile.asset->url,
      "tag": tag->{"name": name, "slug": slug.current, "color": color.hex}
    }[0]
  `,
    {},
    { next: { revalidate: 60, tags: [`post-${slug}`] } },
  )

  if (post?.mainImage != null) {
    post.mainImageUrl = urlForImage(post.mainImage)?.url()
  }

  if (post?.ogImage != null) {
    post.ogImageUrl = urlForImage(post.ogImage)?.url()
  } else {
    post.ogImageUrl = post.mainImageUrl
  }

  return post
}

export const fetchPostList = async ({
  orderBy = 'publishedAt',
  sortOrder = 'desc',
  tag = 'all',
  topic = 'all',
  limit = 6,
  offset = 0,
  postType = 'all',
  q = '',
}): Promise<{ posts: Post[]; totalNum: number }> => {
  const queryStr = `
    *[_type=="post" && !(_id in path("drafts.**"))
      ${postType === 'all' ? '' : `&& postType=="${postType}"`}
      ${tag !== 'all' ? `&& tag->slug.current=="${tag}"` : ''}
      ${topic !== 'all' ? `&& topic->slug.current=="${topic}"` : ''}]
      ${q === '' ? '' : `| score(pt::text(body) match "${q}" || title match "${q}") [ _score > 0]`}
  `

  const [posts, totalNum] = await Promise.all([
    readClient.fetch<Post[]>(
      `
      ${queryStr} {
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

      } | order(${orderBy} ${sortOrder}) [${offset}...${offset + limit}]
    `,
      {},
      { next: { revalidate: 60 } },
    ),
    readClient.fetch<number>(`count(${queryStr})`),
  ])

  posts.forEach((post) => {
    post.mainImageUrl = urlForImage(post.mainImage)?.url()
  })

  return { posts, totalNum }
}

export const fetchRelatedArticles = async ({
  slug,
  postType,
  keywords,
}: {
  slug: string
  postType: string
  keywords: string
}): Promise<Post[]> => {
  const keywordArray = keywords
    .split(';')
    .map((s) => s.trim())
    .filter((s) => Boolean(s))

  const queryStrForScore = keywordArray
    .map((keyword) => `keywords match "${keyword.replace(/"/g, '\\"')}"`)
    .join('||')

  const posts = await readClient.fetch<Post[]>(
    `
    *[_type=="post" && !(_id in path("drafts.**")) && slug.current!="${slug}" ${postType === 'all' ? '' : `&& postType=="${postType}"`}] | score(${queryStrForScore}) [_score > 0] {
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
      "tag": tag->{"name": name, "slug": slug.current, "color": color.hex}
    } | order(_score) [0...3]
  `,
    {},
    { next: { revalidate: 7200, tags: [`related-article-${slug}`] } },
  )

  posts.forEach((post) => {
    post.mainImageUrl = urlForImage(post.mainImage)?.url()
  })

  return posts
}

export const fetchPostListForSitemap = async (): Promise<Post[]> => {
  const posts = await readClient.fetch<Post[]>(
    `
    *[_type=="post" && !(_id in path("drafts.**"))] {
      "slug": slug.current,
      postType,
      publishedAt
    }
  `,
    {},
    { next: { revalidate: 7200, tags: [`sitemap-posts`] } },
  )

  return posts
}
