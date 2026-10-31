'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PLANS } from '@/lib/regions';
import { track } from '@/lib/track';

export const GOALS = [
  { id: 'content', short: 'Create content', pain: "I have ideas, but don't know where to start.", mission: 'Ship your first publishable piece.', body: 'AI tools, production, storytelling and editing — then publish one thing worth sharing.', rec: 1, steps: ['Pick one idea', 'Produce with the starter workflow', 'Publish on one platform'] },
  { id: 'views', short: 'Get more views', pain: "I'm publishing. Nobody seems to notice.", mission: 'The 30-day creator sprint.', body: 'Hooks, packaging, audience psychology and testing. Create, publish, test, learn.', rec: 2, steps: ['Audit three past posts', 'Rewrite hooks with the Drama Method™', 'Test two formats'] },
  { id: 'money', short: 'Make money', pain: 'I want my work to become real income.', mission: 'Make your first real offer.', body: 'Turn a skill into something somebody might actually buy, and test it with real people.', rec: 3, steps: ['Map your skills', 'Position one offer', 'Test with five potential buyers'] },
  { id: 'brand', short: 'Build a brand', pain: 'I have a product, service or business idea.', mission: 'Your brand on one page.', body: 'Turn your idea into something people understand, remember and want.', rec: 1, steps: ['Define the audience', 'Write the one-line promise', 'Make a launch asset'] },
  { id: 'films', short: 'Make films', pain: 'I have stories in my head.', mission: 'Make your first AI film.', body: 'From idea to finished cinematic short: direction, character consistency, sound and edit.', rec: 2, steps: ['Write a one-page story', 'Direct consistent characters', 'Cut, score and publish'] },
];

export default function GoalSelector({ region }) {
  const [g, setG] = useState(4);
  const sel = GOALS[g];
  const pick = (i) => { setG(i); track('goal_select', { goal: GOALS[i].id }); };

  return (
    <>
      <section id="path" className="wrap sec stack" style={{ gap: 56 }}>
        <div className="row between">
          <div className="stack" style={{ maxWidth: 760 }}>
            <span className="k muted">02 — The discovery</span>
            <h2 className="h2">What are you <span className="serif">trying</span> to do?</h2>
          </div>
          <p style={{ maxWidth: 360, color: 'var(--g-soft, #555)' }}>You don't need to choose your entire future today. Just your next mission.</p>
        </div>
        <div role="radiogroup" aria-label="Creator goal" className="grid" style={{ '--min': '200px' }}>
          {GOALS.map((x, i) => (
            <button key={x.id} type="button" role="radio" aria-checked={i === g} className="opt" onClick={() => pick(i)}>
              <span className="k" style={{ opacity: .6 }}>0{i + 1}</span>
              <span style={{ fontSize: 26, lineHeight: 1.05, fontWeight: 700, letterSpacing: '-0.03em' }}>{x.short}</span>
              <span style={{ fontSize: 14, opacity: .7 }}>{x.pain}</span>
            </button>
          ))}
        </div>
        <div className="row" style={{ borderRadius: 28, background: 'var(--surface)', padding: 'clamp(24px, 4vw, 48px)', gap: 48, alignItems: 'center' }}>
          <div className="stack" style={{ flex: '999 1 420px', minWidth: 0, gap: 16 }}>
            <span className="k goldt">Your free starter mission</span>
            <h3 style={{ fontSize: 'clamp(30px, 3.4vw, 48px)' }}>{sel.mission}</h3>
            <p style={{ color: 'var(--g-soft, #3a3a3a)', maxWidth: 560 }}>{sel.body}</p>
          </div>
          <div className="stack" style={{ flex: '1 1 280px', minWidth: 0 }}>
            {sel.steps.map((t, i) => (
              <div key={t} style={{ display: 'flex', gap: 14, borderBottom: '1px solid var(--g-line, #D0CABC)', paddingBottom: 10, fontSize: 15 }}>
                <span className="k goldt">0{i + 1}</span><span>{t}</span>
              </div>
            ))}
            <Link href={`/start?goal=${sel.id}`} className="cta" style={{ alignSelf: 'flex-start' }} onClick={() => track('cta_click', { where: 'mission', goal: sel.id })}>Start my mission <span className="dot">→</span></Link>
          </div>
        </div>
      </section>
      <Offers region={region} rec={sel.rec} goal={sel.short} />
    </>
  );
}

function Offers({ region, rec, goal }) {
  return (
    <section id="offer" className="wrap stack" style={{ gap: 48, paddingBottom: 140 }}>
      <div className="row between">
        <div className="stack" style={{ maxWidth: 760 }}>
          <span className="k muted">05 — Your next level</span>
          <h2 className="h2">You don't need <span className="serif">everything.</span></h2>
        </div>
        <p style={{ maxWidth: 380, color: 'var(--g-soft, #555)' }}>Recommended for <b>{goal}</b> — prices shown in {region.cur}.</p>
      </div>
      <div className="grid">
        {PLANS.map((p, i) => {
          const on = i === rec;
          return (
            <div key={p.name} className="card" style={on ? { background: 'var(--ink)', color: 'var(--canvas)', borderColor: 'var(--ink)' } : undefined}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="k">{p.name}</span>
                {on && <span className="k" style={{ background: 'var(--gold)', color: 'var(--ink)', padding: '7px 10px', borderRadius: 999 }}>For you</span>}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 52, lineHeight: 1, fontWeight: 700, letterSpacing: '-0.04em' }}>{region.prices[i]}</span>
                <span style={{ fontSize: 13, opacity: .65 }}>{p.per}</span>
              </div>
              <p style={{ fontSize: 15, opacity: .8 }}>{p.for}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, flexGrow: 1, paddingTop: 14, borderTop: `1px solid ${on ? '#333' : 'var(--surface)'}` }}>
                {p.items.map((x) => <span key={x}>— {x}</span>)}
              </div>
              <Link href={p.href} className={on ? 'cta light' : 'cta'} style={{ justifyContent: 'space-between' }} onClick={() => track('plan_click', { plan: p.name })}>{p.cta} <span className="dot">→</span></Link>
            </div>
          );
        })}
      </div>
      <p className="muted" style={{ fontSize: 12 }}>Proposed launch prices; regional prices are indicative until validated. Dates, deliverables and refund terms are confirmed before checkout.</p>
    </section>
  );
}
