import { getLandingPageFromCache } from '@/services/landingPage'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import data from './data'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const page = await getLandingPageFromCache(params.slug)

  return generateMetadataByPage(`${params.slug}`, {
    title: page?.pageTitle || data.document.title,
    description: page?.metaDescription || data.document.description,
    alternates: {
      canonical: page?.canonical || `https://www.certifyos.com/${params.slug}`,
    },
    openGraph: {
      type: page?.ogType ?? 'website',
      title: page?.ogTitle || page?.pageTitle || data.document.title,
      description: page?.ogDescription || page?.metaDescription || data.document.description,
      url: page?.ogUrl || `https://www.certifyos.com/${params.slug}`,
    }
  })
}
