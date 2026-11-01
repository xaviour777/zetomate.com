import Link from 'next/link';
import RegionSelect from '@/components/RegionSelect';
import GoalSelector from '@/components/GoalSelector';
import LeadForm from '@/components/LeadForm';
import ScrollStage from '@/components/ScrollStage';
import { REGIONS } from '@/lib/regions';
import { getRegion } from '@/lib/getRegion';

const STAGES = [
  ['A', 'Create.', 'Films, videos, stories, products, brands. The creative process, not just the tools.', 'One finished, publishable project'],
  ['→', 'Distribute.', 'How attention works on YouTube, Facebook, Instagram and TikTok.', 'A platform playbook and test plan'],
  ['→', 'Monetize.', 'Platform revenue, services, partnerships, products and licensing.', 'A monetization map for your work'],
  ['Z', 'Repeat.', 'Learn from results. Build on what worked. Not one viral moment.', 'A system for your next opportunity'],
];

const FAQS = [
  ["I'm completely new. Can I start?", "Yes. The Playground and beginner missions give you a clear starting point, even if you haven't published anything yet."],
  ['Do I need expensive AI tools?', 'Not necessarily. Workflows cover free and paid options. Some advanced projects may need separate subscriptions.'],
  ['Will you guarantee my content goes viral?', 'No. Nobody can reliably guarantee views, subscribers or earnings. We focus on better storytelling and real experiments.'],
  ['Why am I seeing prices in my currency?', 'We suggest a region from your approximate location. Change it anytime from the Region menu — your choice is remembered.'],
  ['Do I own the content I create?', 'You retain rights to your original work, subject to third-party tools, licensed assets or agreed collaboration terms.'],
  ["What if a paid program isn't right for me?", 'Each paid offer shows its scope, access terms and refund policy before purchase. Start free to explore first.'],
];

