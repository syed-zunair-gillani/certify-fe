import { fetchPostDetail } from '@/services/post'
import type { Post } from '@/services/post'
import { notFound } from 'next/navigation'
import SchemaMarkup from '@/components/SchemaMarkup'
import ArticleDetail from '@/components/ArticleDetail'
import ArticleShare from '@/components/ArticleShare'
import ArticleSection from '@/components/ArticleSection'
import { cache } from 'react'
import type { Metadata } from 'next'
import { postsMapping } from '../../news/action'
import getRelatedArticles from '@/action/getRelatedArticles'
import { projectId, dataset } from '@/sanity/config'
import CachePurger from '@/components/CachePurger'
import Head from 'next/head'

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
    const canonical = `/company/news/${post.slug}`
    const pageTitle = post.pageTitle ?? `${post.title} | CertifyOS`

    return {
      title: pageTitle,
      description: post.metaDescription,
      robots: post.metaRobots,
      alternates: {
        canonical
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

export default async function NewsDetailPage ({ params, searchParams }: Props): Promise<JSX.Element> {
  const preview = Boolean(searchParams.preview)
  await redirectHandler(`company/news/${params.slug}`, preview)
  const post: Post = await getPost(params.slug, preview)

  if (post == null) {
    return notFound()
  }

  const relatedArticles: Post[] = await getRelatedArticles({
    slug: post.slug,
    postType: 'news',
    keywords: post.keywords,
  })

  return (
    <>
      <Head>
        {
          post.mainImageUrl != null ? (
            <link rel='preload' href={post.mainImageUrl} as='image' />
          ) : null
        }
      </Head>
      <SchemaMarkup schema={post.schemaMarkup ?? []} projectId={projectId} dataset={dataset} />
      <ArticleDetail post={post} postType='news' />
      <ArticleShare title={post.ogTitle} host={appHost} />
      {relatedArticles.length > 0 && <div className="section-container">
        <ArticleSection initArticles={postsMapping(relatedArticles)} title={
          <p className='section-title-text'>RELATED ARTICLES</p>
        } text="See All Articles" />
      </div>}
      <CachePurger tag={`post-${params.slug}`} />
    </>
  )
}