import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/shared/PageHero'
import { CTABanner } from '@/components/shared/CTABanner'
import { NewsletterForm } from '@/components/shared/NewsletterForm'
import { ResourceButton } from '@/components/shared/ResourceButtons'
import { RESOURCES, SFI_DIMENSIONS } from '@/lib/data/site-data'
import { Download, Lock } from 'lucide-react'

export const metadata = {
  title: 'Resources — Education Moving Up',
  description:
    'A working library, not a glossy one. The frameworks, briefings and tools we actually use in the field — including the School Functionality Index.',
}

export default function ResourcesPage() {
  const openResources = RESOURCES.filter((r) => r.access === 'open')
  const gatedResources = RESOURCES.filter((r) => r.access === 'gated')

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          overline="Resources"
          title="A working library, not a glossy one."
          subtitle="The frameworks, briefings and tools we actually use in the field — including the School Functionality Index. Some are open; others require a brief introduction."
        />

        {/* SFI Feature — flagship tool */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground" id="sfi">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left */}
              <div>
                <p className="label-text text-accent mb-6">Featured tool</p>
                <h2 className="font-serif text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
                  The School Functionality Index.
                </h2>
                <p className="text-base text-white/70 leading-relaxed mb-8">
                  The diagnostic instrument from Dr. Gallie&apos;s doctoral thesis — a structured
                  questionnaire that makes school functionality observable, comparable and
                  improvable. The SFI is the diagnostic anchor for every EMU engagement, and
                  the basis for the &ldquo;Functionality Precedes Performance&rdquo; doctrine.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact?subject=sfi"
                    className="inline-flex items-center justify-center px-5 py-3 bg-accent text-accent-foreground text-sm font-sans font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Request the SFI
                  </a>
                  <a
                    href="/methodology#sfi"
                    className="inline-flex items-center justify-center px-5 py-3 border border-white/20 text-white text-sm font-sans font-medium hover:border-white/40 transition-colors"
                  >
                    How we use it
                  </a>
                </div>
              </div>

              {/* Right — dimension list */}
              <div className="bg-white/5 border border-white/10">
                <div className="px-6 py-4 border-b border-white/10">
                  <p className="label-text text-white/40">SFI Dimensions (8 of 40+)</p>
                </div>
                {SFI_DIMENSIONS.map((dim) => (
                  <div
                    key={dim.number}
                    className="flex items-center gap-4 px-6 py-4 border-b border-white/10 last:border-b-0"
                  >
                    <span className="font-serif text-sm font-bold text-accent/60 w-6 shrink-0">
                      {dim.number}
                    </span>
                    <span className="text-sm text-white/80">{dim.label}</span>
                    <span className="ml-auto label-text text-white/20">SFI dim.</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open resources */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <p className="label-text text-muted-foreground mb-10">Open access</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
              {openResources.map((resource) => (
                <div
                  key={resource.slug}
                  className="border-r border-border last:border-r-0 p-8 lg:p-10 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="label-text text-accent">{resource.type}</span>
                    <Download size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-3 text-balance">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{resource.format}</span>
                    <ResourceButton label={resource.ctaLabel} variant="accent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gated resources */}
        <section className="py-16 lg:py-20 bg-muted border-y border-border">
          <div className="section-container">
            <p className="label-text text-muted-foreground mb-10">Request access</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border bg-background">
              {gatedResources.map((resource) => (
                <div
                  key={resource.slug}
                  className="border-r border-border last:border-r-0 p-8 lg:p-10 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="label-text text-accent">{resource.type}</span>
                    <Lock size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-3 text-balance">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{resource.format}</span>
                    <ResourceButton label={resource.ctaLabel} variant="primary" />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Gated resources are shared with practitioners, researchers and institutional partners
              following a brief introduction. Use the contact form to request access.
            </p>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-background border-b border-border">
          <div className="section-container">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="label-text text-muted-foreground mb-1">Field Notes</p>
                <p className="font-serif text-lg font-bold text-ink">
                  A short letter, when there is something worth saying.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </section>

        <CTABanner
          overline="Need something specific?"
          heading="Request a resource or tool."
          body="If you're looking for something that is not listed here, write to us. We may have it, or we can point you in the right direction."
          primaryLabel="Write to us"
          primaryHref="/contact"
          secondaryLabel="Explore insights"
          secondaryHref="/insights"
        />
      </main>
      <SiteFooter />
    </>
  )
}
