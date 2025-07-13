import { type Metadata } from 'next'
import styles from './styles.module.css'
import ResourceList from './ResourceList'
import { getLists } from '../action'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import { getPageFromCache } from '@/services/page'
import { fetchTopicList } from '@/services/topic'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'
import NotFound from '@/components/NotFound'
import CachePurger from '@/components/CachePurger'
import './styles.reset.css'
import { redirectHandler } from '@/utils/redirect'

const slug = 'resources/blog'

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    title: 'Certify Blog & Resources',
    description: 'Find case-studies, blogs, and webinars.',
    alternates: {
      canonical: '/resources/blog',
    },
  })

  return metadata
}

export default async function CompanyNewsPage({
  searchParams,
}: {
  searchParams: {
    searchKey?: string
    preview?: any
  }
}): Promise<JSX.Element> {
  const searchKey = searchParams?.searchKey
  const { posts, totalNum } = await getLists({
    page: 1,
    sortOrder: 'desc',
    searchKey,
  })
  const preview = Boolean(searchParams.preview)
  await redirectHandler(slug, preview)
  const page = await getPageFromCache(slug, preview)
  const getTopicList = await fetchTopicList('blog')

  const topics = [
    {
      name: 'All',
      slug: { current: 'all', _type: 'slug' },
      postCount: totalNum,
    },
    ...getTopicList,
  ]

  return posts.length > 0 ? (
    <>
      <SchemaMarkup
        schema={page?.schemaMarkup}
        projectId={projectId}
        dataset={dataset}
      />
      <div className={styles['page-title']}>
        <h1>Resources</h1>
      </div>
      <div className={styles['list-box']}>
        <ResourceList
          list={posts}
          searchKey={searchKey}
          totalNum={totalNum}
          topics={topics}
        />
      </div>
      <CachePurger tag={`page-${slug}`} />
    </>
  ) : (
    <NotFound searchKey={searchKey ?? ''} />
  )
}
