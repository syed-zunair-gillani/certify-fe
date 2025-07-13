'use server'
import { type Post, fetchPostList } from '@/services/post'

export const getLists = async ({
  page = 1,
  sortOrder = 'desc',
  searchKey,
  topic,
  tag,
}: {
  page?: number
  sortOrder?: string
  searchKey?: string
  tag?: string
  topic?: string
}): Promise<{ posts: Post[]; totalNum: number }> => {
  const pageSize = 8
  const { posts, totalNum } = await fetchPostList({
    limit: pageSize,
    offset: (page - 1) * pageSize,
    sortOrder,
    postType: searchKey === undefined ? 'blog' : 'all',
    q: searchKey,
    topic,
    tag,
  })
  return { posts, totalNum }
}
