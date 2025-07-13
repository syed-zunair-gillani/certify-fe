import { notFound } from 'next/navigation'
import { getLandingPageFromCache } from '@/services/landingPage'
import { redirectHandler } from '@/utils/redirect'
import { projectId, dataset } from '@/sanity/config'
import SchemaMarkup from '@/components/SchemaMarkup'
import CachePurger from '@/components/CachePurger'

import styles from './styles.module.css'
import SlugTemp from './slug-temp'

interface Props {
  params: { slug: string }
  searchParams: { preview?: string }
}

// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
//   const page = await getLandingPageFromCache(params.slug)
//   if (!page) return {}

//   return generateMetadataByPage(params.slug, {
//     title: page.pageTitle || data.document.title,
//     description: page.metaDescription || data.document.description,
//     alternates: {
//       canonical: page.canonical || `/${params.slug}`,
//     },
//     openGraph: {
//       type: page.ogType ?? 'website',
//       title: page.ogTitle,
//       description: page.ogDescription,
//       url: page.ogUrl ?? `/${params.slug}`,
//     },
//   })
// }

export default async function LandingPage({ params, searchParams }: Props) {
  const preview = Boolean(searchParams.preview)
  await redirectHandler(params.slug, preview)

  const page = await getLandingPageFromCache(params.slug, preview)
  if (!page) return notFound()

  return (
    <>
      <SchemaMarkup schema={page.schemaMarkup} projectId={projectId} dataset={dataset} />
      <SlugTemp styles={styles} page={page} />
      <CachePurger tag={`${params.slug}`} />
    </>
  )
}
