'use server'

import { type ArticleProps } from '@/components/ArticleCardList/ListItem'
import { fetchSlugPayerResources } from '@/services/post'
import { postsMapping } from '../company/news/action'

export const getArticles = async (slugs: string[]): Promise<ArticleProps[]> => {
  const { posts } = await fetchSlugPayerResources(slugs)

  return postsMapping(posts)
}
