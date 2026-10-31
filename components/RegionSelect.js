'use client';
import { useRouter } from 'next/navigation';
import { REGIONS, REGION_COOKIE } from '@/lib/regions';
import { track } from '@/lib/track';

export default function RegionSelect({ value }) {
  const router = useRouter();
  function change(e) {
    const v = e.target.value;
    document.cookie = `${REGION_COOKIE}=${v}; path=/; max-age=${60 * 60 * 24 * 180}; samesite=lax`;
    track('region_change', { region: v });
    router.refresh();
  }
  return (
    <label className="k muted" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span>Region</span>
      <select className="pill" aria-label="Country and currency" value={value} onChange={change}>
        {Object.entries(REGIONS).map(([id, r]) => <option key={id} value={id}>{r.label}</option>)}
      </select>
    </label>
  );
}
