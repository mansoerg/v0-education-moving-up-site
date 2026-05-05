import Link from 'next/link'

const FOOTER_LINKS = {
  Practice: [
    { label: 'Methodology', href: '/methodology' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
  ],
  Insight: [
    { label: 'Insights', href: '/insights' },
    { label: 'Library of Excellence', href: '/library' },
    { label: 'SFI Tool', href: '/resources#sfi' },
  ],
  Organisation: [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16 lg:py-20">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="font-serif text-2xl font-bold mb-1">EMU</div>
            <div className="text-xs font-sans font-medium tracking-widest uppercase text-white/50 mb-4">
              Education Moving Up
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Quality improvement for the systems that teach a country. Est. South Africa.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <p className="label-text text-white/40 mb-4">{group}</p>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Education Moving Up. All rights reserved.
          </p>
          <p className="text-xs text-white/40 italic font-serif">
            &ldquo;Without data, you are just another person with an opinion.&rdquo; — Dr. Muavia Gallie
          </p>
        </div>
      </div>
    </footer>
  )
}
