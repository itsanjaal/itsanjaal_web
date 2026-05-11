"use client";
import { useEffect, useRef } from "react";

export default function WebDevIcon({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Web Development Icon"
    >
      {/* Monitor body */}
      <rect
        x="10" y="18" width="100" height="64" rx="6"
        fill="#fff" stroke="#e51a1a" strokeWidth="2.5"
        className="svg-path-animate"
        style={{ strokeDasharray: 350, strokeDashoffset: 350, animation: 'draw-path 1.2s ease 0.1s forwards' }}
      />

      {/* Screen fill */}
      <rect x="14" y="22" width="92" height="56" rx="4" fill="#fff1f1" />

      {/* Animated scan line */}
      <rect x="14" y="22" width="92" height="3" rx="1" fill="#e51a1a" opacity="0.15">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;0,53;0,0"
          dur="3s"
          repeatCount="indefinite"
          calcMode="easeInOut"
        />
      </rect>

      {/* Code lines - animated draw */}
      <line x1="22" y1="38" x2="60" y2="38" stroke="#e51a1a" strokeWidth="2.5" strokeLinecap="round"
        style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: 'draw-path 0.6s ease 0.5s forwards' }}
      />
      <line x1="22" y1="46" x2="75" y2="46" stroke="#c11212" strokeWidth="2" strokeLinecap="round" opacity="0.5"
        style={{ strokeDasharray: 55, strokeDashoffset: 55, animation: 'draw-path 0.6s ease 0.7s forwards' }}
      />
      <line x1="28" y1="54" x2="65" y2="54" stroke="#c11212" strokeWidth="2" strokeLinecap="round" opacity="0.5"
        style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: 'draw-path 0.6s ease 0.9s forwards' }}
      />
      <line x1="28" y1="62" x2="55" y2="62" stroke="#e51a1a" strokeWidth="2" strokeLinecap="round" opacity="0.4"
        style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: 'draw-path 0.6s ease 1.1s forwards' }}
      />

      {/* Animated brackets */}
      <path d="M22 32 L18 42 L22 52" stroke="#e51a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: 'draw-path 0.7s ease 0.3s forwards' }}
      />
      <path d="M92 32 L96 42 L92 52" stroke="#e51a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: 'draw-path 0.7s ease 0.4s forwards' }}
      />

      {/* Blinking cursor */}
      <rect x="57" y="59" width="2" height="10" rx="1" fill="#e51a1a">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>

      {/* Stand */}
      <line x1="60" y1="82" x2="60" y2="96" stroke="#e51a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="96" x2="76" y2="96" stroke="#e51a1a" strokeWidth="2.5" strokeLinecap="round" />

      {/* Orbiting dot */}
      <circle cx="60" cy="50" r="0" fill="transparent">
        <animate attributeName="r" values="0" dur="0s" />
      </circle>
      <g style={{ transformOrigin: '85px 28px' }}>
        <circle cx="85" cy="28" r="4" fill="#e51a1a" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 60 50;360 60 50"
          dur="5s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}
