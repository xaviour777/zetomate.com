'use client';
import { useEffect } from 'react';

// Saves campaign parameters so lead submissions can be attributed.
export default function UtmCapture() {
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign']) {
      const v = sp.get(k);
      if (v) document.cookie = `zm_${k}=${encodeURIComponent(v.slice(0, 100))}; path=/; max-age=${60 * 60 * 24 * 30}; samesite=lax`;
    }
  }, []);
  return null;
}
