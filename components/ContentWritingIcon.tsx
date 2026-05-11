"use client";

export default function ContentWritingIcon({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Content Writing Icon"
    >
      {/* Page / document */}
      <rect x="18" y="12" width="68" height="88" rx="6" fill="white" stroke="#e51a1a" strokeWidth="2.2"
        style={{ strokeDasharray: 320, strokeDashoffset: 320, animation: "draw-path 1s ease 0.1s forwards" }} />

      {/* Page fold corner */}
      <path d="M70 12 L86 28 L70 28 Z" fill="#fff1f1" stroke="#e51a1a" strokeWidth="1.5" strokeLinejoin="round"
        style={{ animation: "fade-in 0.4s ease 0.8s both" }} />

      {/* Animated scan line */}
      <rect x="18" y="12" width="52" height="3" rx="1" fill="#e51a1a" opacity="0.12">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,85;0,0" dur="4s" repeatCount="indefinite" calcMode="easeInOut" />
      </rect>

      {/* Title line — wide */}
      <line x1="28" y1="38" x2="62" y2="38" stroke="#e51a1a" strokeWidth="3" strokeLinecap="round"
        style={{ strokeDasharray: 36, strokeDashoffset: 36, animation: "draw-path 0.5s ease 0.6s forwards" }} />

      {/* Body text lines */}
      {[48, 55, 62, 69, 76, 83].map((y, i) => (
        <line
          key={y}
          x1="28" y1={y}
          x2={i % 3 === 2 ? 58 : 76} y2={y}
          stroke="#e51a1a"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity={i % 3 === 2 ? 0.35 : 0.55}
          style={{
            strokeDasharray: i % 3 === 2 ? 32 : 50,
            strokeDashoffset: i % 3 === 2 ? 32 : 50,
            animation: `draw-path 0.45s ease ${0.75 + i * 0.12}s forwards`,
          }}
        />
      ))}

      {/* Blinking cursor at last line */}
      <rect x="62" y="81" width="2" height="8" rx="1" fill="#e51a1a">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" begin="1.8s" />
      </rect>

      {/* Animated pen tool */}
      <g style={{ animation: "fade-in 0.4s ease 0.3s both" }}>
        {/* Pen body */}
        <rect x="82" y="66" width="10" height="28" rx="3" fill="#e51a1a"
          transform="rotate(-35 87 80)" />
        {/* Pen cap */}
        <rect x="82" y="63" width="10" height="8" rx="2" fill="#c11212"
          transform="rotate(-35 87 80)" />
        {/* Nib */}
        <path d="M87 95 L84 103 L90 103 Z" fill="#e51a1a" transform="rotate(-35 87 99)" />
        {/* Nib tip dot */}
        <circle cx="80" cy="105" r="2" fill="#e51a1a" opacity="0">
          <animate attributeName="opacity" values="0;1" dur="0.3s" begin="1.6s" fill="freeze" />
        </circle>
      </g>

      {/* Writing trail from pen nib */}
      <path d="M80 105 Q72 100 66 93" stroke="#e51a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"
        strokeDasharray="22" strokeDashoffset="22"
        style={{ animation: "draw-path 0.6s ease 1.7s forwards" }} />

      {/* Floating sparkles — inspiration sparks */}
      {[
        { x: 10, y: 30, delay: "1.2s", size: 3 },
        { x: 95, y: 22, delay: "1.6s", size: 2.5 },
        { x: 12, y: 75, delay: "2s",   size: 2 },
        { x: 100, y: 58, delay: "2.4s", size: 2 },
      ].map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r={s.size} fill="#e51a1a" opacity="0">
            <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
          </circle>
          {/* Star cross */}
          <line x1={s.x} y1={s.y - s.size - 2} x2={s.x} y2={s.y + s.size + 2} stroke="#e51a1a" strokeWidth="1" strokeLinecap="round" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
          </line>
          <line x1={s.x - s.size - 2} y1={s.y} x2={s.x + s.size + 2} y2={s.y} stroke="#e51a1a" strokeWidth="1" strokeLinecap="round" opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
            <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="2.5s" repeatCount="indefinite" begin={s.delay} />
          </line>
        </g>
      ))}
    </svg>
  );
}
