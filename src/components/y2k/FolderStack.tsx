export function FolderStack({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <path
        d="M20 55 L20 140 Q20 148 28 148 L172 148 Q180 148 180 140 L180 55 Z"
        fill="#c49a3a"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path
        d="M20 55 L20 48 Q20 40 28 40 L72 40 L82 55 Z"
        fill="#e8c060"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path
        d="M30 70 L30 138 L170 138 L170 70 Z"
        fill="#d4a84a"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M35 45 L35 38 Q35 32 42 32 L168 32 Q175 32 175 40 L175 52 L35 52 Z"
        fill="#e8c878"
        stroke="#1a1a1a"
        strokeWidth="2"
        transform="translate(0,-18)"
      />
      <text x="100" y="105" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1a1a1a">
        my stuff
      </text>
    </svg>
  )
}
