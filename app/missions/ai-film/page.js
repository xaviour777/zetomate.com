import Link from 'next/link';
import Logo from '@/components/Logo';
import Curriculum from '@/components/Curriculum';
import TierPicker from '@/components/TierPicker';

export const metadata = {
  title: 'Mission 001 — Make your first AI film | ZetoMate',
  description: 'From an idea in your head to a finished 3-minute cinematic short in 21 days.',
  alternates: { canonical: '/missions/ai-film' },
};

// DEMO CONTENT: names, views, ratings and quotes below are placeholders — replace with verified data before launch.
const g = (a, b) => ({ aspectRatio: '4 / 5', borderRadius: 18, padding: 16, display: 'flex', alignItems: 'flex-end', background: `radial-gradient(circle at 60% 35%, ${a} 0%, ${b} 40%, #0b0b0b 100%)` });
const FILMS = [
  ['The Last Lantern', 'Ayesha R. · Lahore', '1.2M views', '03:12', g('#e8c98a', '#5a3b1c')],
  ['Salt & Silence', 'Bilal K. · Karachi', '340K views', '02:48', g('#9fb4c4', '#2a3a48')],
  ['Desert Clockwork', 'Omar S. · Dubai', '96K views', '03:05', g('#d79a6a', '#4a2414')],
  ['Monsoon Girl', 'Priya M. · Mumbai', '210K views', '02:30', g('#a8c49a', '#24361c')],
];
const QUOTES = [
  ['The character consistency lessons alone saved me weeks of trial and error.', 'Bilal K.', 'Editor, Karachi', '#8a7146'],
  ["I'm not technical at all. The missions told me exactly what to make each day.", 'Sana T.', 'Teacher, Islamabad', '#3a3a3a'],
  ['The feedback round changed my edit completely. My film finally had a pace.', 'Omar S.', 'Founder, Dubai', '#B89A61'],
];
const FAQS = [
  ['Do I need paid AI tools?', 'No. Every lesson shows a free option; paid tools are optional upgrades.'],
  ['How much time does it take?', 'About 4 hours a week for 3 weeks. Lessons are short and every day has one task.'],
  ['What if I fall behind?', 'Lessons stay unlocked. You can finish your film at your own pace.'],
  ['Who owns the film I make?', 'You do, subject to the terms of the AI tools and licensed assets you use.'],
];

