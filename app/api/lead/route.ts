import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body.name ?? '').toString().trim();
    const email = (body.email ?? '').toString().trim().toLowerCase();
    const is18Plus = Boolean(body.is18Plus);
    const agreed = Boolean(body.agreed);
    const utmSource = (body.utmSource ?? '').toString();
    const utmMedium = (body.utmMedium ?? '').toString();
    const utmCampaign = (body.utmCampaign ?? '').toString();

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: 'Please provide your full name.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: 'Enter a valid email address.' }, { status: 400 });
    }

    if (!is18Plus) {
      return NextResponse.json({ ok: false, error: 'You must be 18 or older.' }, { status: 400 });
    }

    if (!agreed) {
      return NextResponse.json({ ok: false, error: 'You must accept the Terms and Privacy Policy.' }, { status: 400 });
    }

    // NOTE: In production, connect your CRM, webhook, or database here.
    // For demo: log lead details to server logs.
    console.log('[Lead]', { name, email, utmSource, utmMedium, utmCampaign, at: new Date().toISOString() });

    // Simulate slight processing delay
    await new Promise((r) => setTimeout(r, 300));

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Unexpected error. Please try again.' }, { status: 500 });
  }
}
