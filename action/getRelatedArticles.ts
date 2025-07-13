import { type Post, fetchPostList, fetchRelatedArticles } from '@/services/post'

const filterSelfArticle = (posts: Post[], slug: string): Post[] => posts.filter((item: Post) => item.slug !== slug)

const getRelatedArticles = async ({
  slug,
  postType,
  keywords,
}: {
  slug: string,
  postType: string,
  keywords: string,
}): Promise<Post[]> => {
  let relatedArticles: Post[]
  if (keywords != null) {
    relatedArticles = await fetchRelatedArticles({
      slug,
      postType,
      keywords,
    })
    if (relatedArticles.length < 3) {
      const moreArticles: Post[] = (await fetchPostList({
        postType,
        limit: 4 - relatedArticles.length
      })).posts
      relatedArticles = [...relatedArticles, ...moreArticles]
    }
  } else {
    relatedArticles = (await fetchPostList({
      postType,
      limit: 4,
    })).posts
  }
  relatedArticles = filterSelfArticle(relatedArticles, slug)
  if (relatedArticles.length > 3) {
    relatedArticles = relatedArticles.slice(0, 3)
  }

  return relatedArticles
}

export default getRelatedArticles
