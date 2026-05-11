"use client";

export default function ITCourseIcon({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="IT Course Icon"
    >
      {/* Monitor / screen base */}
      <rect x="18" y="52" width="84" height="52" rx="6" fill="white" stroke="#e51a1a" strokeWidth="2.2"
        style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: 'draw-path 1s ease 0.1s forwards' }}
      />
      <rect x="22" y="56" width="76" height="44" rx="3" fill="#fff1f1" />

      {/* Animated scan line */}
      <rect x="22" y="56" width="76" height="3" rx="1" fill="#e51a1a" opacity="0.15">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,41;0,0" dur="3.5s" repeatCount="indefinite" calcMode="easeInOut" />
      </rect>

      {/* Code lines on screen */}
      <line x1="30" y1="68" x2="58" y2="68" stroke="#e51a1a" strokeWidth="2.2" strokeLinecap="round"
        style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: 'draw-path 0.5s ease 0.6s forwards' }} />
      <line x1="30" y1="75" x2="72" y2="75" stroke="#e51a1a" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"
        style={{ strokeDasharray: 45, strokeDashoffset: 45, animation: 'draw-path 0.5s ease 0.8s forwards' }} />
      <line x1="36" y1="82" x2="66" y2="82" stroke="#e51a1a" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"
        style={{ strokeDasharray: 32, strokeDashoffset: 32, animation: 'draw-path 0.5s ease 1s forwards' }} />
      <line x1="36" y1="89" x2="55" y2="89" stroke="#e51a1a" strokeWidth="1.8" strokeLinecap="round" opacity="0.4"
        style={{ strokeDasharray: 20, strokeDashoffset: 20, animation: 'draw-path 0.5s ease 1.2s forwards' }} />

      {/* Blinking cursor */}
      <rect x="57" y="86" width="2" height="8" rx="1" fill="#e51a1a">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* Graduation cap — board */}
      <rect x="30" y="24" width="60" height="8" rx="2" fill="#e51a1a"
        style={{ animation: 'fade-in 0.5s ease 0.2s both' }} />

      {/* Cap top diamond */}
      <rect x="52" y="14" width="16" height="16" rx="2" fill="#e51a1a" transform="rotate(45 60 22)"
        style={{ animation: 'scale-in 0.5s ease 0.15s both' }} />

      {/* Cap tassel string */}
      <line x1="80" y1="28" x2="86" y2="40" stroke="#e51a1a" strokeWidth="2" strokeLinecap="round"
        style={{ strokeDasharray: 16, strokeDashoffset: 16, animation: 'draw-path 0.4s ease 0.7s forwards' }} />

      {/* Tassel ball */}
      <circle cx="86" cy="42" r="3.5" fill="#e51a1a" opacity="0">
        <animate attributeName="opacity" values="0;1" dur="0.3s" begin="1s" fill="freeze" />
        <animateTransform attributeName="transform" type="translate" values="0,0;2,3;-1,2;0,0" dur="2s" repeatCount="indefinite" begin="1.3s" />
      </circle>

      {/* Floating sparkles */}
      {[
        { cx: 14, cy: 38, r: 2.5, delay: "1.4s", dur: "2.2s" },
        { cx: 104, cy: 60, r: 2,   delay: "1.8s", dur: "2.6s" },
        { cx: 10,  cy: 72, r: 1.5, delay: "2.1s", dur: "3s"   },
      ].map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#e51a1a" opacity="0">
          <animate attributeName="opacity" values="0;0.7;0" dur={s.dur} repeatCount="indefinite" begin={s.delay} />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur={s.dur} repeatCount="indefinite" begin={s.delay} />
        </circle>
      ))}

      {/* Play button overlay on screen — signals "course video" */}
      <circle cx="92" cy="64" r="10" fill="#e51a1a" opacity="0"
        style={{ animation: 'fade-in 0.4s ease 1.5s forwards' }} />
      <path d="M89 60 L96 64 L89 68 Z" fill="white" opacity="0"
        style={{ animation: 'fade-in 0.4s ease 1.5s forwards' }} />
    </svg>
  );
}
