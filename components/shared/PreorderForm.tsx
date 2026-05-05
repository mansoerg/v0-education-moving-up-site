'use client'

export function PreorderForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="bg-muted border border-border p-8 lg:p-10">
      <p className="font-serif text-xl font-bold text-ink mb-2">
        Reserve a copy.
      </p>
      <p className="text-sm text-muted-foreground mb-8">
        We&apos;ll let you know when it ships. No charge until dispatch.
      </p>
      <form className="space-y-5" onSubmit={handleSubmit}>
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
  )
}
