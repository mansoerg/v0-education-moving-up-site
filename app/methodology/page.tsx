import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/shared/PageHero'
import { CTABanner } from '@/components/shared/CTABanner'
import { THREE_STRATEGIES, QI_STAGES, FOCUS_AREAS, SFI_DIMENSIONS } from '@/lib/data/site-data'

export const metadata = {
  title: 'Methodology — Education Moving Up',
  description:
    'Three strategies. Five stages. One principle. The EMU methodology refined over two decades of practice with South African education systems.',
}

export default function MethodologyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          overline="Methodology"
          title="Three strategies. Five stages. One principle."
          subtitle="Our methodology has been refined over two decades of practice with South African education systems. The doctrine has not changed — the tools around it have."
        />

        {/* Three Strategies */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <p className="label-text text-muted-foreground mb-12">Three strategies</p>
            <div className="space-y-0 border border-border">
              {THREE_STRATEGIES.map((strategy, i) => (
                <div
                  key={strategy.number}
                  className="border-b border-border last:border-b-0 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 items-start hover:bg-muted/30 transition-colors"
                >
                  {/* Number */}
                  <div className="font-serif text-8xl lg:text-9xl font-bold text-border/50 leading-none select-none">
                    {strategy.number}
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ink mb-2">
                      {strategy.title}
                    </h2>
                    <p className="label-text text-accent mb-5">{strategy.tagline}</p>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                      {strategy.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QI Cycle — 5 Stages */}
        <section className="py-20 lg:py-28 bg-muted border-y border-border">
          <div className="section-container">
            <div className="mb-12">
              <p className="label-text text-muted-foreground mb-4">Quality Improvement Cycle</p>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-ink max-w-xl text-balance">
                Five stages of project management.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-border bg-background">
              {QI_STAGES.map((stage) => (
                <div
                  key={stage.number}
                  className="border-r border-border last:border-r-0 p-6 flex flex-col"
                >
                  <span className="font-serif text-5xl font-bold text-accent/40 leading-none mb-4 select-none">
                    {stage.number}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ink mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-sans font-semibold uppercase tracking-wide text-accent mb-3">
                    {stage.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core principle */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="label-text text-white/40 mb-6">Core principle</p>
              <h2 className="font-serif text-4xl lg:text-6xl font-bold text-primary-foreground text-balance leading-tight">
                Functionality must precede Performance.
              </h2>
              <p className="mt-8 text-lg text-white/70 leading-relaxed">
                Stable systems, processes and procedures are the precondition for sustained gains
                in learning outcomes. Tools and interventions are matched to the level a school or
                district has actually reached — not the level it is asked to perform at.
              </p>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <p className="label-text text-muted-foreground mb-12">Three focus areas</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border">
              {FOCUS_AREAS.map((area) => (
                <div key={area.area} className="p-8 lg:p-10 border-r border-border last:border-r-0">
                  <span className="label-text text-accent block mb-4">
                    Focus area · {area.area}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink mb-4 text-balance">
                    {area.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SFI Tool feature */}
        <section className="py-20 lg:py-28 bg-muted border-y border-border" id="sfi">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left */}
              <div>
                <p className="label-text text-muted-foreground mb-4">Featured tool</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-6 text-balance">
                  The School Functionality Index.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  The diagnostic instrument from Dr. Gallie&apos;s doctoral thesis — a structured
                  questionnaire that makes school functionality observable, comparable and
                  improvable. The SFI is the diagnostic anchor for every EMU engagement.
                </p>
                <a
                  href="/contact?subject=sfi"
                  className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-sans font-medium hover:bg-secondary transition-colors"
                >
                  Request the SFI
                </a>
              </div>

              {/* Right — SFI dimensions */}
              <div className="border border-border bg-background">
                {SFI_DIMENSIONS.map((dim, i) => (
                  <div
                    key={dim.number}
                    className="flex items-center gap-4 px-6 py-4 border-b border-border last:border-b-0"
                  >
                    <span className="font-serif text-sm font-bold text-accent/60 w-6 shrink-0">
                      {dim.number}
                    </span>
                    <span className="text-sm font-sans text-ink">{dim.label}</span>
                    <span className="ml-auto label-text text-muted-foreground/60">SFI dim.</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          overline="Work with us"
          heading="See the methodology applied to your context."
          body="A short briefing is the fastest way to know whether the EMU approach is the right one for your district, school or classroom."
          primaryLabel="Request a briefing"
          primaryHref="/contact"
          secondaryLabel="Read the methodology"
          secondaryHref="/resources"
        />
      </main>
      <SiteFooter />
    </>
  )
}
