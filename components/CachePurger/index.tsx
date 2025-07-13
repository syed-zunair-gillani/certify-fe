'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import clearCache from '@/action/clearCache'

export interface CachePurgerProps {
  tag: string
}

const CachePurger: React.FC<CachePurgerProps> = ({ tag }: { tag: string }) => {
  const router = useRouter()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('clear_cache')) {
      if (urlParams.get('clear_cache') === 'redirect-list') clearCache('redirect-list')
      clearCache(tag)
      urlParams.delete('clear_cache')
      const newUrl = window.location.pathname + '?' + urlParams.toString()
      router.replace(newUrl)
    }
  }, [router, tag])

  return <></>
}

export default CachePurger
