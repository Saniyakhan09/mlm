import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMenu, FiX, FiClock } from 'react-icons/fi'
import { HiCubeTransparent } from 'react-icons/hi2'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/services', label: 'SERVICES' },
    { to: '/plans', label: 'MLM PLANS' },
    { href: '/#about', label: 'ABOUT' },
    { href: '/#testimonials', label: 'REVIEWS' },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-500 to-rose-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href="mailto:sales@yourcompany.com" className="flex items-center gap-2 hover:text-amber-100 transition">
              <FiMail /> sales@yourcompany.com
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-amber-100 transition">
              <FiPhone /> +91-00000-00000
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 font-medium text-white/90">
            <FiClock /> Mon–Sat: 9:00 AM – 7:00 PM
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-white/90 backdrop-blur-md border-b transition-all duration-300 px-4 ${scrolled ? 'border-slate-200 shadow-md py-3' : 'border-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5 text-2xl font-extrabold">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-white text-xl shadow-lg shadow-orange-500/30">
              <HiCubeTransparent />
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              MLM Software
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-black font-semibold text-sm">
            {links.map((l) =>
              l.to ? (
                <Link key={l.label} to={l.to} className="hover:text-orange-600 transition duration-300 relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a key={l.label} href={l.href} className="hover:text-orange-600 transition duration-300 relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
            <a href="/#enquiry" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/30 hover:scale-105 transition duration-300">
              Get Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-slate-700" aria-label="Toggle menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden max-w-7xl mx-auto mt-4 flex flex-col gap-1 text-slate-700 font-semibold animate-fade-in">
            {links.map((l) =>
              l.to ? (
                <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="py-2.5 border-b border-slate-100 hover:text-orange-600 transition">
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="py-2.5 border-b border-slate-100 hover:text-orange-600 transition">
                  {l.label}
                </a>
              )
            )}
            <a href="/#enquiry" onClick={() => setOpen(false)} className="mt-3 text-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/30">
              Get Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
