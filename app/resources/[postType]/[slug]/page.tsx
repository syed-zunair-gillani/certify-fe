import { fetchPostDetail } from '@/services/post'
import type { Post } from '@/services/post'
import { notFound } from 'next/navigation'
import SchemaMarkup from '@/components/SchemaMarkup'
import ArticleDetail from '@/components/ArticleDetail'
import PayerResources from '@/components/PayerResources'
import { cache } from 'react'
import type { Metadata } from 'next'
import { RELATED_ARTICLES } from '@/constants/clients'
import getRelatedArticles from '@/action/getRelatedArticles'
import ArticleShare from '@/components/ArticleShare'
import { projectId, dataset } from '@/sanity/config'
import CachePurger from '@/components/CachePurger'

import './styles.css'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  params: {
    postType: string
    slug: string
  },
  searchParams: {
    preview?: any
  }
}

const appHost = process.env.APP_HOST ?? ''

const getPost = cache(async (slug: string, enableDraft: boolean = false) => {
  const post = await fetchPostDetail(slug, enableDraft)

  return post
})

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const post = await getPost(params.slug)

  if (post != null) {
    const canonical = `/resources/blog/${post.slug}`
    const pageTitle = post.pageTitle ?? `${post.title} | CertifyOS`

    return {
      title: pageTitle,
      description: post.metaDescription,
      robots: post.metaRobots,
      alternates: {
        canonical,
      },
      openGraph: {
        type: post.ogType ?? 'article',
        url: post.ogUrl ?? canonical,
        title: post.ogTitle,
        description: post.ogDescription,
        images: post.ogImageUrl ?? post.mainImageUrl
      }
    }
  } else {
    return {}
  }
}

export default async function ResourceDetailPage({ params, searchParams }: Props): Promise<JSX.Element> {
  const preview = Boolean(searchParams.preview)
  await redirectHandler(`resources/blog/${params.slug}`, preview)
  const post: Post = await getPost(params.slug, preview)

  if (post == null) {
    return notFound()
  }

  const relatedArticles: Post[] = await getRelatedArticles({
    slug: post.slug,
    postType: post.postType,
    keywords: post.keywords,
  })

  return (
    <>
      <SchemaMarkup schema={post.schemaMarkup ?? []} projectId={projectId} dataset={dataset} />
      <ArticleDetail post={post} postType={params.postType} />
      <ArticleShare title={post.ogTitle} host={appHost} />
      <div className="section-container">
        <PayerResources data={relatedArticles} headerData={RELATED_ARTICLES} />
      </div>
      <CachePurger tag={`post-${params.slug}`} />
    </>
  )
}
