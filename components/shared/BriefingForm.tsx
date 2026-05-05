'use client'

export function BriefingForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-sans font-medium text-ink mb-2">
          Your name
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
          Context (optional)
        </label>
        <textarea
          rows={4}
          className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent resize-none"
          placeholder="Tell us briefly about your district, school or situation..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-primary text-primary-foreground text-sm font-sans font-semibold hover:bg-secondary transition-colors"
      >
        Request briefing
      </button>
    </form>
  )
}
