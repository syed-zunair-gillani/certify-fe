import React from 'react'
import Image from 'next/image'
import type { Post } from '@/services/post'
import { 
  PortableText,
  type PortableTextMarkComponent, 
} from '@portabletext/react'
import styles from './styles.module.css'
import Tag from '@/components/Tag'
import BackButton from '@/components/BackButton' 
import type { Page } from '@/services/page'
import { notFound } from 'next/navigation'
import { renderDateTime } from '@/utils/renderDateTime'
import { urlForImage } from '@/sanity/lib/utils'
import { Image as SanityImage } from 'next-sanity/image'

interface ArticleDetailProps {
  post?: Post
  postType?: string
  page?: Page
}

interface LinkMark {
  _type: 'link'
  href: string
  blank: boolean
  nofollow: boolean
}

export const Link: PortableTextMarkComponent<LinkMark> = ({
  value,
  children,
}) => {
  if (value != null) {
    const { blank, href, nofollow } = value
    let anchorProps = {}
    if (blank) {
      anchorProps = {
        ...anchorProps,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    }
    if (nofollow) {
      const rel = blank ? 'noopener noreferrer nofollow' : 'nofollow'
      anchorProps = { ...anchorProps, rel }
    }

    return (
      <a href={href} {...anchorProps}>
        {children}
      </a>
    )
  }
}

const components = {
  marks: {
    link: Link,
  },
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlForImage(value)?.width(800).height(400).url()
      return imageUrl ? (
        <div className="my-6">
          <SanityImage
            src={imageUrl}
            alt={value.alt || 'Sanity Image'}
            width={800}
            height={400}
            className="rounded-xl mx-auto"
          />
        </div>
      ) : (
        <div
          className="bg-gray-200 text-center text-sm py-6 rounded-xl"
          style={{ width: 800, height: 400 }}
        >
          Unable to load image
        </div>
      )
    },
     videoUpload: ({ value }: any) => {
  if (!value?.asset?._ref) {
    return (
      <div className="bg-gray-200 text-center text-sm py-6 rounded-xl">
        Unable to load video
      </div>
    );
  }

  const ref = value.asset._ref; // e.g., "file-abc123-xyz123-mp4"
  const [, id, ext] = ref.split('-'); // ['file', 'abc123xyz123', 'mp4']
  const videoUrl = `https://cdn.sanity.io/files/6462uee6/production/${id}.${ext}`;

  return (
    <div className="my-6">
      <video
        controls
        style={{
          width: '100%',
          maxWidth: '960px',
          borderRadius: '1rem',
          display: 'block',
          margin: '0 auto',
        }}
      >
        <source src={videoUrl} type={`video/${ext}`} />
        Your browser does not support the video tag.
      </video>
      {value.caption && (
        <p className="text-center text-sm mt-2 text-gray-600">{value.caption}</p>
      )}
    </div>
  );
},
    youtube: ({ value }: any) => {
      try {
        const url = new URL(value.url)
        const videoId = url.searchParams.get('v') ?? url.pathname.split('/').pop()
        if (!videoId) return null

        return (
          <div className="my-6">
            <iframe
              width="560"
              height="470"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: '100%',
                height: '470px',
                borderRadius: '1rem',
              }}
            ></iframe>
          </div>
        )
      } catch {
        return null
      }
    },
  },
}

const PageDetail = ({ page }: { page: Page }): JSX.Element => {
  return (
    <div className={[styles['page-container'], styles.pageContainer].join(' ')}>
      <div className={[styles.header, styles.headerPage].join(' ')}>
        <h1 className={`${styles.title} ${styles.titlePage} heading-1`}>
          {page.title}
        </h1>
      </div>
      <div className={`${styles.body} eyebrow`}>
        <PortableText value={page.body} components={components} />
      </div>
    </div>
  )
}

const PostDetail = ({
  post,
  postType,
}: {
  post: Post
  postType?: string
}): JSX.Element => {
  let backListPath: string = ''
  if (postType === 'news') backListPath = '/company/news'
  if (postType === 'blog') backListPath = '/resources/blog'

  return (
    <div className={styles.container}>
      <div className={styles['hero-section']}>
        <div className={styles.backButton}>
          <BackButton href={backListPath} />
        </div>
        <div className={styles.header}>
          <div className={styles.tag}>
            <Tag text={post.tag.name} color={post.tag.color} />
          </div>
          <h1 className={`${styles.title} heading-1`}>{post.title}</h1>
          <time className={`${styles.publishTime} eyebrow`}>
            {renderDateTime(post.publishedAt)}
          </time>
          {post.dek != null ? (
            <div className={`${styles.dek} eyebrow`}>
              <PortableText value={post.dek} />
            </div>
          ) : null}
        </div>
      </div>
      {post.mainImageUrl != null ? (
        <div className={styles.image}>
          <Image
            src={post.mainImageUrl}
            priority
            fill
            objectFit="cover"
            alt={post.mainImage?.alt ?? post.title}
            quality={90}
          />
        </div>
      ) : null}
      <div className={`${styles.body} eyebrow`}>
        <PortableText value={post.body} components={components} />
      </div>
    </div>
  )
}

export default function ArticleDetail({
  post,
  page,
  postType,
}: ArticleDetailProps): JSX.Element {
  if (post != null) {
    return <PostDetail post={post} postType={postType} />
  }

  if (page != null) {
    return <PageDetail page={page} />
  }

  return notFound()
}
