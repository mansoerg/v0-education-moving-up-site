import Link from 'next/link'
import { THREE_STRATEGIES } from '@/lib/data/site-data'
import { ArrowRight } from 'lucide-react'

export function MethodologyOverview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="label-text text-muted-foreground mb-4">Our methodology</p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-ink max-w-xl leading-tight text-balance">
              Three strategies. Five stages. One principle.
            </h2>
          </div>
          <Link
            href="/methodology"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-accent hover:gap-3 transition-all shrink-0"
          >
            Read the full methodology
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Three strategies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border">
          {THREE_STRATEGIES.map((strategy, i) => (
            <div
              key={strategy.number}
              className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border last:border-0"
            >
              {/* Number */}
              <div className="font-serif text-7xl font-bold text-border/60 leading-none mb-6 select-none">
                {strategy.number}
              </div>
              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-ink mb-2">
                {strategy.title}
              </h3>
              {/* Tagline */}
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-accent mb-4">
                {strategy.tagline}
              </p>
              {/* Body — first 2 sentences for preview */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {strategy.body.split('.').slice(0, 2).join('.') + '.'}
              </p>
            </div>
          ))}
        </div>

        {/* Doctrine callout */}
        <div className="mt-12 bg-primary text-primary-foreground p-8 lg:p-12">
          <p className="label-text text-white/40 mb-4">Core principle</p>
          <p className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground text-balance">
            Functionality must precede Performance.
          </p>
          <p className="mt-4 text-sm lg:text-base text-white/60 max-w-2xl leading-relaxed">
            Stable systems, processes and procedures are the precondition for sustained gains
            in learning outcomes. Tools and interventions are matched to the level a school or
            district has actually reached — not the level it is asked to perform at.
          </p>
        </div>
      </div>
    </section>
  )
}
