import Link from 'next/link';
import { Anton, Nunito } from 'next/font/google';
import Motion from '@/components/v7/Motion';
import WorldPicker from '@/components/v7/WorldPicker';
import LeadForm from '@/components/LeadForm';
import './v7.css';

const poster = Anton({ subsets: ['latin'], weight: '400', variable: '--poster' });
const round = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'], variable: '--round' });

export const metadata = {
  title: 'ZetoMate — The Creator Economy, Built Together.',
  description: 'From the creator behind MYTHRA: learn to tell better stories, make original content, grow your audience, collaborate and explore ways to earn. Start your free 7-day creator mission.',
  alternates: { canonical: '/v7' },
  robots: { index: false },
};

// ---- Content you'll want to fill in -------------------------------------------------------
// 10–15s muted MYTHRA clip (mp4, ~2–4 MB, 1280px wide). Put it in /public/media and set the path.
// While empty, the hero shows an animated ember/film backdrop instead.
const MYTHRA_LOOP = '';
const MYTHRA_POSTER = '';
// Official MYTHRA video URL for "Watch the film".
const MYTHRA_URL = 'https://www.youtube.com/results?search_query=MYTHRA+The+Mother%27s+Monster';
// Real creator stories. Each: { name, role, result, quote, photo }. While empty, honest invite cards show.
const STORIES = [];
// -------------------------------------------------------------------------------------------

const START = '/start';
const CTA = 'Start your free creator mission';
const WAITLIST = '#waitlist';

