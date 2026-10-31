'use client';
import { useState } from 'react';

const W = [
  { kicker: 'Week 1 · Story', title: 'Find the story.', body: 'Use the Drama Method™ to turn a vague idea into a one-page story with a hook, stakes, a twist and a loop.', out: 'A one-page script and shot list',
    lessons: [['01', 'The 3-minute story shape', '18 min'], ['02', 'Hook, stakes, twist, loop', '24 min'], ['03', 'Writing your one-pager', '30 min'], ['04', 'Shot list and mood board', '22 min']] },
  { kicker: 'Week 2 · Direction', title: 'Direct the frames.', body: 'Prompt architectures for consistent characters, cinematic lighting and camera movement.', out: '40+ consistent cinematic shots',
    lessons: [['05', 'Character consistency system', '28 min'], ['06', 'Camera language for AI', '26 min'], ['07', 'Lighting and colour mood', '20 min'], ['08', 'Generating your sequence', '35 min']] },
  { kicker: 'Week 3 · Finish', title: 'Cut, score, ship.', body: 'Edit for pace, add sound and music, package the thumbnail and title, then publish.', out: 'A finished, published short film',
    lessons: [['09', 'Editing for rhythm', '25 min'], ['10', 'Sound design and score', '22 min'], ['11', 'Title and thumbnail packaging', '18 min'], ['12', 'Publish and read the results', '20 min']] },
];

export default function Curriculum() {
  const [w, setW] = useState(0);
  const wk = W[w];
  return (
    <section className="dark">
      <div className="wrap sec stack" style={{ maxWidth: 1240, gap: 44 }}>
        <div className="row between" style={{ gap: 24 }}>
          <h2 style={{ fontSize: 'clamp(38px, 5vw, 72px)', maxWidth: 720 }}>Three weeks. <span className="serif gold">One finished film.</span></h2>
          <div role="tablist" aria-label="Weeks" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {W.map((_, i) => <button key={i} type="button" role="tab" className="tab" aria-selected={i === w} onClick={() => setW(i)}>Week {i + 1}</button>)}
          </div>
        </div>
        <div className="row" role="tabpanel" style={{ gap: 40 }}>
          <div className="stack" style={{ flex: '1 1 320px', minWidth: 0, gap: 14 }}>
            <span className="k gold">{wk.kicker}</span>
            <h3 style={{ fontSize: 44 }}>{wk.title}</h3>
            <p style={{ color: 'var(--soft-dark)' }}>{wk.body}</p>
            <span style={{ border: '1px solid #333', borderRadius: 14, padding: '14px 16px', fontSize: 14, color: '#d8d2c4' }}><span className="k gold" style={{ display: 'block', marginBottom: 6 }}>Deliverable</span>{wk.out}</span>
          </div>
          <div style={{ flex: '999 1 480px', minWidth: 0, borderTop: '1px solid #333' }}>
            {wk.lessons.map(([n, t, d]) => (
              <div key={n} style={{ display: 'flex', gap: 18, alignItems: 'center', padding: '18px 0', borderBottom: '1px solid #262626' }}>
                <span className="k" style={{ color: '#8f8f8f', width: 40 }}>{n}</span>
                <span style={{ flexGrow: 1, fontSize: 18, fontWeight: 600 }}>{t}</span>
                <span style={{ fontSize: 13, color: '#8f8f8f' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
