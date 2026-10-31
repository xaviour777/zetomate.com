import Link from 'next/link';
import Logo from '@/components/Logo';
import Quiz from '@/components/Quiz';
import { REGIONS } from '@/lib/regions';
import { getRegion } from '@/lib/getRegion';

export const metadata = {
  title: 'Find your next creator move in 60 seconds — ZetoMate',
  description: 'Answer 3 quick questions. Get a free, personalized mission and starter kit.',
  alternates: { canonical: '/start' },
};

const OBJECTIONS = [
  ["I'm a complete beginner.", "Missions start from zero. You don't need to have published anything."],
  ["I can't afford AI tools.", 'Workflows include free options wherever practical.'],
  ['Will it go viral?', 'Nobody can promise that. We help you make better, more deliberate work.'],
  ['Is this another course?', 'No certificates. You finish with something you made.'],
];

export default async function Start({ searchParams }) {
  const sp = await searchParams;
  const r = REGIONS[await getRegion()];
  return (
    <main className="dark" style={{ minHeight: '100vh' }}>
      <header className="wrap" style={{ maxWidth: 1200, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, paddingTop: 22, paddingBottom: 22 }}>
        <Link href="/" className="brand" style={{ flexGrow: 0 }}><Logo dark /> ZETOMATE</Link>
        <span className="k" style={{ color: '#a8a8a8' }}>Free · 60 seconds · No card</span>
      </header>

      <section id="top" className="wrap row" style={{ maxWidth: 1200, paddingTop: 40, paddingBottom: 96, gap: 56, alignItems: 'center' }}>
        <div className="stack" style={{ flex: '1 1 420px', minWidth: 0, gap: 24 }}>
          <span className="k gold">From the team behind MYTHRA · 85M+ views*</span>
          <h1 style={{ fontSize: 'clamp(44px, 6.4vw, 92px)', lineHeight: .92, letterSpacing: '-0.045em' }}>Find your next creator move <span className="serif gold">in 60 seconds.</span></h1>
          <p style={{ fontSize: 20, color: '#c9c9c9', maxWidth: 480 }}>Answer 3 quick questions. Get a free, personalized mission and starter kit built for your goal.</p>
          <div className="row" style={{ gap: 22, fontSize: 14, color: '#a8a8a8' }}><span>✓ Free forever plan</span><span>✓ No credit card</span><span>✓ No guru promises</span></div>
        </div>
        <div style={{ flex: '1 1 460px', minWidth: 0 }}><Quiz prices={r.prices} initialGoal={sp?.goal} /></div>
      </section>

      <section style={{ borderTop: '1px solid #262626', borderBottom: '1px solid #262626' }}>
        <div className="wrap grid" style={{ maxWidth: 1200, '--min': '200px', paddingTop: 32, paddingBottom: 32, gap: 24 }}>
          {[['85M+', 'MYTHRA views*'], ['3G · 6S', 'YouTube Creator Awards*'], ['12M+', 'Creator-network audience*'], ['Free', 'To start your first mission']].map(([n, l]) => (
            <div key={l}><div style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.04em' }}>{n}</div><div style={{ fontSize: 13, color: '#a8a8a8' }}>{l}</div></div>
          ))}
        </div>
      </section>

      <section className="wrap sec stack" style={{ maxWidth: 1200, gap: 48 }}>
        <h2 style={{ fontSize: 'clamp(36px, 4.6vw, 64px)', maxWidth: 760 }}>Three answers. <span className="serif gold">One clear next step.</span></h2>
        <div className="grid" style={{ '--min': '280px' }}>
          {[['Step 01 · 60 sec', 'Tell us your goal', 'Films, views, income, brand or content. Your level and the time you have.'], ['Step 02 · Instantly', 'Get your free mission', 'A real objective and starter kit — something to build and publish, not watch.'], ['Step 03 · Your pace', 'Ship, then level up', 'Finish free. Go further with a Sprint or Pro cohort only when it helps.']].map(([k, t, b]) => (
            <div key={k} className="card"><span className="k gold">{k}</span><h3 style={{ fontSize: 26 }}>{t}</h3><p>{b}</p></div>
          ))}
        </div>
      </section>

      <section className="wrap grid" style={{ maxWidth: 1200, '--min': '260px', paddingBottom: 120, gap: 14 }}>
        {OBJECTIONS.map(([q, a]) => (
          <div key={q} style={{ background: '#1b1b1b', borderRadius: 22, padding: 28 }}><b style={{ fontSize: 18 }}>“{q}”</b><p style={{ marginTop: 8, color: 'var(--soft-dark)', fontSize: 15 }}>{a}</p></div>
        ))}
      </section>

      <section style={{ background: 'var(--canvas)', color: 'var(--ink)' }}>
        <div className="wrap sec stack" style={{ maxWidth: 1000, alignItems: 'center', textAlign: 'center', gap: 28 }}>
          <h2 style={{ fontSize: 'clamp(44px, 7vw, 104px)', lineHeight: .9 }}>Close the tutorial. <span className="serif goldt">Start the mission.</span></h2>
          <p style={{ fontSize: 19, color: '#555' }}>60 seconds. Free. You'll know exactly what to make next.</p>
          <a href="#top" className="cta">Find my path — free <span className="dot">→</span></a>
          <p className="k muted">*Figures pending verification</p>
        </div>
      </section>

      <div className="sticky-cta">
        <div className="wrap" style={{ maxWidth: 1200, display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', paddingTop: 12, paddingBottom: 12 }}>
          <span style={{ fontSize: 14, color: '#c9c9c9' }}>Your free creator plan · 60 seconds</span>
          <a href="#top" className="cta goldbg sm">Start now →</a>
        </div>
      </div>
    </main>
  );
}
