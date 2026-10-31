// Regional pricing and copy. Non-USD prices are indicative placeholders — validate before launch.
export const REGIONS = {
  pk: { label: 'Pakistan · PKR', cur: 'PKR', prices: ['Free', 'Rs 7,900', 'Rs 27,500', 'Rs 83,000'], hello: 'Visiting from Pakistan — welcome', region: 'Lahore · Karachi · Islamabad', proofT: 'Built from Pakistan', proofB: 'A storyteller from Lahore, an editor from Multan — creators building for a global audience.' },
  us: { label: 'United States · USD', cur: 'USD', prices: ['Free', '$29', '$99', '$299'], hello: 'The creator playground', region: 'Global', proofT: 'A global audience', proofB: 'Stories made outside Hollywood, watched around the world.' },
  gb: { label: 'United Kingdom · GBP', cur: 'GBP', prices: ['Free', '£23', '£79', '£239'], hello: 'The creator playground', region: 'Global', proofT: 'A global audience', proofB: 'Stories made outside Hollywood, watched around the world.' },
  in: { label: 'India · INR', cur: 'INR', prices: ['Free', '₹2,400', '₹8,200', '₹24,900'], hello: 'Visiting from India — welcome', region: 'South Asia', proofT: 'Made for South Asian creators', proofB: 'Multilingual experiments across platforms and audiences.' },
  ae: { label: 'UAE · AED', cur: 'AED', prices: ['Free', 'AED 109', 'AED 365', 'AED 1,099'], hello: 'Visiting from the UAE — welcome', region: 'Gulf', proofT: 'Creators across the Gulf', proofB: 'Distribution thinking for multilingual, multi-market audiences.' },
};

export const DEFAULT_REGION = 'us';
export const REGION_COOKIE = 'zm_region';

export function regionFromCountry(country) {
  const c = (country || '').toLowerCase();
  return REGIONS[c] ? c : DEFAULT_REGION;
}

export const PLANS = [
  { name: 'The Playground', per: 'always', for: 'For the person ready to stop watching and start.', items: ['Creator Starter Kit', 'Your first mission', 'Community challenges'], cta: 'Start free', href: '/start' },
  { name: 'The Blueprint', per: 'one-time', for: 'Practical resources you can use immediately.', items: ['Creator blueprints', 'Prompt architectures', 'Publishing worksheets'], cta: 'Get the Blueprint', href: '/start?plan=blueprint' },
  { name: 'Creator Sprint', per: 'per sprint', for: 'Finish and publish real work.', items: ['Structured challenge', 'Milestone assignments', 'Progress tracking'], cta: 'Join a sprint', href: '/missions/ai-film#join' },
  { name: 'ZetoMate Pro', per: 'per cohort', for: 'Structured implementation, deeper support.', items: ['Live group sessions', 'Project reviews', 'Offer-building frameworks'], cta: 'Explore Pro', href: '/start?plan=pro' },
];
