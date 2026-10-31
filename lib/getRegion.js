import { cookies, headers } from 'next/headers';
import { REGIONS, REGION_COOKIE, regionFromCountry } from './regions';

export async function getRegion() {
  const c = (await cookies()).get(REGION_COOKIE)?.value;
  if (c && REGIONS[c]) return c;
  return regionFromCountry((await headers()).get('x-vercel-ip-country'));
}
