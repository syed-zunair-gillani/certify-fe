'use client'

import { PortableText } from '@portabletext/react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function TopBar({ content }: { content: any }) {
  const [visible, setVisible] = useState(false)
  const path:any = usePathname()

  useEffect(() => {
    const isHidden = sessionStorage.getItem('topBarDismissed') === 'true'
    setVisible(!isHidden)
  }, [])

  const handleClose = () => {
    setVisible(false)
    sessionStorage.setItem('topBarDismissed', 'true')
  }

  if (!content || !visible) return null

  if (path.startsWith('/landing-pages/')) return

  return (
    <div className="top-bar topbar-container">
      <div className="topbar-content">
        <PortableText value={content} />
        <button className="topbar-close" onClick={handleClose} aria-label="Close Top Bar">
          &times;
        </button>
      </div>
    </div>
  )
}
