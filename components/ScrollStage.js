'use client';
import { useEffect, useRef } from 'react';

const WORD = 'zetomate'.split('');

// Fixed background stage. Scroll progress (--p, 0→1 over the first ~2.2 screens) reveals the Z,
// then the two mates, then the wordmark letter by letter, then the tagline. Never blocks scrolling.
export default function ScrollStage() {
  const ref = useRef(null);

  useEffect(() => {
    const el = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { el.style.setProperty('--p', 1); el.style.setProperty('--q', 0); return; }
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / (vh * 2.2)));
      const q = Math.min(1, Math.max(0, (window.scrollY - vh * 2.4) / vh));
      el.style.setProperty('--p', p.toFixed(4));
      el.style.setProperty('--q', q.toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={ref} className="stage" aria-hidden="true">
      <div className="stage-glow" />
      <div className="stage-inner">
        <svg className="stage-mark" viewBox="0 0 100 100">
          <path d="M36 26 H76 L24 74 H64" className="z-ghost" />
          <path d="M36 26 H76 L24 74 H64" pathLength="1" className="z-draw" />
          <circle cx="18" cy="26" r="11" className="mate mate-a" />
          <circle cx="82" cy="74" r="11" className="mate mate-b" />
        </svg>
        <div className="stage-word">
          {WORD.map((c, i) => <span key={i} style={{ '--i': i }}>{c}</span>)}
        </div>
        <div className="stage-tag">
          <span>From A to Z.</span> <span className="serif">You've got a mate.</span>
          <small className="k">Idea to income</small>
        </div>
      </div>
    </div>
  );
}
