import { readClient } from '@/sanity/client'

export interface RedirectItem {
  source: string
  destination: string
  permanent: boolean
}

export const fetchRedirectList = async (enableDraft: boolean): Promise<RedirectItem[]> => {
  const redirectList = await readClient.fetch<RedirectItem[]>(
    `
    *[_type=="redirectList" && active==true ${enableDraft ? '' : '&& !(_id in path("drafts.**"))'}] {
      source,
      destination,
      permanent,
    } | order(publishedAt desc)
    `,
    {},
    { next: { revalidate: 7200, tags: ['redirect-list'] } },
  )

  return redirectList
}
