'use client'

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked'
  className?: string
}

export function NewsletterForm({ variant = 'inline', className = '' }: NewsletterFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  if (variant === 'stacked') {
    return (
      <form className={`flex flex-col sm:flex-row gap-3 ${className}`} onSubmit={handleSubmit}>
        <input
          type="email"
          className="flex-1 border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="your@email.com"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-primary text-primary-foreground text-sm font-sans font-semibold hover:bg-secondary transition-colors shrink-0"
        >
          Subscribe
        </button>
      </form>
    )
  }

  return (
    <form className={`flex flex-col sm:flex-row gap-3 shrink-0 ${className}`} onSubmit={handleSubmit}>
      <input
        type="email"
        className="border border-border bg-background px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent w-64"
        placeholder="your@email.com"
      />
      <button
        type="submit"
        className="px-4 py-2.5 bg-primary text-primary-foreground text-sm font-sans font-medium hover:bg-secondary transition-colors"
      >
        Subscribe
      </button>
    </form>
  )
}
