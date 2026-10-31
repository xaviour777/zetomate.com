import { NextResponse } from 'next/server';
import { REGION_COOKIE, regionFromCountry } from './lib/regions';

// An explicit saved choice (cookie) always wins; otherwise suggest a region from Vercel's IP country header.
// Language is never forced from IP.
export function middleware(req) {
  const res = NextResponse.next();
  if (!req.cookies.get(REGION_COOKIE)) {
    const country = req.headers.get('x-vercel-ip-country');
    res.cookies.set(REGION_COOKIE, regionFromCountry(country), { path: '/', maxAge: 60 * 60 * 24 * 180, sameSite: 'lax' });
  }
  const url = req.nextUrl;
  for (const k of ['utm_source', 'utm_medium', 'utm_campaign']) {
    const v = url.searchParams.get(k);
    if (v) res.cookies.set('zm_' + k, v.slice(0, 100), { path: '/', maxAge: 60 * 60 * 24 * 30, sameSite: 'lax' });
  }
  return res;
}

export const config = { matcher: ['/((?!api|_next|favicon.ico).*)'] };
