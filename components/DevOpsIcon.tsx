"use client";

export default function DevOpsIcon({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DevOps Icon"
    >
      {/* Infinity / pipeline loop */}
      <path
        d="M20 60 C20 42 36 30 52 38 C62 43 58 57 60 60 C62 63 58 77 68 82 C84 90 100 78 100 60 C100 42 84 30 68 38 C58 43 62 57 60 60 C58 63 62 77 52 82 C36 90 20 78 20 60 Z"
        stroke="#e51a1a"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        style={{
          strokeDasharray: 320,
          strokeDashoffset: 320,
          animation: "draw-path 1.8s ease 0.2s forwards",
        }}
      />

      {/* Flowing dots along the path */}
      {[0, 1, 2].map((i) => (
        <circle key={i} r="4" fill="#e51a1a" opacity="0.85">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            begin={`${i * 1}s`}
            path="M20 60 C20 42 36 30 52 38 C62 43 58 57 60 60 C62 63 58 77 68 82 C84 90 100 78 100 60 C100 42 84 30 68 38 C58 43 62 57 60 60 C58 63 62 77 52 82 C36 90 20 78 20 60 Z"
          />
          <animate attributeName="opacity" values="0;0.85;0.85;0" dur="3s" repeatCount="indefinite" begin={`${i * 1}s`} />
        </circle>
      ))}

      {/* Left node — Code */}
      <circle cx="20" cy="60" r="11" fill="white" stroke="#e51a1a" strokeWidth="2"
        style={{ animation: "scale-in 0.4s ease 0.5s both" }} />
      <path d="M14 57 L11 60 L14 63" stroke="#e51a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M26 57 L29 60 L26 63" stroke="#e51a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Right node — Deploy */}
      <circle cx="100" cy="60" r="11" fill="white" stroke="#e51a1a" strokeWidth="2"
        style={{ animation: "scale-in 0.4s ease 0.7s both" }} />
      <path d="M96 64 L100 56 L104 64" stroke="#e51a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="96" y1="66" x2="104" y2="66" stroke="#e51a1a" strokeWidth="1.8" strokeLinecap="round" />

      {/* Top node — Build / gear */}
      <circle cx="60" cy="22" r="10" fill="white" stroke="#e51a1a" strokeWidth="2"
        style={{ animation: "scale-in 0.4s ease 0.9s both" }} />
      <g style={{ transformOrigin: "60px 22px", animation: "spin 4s linear infinite" }}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="58.5" y="13"
            width="3" height="4"
            rx="1"
            fill="#e51a1a"
            transform={`rotate(${angle} 60 22)`}
          />
        ))}
        <circle cx="60" cy="22" r="4" fill="#e51a1a" />
        <circle cx="60" cy="22" r="2" fill="white" />
      </g>

      {/* Bottom node — Monitor / check */}
      <circle cx="60" cy="98" r="10" fill="white" stroke="#e51a1a" strokeWidth="2"
        style={{ animation: "scale-in 0.4s ease 1.1s both" }} />
      <path d="M54 98 L58 102 L66 93" stroke="#e51a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        style={{ strokeDasharray: 18, strokeDashoffset: 18, animation: "draw-path 0.5s ease 1.4s forwards" }} />

      {/* Center label */}
      <text x="60" y="55" textAnchor="middle" fill="#e51a1a" fontSize="6.5" fontWeight="700" letterSpacing="1" opacity="0"
        style={{ animation: "fade-in 0.4s ease 1.8s forwards" }}>CI/CD</text>
      <text x="60" y="64" textAnchor="middle" fill="#e51a1a" fontSize="5.5" fontWeight="500" opacity="0"
        style={{ animation: "fade-in 0.4s ease 1.9s forwards" }}>PIPELINE</text>
    </svg>
  );
}
