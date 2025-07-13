import type { Metadata } from 'next'
import ArticleDetail from '@/components/ArticleDetail'
import { getPageFromCache } from '@/services/page'
import './styles.css'
import CachePurger from '@/components/CachePurger'
import { redirectHandler } from '@/utils/redirect'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
  searchParams: {
    preview?: any
  }
}

const notFoundSlugs = ['404']

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const page = await getPageFromCache(params.slug)

  if (page != null) {
    const canonical = `/${page.slug}`
    const pageTitle = page.pageTitle ?? `${page.title} | CertifyOS`

    return {
      title: pageTitle,
      description: page.metaDescription,
      robots: page.metaRobots,
      alternates: {
        canonical,
      },
      openGraph: {
        type: page.ogType ?? 'website',
        title: page.ogTitle,
        description: page.ogDescription,
        url: page.ogUrl ?? canonical
      }
    }
  } else {
    return {}
  }
}

export default async function CustomPage({ params: { slug }, searchParams }: Props): Promise<JSX.Element> {
  if (notFoundSlugs.includes(slug)) return notFound()

  const preview = Boolean(searchParams.preview)
  await redirectHandler(slug, preview)
  const page = await getPageFromCache(slug, preview)

  return (
    <div>
      <ArticleDetail page={page} />
      <CachePurger tag={`page-${slug}`} />
    </div>
  )
}


