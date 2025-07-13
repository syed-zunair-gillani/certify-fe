import React from 'react'
import type { Metadata } from 'next'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import Form from './components/Form'
import data from './data'
import { getPageFromCache } from '@/services/page'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'
import CachePurger from '@/components/CachePurger'
import styles from './styles.module.css'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'request-a-demo'

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    title: data.document.title,
    description: data.document.description,
    alternates: {
      canonical: '/request-a-demo'
    },
    openGraph: {
      title: data.document.title,
      description: data.document.description,
      url: data.document.url,
      images: [
        {
          url: data.document.images.url,
          alt: data.document.images.alt,
          width: data.document.images.width,
          height: data.document.images.height,
        },
      ],
    },
  })

  return metadata
}

const RequestADemo = async ({ searchParams } : Props): Promise<JSX.Element> => {
  const preview = Boolean(searchParams.preview)
  await redirectHandler(slug, preview)
  const page = await getPageFromCache(slug, preview)

  return (
    <>
      <SchemaMarkup schema={page?.schemaMarkup} projectId={projectId} dataset={dataset} />
      <div className={styles.container}>
        <h1 className={styles.title}>{data.header.title}</h1>
        <div className={styles.body}>{data.header.body}</div>
        <Form />
      </div>
      <CachePurger tag={`page-${slug}`} />
    </>
  )
}

export default RequestADemo
