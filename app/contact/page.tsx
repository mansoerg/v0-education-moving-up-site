import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/shared/PageHero'
import { Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact — Education Moving Up',
  description:
    'Start a conversation. A short briefing is the most useful first step. We respond within two working days.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          overline="Contact"
          title="Start a conversation."
          subtitle="A short briefing is the most useful first step. We'll listen, frame the case, and tell you honestly whether we're the right partner."
        />

        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact info */}
              <div>
                <p className="label-text text-muted-foreground mb-8">Write to us</p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-ink mb-1">Email</p>
                      <a
                        href="mailto:info@movingup.co.za"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@movingup.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-ink mb-1">Location</p>
                      <p className="text-sm text-muted-foreground">
                        South Africa<br />
                        Operating nationally across all 9 provinces.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response note */}
                <div className="border-l-2 border-accent pl-6 mb-12">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We respond within two working days. If you&apos;re writing about a specific
                    service, a case study or the SFI tool, please mention that in your message —
                    it helps us direct your note to the right person immediately.
                  </p>
                </div>

                {/* Quick links */}
                <div className="border border-border">
                  <div className="px-6 py-4 border-b border-border">
                    <p className="label-text text-muted-foreground">Useful starting points</p>
                  </div>
                  {[
                    { label: 'Read the methodology', href: '/methodology' },
                    { label: 'Explore services', href: '/services' },
                    { label: 'Request the SFI tool', href: '/resources#sfi' },
                    { label: 'Preorder the Library of Excellence', href: '/library' },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between px-6 py-4 border-b border-border last:border-b-0 text-sm text-muted-foreground hover:text-ink hover:bg-muted/50 transition-colors group"
                    >
                      {link.label}
                      <span className="text-muted-foreground/30 group-hover:text-accent transition-colors">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact form */}
              <div id="form">
                <p className="label-text text-muted-foreground mb-8">Request a briefing</p>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-sans font-medium text-ink mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-ink mb-2">
                        Organisation
                      </label>
                      <input
                        type="text"
                        className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="District / School / University"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-ink mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-ink mb-2">
                      Role
                    </label>
                    <select className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent text-muted-foreground">
                      <option value="" disabled selected>Select your role</option>
                      <option>District Director / Official</option>
                      <option>Principal / School Leader</option>
                      <option>Department of Education</option>
                      <option>University / Researcher</option>
                      <option>Foundation / Funder</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-ink mb-2">
                      What would you like to discuss?
                    </label>
                    <textarea
                      rows={5}
                      className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                      placeholder="Tell us briefly about your situation — district, school, challenge or question..."
                    />
                  </div>
                  <div id="newsletter" className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="fieldnotes"
                      className="w-4 h-4 border border-border accent-accent"
                    />
                    <label htmlFor="fieldnotes" className="text-sm text-muted-foreground">
                      Subscribe to Field Notes (occasional letters from the practice)
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary text-primary-foreground text-sm font-sans font-semibold hover:bg-secondary transition-colors"
                  >
                    Send message
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respond within two working days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