export default function Mission() {
  return (
    <main>
      <div className="dark" style={{ textAlign: 'center', padding: '10px 16px', fontSize: 13, color: 'var(--surface)' }}>Next cohort starts <b className="gold">15 December</b> · 40 seats</div>
      <header className="wrap nav" style={{ maxWidth: 1240 }}>
        <Link href="/" className="brand"><Logo /> ZETOMATE <span className="k muted">/ Missions</span></Link>
        <a href="#join" className="cta sm" style={{ paddingRight: 24 }}>Accept mission</a>
      </header>

      <section className="wrap stack" style={{ maxWidth: 1240, paddingTop: 48, paddingBottom: 80, gap: 40 }}>
        <div className="row between" style={{ gap: 40 }}>
          <div className="stack" style={{ flex: '999 1 600px', minWidth: 0, gap: 22 }}>
            <span className="k goldt">Mission 001 · 21 days · Beginner friendly</span>
            <h1 style={{ fontSize: 'clamp(52px, 8.4vw, 132px)', lineHeight: .88, letterSpacing: '-0.05em' }}>Make your first <span className="serif">AI film.</span></h1>
          </div>
          <div className="stack" style={{ flex: '1 1 300px', minWidth: 0 }}>
            <p style={{ fontSize: 19, color: '#3a3a3a' }}>From an idea in your head to a finished 3-minute cinematic short — directed, scored and published.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'flex' }}>{['#B89A61', '#8a7146', '#3a3a3a', '#121212'].map((c, i) => <span key={c} style={{ width: 34, height: 34, borderRadius: '50%', background: c, border: '2px solid var(--canvas)', marginLeft: i ? -10 : 0 }} />)}</span>
              <span style={{ fontSize: 14 }}><b>2,418 creators</b> started this mission · ★ 4.9 (612)</span>
            </div>
          </div>
        </div>
        <div className="film" style={{ background: 'radial-gradient(circle at 72% 38%, #e8c98a 0%, #b8894a 9%, #5a3b1c 24%, #1b130b 48%, #0a0807 80%)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="k" style={{ color: '#e8d7b0' }}>Student film</span><span className="k" style={{ color: '#e8d7b0' }}>03:12</span></div>
          <div className="row between" style={{ gap: 20 }}>
            <div><div className="serif" style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: .95 }}>The Last Lantern</div><div style={{ fontSize: 14, color: '#d8c8a8' }}>Made in Mission 001 by Ayesha R., Lahore · 1.2M views</div></div>
            <a href="#join" aria-label="Play student film" style={{ width: 84, height: 84, borderRadius: '50%', background: 'rgba(246,245,240,.14)', border: '1px solid #e8d7b0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--canvas)', textDecoration: 'none', fontSize: 22 }}>▶</a>
          </div>
        </div>
        <div className="grid" style={{ '--min': '180px', gap: 24, borderTop: '1px solid var(--ink)', paddingTop: 22 }}>
          {[['21 days', '7 missions, 1 film'], ['4 hrs/wk', 'Fits beside a job'], ['87%', 'Finish their film'], ['$0', 'Tool cost to start']].map(([n, l]) => (
            <div key={l}><div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.04em' }}>{n}</div><div className="muted" style={{ fontSize: 13 }}>{l}</div></div>
          ))}
        </div>
      </section>

      <Curriculum />

      <section className="wrap sec stack" style={{ maxWidth: 1240, gap: 40 }}>
        <div className="stack" style={{ gap: 14 }}>
          <span className="k goldt">Made in Mission 001</span>
          <h2 className="h2" style={{ fontSize: 'clamp(38px, 5vw, 72px)' }}>Real films. <span className="serif">First attempts.</span></h2>
        </div>
        <div className="grid">
          {FILMS.map(([t, by, v, len, art]) => (
            <a key={t} href="#join" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={art}><span className="k" style={{ color: 'var(--canvas)', opacity: .85 }}>{len}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}><b style={{ fontSize: 18 }}>{t}</b><span className="muted" style={{ fontSize: 13 }}>{v}</span></div>
              <span className="muted" style={{ fontSize: 13 }}>{by}</span>
            </a>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--surface)' }}>
        <div className="wrap sec grid" style={{ maxWidth: 1240, '--min': '300px', gap: 14 }}>
          <figure className="stack" style={{ margin: 0, gridColumn: '1 / -1', gap: 22, paddingBottom: 32 }}>
            <blockquote className="serif" style={{ margin: 0, fontStyle: 'normal', fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05 }}>“I'd saved 200 tutorials. In three weeks I finally <span className="goldt" style={{ fontStyle: 'italic' }}>made</span> something — and a million people watched it.”</blockquote>
            <figcaption style={{ fontSize: 15 }}><b>Ayesha R.</b> · Storyteller, Lahore · “The Last Lantern”</figcaption>
          </figure>
          {QUOTES.map(([t, n, r, c]) => (
            <figure key={n} className="card" style={{ margin: 0, background: 'var(--canvas)', border: 0 }}>
              <span className="goldt" style={{ letterSpacing: 2 }} aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote style={{ margin: 0 }}>{t}</blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}><span style={{ width: 40, height: 40, borderRadius: '50%', background: c, flexShrink: 0 }} /><span><b>{n}</b><br /><span className="muted">{r}</span></span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <TierPicker />

      <section className="wrap" style={{ maxWidth: 900, paddingBottom: 120 }}>
        {FAQS.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true" className="goldt">+</span></summary><p>{a}</p></details>)}
      </section>

      <section className="dark">
        <div className="wrap stack" style={{ maxWidth: 1240, paddingTop: 120, paddingBottom: 80, gap: 28 }}>
          <h2 style={{ fontSize: 'clamp(52px, 8.4vw, 132px)', lineHeight: .88, letterSpacing: '-0.05em' }}>Your film is <span className="serif gold">21 days away.</span></h2>
          <a href="#join" className="cta goldbg" style={{ alignSelf: 'flex-start' }}>Accept mission — free →</a>
          <p className="k" style={{ marginTop: 40, color: '#8f8f8f' }}>© 2026 ZetoMate · Demo content for review</p>
        </div>
      </section>
    </main>
  );
}
