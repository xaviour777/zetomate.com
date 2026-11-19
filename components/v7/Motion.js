'use client';
import { useEffect } from 'react';

// Scroll reveals ([data-reveal]) and ticking counters ([data-count]) for the V7 page.
// Content is fully visible without JS; motion only switches on once this runs.
export default function Motion() {
  useEffect(() => {
    const root = document.querySelector('.v7');
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const counters = root.querySelectorAll('[data-count]');
    const fmt = (n) => Math.round(n).toLocaleString('en-US');

    // Sticky mobile CTA appears once the hero's own button has scrolled away.
    const onScroll = () => root.classList.toggle('past-hero', window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const off = () => window.removeEventListener('scroll', onScroll);

    if (reduce || !('IntersectionObserver' in window)) return off;
    root.classList.add('motion');

    const tick = (el) => {
      const to = Number(el.dataset.count);
      const t0 = performance.now();
      const dur = 1600;
      const step = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = fmt(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('in');
        if (e.target.dataset.count) tick(e.target);
        io.unobserve(e.target);
      }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });

    counters.forEach((el) => { el.textContent = '0'; io.observe(el); });
    root.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    return () => { io.disconnect(); off(); };
  }, []);
  return null;
}
