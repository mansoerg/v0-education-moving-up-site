import Link from 'next/link'

interface CTABannerProps {
  overline?: string
  heading: string
  body?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTABanner({
  overline,
  heading,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="section-container text-center">
        {overline && (
          <p className="label-text text-white/50 mb-6">{overline}</p>
        )}
        <h2 className="font-serif text-3xl lg:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto text-balance leading-tight">
          {heading}
        </h2>
        {body && (
          <p className="mt-5 text-base lg:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            {body}
          </p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground text-sm font-sans font-semibold hover:bg-accent/90 transition-colors"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center px-6 py-3 border border-white/30 text-white text-sm font-sans font-medium hover:border-white/60 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
