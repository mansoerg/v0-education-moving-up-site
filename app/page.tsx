import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { HeroSection } from '@/components/home/HeroSection'
import { TrustedBy } from '@/components/home/TrustedBy'
import { MethodologyOverview } from '@/components/home/MethodologyOverview'
import { StatsSection } from '@/components/home/StatsSection'
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview'
import { BookSeriesSection } from '@/components/home/BookSeriesSection'
import { InsightsPreview } from '@/components/home/InsightsPreview'
import { CTABanner } from '@/components/shared/CTABanner'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustedBy />
        <MethodologyOverview />
        <StatsSection />
        <CaseStudiesPreview />
        <BookSeriesSection />
        <InsightsPreview />
        <CTABanner
          overline="Work with us"
          heading="Bring quality improvement to your district, school or classroom."
          body="Start with a short briefing. We'll listen, frame the case, and tell you honestly whether we're the right partner."
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
