import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6462uee6',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-06-16',
}

export const sanityClient = createClient(config)

const builder = imageUrlBuilder(sanityClient)

export const urlForImage = (source: any) => {
  return builder.image(source)
}