const Spark = ({ size = 18, className = '' }) => (
  <svg className={`spark ${className}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c.9 6.6 4.5 10.2 12 12-7.5 1.8-11.1 5.4-12 12-.9-6.6-4.5-10.2-12-12C7.5 10.2 11.1 6.6 12 0Z" fill="currentColor" />
  </svg>
);

const Mark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="18" cy="26" r="11" fill="#FF6B1A" /><circle cx="82" cy="74" r="11" fill="#19C98A" />
    <path d="M36 26 H76 L24 74 H64" fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Primary = ({ children = CTA, className = '' }) => (
  <Link href={START} className={`btn btn-ember ${className}`}>{children} <span aria-hidden="true">→</span></Link>
);

const Eyebrow = ({ n, children }) => (
  <span className="eyebrow"><Spark size={12} /> {n && <b>{n}</b>} {children}</span>
);

const METHOD = [
  ['01', 'Hook', 'Give them a reason to stop.', 'The opening moments make a promise. Make it interesting enough to earn the next few seconds.', 'hook'],
  ['02', 'Stakes', 'Give them something to care about.', 'A person. A problem. A question. Something meaningful that might be gained or lost.', 'stakes'],
  ['03', 'Twist', "Give them something they didn't expect.", 'A reveal, a discovery, a change in direction. Keep the story moving.', 'twist'],
  ['04', 'Loop', 'Give them a reason to continue.', 'An ending that invites the next episode, a conversation, a question or a new beginning.', 'loop'],
];

const DAYS = [
  'Find the story you want to tell.',
  'Understand your audience.',
  'Learn the Drama Method.',
  'Build your creative workflow.',
  'Produce your first piece of content.',
  'Prepare and publish it.',
  'Review what you learned and plan your next project.',
];

const SYSTEM = [
  ['Create', 'Make something that matters.', 'Bring your ideas to life with storytelling, AI visuals, video production, editing, music and practical creator workflows.'],
  ['Publish', 'Get your work out into the world.', 'Learn how to package content for YouTube, Facebook, TikTok, Instagram and other platforms.'],
  ['Collaborate', 'Find your missing piece.', 'Meet creators with complementary skills, shared interests and relevant audiences.'],
  ['Grow', 'Understand what people respond to.', 'Study hooks, retention, packaging, analytics, content experiments and audience development.'],
  ['Earn', 'Explore the business behind creativity.', 'Learn about platform monetization, freelance services, brand projects, licensing and creator businesses.'],
  ['Repeat', 'Build the ability to do it again.', "Don't depend on one lucky upload. Build your skills, improve your process and keep creating."],
];

const WORLDS = [
  { icon: '✦', title: 'I want to start.', body: 'Learn the basics of AI content creation, storytelling, video production and publishing.', cta: 'Start creating', href: START },
  { icon: '🎬', title: 'I want to make films.', body: 'Learn cinematic storytelling, AI filmmaking, characters, scenes, visuals, sound and production.', cta: 'Explore filmmaking', href: '/missions/ai-film' },
  { icon: '📈', title: 'I want to grow.', body: 'Understand audience behavior, content packaging, distribution, analytics and creator challenges.', cta: 'Build my audience', href: START },
  { icon: '🤝', title: 'I want to collaborate.', body: 'Find creators, develop joint projects and discover people who complement your skills.', href: WAITLIST, soon: true },
  { icon: '💼', title: 'I want to earn.', body: 'Explore content services, creator partnerships, client projects and ways to turn creative skills into a business.', href: WAITLIST, soon: true },
  { icon: '🎓', title: 'I want to teach or partner.', body: "Share your expertise, recommend Zahid's training or introduce your audience to the ZetoMate creator ecosystem.", href: WAITLIST, soon: true },
];

const BEYOND = [
  ['For schools & colleges', "Don't just teach students to use technology. Help them create with it.", 'Bring practical AI, digital storytelling and creative production programs to your institution. Structured learning. Real projects. Teacher support. Student portfolios.', 'Bring ZetoMate to your campus'],
  ['For brands & businesses', 'Your brand has a story. Make it worth watching.', 'Work with ZetoMate Studio to explore cinematic brand films, original content formats, AI-assisted production and creator-led campaigns.', 'Build with ZetoMate Studio'],
  ['For creator communities & media networks', '', 'Build new collaborations, share knowledge and explore distribution or educational partnerships.', 'Partner with ZetoMate'],
];

const FAQS = [
  ['Do I need a powerful PC or expensive camera?', 'No. You can start the 7-day mission with a phone and free tools. Some advanced projects work better on a laptop, and we say so up front.'],
  ['Do I need any AI experience?', 'No. Day 1 starts with your story, not with software. Tools come in when you need them, one step at a time.'],
  ['Is it available in Urdu or Hindi?', 'Starter lessons use simple, clear English. Tell us your preferred language when you sign up; it decides what we translate first.'],
  ['How is this different from free YouTube tutorials?', 'Tutorials show you buttons. ZetoMate gives you a story method, a mission with a finish line, and (soon) people to build with. You end the week with something you made.'],
  ['What is free and what costs money?', 'The 7-day creator mission, the starter kit and the Drama Method introduction are free. Some advanced programs and third-party AI tools may cost extra; we always show the price before you choose.'],
  ['Will my video go viral or make money?', "Nobody can honestly promise that. We help you make stronger storytelling decisions and learn from real experiments. Results depend on your work and your audience."],
];

export default function V7() {
  return (
    <main className={`v7 ${poster.variable} ${round.variable}`}>
      <Motion />
      <a href="#content" className="skip">Skip to content</a>

      {/* NAV */}
      <header className="v7-nav">
        <Link href="/v7" className="v7-brand"><Mark /> ZETOMATE</Link>
        <nav aria-label="Main" className="v7-links">
          <a href="#method">The Method</a><a href="#how">How It Works</a><a href="#network">Creator Network</a><a href="#story">Our Story</a><a href="#partners">For Partners</a>
        </nav>
        <Link href={START} className="btn btn-ember btn-sm"><span className="hide-sm">Start your journey</span><span className="show-sm">Start free</span></Link>
      </header>

      {/* 01 HERO */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-media" aria-hidden="true">
          {MYTHRA_LOOP ? (
            <video autoPlay muted loop playsInline preload="metadata" poster={MYTHRA_POSTER || undefined}><source src={MYTHRA_LOOP} type="video/mp4" /></video>
          ) : (
            <div className="embers">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div>
          )}
          <div className="hero-shade" />
          <div className="grain" />
        </div>
        <div className="wrap hero-in" id="content">
          <span className="eyebrow light"><Spark size={12} /> From the creator behind MYTHRA: The Mother's Monster</span>
          <h1 id="hero-h" className="poster hero-h">
            <span className="line">No Hollywood studio.</span>
            <span className="line">No million-dollar budget.</span>
            <span className="line ember-text">100 million+ views.</span>
          </h1>
          <p className="hero-sub">One creator. One impossible story. A global audience.</p>
          <div className="hero-ctas">
            <Primary />
            <a href="#how" className="btn btn-ghost">See how it works</a>
          </div>
          <p className="micro">Free 7-day mission. Email only. Takes 2 minutes.</p>
        </div>
      </section>

      {/* Proof strip */}
      <section className="proof-strip" aria-label="Proof">
        <div className="wrap proof-grid">
          <div><b><span data-count="100">100</span>M+</b><span>Official MYTHRA views</span></div>
          <div><b><span data-count="3">3</span> Gold · <span data-count="6">6</span> Silver</b><span>YouTube Creator Awards</span></div>
          <div><b><span data-count="45">45</span>+</b><span>Media outlets</span></div>
          <div><b>Drama Method™</b><span>Zahid Iqbal's</span></div>
        </div>
      </section>

      {/* Hero continued: the promise */}
      <section className="sec dark-2">
        <div className="wrap narrow stack-l" data-reveal>
          <p className="big">MYTHRA showed what could happen when storytelling, AI and distribution come together.</p>
          <p className="big strong">Now imagine what a million creators could build with the right skills, tools and people behind them.</p>
          <p className="poster meet">Meet ZetoMate.</p>
          <p>A place to learn how to tell better stories, turn ideas into original content, grow your audience, collaborate with other creators and explore ways to earn from your work.</p>
          <p className="strong">Your story starts here.</p>
          <p className="chant">Create. Collaborate. Grow. Earn.</p>
        </div>
      </section>

      {/* 02 INTERRUPT */}
      <section className="sec dark-2 interrupt" aria-labelledby="int-h">
        <div className="wrap">
          <h2 id="int-h" className="poster h2" data-reveal>The world doesn't need another tutorial.<br /><span className="ember-text">It needs what you haven't made yet.</span></h2>
          <div className="split">
            <div className="stack-l" data-reveal>
              <p>Your phone is full of ideas.</p>
              <p>Your saved folder is full of tutorials.</p>
              <p>You know AI can write, design, generate videos and make music.</p>
              <p>But there's still a gap between knowing what's possible and actually making something people want to watch.</p>
            </div>
            <ul className="unfinished" data-reveal>
              <li>A story that never gets finished.</li>
              <li>A channel that never gets started.</li>
              <li>A brilliant creator who never finds the right people.</li>
              <li>A skill that never becomes an opportunity.</li>
            </ul>
          </div>
          <div className="narrow stack-l center-t" data-reveal>
            <p className="strong">Another tool won't solve all of that.</p>
            <p>You need a reason to create, a way to finish, and somewhere to find people who can help you move forward.</p>
            <p className="poster h3 ember-text">That's why we built ZetoMate.</p>
          </div>
        </div>
      </section>

      {/* Dawn: dark to warm */}
      <div className="dawn" aria-hidden="true" />

      {/* 03 MISSION */}
      <section className="sec warm" aria-labelledby="mis-h">
        <div className="wrap">
          <Eyebrow n="03">The mission</Eyebrow>
          <h2 id="mis-h" className="poster h2" data-reveal>One million creators.<br />One million original voices.<br /><span className="ember-text">Infinite possibilities.</span></h2>
          <div className="split">
            <div className="stack-l" data-reveal>
              <p>The internet gave everyone a place to publish.</p>
              <p>AI is giving more people the ability to produce.</p>
              <p>But the next opportunity isn't simply to make more content.</p>
              <p className="strong">It's to help more people tell stories worth watching, remembering and sharing.</p>
            </div>
            <div className="faces" data-reveal>
              {['A student with a phone.', 'A mother with a story.', 'An editor with a skill.', 'A filmmaker without a studio.', 'A teacher who wants to reach beyond the classroom.', 'A business with something important to say.'].map((t, i) => (
                <span key={t} className="chip" style={{ '--d': i }}>{t}</span>
              ))}
            </div>
          </div>
          <div className="meter card" data-reveal>
            <div>
              <p>We believe more of them deserve the chance to create.</p>
              <p className="strong">Our mission is to help 1 million people learn to turn ideas into stories, build audiences and discover opportunities in the creator economy.</p>
              <p>Not a million copies of someone else's success. <b>A million people finding their own way to create.</b></p>
            </div>
            <div className="meter-num">
              <span className="eyebrow">The goal</span>
              <b className="poster"><span data-count="1000000">1,000,000</span></b>
              <span>creators</span>
              <Primary>Be one of the million</Primary>
            </div>
          </div>
        </div>
      </section>

      {/* 04 METHOD (storyboard) */}
      <section className="sec warm-2" id="method" aria-labelledby="met-h">
        <div className="wrap">
          <Eyebrow n="04">The method</Eyebrow>
          <h2 id="met-h" className="poster h2" data-reveal>AI can make the video.<br /><span className="ember-text">But what makes someone watch?</span></h2>
          <div className="narrow stack-l" data-reveal>
            <p>Before the visuals, the music, the transitions and the upload button, there's a more important question:</p>
            <p className="poster h3">Why should anyone care?</p>
            <p>That's the question behind Zahid Iqbal's Drama Method™. A storytelling framework developed through years of creating, testing, publishing and studying what holds an audience's attention.</p>
          </div>
          <ol className="storyboard" aria-label="The Drama Method in four moves">
            {METHOD.map(([n, name, head, body, k], i) => (
              <li key={n} className="frame" data-reveal style={{ '--d': i }}>
                <div className={`panel panel-${k}`} aria-hidden="true"><span className="frame-no">SC {n}</span></div>
                <span className="eyebrow">{n} · {name}</span>
                <h3>{head}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
          <div className="narrow stack-l center-t" data-reveal>
            <p className="poster h3">Four moves. A thousand ways to tell a story.</p>
            <p>Films. Educational videos. YouTube channels. Reels. Documentaries. Product stories. Brand campaigns.</p>
            <p>The format changes. <b>Human curiosity remains.</b></p>
            <p className="fine">Not a guaranteed viral formula. A practical way to make stronger storytelling decisions.</p>
          </div>
        </div>
      </section>

      {/* 08 FIRST STEP (moved up) */}
      <section className="sec warm" id="how" aria-labelledby="first-h">
        <div className="wrap">
          <Eyebrow n="05">Your first step</Eyebrow>
          <h2 id="first-h" className="poster h2" data-reveal>You don't need to know everything.<br /><span className="ember-text">You just need to make the first thing.</span></h2>
          <p className="lead" data-reveal>That's why your ZetoMate journey begins with a practical mission.</p>
          <div className="mission card" data-reveal>
            <div className="mission-head">
              <span className="eyebrow">Free · 7 days</span>
              <h3 className="poster h3">Your first 7 days as a creator</h3>
            </div>
            <ol className="days">
              {DAYS.map((d, i) => (
                <li key={d} data-reveal style={{ '--d': i }}><span className="day">Day {i + 1}</span><span>{d}</span></li>
              ))}
            </ol>
            <div className="mission-foot">
              <p>Your goal isn't to become famous in a week.</p>
              <p className="strong">Your goal is to stop wondering whether you can create — and start discovering what you're capable of making.</p>
              <Primary />
              <p className="micro dark-t">Free 7-day mission. Email only. Takes 2 minutes.</p>
            </div>
          </div>
          <div className="price-strip" data-reveal>
            <div><b>Free</b><span>7-day creator mission · Starter kit · Drama Method intro</span></div>
            <div><b>May cost extra</b><span>Advanced programs · Some third-party AI tools. Prices are always shown before you choose.</span></div>
          </div>
        </div>
      </section>

      {/* 05 SYSTEM */}
      <section className="sec warm-2" aria-labelledby="sys-h">
        <div className="wrap">
          <Eyebrow n="06">The creator system</Eyebrow>
          <h2 id="sys-h" className="poster h2" data-reveal>Making it is only half the story.</h2>
          <div className="split">
            <ul className="unfinished warm-list" data-reveal>
              <li>A beautiful film nobody discovers.</li>
              <li>A video people watch but don't remember.</li>
              <li>A creator with skills but no collaborators.</li>
              <li>An audience with no clear business behind it.</li>
            </ul>
            <div className="stack-l" data-reveal>
              <p className="strong">The problem isn't always creation. Sometimes it's everything that comes after.</p>
              <p>That's where ZetoMate connects the pieces.</p>
            </div>
          </div>
          <div className="sys-grid">
            {SYSTEM.map(([name, head, body], i) => (
              <article key={name} className="card sys" data-reveal style={{ '--d': i }}>
                <span className="sys-n">0{i + 1}</span>
                <h3 className="poster">{name}</h3>
                <p className="strong">{head}</p>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <p className="chant dark-t center-t" data-reveal>Make something. Get it seen. Make it pay.</p>
        </div>
      </section>

      {/* 06 NETWORK */}
      <section className="sec mint" id="network" aria-labelledby="net-h">
        <div className="wrap">
          <Eyebrow n="07">The network <span className="soon">Coming soon</span></Eyebrow>
          <h2 id="net-h" className="poster h2" data-reveal>Your next big breakthrough<br /><span className="mint-text">might be another creator.</span></h2>
          <div className="pairs" data-reveal>
            {[['You know how to edit.', 'Someone else knows how to tell a story.'], ['You have an idea.', 'Someone else knows how to produce it.'], ['You have an audience.', 'Another creator has something valuable your audience would enjoy.']].map(([a, b], i) => (
              <div key={a} className="pair" style={{ '--d': i }}><span>{a}</span><span className="plus" aria-hidden="true">+</span><span>{b}</span></div>
            ))}
          </div>
          <div className="split">
            <div className="stack-l" data-reveal>
              <p className="strong">Imagine what happens when the right people find each other.</p>
              <p>ZetoMate is building a place where creators can share experience, discover projects, find collaborators and build original work together.</p>
              <p>Not just followers. Not just another group chat.</p>
              <p className="strong">People who help each other create something better.</p>
            </div>
            <div className="card stack" data-reveal>
              <h3 className="poster h3">Your people are part of the opportunity.</h3>
              <ul className="ticks">
                <li>Find your collaborators.</li><li>Share your work.</li><li>Learn from real experiments.</li><li>Discover creator projects.</li><li>Build together.</li>
              </ul>
              <a href={WAITLIST} className="btn btn-quiet">Join the network waitlist <span aria-hidden="true">→</span></a>
              <p className="fine">Creator collaborations depend on mutual agreement, relevant audiences and the quality of the work. Results aren't guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 PROOF */}
      <section className="sec film" id="story" aria-labelledby="proof-h">
        <div className="wrap">
          <Eyebrow n="08">The proof</Eyebrow>
          <h2 id="proof-h" className="poster h2" data-reveal>We didn't start by selling the method.<br /><span className="ember-text">We started making stories.</span></h2>
          <div className="mythra" data-reveal>
            <div className="mythra-art" aria-hidden="true"><div className="embers small">{Array.from({ length: 10 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div><span className="poster">MYTHRA</span><small>The Mother's Monster</small></div>
            <div className="stack-l">
              <h3 className="poster h3">MYTHRA — The Mother's Monster</h3>
              <p className="big">A woman gives birth to a dragon.</p>
              <p>A story about love, fear and a bond the world refuses to understand.</p>
              <p>Created with AI, written and directed by Zahid Iqbal, the film went on to reach an extraordinary global audience.</p>
              <p className="poster h3 ember-text">100M+ official views.</p>
              <p>The story spread across languages, communities and media coverage internationally. It also reached the historic Eden Théâtre in La Ciotat, France.</p>
              <p>But the biggest lesson wasn't that AI could make a film.</p>
              <p className="strong">It was that a story made without a conventional studio could still find people around the world.</p>
              <div className="row-btns">
                <a href={MYTHRA_URL} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">▶ Watch the film</a>
              </div>
            </div>
          </div>
          <div className="awards" data-reveal>
            <div>
              <span className="eyebrow light">And the experiments didn't start there.</span>
              <p className="poster award-n"><span className="gold-c"><span data-count="3">3</span> Gold.</span> <span className="silver-c"><span data-count="6">6</span> Silver.</span></p>
              <p>YouTube Creator Awards earned during years of building channels, testing formats and learning what audiences respond to.</p>
            </div>
            <div>
              <span className="eyebrow light">Real creators. Real projects.</span>
              <p>From channels reaching their first 100,000 subscribers to films finding millions of views, the ZetoMate learning approach is informed by practical creator experiences.</p>
              <p>We study what worked. We study what didn't. Then we share the methods, processes and lessons.</p>
              <p className="strong">Not to promise you'll get the same result. To help you build your own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator stories */}
      <section className="sec warm" aria-labelledby="stories-h">
        <div className="wrap">
          <Eyebrow>Creator stories</Eyebrow>
          <h2 id="stories-h" className="poster h2" data-reveal>The next story here<br /><span className="ember-text">could be yours.</span></h2>
          <div className="stories">
            {STORIES.length ? STORIES.map((s, i) => (
              <figure key={s.name} className="card story" data-reveal style={{ '--d': i }}>
                {s.photo && <img src={s.photo} alt="" width="64" height="64" />}
                <blockquote>“{s.quote}”</blockquote>
                <figcaption><b>{s.name}</b> · {s.role}<span className="result">{s.result}</span></figcaption>
              </figure>
            )) : ['Finish Day 7.', 'Publish your first piece.', 'Share what you learned.'].map((t, i) => (
              <figure key={t} className="card story empty" data-reveal style={{ '--d': i }}>
                <span className="avatar" aria-hidden="true"><Spark size={22} /></span>
                <blockquote>{t}</blockquote>
                <figcaption>The first creator stories from the 7-day mission will be featured here.</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 09 CHOOSE YOUR WORLD */}
      <section className="sec warm-2" aria-labelledby="world-h">
        <div className="wrap">
          <Eyebrow n="09">Choose your world</Eyebrow>
          <h2 id="world-h" className="poster h2" data-reveal>There's no one way to be a creator.<br /><span className="ember-text">Find yours.</span></h2>
          <div data-reveal><WorldPicker worlds={WORLDS} /></div>
          <div className="not-sure" data-reveal>
            <p><b>Not sure where to start?</b> Tell us what you want to achieve. We'll help you find your next step.</p>
            <Primary />
          </div>
        </div>
      </section>

      {/* 10 + 11 PARTNERS (compact) */}
      <section className="sec warm" id="partners" aria-labelledby="part-h">
        <div className="wrap">
          <Eyebrow n="10">For partners <span className="soon">Coming soon</span></Eyebrow>
          <h2 id="part-h" className="poster h2" data-reveal>You already create content.<br /><span className="ember-text">Now let it open more doors.</span></h2>
          <div className="split">
            <div className="stack-l" data-reveal>
              <p>You don't need to build your own course. You don't need to become a teacher. You don't need to manage student payments, lessons and technical systems yourself.</p>
              <p className="strong">If you have an audience and something valuable to share, you can become part of the ZetoMate creator network.</p>
              <p>And if you have expertise you'd like to teach, you can explore contributing your own lessons, workshops or projects.</p>
            </div>
            <div className="card stack" data-reveal>
              <ul className="ticks">
                <li>Recommend Zahid's training.</li>
                <li>Bring your audience into practical creator challenges.</li>
                <li>Get your own branded ZetoMate page.</li>
                <li>Access approved storytelling and distribution playbooks.</li>
                <li>Join eligible creator strategy sessions.</li>
                <li>Earn commissions when your qualifying referrals purchase.</li>
              </ul>
              <p className="chant small dark-t">Your audience. Your voice. A bigger creator ecosystem.</p>
              <a href={WAITLIST} className="btn btn-quiet">Join the partner waitlist <span aria-hidden="true">→</span></a>
              <p className="fine">Affiliate earnings depend on qualifying sales. Teaching is optional.</p>
            </div>
          </div>
          <h3 className="poster h3 beyond-h" data-reveal>Great stories can begin anywhere.</h3>
          <div className="beyond">
            {BEYOND.map(([who, head, body, cta], i) => (
              <article key={who} className="card" data-reveal style={{ '--d': i }}>
                <span className="eyebrow">{who}</span>
                {head && <h4>{head}</h4>}
                <p>{body}</p>
                <a href={WAITLIST} className="link">{cta} <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12 HUMAN */}
      <section className="sec warm-2" aria-labelledby="zahid-h">
        <div className="wrap split human">
          <div className="portrait" aria-hidden="true"><span className="poster">ZI</span><small>Photo of Zahid creating</small></div>
          <div className="stack-l" data-reveal>
            <Eyebrow n="11">The human behind the mission</Eyebrow>
            <h2 id="zahid-h" className="poster h2">One creator started experimenting.<br /><span className="ember-text">The mission got bigger.</span></h2>
            <p>For years, Zahid Iqbal built channels, tested ideas, studied storytelling and learned what makes people stop scrolling.</p>
            <p>Some experiments worked. Others didn't.</p>
            <p>Then came MYTHRA — a story that reached a global audience and brought new attention to what independent creators could achieve.</p>
            <p>Now he's bringing those lessons into classrooms, creator programs, workshops and the ZetoMate ecosystem.</p>
            <p className="strong">Not to create a million Zahid Iqbals.<br />To help a million people discover what they can create themselves.</p>
          </div>
        </div>
      </section>

      {/* 13 MANIFESTO */}
      <section className="sec dark-2 manifesto" aria-labelledby="man-h">
        <div className="wrap narrow">
          <h2 id="man-h" className="poster h2" data-reveal>We're not building another place to watch lessons.</h2>
          <p className="big ember-text" data-reveal>We're building a place to use them.</p>
          <ul className="where" data-reveal>
            <li>Where a student can finish a film.</li>
            <li>Where an editor can find a collaborator.</li>
            <li>Where a storyteller can discover an audience.</li>
            <li>Where a creator can turn experience into an opportunity.</li>
            <li>Where a school can help students build practical digital skills.</li>
            <li>Where someone starting with a phone can take their first step into the creator economy.</li>
          </ul>
          <div className="stack-l" data-reveal>
            <p>We don't promise every video will go viral. We don't promise every creator will make money.</p>
            <p className="strong">We believe everyone deserves a meaningful chance to learn, make something original and improve through experience.</p>
            <p className="poster h3">That's the work. That's the mission. <span className="ember-text">That's ZetoMate.</span></p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec warm" aria-labelledby="faq-h">
        <div className="wrap narrow">
          <Eyebrow>Questions</Eyebrow>
          <h2 id="faq-h" className="poster h2" data-reveal>Before you start.</h2>
          <div className="faq" data-reveal>
            {FAQS.map(([q, a]) => (
              <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section className="sec warm-2" id="waitlist" aria-labelledby="wait-h">
        <div className="wrap narrow">
          <div className="card wait" data-reveal>
            <span className="eyebrow">Coming soon</span>
            <h2 id="wait-h" className="poster h3">Creator Network, partnerships, schools and studio.</h2>
            <p>These are being built now. Leave your email and you'll hear first when they open. Want to start creating today? The free 7-day mission is open.</p>
            <LeadForm source="v7-waitlist" button="Join the waitlist" />
          </div>
        </div>
      </section>

      {/* 14 FINAL */}
      <section className="final" aria-labelledby="fin-h">
        <div className="hero-media" aria-hidden="true"><div className="embers">{Array.from({ length: 14 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</div><div className="grain" /></div>
        <div className="wrap narrow center-t final-in">
          <h2 id="fin-h" className="poster h2" data-reveal>The world has already seen what one story can do.<br /><span className="ember-text">Now it's time to see what you can create.</span></h2>
          <ul className="where light" data-reveal>
            <li>Somewhere, there's a story only you can tell.</li>
            <li>A project you've been postponing.</li>
            <li>A skill you haven't discovered.</li>
            <li>A person you haven't met.</li>
            <li>An opportunity you haven't explored.</li>
          </ul>
          <p data-reveal>You don't need to know how the whole journey will unfold. <b>You need somewhere to begin.</b></p>
          <p className="poster h3" data-reveal>One million creators.<br />A world of stories waiting to be made.</p>
          <p className="big strong" data-reveal>Let's make yours one of them.</p>
          <div data-reveal><Primary className="btn-xl" /></div>
          <p className="micro">Free to explore. Your next move starts here.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="v7-foot">
        <div className="wrap foot-grid">
          <div className="stack">
            <span className="v7-brand"><Mark /> ZETOMATE</span>
            <p className="chant small">Create. Collaborate. Grow. Earn.</p>
            <p>Building the next generation of storytellers, creators and creative businesses.</p>
          </div>
          <nav aria-label="Explore"><b>Explore</b><a href="#method">Drama Method</a><Link href={START}>Creator Academy</Link><a href="#network">Creator Network</a><Link href="/missions/ai-film">Creator Challenges</Link><a href="#partners">Creator Partners</a></nav>
          <nav aria-label="Build with us"><b>Build With Us</b><a href="#partners">Schools &amp; Colleges</a><a href="#partners">Brands &amp; Studios</a><a href="#partners">Media &amp; Distribution Partners</a></nav>
          <nav aria-label="Our world"><b>Our World</b><a href="#story">Zahid Iqbal</a><a href="#story">MYTHRA</a><a href="#story">The Mother's Monster</a></nav>
          <nav aria-label="Company"><b>Company</b><a href="#story">About</a><a href={WAITLIST}>Contact</a><span className="soon-link">Terms</span><span className="soon-link">Privacy</span><span className="soon-link">Refund Policy</span></nav>
        </div>
        <div className="wrap foot-end"><b>Your story starts here.</b><span>© 2026 ZetoMate. All rights reserved.</span></div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="mobile-cta"><Primary /></div>
    </main>
  );
}
