import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { CASE_STUDIES } from '@/lib/data/site-data'

export function CaseStudiesPreview() {
  const featured = CASE_STUDIES.filter((c) => c.featured).slice(0, 2)

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="label-text text-muted-foreground mb-4">Evidence in the field</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink text-balance">
              Selected engagements.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-accent hover:gap-3 transition-all shrink-0"
          >
            All case studies
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border">
          {featured.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies#${cs.slug}`}
              className="group border-r border-border last:border-r-0 block hover:bg-muted transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-[16/7] overflow-hidden bg-muted">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/30" />
                {/* Area badge */}
                <span className="absolute top-4 left-4 label-text bg-background/90 text-ink px-2 py-1">
                  {cs.area} · {cs.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-serif text-xl font-bold text-ink mb-4 text-balance group-hover:text-navy transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                  {cs.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-6 border-t border-border pt-6">
                  {cs.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <span className="font-serif text-2xl font-bold text-accent">
                        {metric.value}
                      </span>
                      <span className="text-xs text-muted-foreground mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
