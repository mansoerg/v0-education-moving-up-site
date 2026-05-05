import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { CTABanner } from '@/components/shared/CTABanner'
import { BOOKS, BOOK_ENDORSEMENTS } from '@/lib/data/site-data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Library of Excellence — Education Moving Up',
  description:
    'EMU\'s methodology in book form — the doctrine, the diagnostics, the worked examples and the field notes. Preorder the flagship volume.',
}

export default function LibraryPage() {
  const flagship = BOOKS[0]
  const others = BOOKS.slice(1)

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero — dark editorial */}
        <section className="pt-28 pb-0 lg:pt-36 bg-primary overflow-hidden">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
              {/* Left — text */}
              <div className="pb-16 lg:pb-24">
                <p className="label-text text-accent mb-8">The Library of Excellence</p>
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-primary-foreground text-balance leading-tight mb-6">
                  A working library on the discipline of quality improvement.
                </h1>
                <p className="text-base text-white/70 leading-relaxed mb-10 max-w-lg">
                  The Library of Excellence collects EMU&apos;s methodology in book form — the doctrine,
                  the diagnostics, the worked examples and the field notes. Each volume is a working
                  manual: built to be marked up, argued with and used in district offices, school
                  staff rooms and university seminars.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#preorder"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-sm font-sans font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Preorder the flagship
                  </a>
                  <Link
                    href="/methodology"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white text-sm font-sans font-medium hover:border-white/40 transition-colors"
                  >
                    Read the methodology
                  </Link>
                </div>
              </div>

              {/* Right — flagship book image */}
              <div className="relative self-end">
                <div className="relative aspect-[3/4] max-w-xs mx-auto lg:mx-0 lg:ml-auto shadow-2xl">
                  {flagship.image ? (
                    <Image
                      src={flagship.image}
                      alt={flagship.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 300px, 340px"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
                      <p className="text-white/30 font-serif italic text-sm">Cover forthcoming</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship detail */}
        <section className="py-20 lg:py-28 bg-background" id="preorder">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Book detail */}
              <div>
                <span className="label-text text-accent block mb-4">Preorder</span>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-3 text-balance">
                  {flagship.title}
                </h2>
                <p className="text-sm text-muted-foreground italic mb-6">
                  {flagship.subtitle}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  {flagship.description}
                </p>

                {/* Chapter list */}
                {flagship.chapters.length > 0 && (
                  <div className="border border-border">
                    <div className="px-6 py-4 border-b border-border">
                      <p className="label-text text-muted-foreground">Inside the book</p>
                    </div>
                    {flagship.chapters.map((ch, i) => (
                      <div
                        key={ch}
                        className="flex items-center gap-4 px-6 py-4 border-b border-border last:border-b-0"
                      >
                        <span className="font-serif text-sm font-bold text-accent/50 w-5 shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-ink">{ch}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Preorder form */}
              <div className="bg-muted border border-border p-8 lg:p-10">
                <p className="font-serif text-xl font-bold text-ink mb-2">
                  Reserve a copy.
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  We&apos;ll let you know when it ships. No charge until dispatch.
                </p>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-sans font-medium text-ink mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-ink mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-ink mb-2">
                      Organisation (optional)
                    </label>
                    <input
                      type="text"
                      className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="District / School / University"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground text-sm font-sans font-semibold hover:bg-secondary transition-colors"
                  >
                    Reserve a copy
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Other volumes */}
        <section className="py-16 lg:py-20 bg-muted border-y border-border">
          <div className="section-container">
            <p className="label-text text-muted-foreground mb-10">Also in the series</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border bg-background">
              {others.map((book) => (
                <div key={book.slug} className="border-r border-border last:border-r-0 p-8 flex flex-col">
                  {/* Placeholder cover */}
                  <div className="w-16 h-20 bg-primary/10 mb-6 flex items-center justify-center">
                    <span className="font-serif text-xs text-primary/30 italic">Cover TBC</span>
                  </div>
                  <span className="label-text text-accent mb-3 capitalize">{book.status}</span>
                  <h3 className="font-serif text-lg font-bold text-ink mb-1">{book.title}</h3>
                  <p className="text-xs text-muted-foreground italic mb-4">{book.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {book.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Endorsements */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="section-container">
            <p className="label-text text-muted-foreground mb-10">Endorsements</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BOOK_ENDORSEMENTS.map((endorsement) => (
                <blockquote key={endorsement.attribution} className="border-l-2 border-accent pl-6">
                  <p className="font-serif text-lg text-ink italic leading-relaxed mb-3">
                    &ldquo;{endorsement.quote}&rdquo;
                  </p>
                  <cite className="text-xs text-muted-foreground not-italic">
                    {endorsement.attribution}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          overline="Want to go deeper before the book ships?"
          heading="Read the methodology."
          body="The doctrine behind the Library of Excellence is available now — through the methodology pages, case studies and resources hub."
          primaryLabel="Read the methodology"
          primaryHref="/methodology"
          secondaryLabel="Explore resources"
          secondaryHref="/resources"
        />
      </main>
      <SiteFooter />
    </>
  )
}
