'use server'

import {
  fetchPostList,
  fetchSlugPayerResources,
  type Post,
} from '@/services/post'

export const getPayerResources = async (): Promise<Post[]> => {
  const { posts: postListData } = await fetchPostList({
    limit: 3,
    postType: 'blog',
  })

  return postListData
}

export const getSlugPayerResources = async (
  slugs: string[],
): Promise<Post[]> => {
  const { posts } = await fetchSlugPayerResources(slugs)

  return posts
}
