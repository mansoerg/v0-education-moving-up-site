'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/data/site-data'

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent',
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Education Moving Up — Home"
          >
            <span className="font-serif text-xl font-bold text-ink tracking-tight group-hover:text-navy transition-colors">
              EMU
            </span>
            <span className="text-[10px] font-sans font-medium tracking-[0.12em] uppercase text-muted-foreground hidden sm:block">
              Education Moving Up
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-sans font-medium transition-colors',
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-ink border-b border-accent pb-px'
                    : 'text-muted-foreground hover:text-ink',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/library"
              className="text-sm font-sans font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Library
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm font-sans font-medium hover:bg-secondary transition-colors"
            >
              Request a Briefing
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="section-container py-6 flex flex-col gap-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-base font-sans font-medium py-2 border-b border-border/50',
                  pathname === link.href
                    ? 'text-ink'
                    : 'text-muted-foreground hover:text-ink',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/library"
              className="text-base font-sans font-medium py-2 border-b border-border/50 text-accent"
            >
              Library of Excellence
            </Link>
            <Link
              href="/contact"
              className="mt-2 inline-flex justify-center px-4 py-3 bg-primary text-primary-foreground text-sm font-sans font-semibold"
            >
              Request a Briefing
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
