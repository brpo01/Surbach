import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { Header, Footer } from '@/components/site'

export const metadata = { title: 'Contact SURBACH' }

export default function ContactPage() {
  return <>
    <Header />
    <main id="main-content">
      <section className="bg-surbach-navy">
        <div className="container-site py-16 md:py-24">
          <div className="section-eyebrow text-surbach-water">Contact SURBACH</div>
          <h1 className="mt-5 max-w-3xl font-montserrat text-4xl font-semibold text-white md:text-5xl">Start a conversation about Basin-level impact.</h1>
          <p className="mt-6 max-w-2xl font-open-sans text-lg leading-8 text-white/75">Tell us what you are working on, where you need support and what a useful next step would look like.</p>
        </div>
      </section>
      <section className="container-site grid gap-14 py-20 md:py-28 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <div className="section-eyebrow text-surbach-water">Get in touch</div>
          <h2 className="mt-4 font-montserrat text-3xl font-semibold text-surbach-navy">Partner With SURBACH</h2>
          <p className="mt-5 max-w-md font-open-sans leading-7 text-slate-600">Use the form to share your organisation, priorities and the opportunity you would like to explore with us.</p>
          <div className="mt-10 space-y-5 font-open-sans text-sm text-slate-600">
            <div className="flex items-start gap-3"><MapPin size={18} className="mt-1 shrink-0 text-surbach-water" /><span>No. 1, Ibadan Street, Suite GF007, AICL Area 3 Neighbourhood Shopping Centre, Garki, Abuja, FCT, Nigeria</span></div>
            <a href="mailto:partnerships@surbach.org" className="flex items-center gap-3 transition-colors hover:text-surbach-blue"><Mail size={18} className="text-surbach-water" />partnerships@surbach.org</a>
          </div>
          <Link href="/partnerships" className="button-secondary mt-8 inline-flex">Explore partnership opportunities</Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeiKNapsxgRvjkKN4kLxhO7KTSq98xdDWNjTV7BLQJlzMdNtQ/viewform?embedded=true" title="Partner With SURBACH form" className="h-[955px] w-full" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
        </div>
      </section>
    </main>
    <Footer />
  </>
}
