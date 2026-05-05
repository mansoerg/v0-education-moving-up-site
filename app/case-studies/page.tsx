import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/shared/PageHero'
import { CTABanner } from '@/components/shared/CTABanner'
import { CASE_STUDIES } from '@/lib/data/site-data'
import Image from 'next/image'

export const metadata = {
  title: 'Case Studies — Education Moving Up',
  description:
    'A selected portfolio of district, school and learning engagements — measured on the metrics that mattered to the case at hand.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          overline="Case studies"
          title="Evidence in the field."
          subtitle="A selected portfolio of district, school and learning engagements — measured on the metrics that mattered to the case at hand."
        />

        {/* Case studies list */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container space-y-0">
            {CASE_STUDIES.map((cs, i) => (
              <article
                key={cs.slug}
                id={cs.slug}
                className="border border-border mb-8 last:mb-0"
              >
                {/* Image banner */}
                <div className="relative aspect-[21/7] overflow-hidden bg-primary/10">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                  <div className="absolute inset-0 bg-primary/50" />
                  <div className="absolute top-4 left-4">
                    <span className="label-text bg-background/90 text-ink px-3 py-1.5">
                      {cs.area} · {cs.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
                  <div>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ink mb-5 text-balance">
                      {cs.title}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {cs.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="border border-border bg-muted p-6">
                    <p className="label-text text-muted-foreground mb-6">Results</p>
                    <div className="space-y-6">
                      {cs.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="font-serif text-3xl font-bold text-accent leading-none mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Methodology link */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="section-container text-center">
            <p className="text-sm text-muted-foreground mb-4">
              All engagements are run on the same five-stage Quality Improvement framework.
            </p>
            <a
              href="/methodology"
              className="inline-flex items-center text-sm font-sans font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Read the methodology →
            </a>
          </div>
        </section>

        <CTABanner
          overline="Bring quality improvement to your system."
          heading="Start with a short briefing."
          body="We'll listen, frame the case, and tell you honestly whether we're the right partner."
          primaryLabel="Request a briefing"
          primaryHref="/contact"
          secondaryLabel="Explore services"
          secondaryHref="/services"
        />
      </main>
      <SiteFooter />
    </>
  )
}
