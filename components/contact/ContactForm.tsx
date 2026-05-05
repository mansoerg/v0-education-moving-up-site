'use client'

export function ContactForm() {
  return (
    <div id="form">
      <p className="label-text text-muted-foreground mb-8">Request a briefing</p>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-sans font-medium text-ink mb-2">
              Name *
            </label>
            <input
              type="text"
              required
              className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Full name"
            />
          </div>
          <div>
            <label className="block text-sm font-sans font-medium text-ink mb-2">
              Organisation
            </label>
            <input
              type="text"
              className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="District / School / University"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-sans font-medium text-ink mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-sans font-medium text-ink mb-2">
            Role
          </label>
          <select
            defaultValue=""
            className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent text-muted-foreground"
          >
            <option value="" disabled>Select your role</option>
            <option value="district">District Director / Official</option>
            <option value="principal">Principal / School Leader</option>
            <option value="department">Department of Education</option>
            <option value="university">University / Researcher</option>
            <option value="foundation">Foundation / Funder</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-sans font-medium text-ink mb-2">
            What would you like to discuss?
          </label>
          <textarea
            rows={5}
            className="w-full border border-border bg-background px-4 py-3 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent resize-none"
            placeholder="Tell us briefly about your situation — district, school, challenge or question..."
          />
        </div>
        <div id="newsletter" className="flex items-center gap-3">
          <input
            type="checkbox"
            id="fieldnotes"
            className="w-4 h-4 border border-border accent-accent"
          />
          <label htmlFor="fieldnotes" className="text-sm text-muted-foreground">
            Subscribe to Field Notes (occasional letters from the practice)
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3.5 bg-primary text-primary-foreground text-sm font-sans font-semibold hover:bg-secondary transition-colors"
        >
          Send message
        </button>
        <p className="text-xs text-muted-foreground text-center">
          We respond within two working days.
        </p>
      </form>
    </div>
  )
}
