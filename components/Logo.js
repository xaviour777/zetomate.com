export default function Logo({ dark = false }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <rect x="0.5" y="0.5" width="27" height="27" rx="7" fill={dark ? '#F6F5F0' : '#121212'} />
      <path d="M8 8.5h12L8 19.5h12" stroke="#B89A61" strokeWidth="2.4" fill="none" strokeLinejoin="round" />
    </svg>
  );
}
