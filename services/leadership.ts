import { readClient } from '@/sanity/client'
import type { ImageAsset } from '@sanity/types'
import type { PortableTextBlock } from '@portabletext/types'
import { urlForImage } from './helper'

export interface AvatarImageAsset extends ImageAsset {
  alt: string
}

export interface Leadership {
  name: string
  title: string
  avatar?: AvatarImageAsset
  avatarUrl?: string
  introduction?: PortableTextBlock[]
  x?: string,
  linkedin?: string
}

export const fetchLeadershipList = async (): Promise<Leadership[]> => {
  const leaderships = await readClient.fetch<Leadership[]>(`
    *[_type=="leadership" && !(_id in path("drafts.**"))] {
      name,
      title,
      avatar {
        _type,
        "asset": asset,
        "alt": asset->altText
      },
      introduction,
      x,
      linkedin,
      position
    } | order(position asc)
  `, {}, { cache: 'no-store' })

  leaderships.forEach((leadership) => {
    leadership.avatarUrl = urlForImage(leadership.avatar)?.url()
  })

  return leaderships
}
