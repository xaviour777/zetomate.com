'use client';
import { useState } from 'react';
import { track } from '@/lib/track';

// Kit delivery and marketing consent are stored as separate fields.
export default function LeadForm({ source, extra = {}, dark = false, button = 'Get the kit', onDone }) {
  const [email, setEmail] = useState('');
  const [marketing, setMarketing] = useState(false);
  const [state, setState] = useState('idle');

  async function submit(e) {
    e.preventDefault();
    setState('sending');
    try {
      const r = await fetch('/api/lead', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email, marketing, source, ...extra }) });
      if (!r.ok) throw new Error();
      track('lead_submit', { source, marketing });
      setState('done');
      onDone?.();
    } catch {
      setState('error');
    }
  }

  if (state === 'done' && !onDone) {
    return (
      <div className="stack" style={{ gap: 12 }}>
        <span className="k gold">On its way</span>
        <h3 className="serif" style={{ fontSize: 44 }}>Check your inbox.</h3>
        <p style={{ color: dark ? 'var(--soft-dark)' : '#555' }}>Your kit and first mission are waiting. Now close the tab — and make something.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="stack" style={{ gap: 14 }}>
      <label htmlFor={`em-${source}`} className="k" style={{ color: dark ? 'var(--soft-dark)' : '#555' }}>Email address</label>
      <input id={`em-${source}`} type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit" className="cta goldbg" disabled={state === 'sending'} style={{ justifyContent: 'center' }}>{state === 'sending' ? 'Sending…' : button + ' →'}</button>
      <label className="check" style={{ color: dark ? 'var(--soft-dark)' : '#555' }}>
        <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
        Also send me new experiments and creator opportunities (optional, separate from kit delivery).
      </label>
      {state === 'error' && <p role="alert" style={{ color: '#c0392b', fontSize: 14 }}>Something went wrong. Please try again.</p>}
    </form>
  );
}
