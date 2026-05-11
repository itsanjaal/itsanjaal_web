"use client";

export default function MobileAppIcon({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mobile App Development Icon"
    >
      {/* Phone body */}
      <rect
        x="32" y="8" width="56" height="100" rx="10"
        fill="white" stroke="#e51a1a" strokeWidth="2.5"
        style={{ strokeDasharray: 320, strokeDashoffset: 320, animation: 'draw-path 1.2s ease 0.1s forwards' }}
      />

      {/* Screen */}
      <rect x="36" y="20" width="48" height="76" rx="4" fill="#fff1f1" />

      {/* Animated scan line on screen */}
      <rect x="36" y="20" width="48" height="2.5" rx="1" fill="#e51a1a" opacity="0.2">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;0,73;0,0"
          dur="2.8s"
          repeatCount="indefinite"
          calcMode="easeInOut"
        />
      </rect>

      {/* Status bar dots */}
      <circle cx="52" cy="27" r="1.5" fill="#e51a1a" opacity="0.5" />
      <circle cx="60" cy="27" r="1.5" fill="#e51a1a" opacity="0.5" />
      <circle cx="68" cy="27" r="1.5" fill="#e51a1a" opacity="0.5" />

      {/* App grid icons - animate in staggered */}
      {[0,1,2,3,4,5].map((i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 41 + col * 15;
        const y = 36 + row * 16;
        return (
          <rect
            key={i}
            x={x} y={y} width="10" height="10" rx="2.5"
            fill={i % 2 === 0 ? "#e51a1a" : "#ffc7c7"}
            opacity="0"
            style={{
              animation: `fade-in 0.4s ease ${0.4 + i * 0.12}s forwards`
            }}
          />
        );
      })}

      {/* App ripple animation */}
      <circle cx="60" cy="44" r="8" stroke="#e51a1a" strokeWidth="1.5" fill="none" opacity="0">
        <animate attributeName="r" values="8;22" dur="1.8s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite" begin="1s" />
      </circle>

      {/* Bottom bar UI */}
      <line x1="42" y1="80" x2="78" y2="80" stroke="#e51a1a" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <circle cx="50" cy="87" r="4" fill="#e51a1a" opacity="0"
        style={{ animation: 'fade-in 0.4s ease 1.2s forwards' }}
      />
      <circle cx="60" cy="87" r="4" fill="#ffc7c7" opacity="0"
        style={{ animation: 'fade-in 0.4s ease 1.3s forwards' }}
      />
      <circle cx="70" cy="87" r="4" fill="#ffc7c7" opacity="0"
        style={{ animation: 'fade-in 0.4s ease 1.4s forwards' }}
      />

      {/* Home button */}
      <circle cx="60" cy="103" r="5" stroke="#e51a1a" strokeWidth="2" fill="none" />

      {/* Notch / camera */}
      <rect x="54" y="12" width="12" height="4" rx="2" fill="#e51a1a" opacity="0.15" />

      {/* Floating notification bubble */}
      <circle cx="80" cy="22" r="7" fill="#e51a1a" opacity="0">
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" begin="2s" />
      </circle>
      <text x="80" y="26" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" opacity="0">
        3
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" begin="2s" />
      </text>
    </svg>
  );
}
