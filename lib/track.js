// Funnel event hook. Swap the body for your analytics provider (GA4, PostHog, Vercel Analytics).
export function track(event, props = {}) {
  if (typeof window === 'undefined') return;
  (window.dataLayer = window.dataLayer || []).push({ event, ...props });
}
