export default function LogoMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="0"  y="0"  width="10" height="10" fill="currentColor" />
      <rect x="14" y="0"  width="10" height="10" fill="currentColor" />
      <rect x="0"  y="14" width="10" height="10" fill="#c1440e" />
      <rect x="14" y="14" width="10" height="10" fill="currentColor" />
    </svg>
  );
}
