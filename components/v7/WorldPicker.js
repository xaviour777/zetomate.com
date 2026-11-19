'use client';
import { useState } from 'react';
import Link from 'next/link';

// "Choose Your World": six tiles, one detail panel. Live paths link to real pages;
// paths without a page yet go to the waitlist.
export default function WorldPicker({ worlds }) {
  const [active, setActive] = useState(0);
  const w = worlds[active];
  return (
    <div className="world">
      <div className="world-tiles" role="tablist" aria-label="Choose your world">
        {worlds.map((x, i) => (
          <button key={x.title} role="tab" id={`wt-${i}`} aria-controls="world-panel" aria-selected={i === active} className="world-tile" onClick={() => setActive(i)}>
            <span className="world-ico" aria-hidden="true">{x.icon}</span>
            <span>{x.title}</span>
            {x.soon && <span className="soon">Coming soon</span>}
          </button>
        ))}
      </div>
      <div className="world-panel card" id="world-panel" role="tabpanel" aria-labelledby={`wt-${active}`}>
        <span className="eyebrow">{w.soon ? 'Coming soon' : 'Open now'}</span>
        <h3 className="poster" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>{w.title}</h3>
        <p>{w.body}</p>
        <Link href={w.href} className={w.soon ? 'btn btn-quiet' : 'btn btn-ember'}>{w.soon ? 'Join the waitlist' : w.cta} <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  );
}
