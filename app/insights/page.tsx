import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/shared/PageHero'
import { NewsletterForm } from '@/components/shared/NewsletterForm'
import { INSIGHTS } from '@/lib/data/site-data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Insights — Education Moving Up',
  description:
    'Field notes, methodology pieces and research — written for the people who actually run districts, schools and classrooms.',
}

export default function InsightsPage() {
  const [featured, ...rest] = INSIGHTS

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          overline="Insights"
          title="Thinking from the practice."
          subtitle="Field notes, methodology pieces and research — written for the people who actually run districts, schools and classrooms."
        />

        {/* Featured insight */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="section-container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="label-text text-accent">{featured.category}</span>
                <span className="text-white/30">·</span>
                <span className="text-xs text-white/50">{featured.readTime}</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
                {featured.title}
              </h2>
              <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-sm text-white/50">{featured.author} · {featured.date}</span>
                <Link
                  href={`/insights/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-sans font-medium text-accent hover:gap-3 transition-all"
                >
                  Read
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All insights */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            {/* Filter tabs — static display */}
            <div className="flex items-center gap-1 mb-10 border-b border-border pb-4">
              {['All', 'Methodology', 'Research', 'Field Notes'].map((cat) => (
                <span
                  key={cat}
                  className={
                    cat === 'All'
                      ? 'px-3 py-1.5 text-sm font-sans font-medium bg-ink text-background'
                      : 'px-3 py-1.5 text-sm font-sans text-muted-foreground'
                  }
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Insights list */}
            <div className="divide-y divide-border">
              {INSIGHTS.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-[200px_1fr_140px] gap-4 py-8 hover:bg-muted/30 px-0 transition-colors"
                >
                  {/* Meta */}
                  <div>
                    <span className="label-text text-accent">{insight.category}</span>
                    <p className="text-xs text-muted-foreground mt-1">{insight.readTime}</p>
                    <p className="text-xs text-muted-foreground mt-1">{insight.date}</p>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink group-hover:text-navy transition-colors mb-2 text-balance">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {insight.excerpt}
                    </p>
                  </div>

                  {/* Author + arrow */}
                  <div className="flex lg:flex-col lg:items-end items-center justify-between">
                    <span className="text-xs text-muted-foreground">{insight.author}</span>
                    <ArrowRight
                      size={16}
                      className="text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 lg:py-20 bg-muted border-y border-border" id="newsletter">
          <div className="section-container">
            <div className="max-w-lg">
              <p className="label-text text-muted-foreground mb-4">Field Notes</p>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ink mb-4 text-balance">
                A short letter, when there is something worth saying.
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                We write when there is something worth reading. No schedule, no filler.
              </p>
              <NewsletterForm variant="stacked" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
