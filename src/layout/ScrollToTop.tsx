import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to the top of the window whenever the route changes. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
