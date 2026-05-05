import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { INSIGHTS } from '@/lib/data/site-data'

export function InsightsPreview() {
  const featured = INSIGHTS.filter((i) => i.featured)

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="label-text text-muted-foreground mb-4">Thinking from the practice</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink text-balance">
              Insights
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-accent hover:gap-3 transition-all shrink-0"
          >
            All insights
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Insights list */}
        <div className="divide-y divide-border border-y border-border">
          {featured.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group flex flex-col sm:flex-row sm:items-start gap-4 py-8 hover:bg-muted/50 px-0 transition-colors"
            >
              {/* Meta */}
              <div className="sm:w-40 shrink-0">
                <span className="label-text text-accent">{insight.category}</span>
                <p className="text-xs text-muted-foreground mt-1">{insight.readTime}</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-serif text-lg lg:text-xl font-bold text-ink group-hover:text-navy transition-colors mb-2 text-balance">
                  {insight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {insight.excerpt}
                </p>
              </div>

              {/* Author + arrow */}
              <div className="flex sm:flex-col sm:items-end sm:w-32 shrink-0 justify-between sm:justify-start gap-2">
                <span className="text-xs text-muted-foreground">{insight.author}</span>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter signup teaser */}
        <div className="mt-12 bg-muted border border-border p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="label-text text-muted-foreground mb-2">Field Notes</p>
            <p className="font-serif text-lg font-bold text-ink">
              A short letter, when there is something worth saying.
            </p>
          </div>
          <Link
            href="/contact#newsletter"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-sans font-medium text-ink hover:bg-background transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </section>
  )
}
