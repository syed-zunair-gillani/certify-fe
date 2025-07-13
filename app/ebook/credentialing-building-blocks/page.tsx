import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import type { Image as SanityImage } from '@sanity/types'
import generateMetadataByPage from '@/action/generateMetadataByPage'
import Form from './components/Form'
import data from './data'
import { getPageFromCache } from '@/services/page'
import SchemaMarkup from '@/components/SchemaMarkup'
import { projectId, dataset } from '@/sanity/config'
import CachePurger from '@/components/CachePurger'
import { urlForImage } from '@/services/helper'
import styles from './styles.module.css'
import { redirectHandler } from '@/utils/redirect'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = 'ebook/credentialing-building-blocks'

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await generateMetadataByPage(slug, {
    title: data.document.title,
    description: data.document.description,
    alternates: {
      canonical: '/ebook/credentialing-building-blocks'
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

const DownloadOurEBook = async ({ searchParams } : Props): Promise<JSX.Element> => {
  const preview = Boolean(searchParams.preview)
  await redirectHandler(slug, preview)
  const page = await getPageFromCache(slug, preview)
  const thumbnailImageUrl = urlForImage((page?.widget as any)?.[0]?.image as SanityImage)?.url()

  return (
    <>
      <SchemaMarkup schema={page?.schemaMarkup} projectId={projectId} dataset={dataset} />
      <div className={styles.container}>
        <h1 className={styles.title}>{(page?.widget as any)?.[0]?.title}</h1>
        <div className={styles.body}>{(page?.widget as any)?.[0]?.body}</div>
        <div className={styles.form}>
          <Form />
          <Image
            src={thumbnailImageUrl}
            width={250}
            height={250}
            alt=''
            className={styles.img}
          />
        </div>
      </div>
      <CachePurger tag={`page-${slug}`} />
    </>
  )
}

export default DownloadOurEBook
