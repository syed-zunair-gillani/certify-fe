'use server'

import { type ArticleProps } from '@/components/ArticleCardList/ListItem'
import { type Post, fetchPostList } from '@/services/post'
import { renderDateTime } from '@/utils/renderDateTime'

export const getArticles = async ({
  page = 1,
  sortOrder = 'desc',
  topic,
}: {
  page?: number
  sortOrder?: string
  topic?: string
}): Promise<{ posts: ArticleProps[]; totalNum: number }> => {
  const firstPageSize = 7
  const pageSize = 6
  const offset = page > 1 ? (page - 2) * pageSize + firstPageSize : 0
  const { posts, totalNum } = await fetchPostList({
    limit: page === 1 ? firstPageSize : pageSize,
    offset,
    sortOrder,
    postType: 'case-study',
    topic,
  })
  return { posts: postsMapping(posts), totalNum }
}

export const postsMapping = (datas: Post[]): ArticleProps[] => {
  return datas.map((data) => postMapping(data))
}

export const postMapping = (data: Post): ArticleProps => {
  const tagText = data?.tag?.name
  const tagColor = data?.tag?.color
  return {
    title: data?.title,
    content: data?.body,
    date: renderDateTime(data?.publishedAt ?? ''),
    src: data?.mainImageUrl ?? '',
    href: `/resources/case-studies/${data?.slug}`,
    tag: tagText !== undefined ? { text: tagText, color: tagColor } : undefined,
    alt: data?.mainImage?.alt ?? '',
  }
}
