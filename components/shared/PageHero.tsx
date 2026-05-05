import { cn } from '@/lib/utils'

interface PageHeroProps {
  overline?: string
  title: string
  subtitle?: string
  dark?: boolean
  className?: string
}

export function PageHero({ overline, title, subtitle, dark = false, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'pt-32 pb-16 lg:pt-40 lg:pb-20',
        dark ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground',
        className,
      )}
    >
      <div className="section-container">
        {overline && (
          <p
            className={cn(
              'label-text mb-6',
              dark ? 'text-white/50' : 'text-muted-foreground',
            )}
          >
            {overline}
          </p>
        )}
        <h1
          className={cn(
            'font-serif text-4xl lg:text-6xl font-bold max-w-3xl text-balance leading-tight',
            dark ? 'text-primary-foreground' : 'text-ink',
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              'mt-6 text-lg lg:text-xl max-w-2xl leading-relaxed',
              dark ? 'text-white/70' : 'text-muted-foreground',
            )}
          >
            {subtitle}
          </p>
        )}
        <div className={cn('mt-8 h-px w-full', dark ? 'bg-white/10' : 'bg-border')} />
      </div>
    </section>
  )
}
