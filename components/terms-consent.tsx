'use client'

import { useState } from 'react'
import Link from 'next/link'

export function TermsConsent() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return <aside className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-5 shadow-2xl" aria-label="Terms and privacy notice"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div className="max-w-xl"><p className="font-montserrat text-sm font-semibold text-surbach-navy">Terms and privacy</p><p className="mt-1 font-open-sans text-sm leading-6 text-slate-600">By continuing to use surbach.org, you acknowledge our <Link href="/terms" className="font-semibold text-surbach-blue underline">Terms of Service</Link> and <Link href="/privacy" className="font-semibold text-surbach-blue underline">Privacy Policy</Link>.</p></div><div className="flex shrink-0 gap-2"><button type="button" onClick={() => setVisible(false)} className="button-secondary px-4 py-2.5">Decline</button><button type="button" onClick={() => setVisible(false)} className="button-primary px-4 py-2.5">Accept</button></div></div></aside>
}
