import { STATS } from '@/lib/data/site-data'

export function StatsSection() {
  return (
    <section className="bg-muted py-16 lg:py-20 border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col p-6 lg:p-8 border-r border-border last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
            >
              <span className="font-serif text-4xl lg:text-5xl font-bold text-ink leading-none mb-3">
                {stat.value}
              </span>
              <span className="text-sm font-sans text-muted-foreground leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Attribution */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <blockquote className="font-serif text-lg italic text-ink/70 max-w-lg">
            &ldquo;Without data, you are just another person with an opinion.&rdquo;
          </blockquote>
          <cite className="text-xs font-sans text-muted-foreground not-italic">
            Dr. Muavia Gallie — Founder, Education Moving Up
          </cite>
        </div>
      </div>
    </section>
  )
}
