import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Education Moving Up — Quality Improvement for Education Systems',
  description:
    'EMU helps districts, schools and learners move from functionality to performance through data-driven decision-making, systemic thinking and the disciplined use of ICT. Founded by Dr. Muavia Gallie.',
  generator: 'v0.app',
  keywords: [
    'education quality improvement',
    'school functionality index',
    'South Africa education',
    'district improvement',
    'Dr Muavia Gallie',
    'EMU',
  ],
  openGraph: {
    title: 'Education Moving Up',
    description: 'Quality improvement for the systems that teach a country.',
    type: 'website',
    locale: 'en_ZA',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

