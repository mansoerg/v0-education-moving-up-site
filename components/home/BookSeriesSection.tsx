import Link from 'next/link'
import Image from 'next/image'
import { BOOKS } from '@/lib/data/site-data'
import { ArrowRight } from 'lucide-react'

export function BookSeriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted border-y border-border">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <p className="label-text text-muted-foreground mb-4">Library of Excellence</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-ink max-w-2xl leading-tight text-balance">
            A working library on the discipline of quality improvement.
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed">
            Each volume is a working manual — built to be marked up, argued with and used in
            district offices, school staff rooms and university seminars.
          </p>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border bg-background">
          {BOOKS.map((book) => (
            <div
              key={book.slug}
              className="border-r border-border last:border-r-0 flex flex-col"
            >
              {/* Book image or placeholder */}
              {book.image ? (
                <div className="relative aspect-[3/4] overflow-hidden bg-primary/10">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className="aspect-[3/4] bg-primary flex items-end p-6">
                  <span className="font-serif text-sm text-white/40 italic">Forthcoming</span>
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Status badge */}
                <span className="label-text text-accent mb-3 capitalize">
                  {book.status === 'preorder' ? 'Preorder' : 'Forthcoming'}
                </span>

                <h3 className="font-serif text-lg font-bold text-ink mb-1">
                  {book.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 italic">
                  {book.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  {book.description}
                </p>

                {book.status === 'preorder' && (
                  <Link
                    href="/library"
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-accent hover:gap-3 transition-all"
                  >
                    Reserve a copy
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-accent hover:gap-3 transition-all"
          >
            Explore the Library of Excellence
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
