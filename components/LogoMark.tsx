export default function LogoMark({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className}>
      {/* Connecting lines */}
      <line x1="14" y1="4.5" x2="4.5" y2="21.5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="4.5" x2="23.5" y2="21.5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4.5" y1="21.5" x2="23.5" y2="21.5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
      {/* Inner lines for depth */}
      <line x1="14" y1="4.5" x2="14" y2="21.5" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.35" />
      <line x1="4.5" y1="21.5" x2="23.5" y2="21.5" strokeWidth="0" />
      {/* Nodes */}
      <circle cx="14" cy="4.5" r="2.5" fill="#3b82f6" />
      <circle cx="4.5" cy="21.5" r="2.5" fill="#3b82f6" />
      <circle cx="23.5" cy="21.5" r="2.5" fill="#3b82f6" />
      {/* Center node — smaller, slightly lighter */}
      <circle cx="14" cy="14" r="1.5" fill="#3b82f6" fillOpacity="0.5" />
    </svg>
  );
}
