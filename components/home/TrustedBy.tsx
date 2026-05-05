import { PARTNERS } from '@/lib/data/site-data'

export function TrustedBy() {
  return (
    <section className="bg-muted py-10 border-b border-border">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <p className="label-text text-muted-foreground shrink-0 whitespace-nowrap">
            Trusted by
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="text-sm font-sans text-muted-foreground/70 font-medium"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
