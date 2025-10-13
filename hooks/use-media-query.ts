import { useState, useEffect } from 'react'

type UseMediaQuery = (query: string) => boolean

export const useMediaQuery: UseMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query)
      const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

      setMatches(mediaQueryList.matches)

      mediaQueryList.addEventListener('change', listener)

      return () => {
        mediaQueryList.removeEventListener('change', listener)
      }
    }
  }, [query])

  return matches
}
