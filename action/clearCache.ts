'use server'

import { revalidateTag } from 'next/cache'

const clearCache = (tag: string): void => {
  revalidateTag(tag)
}

export default clearCache
