import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/shared/PageHero'
import { CTABanner } from '@/components/shared/CTABanner'
import { SERVICES, ENGAGEMENT_PROCESS, FOCUS_AREAS } from '@/lib/data/site-data'

export const metadata = {
  title: 'Services — Education Moving Up',
  description:
    'Six service lines across district, school and learning. Each runs the same five-stage Quality Improvement cycle — calibrated, not generic.',
}

const AREA_COLORS: Record<string, string> = {
  District: 'bg-primary/10 text-primary',
  School: 'bg-accent/10 text-accent-foreground',
  Learning: 'bg-muted text-muted-foreground',
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          overline="Services"
          title="Engagements at the level the system is actually at."
          subtitle="Six service lines across district, school and learning. Each one runs the same five-stage Quality Improvement cycle — calibrated, not generic."
        />

        {/* Focus areas quick-nav */}
        <section className="bg-muted border-b border-border py-8">
          <div className="section-container">
            <div className="flex flex-col sm:flex-row gap-0 sm:divide-x divide-border">
              {FOCUS_AREAS.map((area) => (
                <div key={area.area} className="flex-1 px-6 py-2 sm:py-0">
                  <p className="label-text text-accent mb-1">Focus area · {area.area}</p>
                  <p className="text-sm text-ink font-medium">{area.headline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="space-y-0 border border-border">
              {SERVICES.map((service) => (
                <div
                  key={service.slug}
                  className="border-b border-border last:border-b-0 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-16 hover:bg-muted/30 transition-colors"
                >
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="label-text text-accent">{service.area}</span>
                      <span className="h-px w-6 bg-border" />
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ink mb-3 text-balance">
                      {service.title}
                    </h2>
                    <p className="text-sm font-sans font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Right — deliverables */}
                  <div className="border-l-0 lg:border-l border-border lg:pl-12">
                    <p className="label-text text-muted-foreground mb-4">Deliverables</p>
                    <ul className="space-y-3">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-sm text-muted-foreground">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement process */}
        <section className="py-20 lg:py-28 bg-muted border-y border-border">
          <div className="section-container">
            <div className="mb-12">
              <p className="label-text text-muted-foreground mb-4">How we work</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink text-balance">
                How an engagement begins.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border bg-background">
              {ENGAGEMENT_PROCESS.map((step) => (
                <div
                  key={step.number}
                  className="border-r border-border last:border-r-0 p-8 flex flex-col"
                >
                  <span className="font-serif text-5xl font-bold text-accent/30 leading-none mb-6 select-none">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inline contact form */}
        <section className="py-20 lg:py-28 bg-background" id="briefing">
          <div className="section-container">
            <div className="max-w-lg mx-auto">
              <p className="label-text text-muted-foreground mb-4">Start a conversation</p>
              <h2 className="font-serif text-3xl font-bold text-ink mb-8 text-balance">
                Request a briefing.
              </h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-sans font-medium text-ink mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-ink mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-ink mb-2">
                    Context (optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                    placeholder="Tell us briefly about your district, school or situation..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground text-sm font-sans font-semibold hover:bg-secondary transition-colors"
                >
                  Request briefing
                </button>
              </form>
            </div>
          </div>
        </section>

        <CTABanner
          overline="Ready to start?"
          heading="Bring quality improvement to your district, school or classroom."
          body="Start with a short briefing. We'll listen, frame the case, and tell you honestly whether we're the right partner."
          primaryLabel="Request a briefing"
          primaryHref="/contact"
          secondaryLabel="Explore case studies"
          secondaryHref="/case-studies"
        />
      </main>
      <SiteFooter />
    </>
  )
}
