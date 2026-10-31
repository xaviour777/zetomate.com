'use client';
import { useState } from 'react';
import Link from 'next/link';
import { track } from '@/lib/track';

const T = [
  { label: 'Free start', name: 'Week 1 — Free', tag: 'No card', price: '$0', per: 'forever', cta: 'Start week 1 free', href: '/start?goal=films', items: ['Week 1 lessons and worksheets', 'Drama Method™ story template', 'Community challenge access', 'Upgrade any time'] },
  { label: 'Full sprint', name: 'Full Creator Sprint', tag: 'Most chosen', price: '$99', per: 'one sprint', cta: 'Join the full sprint', href: 'mailto:hello@zetomate.com?subject=Creator%20Sprint%20%E2%80%94%20AI%20film', items: ['All 12 lessons, 3 weeks', 'Prompt architecture library', '2 live group sessions', 'Personal edit feedback', 'Showcase slot for finished films'] },
];

export default function TierPicker() {
  const [t, setT] = useState(1);
  const tier = T[t];
  return (
    <section id="join" className="wrap sec row" style={{ maxWidth: 1240, gap: 48, alignItems: 'center' }}>
      <div className="stack" style={{ flex: '1 1 380px', minWidth: 0, gap: 20 }}>
        <span className="k goldt">Accept the mission</span>
        <h2 style={{ fontSize: 'clamp(38px, 5vw, 72px)' }}>Start free. <span className="serif">Go guided</span> when you're ready.</h2>
        <p style={{ color: '#555' }}>Week 1 is free for everyone. Unlock the full sprint for feedback, live sessions and a showcase slot.</p>
        <div className="seg" style={{ alignSelf: 'flex-start' }}>
          {T.map((x, i) => <button key={x.label} type="button" aria-pressed={i === t} onClick={() => setT(i)}>{x.label}</button>)}
        </div>
      </div>
      <div className="dark stack" style={{ flex: '1 1 420px', minWidth: 0, borderRadius: 28, padding: 'clamp(24px, 4vw, 40px)', gap: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="k gold">{tier.name}</span><span className="k" style={{ color: '#8f8f8f' }}>{tier.tag}</span></div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}><span style={{ fontSize: 72, lineHeight: 1, fontWeight: 700, letterSpacing: '-0.05em' }}>{tier.price}</span><span style={{ color: '#a8a8a8' }}>{tier.per}</span></div>
        <div className="stack" style={{ gap: 10, borderTop: '1px solid #333', paddingTop: 18 }}>
          {tier.items.map((i) => <span key={i} style={{ display: 'flex', gap: 12 }}><span className="gold">✓</span>{i}</span>)}
        </div>
        <Link href={tier.href} className="cta goldbg" style={{ justifyContent: 'center' }} onClick={() => track('tier_click', { tier: tier.name })}>{tier.cta} →</Link>
        <span style={{ fontSize: 13, color: '#a8a8a8', textAlign: 'center' }}>7-day refund on the full sprint</span>
      </div>
    </section>
  );
}
