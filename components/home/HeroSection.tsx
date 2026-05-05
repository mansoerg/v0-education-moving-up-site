import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col bg-primary overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/classroom-hero.jpg"
          alt="South African classroom with students and teacher"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex items-center section-container pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="max-w-3xl">
          {/* Overline */}
          <p className="label-text text-accent mb-8 tracking-widest">
            Est. South Africa · Est. 2004
          </p>

          {/* Headline */}
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] text-balance">
            Quality improvement for the systems that teach a country.
          </h1>

          {/* Sub-headline */}
          <p className="mt-8 text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed">
            We help districts, schools and learners move from functionality to performance —
            through data-driven decision-making, systemic thinking and the disciplined use of ICT.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-sm font-sans font-semibold hover:bg-accent/90 transition-colors"
            >
              Explore our methodology
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white text-sm font-sans font-medium hover:border-white/60 transition-colors"
            >
              Request a briefing
            </Link>
          </div>

          {/* Core doctrine */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="font-serif text-lg italic text-white/60">
              &ldquo;Functionality must precede performance.&rdquo;
            </p>
            <p className="mt-2 text-xs text-white/40 font-sans tracking-wide uppercase">
              — Core doctrine, Education Moving Up
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/20 to-transparent" />
    </section>
  )
}
