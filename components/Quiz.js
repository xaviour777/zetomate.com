'use client';
import { useState } from 'react';
import Link from 'next/link';
import LeadForm from './LeadForm';
import { track } from '@/lib/track';

const Q = [
  { key: 'goal', title: 'What do you want most right now?', opts: [['Make films', 'Stories I want to bring to life'], ['Get more views', 'I post, nobody notices'], ['Make money', 'Turn my work into income'], ['Build a brand', 'I have a product or idea'], ['Create content', 'Ideas, but no start']] },
  { key: 'level', title: 'Where are you starting from?', opts: [['Total beginner', "Haven't published yet"], ['Getting started', 'A few posts out'], ['Publishing regularly', 'Want better results'], ['Already earning', 'Ready to scale']] },
  { key: 'time', title: 'How much time can you give each week?', opts: [['2–3 hours', 'Side project'], ['5–8 hours', 'Serious hobby'], ['10+ hours', 'All in']] },
];

// [mission, plan name, plan index into regional prices, reason, link]
const M = {
  'Make films': ['Make your first AI film', 'Creator Club', 1, 'The full mission path, Vault and weekly leagues — monthly, cancel anytime.', '/#offer'],
  'Get more views': ['The 30-day creator sprint', 'Collab Pod', 2, '10 creators in your niche and 2 collab drops a month to reach new audiences.', '/#pods'],
  'Make money': ['Make your first real offer', 'Collab Pod', 2, 'Mentor reviews, pod collabs and offer-building missions.', '/#pods'],
  'Build a brand': ['Your brand on one page', 'Network Elite', 3, 'Weekly collabs plus a monthly post on the ZetoMate network. Application only.', '/#pods'],
  'Create content': ['Ship your first publishable piece', 'Creator Club', 1, 'Workflows, prompt library and every mission — for the price of a coffee a week.', '/#offer'],
};
const PRESET = { films: 'Make films', views: 'Get more views', money: 'Make money', brand: 'Build a brand', content: 'Create content' };

export default function Quiz({ prices, initialGoal }) {
  const preset = PRESET[initialGoal];
  const [step, setStep] = useState(preset ? 1 : 0);
  const [a, setA] = useState(preset ? [preset] : []);
  const [done, setDone] = useState(false);

  const isQ = step < 3;
  const m = M[a[0]] || M['Make films'];
  const pct = done ? 100 : Math.round((step / 4) * 100) + 10;

  function pick(v) {
    const next = a.slice(0, step).concat(v);
    setA(next);
    track('quiz_answer', { step: step + 1, [Q[step].key]: v });
    setStep(step + 1);
  }

  return (
    <div className="stack" style={{ background: 'var(--canvas)', color: 'var(--ink)', borderRadius: 28, padding: 'clamp(22px, 3vw, 36px)', gap: 24, boxShadow: '0 40px 80px -30px rgba(184,154,97,.35)' }}>
      <div className="stack" style={{ gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="k muted">{isQ ? `Question ${step + 1} of 3` : done ? 'Complete' : 'Last step'}</span>
          <span className="k goldt">{pct}%</span>
        </div>
        <div style={{ height: 6, borderRadius: 999, background: 'var(--surface)', overflow: 'hidden' }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div style={{ height: '100%', width: pct + '%', background: 'var(--gold)', borderRadius: 999, transition: 'width .5s cubic-bezier(.2,.7,.2,1)' }} />
        </div>
      </div>

      {isQ && (
        <>
          <h2 style={{ fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.03em' }}>{Q[step].title}</h2>
          <div className="grid" style={{ '--min': '180px', gap: 10 }}>
            {Q[step].opts.map(([t, s]) => (
              <button key={t} type="button" className="opt" style={{ minHeight: 76, padding: '16px 18px', gap: 4, borderRadius: 16 }} onClick={() => pick(t)}>
                <span style={{ fontSize: 17, fontWeight: 700 }}>{t}</span><span style={{ fontSize: 13, color: 'var(--muted)' }}>{s}</span>
              </button>
            ))}
          </div>
          {step > 0 && <button type="button" onClick={() => setStep(step - 1)} style={{ alignSelf: 'flex-start', background: 'none', border: 0, color: '#555', font: '500 14px var(--sans)', cursor: 'pointer', minHeight: 44, padding: 0 }}>← Back</button>}
        </>
      )}

      {!isQ && !done && (
        <>
          <span className="k goldt">Your plan is ready</span>
          <h2 style={{ fontSize: 34, lineHeight: 1.05 }}>{m[0]}</h2>
          <div className="stack" style={{ gap: 8, background: 'var(--surface)', borderRadius: 16, padding: 18, fontSize: 14 }}>
            <span><b>Goal:</b> {a[0]} · <b>Level:</b> {a[1]} · <b>Time:</b> {a[2]}</span>
            <span style={{ color: '#3a3a3a' }}>Includes your mission, Drama Method™ worksheet, AI workflow and publishing checklist.</span>
          </div>
          <LeadForm source="quiz" button="Send my free plan" extra={{ goal: a[0], level: a[1], time: a[2] }} onDone={() => setDone(true)} />
        </>
      )}

      {done && (
        <>
          <span className="k goldt">Sent — check your inbox</span>
          <h2 className="serif" style={{ fontSize: 44, lineHeight: 1 }}>Your mission has started.</h2>
          <p style={{ color: '#3a3a3a' }}>Want to finish it faster, with structure and feedback? Creators with your goal usually pick:</p>
          <div className="stack" style={{ border: '1.5px solid var(--ink)', borderRadius: 18, padding: 22, gap: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}><b style={{ fontSize: 20 }}>{m[1]}</b><span style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em' }}>{prices[m[2]]}</span></div>
            <span style={{ fontSize: 14, color: '#555' }}>{m[3]}</span>
            <Link href={m[4]} className="cta goldbg" style={{ justifyContent: 'center' }} onClick={() => track('upsell_click', { plan: m[1] })}>See what's inside →</Link>
          </div>
          <Link href="/" style={{ fontSize: 14, color: '#555' }}>No thanks, I'll start free</Link>
        </>
      )}
    </div>
  );
}
