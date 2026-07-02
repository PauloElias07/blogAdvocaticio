export default function Scales({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="200" y1="30" x2="200" y2="360" stroke="currentColor" strokeWidth="2" />
      <line x1="60" y1="90" x2="340" y2="90" stroke="currentColor" strokeWidth="2" />
      <circle cx="200" cy="90" r="8" fill="currentColor" />
      <line x1="60" y1="90" x2="60" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <line x1="340" y1="90" x2="340" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 200 Q60 250 100 200" stroke="currentColor" strokeWidth="1.5" />
      <path d="M300 200 Q340 250 380 200" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="204" r="3" fill="currentColor" />
      <circle cx="340" cy="204" r="3" fill="currentColor" />
      <path d="M140 360 L260 360 L230 380 L170 380 Z" fill="currentColor" />
      <rect x="180" y="20" width="40" height="14" rx="2" fill="currentColor" />
    </svg>
  );
}
