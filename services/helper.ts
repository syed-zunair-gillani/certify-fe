import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from '@/sanity/config'
import type { Image } from '@sanity/types'

const builder = imageUrlBuilder({ projectId, dataset })

export const urlForImage = (source?: Image): any => {
  if (source?.asset?._ref == null) {
    return undefined
  }

  /**
   * fix svg 400 bad request from next/image
   * reason: https://medium.com/@niniroula/nextjs-upgrade-next-image-and-dangerouslyallowsvg-c934060d79f8
   * nextjs issue: https://github.com/vercel/next.js/discussions/53041
   */
  const builderInstance = builder.image(source)
  if(builderInstance.url().endsWith(".svg")) {
    return builderInstance
  }

  return builderInstance.auto('format')
}
