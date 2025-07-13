import { useState, useEffect } from 'react'

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false)
  const getMobileBreakpoint = (): void => {
    const mobileWidth = 768
    setIsMobile(window.innerWidth < mobileWidth)
  }

  useEffect(() => {
    getMobileBreakpoint()
    window.addEventListener('resize', getMobileBreakpoint)

    return () => {
      window.removeEventListener('resize', getMobileBreakpoint)
    }
  }, [])

  return isMobile
}

export default useIsMobile
