import { readClient } from '@/sanity/client'

export interface TopicProps {
  name: string
  slug: {
    current: string
    _type: string
  }
  postCount: number
}

export const fetchTopicList = async (
  postType: string,
): Promise<TopicProps[]> => {
  const topics = await readClient.fetch(
    `
    *[_type=="topic" && !(_id in path("drafts.**"))] {
      name,
      slug,
      "postCount": count(*[_type=="post" && references(^._id) && postType=="${postType}"])
    }
  `,
    {},
    { cache: 'no-store' },
  )

  return topics
}
