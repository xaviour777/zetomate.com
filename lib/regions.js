// Regional pricing and copy. Non-USD prices are indicative placeholders (PK is a purchasing-power price) — validate before launch.
// Price order matches PLANS: Playground, Creator Club, Collab Pod, Network Elite.
export const REGIONS = {
  pk: { label: 'Pakistan · PKR', cur: 'PKR', prices: ['Free', 'Rs 2,900', 'Rs 29,000', 'Rs 49,000'], hello: 'Visiting from Pakistan — welcome', region: 'Lahore · Karachi · Islamabad', proofT: 'Built from Pakistan', proofB: 'A storyteller from Lahore, an editor from Multan — creators building for a global audience.' },
  us: { label: 'United States · USD', cur: 'USD', prices: ['Free', '$29', '$290', '$490'], hello: 'The creator playground', region: 'Global', proofT: 'A global audience', proofB: 'Stories made outside Hollywood, watched around the world.' },
  gb: { label: 'United Kingdom · GBP', cur: 'GBP', prices: ['Free', '£24', '£239', '£399'], hello: 'The creator playground', region: 'Global', proofT: 'A global audience', proofB: 'Stories made outside Hollywood, watched around the world.' },
  in: { label: 'India · INR', cur: 'INR', prices: ['Free', '₹999', '₹9,999', '₹16,999'], hello: 'Visiting from India — welcome', region: 'South Asia', proofT: 'Made for South Asian creators', proofB: 'Multilingual experiments across platforms and audiences.' },
  ae: { label: 'UAE · AED', cur: 'AED', prices: ['Free', 'AED 109', 'AED 1,069', 'AED 1,799'], hello: 'Visiting from the UAE — welcome', region: 'Gulf', proofT: 'Creators across the Gulf', proofB: 'Distribution thinking for multilingual, multi-market audiences.' },
};

export const DEFAULT_REGION = 'us';
export const REGION_COOKIE = 'zm_region';

export function regionFromCountry(country) {
  const c = (country || '').toLowerCase();
  return REGIONS[c] ? c : DEFAULT_REGION;
}

export const PLANS = [
  {
    name: 'Playground', per: 'forever', for: 'Start today. See how ZetoMate works.',
    items: ['First 3 missions: video, quiz, assignment', '3 starter resources', 'Streaks, XP and badges', 'Browse the community'],
    cta: 'Start free', href: '/start',
  },
  {
    name: 'Creator Club', per: '/ month', for: 'Everything you need to learn and make.',
    value: 'Make a film or a channel for the price of a coffee a week.',
    items: ['Full mission path, new missions monthly', 'Full Vault: blueprints, prompts, sounds, templates', 'Unlimited hearts and weekly leagues', 'Community posting and peer feedback', 'Monthly live group Q&A'],
    cta: 'Join the Club', href: '/start?plan=club',
  },
  {
    name: 'Collab Pod', per: '/ month', for: 'Grow with 10 creators in your niche.', badge: 'Most growth',
    value: 'Two new audiences every month — for less than one shoutout.',
    items: ['Everything in Creator Club', '10-creator niche pod, matched by size and activity', '2 collab drops a month (official co-author posts)', 'Mentor review on every assignment (72h)', 'Pod challenges, leaderboard and features', 'Pod rotation every 8 weeks'],
    cta: 'Find my pod', href: '/start?plan=pod',
  },
  {
    name: 'Network Elite', per: '/ month', for: 'For serious creators. Application only.', badge: '100 seats',
    value: 'A post to a 12M+ network alone costs more. Here it comes monthly.',
    items: ['Everything in Collab Pod', 'Weekly collab drops (4 a month)', '1 confirmed post on the ZetoMate network (12M+*) monthly', 'Cross-niche bridge collabs', 'Priority 24h reviews + monthly 1:1 strategy call', 'First access to brand deals'],
    cta: 'Apply for Elite', href: '/start?plan=elite',
  },
];
