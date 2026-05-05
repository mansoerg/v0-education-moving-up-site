import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/shared/PageHero'
import { ContactForm } from '@/components/contact/ContactForm'
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
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
