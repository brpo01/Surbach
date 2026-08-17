import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import { TermsConsent } from '@/components/terms-consent'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://surbach.org'),
  title: { default: 'SURBACH | Resilient River Basins. Healthier Communities.', template: '%s | SURBACH' },
  description: 'SURBACH is a Nigerian technical advisory and sustainable-development organisation working across water security, climate resilience, environmental sustainability and public health.',
  keywords: ['SURBACH', 'river basins', 'water security', 'climate resilience', 'Nigeria', 'public health'],
  openGraph: { title: 'SURBACH | Sustainable River Basins, Climate & Health Solutions', description: 'Evidence-led solutions for resilient River Basins and healthy communities.', type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#051841', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}><body className="antialiased">{children}<TermsConsent />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
