"use client";

export default function AIStrategyIcon({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AI Strategy & Prompt Engineering Icon"
    >
      {/* Brain outline — left hemisphere */}
      <path
        d="M60 22 C48 22 34 30 30 44 C26 56 30 66 36 72 C38 74 38 78 36 82 C34 86 38 92 44 90 C48 89 52 92 56 94 L60 94"
        stroke="#e51a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: "draw-path 1.4s ease 0.1s forwards" }}
      />
      {/* Brain outline — right hemisphere */}
      <path
        d="M60 22 C72 22 86 30 90 44 C94 56 90 66 84 72 C82 74 82 78 84 82 C86 86 82 92 76 90 C72 89 68 92 64 94 L60 94"
        stroke="#e51a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: "draw-path 1.4s ease 0.2s forwards" }}
      />
      {/* Brain centre line */}
      <line x1="60" y1="22" x2="60" y2="94" stroke="#e51a1a" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4"
        style={{ animation: "fade-in 0.4s ease 1s both" }} />

      {/* Neural nodes */}
      {[
        { cx: 44, cy: 42, delay: "0.8s" },
        { cx: 76, cy: 42, delay: "0.9s" },
        { cx: 36, cy: 60, delay: "1.0s" },
        { cx: 84, cy: 60, delay: "1.1s" },
        { cx: 46, cy: 76, delay: "1.2s" },
        { cx: 74, cy: 76, delay: "1.3s" },
        { cx: 60, cy: 52, delay: "1.0s" },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="5" fill="white" stroke="#e51a1a" strokeWidth="1.8" opacity="0"
            style={{ animation: `scale-in 0.35s ease ${n.delay} forwards` }} />
          <circle cx={n.cx} cy={n.cy} r="2.5" fill="#e51a1a" opacity="0"
            style={{ animation: `fade-in 0.3s ease ${n.delay} forwards` }} />
          {/* Pulse ring */}
          <circle cx={n.cx} cy={n.cy} r="5" stroke="#e51a1a" fill="none" opacity="0">
            <animate attributeName="r" values="5;14" dur="2s" repeatCount="indefinite" begin={`${1.5 + i * 0.3}s`} />
            <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" begin={`${1.5 + i * 0.3}s`} />
          </circle>
        </g>
      ))}

      {/* Synaptic connections */}
      {[
        { x1: 44, y1: 42, x2: 60, y2: 52, delay: "1.2s" },
        { x1: 76, y1: 42, x2: 60, y2: 52, delay: "1.3s" },
        { x1: 36, y1: 60, x2: 60, y2: 52, delay: "1.4s" },
        { x1: 84, y1: 60, x2: 60, y2: 52, delay: "1.5s" },
        { x1: 36, y1: 60, x2: 46, y2: 76, delay: "1.6s" },
        { x1: 84, y1: 60, x2: 74, y2: 76, delay: "1.7s" },
        { x1: 44, y1: 42, x2: 36, y2: 60, delay: "1.4s" },
        { x1: 76, y1: 42, x2: 84, y2: 60, delay: "1.5s" },
      ].map((c, i) => (
        <line key={i} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
          stroke="#e51a1a" strokeWidth="1" opacity="0" strokeLinecap="round"
          style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: `draw-path 0.4s ease ${c.delay} forwards` }}
        />
      ))}

      {/* Travelling signal pulses on connections */}
      {[
        { x1: 44, y1: 42, x2: 60, y2: 52, begin: "2s" },
        { x1: 36, y1: 60, x2: 84, y2: 60, begin: "2.5s" },
        { x1: 46, y1: 76, x2: 74, y2: 76, begin: "3s" },
      ].map((p, i) => (
        <circle key={i} r="2.5" fill="#e51a1a">
          <animateMotion
            dur="1.2s"
            repeatCount="indefinite"
            begin={p.begin}
            path={`M${p.x1} ${p.y1} L${p.x2} ${p.y2}`}
          />
          <animate attributeName="opacity" values="0;1;1;0" dur="1.2s" repeatCount="indefinite" begin={p.begin} />
        </circle>
      ))}

      {/* Prompt token pill at bottom */}
      <rect x="26" y="100" width="68" height="14" rx="7" fill="#fff1f1" stroke="#e51a1a" strokeWidth="1.5" opacity="0"
        style={{ animation: "scale-in 0.5s ease 2s forwards" }} />
      <text x="60" y="111" textAnchor="middle" fill="#e51a1a" fontSize="6.5" fontWeight="700" letterSpacing="0.5" opacity="0"
        style={{ animation: "fade-in 0.4s ease 2.2s forwards" }}>
        &gt;_ PROMPT ENGINEERING
      </text>

      {/* Blinking cursor in prompt */}
      <rect x="88" y="103" width="1.5" height="8" rx="0.5" fill="#e51a1a" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="2.5s" />
      </rect>
    </svg>
  );
}
