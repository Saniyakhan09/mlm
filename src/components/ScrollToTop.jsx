import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On route change: scroll to the #hash target if present (with retry until it
// mounts), otherwise scroll to the top of the page.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      let tries = 0
      const tryScroll = () => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else if (tries++ < 10) {
          setTimeout(tryScroll, 60)
        }
      }
      tryScroll()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
