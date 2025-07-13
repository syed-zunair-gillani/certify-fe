import { type Metadata } from 'next'
import styles from './styles.module.css'
import ArticleList from './ArticleList'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import { getPageFromCache } from '@/services/page'
import { fetchTopicList } from '@/services/topic'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'
import CachePurger from '@/components/CachePurger'
import { getArticles } from './action'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'resources/case-studies'

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    title: 'Certify Case Studies',
    description:
      'Find out the latest case studies about CertifyOS products, partners, certifications, and more.',
    alternates: {
      canonical: '/resources/case-studies',
    },
  })

  return metadata
}

export default async function CompanyCaseStudiesPage({ searchParams } : Props): Promise<JSX.Element> {
  const preview = Boolean(searchParams.preview)
  await redirectHandler(slug, preview)
  const { posts, totalNum } = await getArticles({ page: 1, sortOrder: 'desc' })
  const page = await getPageFromCache(slug, preview)
  const getTopicList = await fetchTopicList('news')

  const topics = [
    {
      name: 'All',
      slug: { current: 'all', _type: 'slug' },
      postCount: totalNum,
    },
    ...getTopicList,
  ]

  return (
    <>
      <SchemaMarkup
        schema={page?.schemaMarkup}
        projectId={projectId}
        dataset={dataset}
      />
      <div className={styles['page-title']}>
        <h1>Case Studies</h1>
      </div>
      <div className={styles['article-box']}>
        <ArticleList initArticles={posts} totalNum={totalNum} topics={topics} />
      </div>
      <CachePurger tag={`page-${slug}`} />
    </>
  )
}
