import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

// Stores leads locally (dev). In production set LEAD_WEBHOOK_URL to forward to your CRM / email tool.
export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'bad json' }, { status: 400 }); }
  const email = String(body.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return NextResponse.json({ error: 'invalid email' }, { status: 400 });
  }
  const c = await cookies();
  const lead = {
    email,
    marketingConsent: body.marketing === true,
    source: String(body.source || '').slice(0, 50),
    goal: body.goal ? String(body.goal).slice(0, 50) : undefined,
    level: body.level ? String(body.level).slice(0, 50) : undefined,
    time: body.time ? String(body.time).slice(0, 50) : undefined,
    region: c.get('zm_region')?.value,
    utm: { source: c.get('zm_utm_source')?.value, medium: c.get('zm_utm_medium')?.value, campaign: c.get('zm_utm_campaign')?.value },
    at: new Date().toISOString(),
  };

  if (process.env.LEAD_WEBHOOK_URL) {
    const r = await fetch(process.env.LEAD_WEBHOOK_URL, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(lead) });
    if (!r.ok) return NextResponse.json({ error: 'upstream' }, { status: 502 });
  } else {
    try {
      const dir = path.join(process.cwd(), 'data');
      await mkdir(dir, { recursive: true });
      await appendFile(path.join(dir, 'leads.jsonl'), JSON.stringify(lead) + '\n');
    } catch {
      console.log('[lead]', lead);
    }
  }
  return NextResponse.json({ ok: true });
}
