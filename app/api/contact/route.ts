import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactAcknowledgement, sendContactNotification } from '@/lib/contact-email'

const schema = z.object({ name: z.string().trim().min(2).max(120), organisation: z.string().trim().max(160).optional().or(z.literal('')), email: z.string().trim().email().max(200), phone: z.string().trim().max(40).optional().or(z.literal('')), area: z.enum(['Partnership', 'Technical Advisory', 'Research', 'Project Development', 'Capacity Building', 'Media', 'General Enquiry']), message: z.string().trim().min(10).max(5000), website: z.string().max(0).optional().or(z.literal('')) })
const submissions = new Map<string, number>()

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const now = Date.now()
  const previous = submissions.get(ip) || 0
  if (now - previous < 60_000) return NextResponse.json({ error: 'Please wait before sending another enquiry.' }, { status: 429 })
  const body = await request.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Please check the form fields and try again.' }, { status: 400 })
  if (parsed.data.website) return NextResponse.json({ ok: true })
  try {
    const data = parsed.data
    const notification = await sendContactNotification({ name: data.name, organisation: data.organisation, email: data.email, phone: data.phone, area: data.area, message: data.message })
    if (notification.error) throw new Error('notification failed')
    submissions.set(ip, now)
    try { await sendContactAcknowledgement({ name: data.name, organisation: data.organisation, email: data.email, area: data.area, message: data.message }) } catch { console.error('[v0] acknowledgement email failed') }
    return NextResponse.json({ ok: true })
  } catch { return NextResponse.json({ error: 'Unable to send enquiry.' }, { status: 500 }) }
}