const Mark = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="18" cy="26" r="11" fill="#FF6B1A" /><circle cx="82" cy="74" r="11" fill="#19C98A" />
    <path d="M36 26 H76 L24 74 H64" fill="none" stroke="#f5f5f4" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function Home() {
  const id = await getRegion();
  const r = REGIONS[id];

  return (
    <main className="glassy">
      <ScrollStage />

      <div className="content">
        <header className="glass navbar">
          <Link href="/" className="grow" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', fontFamily: 'var(--display)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.03em' }}><Mark /> zetomate</Link>
          <nav aria-label="Main" className="links">
            <a href="#path">Paths</a><a href="#proof">Proof</a><a href="#system">System</a><a href="#pods">Pods</a><a href="#offer">Pricing</a><Link href="/missions/ai-film">Missions</Link>
          </nav>
          <RegionSelect value={id} />
          <Link href="/start" className="cta sm">Start free <span className="dot">→</span></Link>
        </header>

        {/* First screen: value prop + CTA always readable; logo reveals behind on scroll */}
        <section className="wrap" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 28 }}>
          <div className="glass row between" style={{ padding: 'clamp(22px, 3.5vw, 40px)', gap: 28, alignItems: 'flex-end' }}>
            <div className="stack" style={{ flex: '999 1 520px', minWidth: 0, gap: 16 }}>
              <span className="k">{r.hello}</span>
              <h1 style={{ fontSize: 'clamp(44px, 7vw, 104px)', lineHeight: .9 }}>Stop scrolling.<br /><span className="serif" style={{ fontWeight: 400 }}>Start</span> building.</h1>
            </div>
            <div className="stack" style={{ flex: '1 1 300px', minWidth: 0, gap: 18 }}>
              <p className="muted" style={{ fontSize: 18 }}>One connected system to make something, get it seen and make it pay — idea to income.</p>
              <div className="row" style={{ gap: 12 }}>
                <Link href="/start" className="cta">Start building — free <span className="dot">→</span></Link>
                <a href="#proof" className="ghost">▶&nbsp; MYTHRA</a>
              </div>
            </div>
          </div>
          <span className="k scroll-hint" style={{ textAlign: 'center', marginTop: 18 }}>Scroll — meet your mate ↓</span>
        </section>

        {/* Reveal runway: the background logo, wordmark and tagline assemble here */}
        <section aria-label="From A to Z. You've got a mate." style={{ height: '150vh', position: 'relative' }}>
          <div className="wrap" style={{ position: 'sticky', top: '70vh', display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', opacity: 'calc(var(--p) * 1.4 - .4)' }}>
            {['Create', 'Distribute', 'Monetize', 'Repeat'].map((w) => <span key={w} className="glass k" style={{ padding: '12px 16px', borderRadius: 999, color: '#fff' }}>{w}</span>)}
          </div>
        </section>

        <GoalSelector region={r} />

        {/* Proof */}
        <section id="proof" className="wrap sec stack" style={{ gap: 40 }}>
          <div className="stack" style={{ maxWidth: 860 }}>
            <span className="k">03 — The proof</span>
            <h2 className="h2">We didn't sell the playbook first. <span className="serif" style={{ fontWeight: 400 }}>We tested it on ourselves.</span></h2>
          </div>
          <div className="glass film" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(255,255,255,.16) 0%, rgba(255,255,255,.03) 50%, rgba(0,0,0,.4) 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}><span className="k">Featured film</span><span className="k">[MYTHRA trailer]</span></div>
            <div className="row between" style={{ gap: 24 }}>
              <div>
                <div className="disp" style={{ fontSize: 'clamp(56px, 9vw, 140px)', lineHeight: .85 }}>MYTHRA</div>
                <div className="serif" style={{ fontSize: 26, color: 'rgba(255,255,255,.8)' }}>A mother gives birth to a dragon.</div>
              </div>
              <a href="#proof" aria-label="Play MYTHRA trailer" className="glass" style={{ width: 96, height: 96, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 26 }}>▶</a>
            </div>
          </div>
          <div className="grid" style={{ '--min': '220px' }}>
            {[['85M+', 'Views on MYTHRA*'], ['3G · 6S', 'YouTube Creator Awards*'], ['12M+', 'Creator-network audience*'], ['Billions', 'Views across experiments*']].map(([n, l]) => (
              <div key={l} className="glass" style={{ padding: 28, borderRadius: 22 }}><div className="disp" style={{ fontSize: 56, lineHeight: 1 }}>{n}</div><div className="muted" style={{ fontSize: 14, marginTop: 8 }}>{l}</div></div>
            ))}
          </div>
          <div className="grid" style={{ '--min': '300px' }}>
            <div className="card"><span className="k">Series</span><h3 style={{ fontSize: 28 }}>Little Tots</h3><p>Characters, episodes and audiences across platforms — entertainment as a repeatable business.</p></div>
            <div className="card"><span className="k">Lab</span><h3 style={{ fontSize: 28 }}>The creator experiments</h3><p>Niches, channels, languages. Some worked. Some failed. Both became the playbook.</p></div>
            <div className="card"><span className="k">{r.region}</span><h3 style={{ fontSize: 28 }}>{r.proofT}</h3><p>{r.proofB}</p></div>
          </div>
          <p className="muted" style={{ fontSize: 12 }}>*Figures pending verification before publication. Combined audiences are not guaranteed reach.</p>
        </section>

        {/* System */}
        <section id="system" className="wrap stack" style={{ gap: 40, paddingBottom: 140 }}>
          <div className="stack" style={{ maxWidth: 820 }}>
            <span className="k">04 — From A to Z</span>
            <h2 className="h2">Making it is only <span className="serif" style={{ fontWeight: 400 }}>part</span> of the game.</h2>
            <p className="muted" style={{ maxWidth: 560 }}>A beautiful film nobody watches. A viral video that never earns. Most people teach one piece. Your mate connects the pieces.</p>
          </div>
          <div className="grid" style={{ '--min': '250px' }}>
            {STAGES.map(([n, t, b, d]) => (
              <div key={t} className="glass stack" style={{ padding: 28, gap: 16, minHeight: 320 }}>
                <span className="disp" style={{ fontSize: 44, lineHeight: 1, color: 'rgba(255,255,255,.35)' }}>{n}</span>
                <h3 style={{ fontSize: 38 }}>{t}</h3>
                <p className="muted" style={{ fontSize: 15 }}>{b}</p>
                <span style={{ marginTop: 'auto', borderTop: '1px solid var(--g-line)', paddingTop: 14, fontSize: 14 }}><span className="k" style={{ display: 'block', marginBottom: 6 }}>You leave with</span>{d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Creator Pods */}
        <section id="pods" className="wrap stack" style={{ gap: 40, paddingBottom: 140 }}>
          <div className="row between">
            <div className="stack" style={{ maxWidth: 820 }}>
              <span className="k">Creator Pods</span>
              <h2 className="h2">Your first 10 collaborators are <span className="serif" style={{ fontWeight: 400 }}>already waiting.</span></h2>
            </div>
            <p className="muted" style={{ maxWidth: 400 }}>Join a pod of 10 creators in your niche. Make collab videos that appear on every member's channel — YouTube, Instagram and Facebook now support official multi-creator posts.</p>
          </div>
          <div className="grid" style={{ '--min': '260px' }}>
            {[
              ['01', 'Matched, not random', 'Same niche, similar audience size, active creators only. You unlock collabs by finishing missions — so every partner is serious.'],
              ['02', 'Real content, shared audiences', 'Official co-author posts that show on both channels. No fake likes, no engagement rings — just better videos, seen by more people.'],
              ['03', 'Collab drops on schedule', 'Pod: 2 collab drops a month. Elite: every week. Briefs, roles and deadlines handled in the app.'],
              ['04', 'Grow the network', 'Weekly pod challenges, a pod leaderboard, and rotation every 8 weeks — about 60 new creator connections a year.'],
            ].map(([n, t, b]) => (
              <div key={n} className="glass stack" style={{ padding: 28, gap: 14 }}>
                <span className="disp" style={{ fontSize: 40, lineHeight: 1, color: 'rgba(255,255,255,.35)' }}>{n}</span>
                <h3 style={{ fontSize: 26 }}>{t}</h3>
                <p className="muted" style={{ fontSize: 15 }}>{b}</p>
              </div>
            ))}
          </div>
          <div className="glass white row between" style={{ padding: 'clamp(24px, 4vw, 48px)', gap: 28, alignItems: 'center' }}>
            <div className="stack" style={{ flex: '999 1 480px', minWidth: 0, gap: 12 }}>
              <span className="k">Network Elite · 100 seats</span>
              <h3 style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1 }}>One confirmed post on the ZetoMate network — <span className="serif" style={{ fontWeight: 400 }}>every month.</span></h3>
              <p className="muted" style={{ fontSize: 14 }}>12M+ combined audience*. Placed after quality approval and labelled as a paid partnership. Views are not guaranteed.</p>
            </div>
            <div className="row" style={{ gap: 12 }}>
              <Link href="/start?plan=pod" className="cta" style={{ background: '#0a0a0a', color: '#fff' }}>Find my pod <span className="dot" style={{ background: '#fff', color: '#0a0a0a' }}>→</span></Link>
              <Link href="/start?plan=elite" className="ghost" style={{ color: '#0a0a0a' }}>Apply for Elite</Link>
            </div>
          </div>
        </section>

        {/* Drama Method — white glass for contrast */}
        <section className="wrap" style={{ paddingBottom: 140 }}>
          <div className="glass white row" style={{ padding: 'clamp(24px, 5vw, 64px)', gap: 48 }}>
            <div className="stack" style={{ flex: '1 1 360px', minWidth: 0, gap: 20 }}>
              <span className="k">The Drama Method™</span>
              <h2 style={{ fontSize: 'clamp(36px, 4.4vw, 64px)', lineHeight: .95 }}>The internet doesn't owe you <span className="serif" style={{ fontWeight: 400 }}>attention.</span></h2>
              <p className="muted">Four creative decisions. Not an algorithm hack — a practical storytelling framework.</p>
            </div>
            <div className="grid" style={{ flex: '999 1 480px', minWidth: 0, '--min': '200px' }}>
              {[['Hook', 'Make them stop.'], ['Stakes', 'Make them care.'], ['Twist', 'Give them the unexpected.'], ['Loop', "Make them want what's next."]].map(([t, d], i) => (
                <div key={t} style={{ borderRadius: 20, padding: 24, background: i === 3 ? '#0a0a0a' : 'rgba(0,0,0,.05)', color: i === 3 ? '#fff' : '#0a0a0a' }}>
                  <div className="disp" style={{ fontSize: 32 }}>{t}</div><div style={{ opacity: .65 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Starter kit */}
        <section id="kit" className="wrap" style={{ paddingBottom: 140 }}>
          <div className="glass row" style={{ padding: 'clamp(24px, 5vw, 64px)', gap: 56, alignItems: 'center' }}>
            <div className="stack" style={{ flex: '999 1 440px', minWidth: 0 }}>
              <span className="k">Free · Creator Starter Kit</span>
              <h2 style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', lineHeight: .95 }}>Your next breakthrough won't come from another <span className="serif" style={{ fontWeight: 400 }}>saved video.</span></h2>
              <p className="muted" style={{ maxWidth: 520 }}>Roadmap, one mission, a Drama Method™ worksheet, an AI production workflow, a publishing checklist and a monetization map.</p>
            </div>
            <div style={{ flex: '1 1 360px', minWidth: 0 }}><LeadForm source="home_kit" dark extra={{ region: id }} /></div>
          </div>
        </section>

        {/* Network */}
        <section className="wrap grid" style={{ '--min': '300px', paddingBottom: 140 }}>
          <div className="card"><span className="k">Application-based</span><h3 style={{ fontSize: 30 }}>Creator Accelerator</h3><p style={{ flexGrow: 1 }}>Some projects deserve a bigger launch. Strategy, packaging, distribution planning and collaboration matching.</p><a href="mailto:hello@zetomate.com?subject=Accelerator%20application" style={{ fontWeight: 700 }}>Apply →</a></div>
          <div className="card"><span className="k">Lahore</span><h3 style={{ fontSize: 30 }}>Content Colony</h3><p style={{ flexGrow: 1 }}>A physical home to live, work and build together. Not a hotel. Not a hostel. A colony.</p><a href="mailto:hello@zetomate.com?subject=Content%20Colony" style={{ fontWeight: 700 }}>Explore →</a></div>
          <div className="card"><span className="k">For brands</span><h3 style={{ fontSize: 30 }}>ZetoMate Studio</h3><p style={{ flexGrow: 1 }}>Stories worth watching. Built for brands worth remembering.</p><a href="mailto:hello@zetomate.com?subject=Studio%20project" style={{ fontWeight: 700 }}>Discuss a project →</a></div>
        </section>

        {/* Manifesto */}
        <section className="wrap" style={{ paddingBottom: 140 }}>
          <div className="glass stack" style={{ padding: 'clamp(28px, 6vw, 80px)', textAlign: 'center', alignItems: 'center', gap: 28 }}>
            <span className="k">The anti-guru manifesto</span>
            <blockquote className="serif" style={{ margin: 0, fontSize: 'clamp(30px, 4.2vw, 60px)', lineHeight: 1.06, maxWidth: 1000 }}>“I don't want to tell you what to create. I want to see what you create next — <i>and help you give it a real chance.</i>”</blockquote>
            <span style={{ fontSize: 14 }}><b>Zahid Iqbal</b> · <span className="muted">Filmmaker. Creator. Builder.</span></span>
          </div>
        </section>

        {/* FAQ */}
        <section className="wrap row" style={{ paddingBottom: 140, gap: 56 }}>
          <h2 style={{ flex: '1 1 280px', fontSize: 'clamp(36px, 4vw, 56px)' }}>Questions, <span className="serif" style={{ fontWeight: 400 }}>answered.</span></h2>
          <div className="glass" style={{ flex: '999 1 520px', minWidth: 0, padding: '8px 28px' }}>
            {FAQS.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}
          </div>
        </section>

        {/* Final */}
        <section className="wrap" style={{ paddingBottom: 40 }}>
          <div className="glass stack" style={{ padding: 'clamp(28px, 6vw, 96px)', gap: 32 }}>
            <span className="k">Six months from now…</span>
            <h2 style={{ fontSize: 'clamp(48px, 9vw, 140px)', lineHeight: .88 }}>Close the tutorial.<br /><span className="serif" style={{ fontWeight: 400 }}>Open the possibility.</span></h2>
            <div className="row" style={{ gap: 12 }}>
              <Link href="/start" className="cta">Start building — free <span className="dot">→</span></Link>
              <a href="#offer" className="ghost">Explore the programs</a>
            </div>
          </div>
        </section>

        <footer className="wrap row between" style={{ paddingTop: 40, paddingBottom: 48, fontSize: 14, alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Mark size={22} /><b className="disp" style={{ fontSize: 18 }}>zetomate</b><span className="muted">From A to Z. You've got a mate.</span></span>
          <span className="row muted" style={{ gap: 28 }}><Link href="/start">Start free</Link><Link href="/missions/ai-film">Missions</Link><a href="#offer">Pricing</a><a href="mailto:hello@zetomate.com">Contact</a><span>© 2026</span></span>
        </footer>
      </div>
    </main>
  );
}
