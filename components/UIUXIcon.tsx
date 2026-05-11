"use client";

export default function UIUXIcon({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="UI/UX Design Icon"
    >
      {/* Canvas / artboard */}
      <rect x="14" y="18" width="72" height="84" rx="6" fill="white" stroke="#e51a1a" strokeWidth="2.2"
        style={{ strokeDasharray: 320, strokeDashoffset: 320, animation: 'draw-path 1.1s ease 0.1s forwards' }} />

      {/* Canvas inner area */}
      <rect x="20" y="28" width="60" height="50" rx="3" fill="#fff1f1" />

      {/* Animated wireframe layout inside canvas */}
      {/* Header bar */}
      <rect x="24" y="32" width="52" height="8" rx="2" fill="#e51a1a" opacity="0"
        style={{ animation: 'fade-in 0.4s ease 0.5s forwards' }} />

      {/* Left column block */}
      <rect x="24" y="44" width="22" height="30" rx="2" fill="#ffc7c7" opacity="0"
        style={{ animation: 'fade-in 0.4s ease 0.7s forwards' }} />

      {/* Right column lines */}
      <line x1="52" y1="48" x2="72" y2="48" stroke="#e51a1a" strokeWidth="2" strokeLinecap="round"
        style={{ strokeDasharray: 22, strokeDashoffset: 22, animation: 'draw-path 0.4s ease 0.9s forwards' }} />
      <line x1="52" y1="54" x2="68" y2="54" stroke="#e51a1a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"
        style={{ strokeDasharray: 18, strokeDashoffset: 18, animation: 'draw-path 0.4s ease 1.0s forwards' }} />
      <line x1="52" y1="60" x2="70" y2="60" stroke="#e51a1a" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"
        style={{ strokeDasharray: 20, strokeDashoffset: 20, animation: 'draw-path 0.4s ease 1.1s forwards' }} />
      <line x1="52" y1="66" x2="64" y2="66" stroke="#e51a1a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"
        style={{ strokeDasharray: 14, strokeDashoffset: 14, animation: 'draw-path 0.4s ease 1.2s forwards' }} />

      {/* Footer bar */}
      <rect x="24" y="78" width="52" height="6" rx="2" fill="#ffc7c7" opacity="0"
        style={{ animation: 'fade-in 0.4s ease 1.3s forwards' }} />

      {/* Colour palette circles at bottom of canvas */}
      {["#e51a1a", "#ff6b6b", "#ffc7c7", "#111111", "#ffffff"].map((color, i) => (
        <circle key={color} cx={24 + i * 12} cy={92} r="4.5"
          fill={color} stroke={color === "#ffffff" ? "#e51a1a" : "none"} strokeWidth="1"
          opacity="0"
          style={{ animation: `fade-in 0.3s ease ${1.4 + i * 0.1}s forwards` }}
        />
      ))}

      {/* Pen / cursor tool — animated drawing motion */}
      <g style={{ animation: 'draw-cursor 3s ease-in-out 1.8s infinite' }}>
        {/* Pen tool body */}
        <g transform="translate(72, 28)">
          {/* Pen nib */}
          <path d="M0 22 L6 10 L12 22 L6 26 Z" fill="#e51a1a"
            style={{ animation: 'fade-in 0.3s ease 0.4s both' }} />
          {/* Pen barrel */}
          <rect x="3" y="2" width="6" height="10" rx="2" fill="#c11212"
            style={{ animation: 'fade-in 0.3s ease 0.4s both' }} />
          {/* Pen tip dot */}
          <circle cx="6" cy="27" r="1.5" fill="white"
            style={{ animation: 'fade-in 0.3s ease 0.4s both' }} />

          {/* Ripple from pen tip */}
          <circle cx="6" cy="27" r="2" stroke="#e51a1a" fill="none" opacity="0">
            <animate attributeName="r" values="2;12" dur="1.5s" repeatCount="indefinite" begin="2s" />
            <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" begin="2s" />
          </circle>
        </g>
      </g>

      {/* Bezier curve being drawn — animated path */}
      <path d="M30 72 Q50 50 70 65" stroke="#e51a1a" strokeWidth="2" fill="none" strokeLinecap="round"
        strokeDasharray="60" strokeDashoffset="60"
        style={{ animation: 'draw-path 1s ease 1.6s forwards' }} />

      {/* Anchor points on bezier */}
      <circle cx="30" cy="72" r="3" fill="white" stroke="#e51a1a" strokeWidth="1.5" opacity="0"
        style={{ animation: 'fade-in 0.3s ease 1.6s forwards' }} />
      <circle cx="70" cy="65" r="3" fill="white" stroke="#e51a1a" strokeWidth="1.5" opacity="0"
        style={{ animation: 'fade-in 0.3s ease 2.5s forwards' }} />
      {/* Control handles */}
      <line x1="30" y1="72" x2="38" y2="60" stroke="#e51a1a" strokeWidth="1" strokeDasharray="2 2" opacity="0"
        style={{ animation: 'fade-in 0.3s ease 1.7s forwards' }} />
      <circle cx="38" cy="60" r="2" fill="#e51a1a" opacity="0"
        style={{ animation: 'fade-in 0.3s ease 1.7s forwards' }} />
      <line x1="70" y1="65" x2="60" y2="52" stroke="#e51a1a" strokeWidth="1" strokeDasharray="2 2" opacity="0"
        style={{ animation: 'fade-in 0.3s ease 2.5s forwards' }} />
      <circle cx="60" cy="52" r="2" fill="#e51a1a" opacity="0"
        style={{ animation: 'fade-in 0.3s ease 2.5s forwards' }} />

      {/* Layers panel on right */}
      <rect x="90" y="30" width="18" height="60" rx="4" fill="#fff1f1" stroke="#e51a1a" strokeWidth="1.5" opacity="0"
        style={{ animation: 'fade-in 0.4s ease 0.6s forwards' }} />
      {[0,1,2,3,4].map((i) => (
        <rect key={i} x="93" y={36 + i * 10} width="12" height="5" rx="1.5"
          fill={i === 1 ? "#e51a1a" : "#ffc7c7"} opacity="0"
          style={{ animation: `fade-in 0.3s ease ${0.8 + i * 0.1}s forwards` }}
        />
      ))}
    </svg>
  );
}
