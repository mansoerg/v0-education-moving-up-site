import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/shared/PageHero'
import { CTABanner } from '@/components/shared/CTABanner'
import { ABOUT_VALUES, ABOUT_MISSION, STATS } from '@/lib/data/site-data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About — Education Moving Up',
  description:
    'A practice built on a single conviction: functionality precedes performance. More than two decades of work alongside South African districts, schools and classrooms.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          overline="About"
          title="A practice built on a single conviction: functionality precedes performance."
          subtitle="For more than two decades, EMU has worked alongside South African districts, schools and classrooms — applying the same disciplined cycle of case analysis, input, process, output and impact."
        />

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="label-text text-muted-foreground mb-6">Vision &amp; Mission</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-8 text-balance">
                  Why we exist.
                </h2>
                <blockquote className="border-l-2 border-accent pl-6 mb-8">
                  <p className="font-serif text-lg text-ink/80 italic leading-relaxed">
                    &ldquo;{ABOUT_MISSION}&rdquo;
                  </p>
                </blockquote>
                <Link
                  href="/methodology"
                  className="inline-flex items-center gap-2 text-sm font-sans font-medium text-accent hover:gap-3 transition-all"
                >
                  Read the full methodology
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Values */}
              <div className="space-y-0 border border-border">
                {ABOUT_VALUES.map((value) => (
                  <div key={value.title} className="p-6 border-b border-border last:border-b-0">
                    <h3 className="font-serif text-lg font-bold text-ink mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted py-16 border-y border-border">
          <div className="section-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-6 py-4 flex flex-col">
                  <span className="font-serif text-4xl font-bold text-ink mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Founder image area */}
              <div className="relative aspect-[4/5] bg-primary overflow-hidden">
                <Image
                  src="/images/district-work.jpg"
                  alt="Dr. Muavia Gallie in a district working session"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/40" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-serif text-2xl font-bold text-white">Dr. Muavia Gallie</p>
                  <p className="text-sm text-white/70 mt-1">Founder &amp; Lead Strategist</p>
                </div>
              </div>

              {/* Founder bio */}
              <div className="flex flex-col justify-center">
                <p className="label-text text-muted-foreground mb-6">Founder</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-6 text-balance">
                  Dr. Muavia Gallie
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Dr. Gallie is a South African education quality strategist with more than two
                  decades of practice across districts, schools and classrooms. His doctoral work
                  produced the School Functionality Index, the diagnostic instrument that anchors
                  much of EMU&apos;s practice. He is best known for the discipline he insists on:
                  &ldquo;without data, you are just another person with an opinion.&rdquo;
                </p>

                <ul className="space-y-3 border-t border-border pt-6">
                  {[
                    'PhD in Education — School Functionality Index',
                    'Architect of the Quality Improvement 5-stage model',
                    'Author, Library of Excellence (forthcoming)',
                  ].map((cred) => (
                    <li key={cred} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">{cred}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-2 text-sm font-sans font-medium text-accent hover:gap-3 transition-all"
                  >
                    Meet the full team
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 bg-muted border-y border-border">
          <div className="section-container">
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="font-serif text-2xl lg:text-3xl font-bold text-ink italic leading-relaxed text-balance">
                &ldquo;Without data, you are just another person with an opinion.&rdquo;
              </p>
              <cite className="block mt-4 text-sm text-muted-foreground not-italic">
                Dr. Muavia Gallie — Founder, Education Moving Up
              </cite>
            </blockquote>
          </div>
        </section>

        <CTABanner
          overline="Two decades of practice."
          heading="One next conversation."
          body="If our approach resonates, the most useful next step is a short briefing. We'll tell you honestly whether we're the right partner."
          primaryLabel="Request a briefing"
          primaryHref="/contact"
          secondaryLabel="Read the methodology"
          secondaryHref="/methodology"
        />
      </main>
      <SiteFooter />
    </>
  )
}
