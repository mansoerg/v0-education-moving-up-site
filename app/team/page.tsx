import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/shared/PageHero'
import { CTABanner } from '@/components/shared/CTABanner'
import { TEAM } from '@/lib/data/site-data'

export const metadata = {
  title: 'Team — Education Moving Up',
  description:
    'A small, senior team. Research-led. Practice-tested. Every engagement is led by senior practitioners who have done the work themselves.',
}

export default function TeamPage() {
  const founder = TEAM.find((m) => m.role === 'founder')!
  const members = TEAM.filter((m) => m.role === 'team')

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          overline="Team"
          title="A small, senior team. Research-led. Practice-tested."
          subtitle="Every engagement is led by senior practitioners who have done the work themselves — in districts, schools and classrooms across South Africa."
        />

        {/* Founder */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <p className="label-text text-muted-foreground mb-12">Founder</p>

            <div className="border border-border p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 items-start">
              {/* Avatar placeholder */}
              <div className="w-full lg:w-48 aspect-square bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-4xl font-bold text-primary/30 select-none">
                  MG
                </span>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold text-ink mb-1">
                  {founder.name}
                </h2>
                <p className="label-text text-accent mb-6">{founder.title}</p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  {founder.bio}
                </p>
                {founder.credentials.length > 0 && (
                  <ul className="space-y-3 border-t border-border pt-6">
                    {founder.credentials.map((cred) => (
                      <li key={cred} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{cred}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="py-20 lg:py-28 bg-muted border-y border-border">
          <div className="section-container">
            <p className="label-text text-muted-foreground mb-12">Practice team</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border bg-background">
              {members.map((member) => {
                const initials = member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)

                return (
                  <div
                    key={member.slug}
                    className="border-r border-border last:border-r-0 p-6 flex flex-col"
                  >
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                      <span className="font-serif text-sm font-bold text-primary/40 select-none">
                        {initials}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-ink mb-1">
                      {member.name}
                    </h3>
                    <p className="label-text text-accent mb-4">{member.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {member.bio}
                    </p>
                  </div>
                )
              })}
            </div>

            <p className="mt-8 text-sm text-muted-foreground italic">
              EMU operates as a small, intentional practice. Additional subject-matter experts
              are brought in on specific engagements as required.
            </p>
          </div>
        </section>

        <CTABanner
          overline="Work alongside our team."
          heading="A short briefing is the right first step."
          body="If you'd like to discuss bringing EMU into your district or school, the briefing form is the most useful next step."
          primaryLabel="Request a briefing"
          primaryHref="/contact"
          secondaryLabel="Read the methodology"
          secondaryHref="/methodology"
        />
      </main>
      <SiteFooter />
    </>
  )
}
