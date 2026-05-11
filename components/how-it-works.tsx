"use client";

import { act, useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
const steps = [
  {
    number: "I",
    title: "Connect with Us",
    description:
      "Reach out to us via email or WhatsApp at 977-XXXXXXXX. We’ll quickly respond and guide you through the next steps.",
    code: `import { optimus } from '@optimus/core'

    optimus.connect({
      source: 'your-database',
      sync: true
    })`,
    visual: "connect",
  },
  {
    number: "II",
    title: "Submit Your Details",
    description:
      "Send us your basic or rough resume along with your LinkedIn profile and email credentials. This helps us understand your background and start building your profile.",
    code: `optimus.workflow('process', {
  trigger: 'event',
  actions: [
    'validate',
    'transform', 
    'deliver'
  ]
})`,
    visual: "submit",
  },
  {
    number: "III",
    title: "Pay the Upfront Fee",
    description:
      "Make a one-time upfront payment of $200 for a full month of dedicated application support. This covers strategic applications, tracking, and follow-ups for 30 days.",
    code: `optimus.deploy({
  target: 'production',
  regions: 'auto'
})

// Deployed to 12 regions`,
    visual: "payment",
  },
  {
    number: "IV",
    title: "Discuss Payment Terms",
    description:
      "We’ll clarify the payment method and explain the success-based job placement conditions.Once agreed, we begin working on your optimized resume and applications immediately.",
    code: `optimus.deploy({
  target: 'production',
  regions: 'auto'
})

// Deployed to 12 regions`,
    visual: "payment-terms",
  },
  {
    number: "V",
    title: "Sit Back and Get Updates",
    description:
      "Relax while we handle everything — applications, tracking, and follow-ups. You’ll receive regular notifications about your job hunt progress and interview opportunities.",
    code: `optimus.deploy({
  target: 'production',
  regions: 'auto'
})

// Deployed to 12 regions`,
    visual: "update",
  },
];

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "connect":
      return <ConnectWithUsVisual />;
    case "submit":
      return <SubmitDetailsVisual />;
    case "payment":
      return <PaymentVisual />;
    case "payment-terms":
      return <PaymentTermsVisual />;
    case "update":
      return <RelaxAndUpdatesVisual />;
    default:
      return <ConnectWithUsVisual />;
  }
}

function ConnectWithUsVisual() {
  return (
    <svg
      viewBox="0 0 200 160"
      className="w-full h-full"
      style={{ background: "transparent" }}
    >
      <defs>
        {/* Drop shadow for depth, adapted to red */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="1"
            dy="2"
            stdDeviation="2"
            floodColor="rgba(255, 0, 0, 0.1)"
          />
        </filter>
        {/* Red glow effect */}
        <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Recruiter icon - adapted to red */}
        <g id="recruiterIcon">
          <circle
            cx="0"
            cy="0"
            r="10"
            fill="#fff"
            stroke="red"
            strokeWidth="1.5"
          />
          <path d="M-6,2 Q0,-2 6,2" stroke="red" fill="none" />
          <circle cx="0" cy="-3" r="3" fill="red" />
        </g>
        {/* Mentor icon - adapted to red */}
        <g id="mentorIcon">
          <circle
            cx="0"
            cy="0"
            r="10"
            fill="#fff"
            stroke="red"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="-3" r="3" fill="red" />
          <rect x="-6" y="2" width="12" height="4" fill="red" rx="1" />
        </g>
      </defs>

      {/* Connection lines from YOU - adapted to red and transparent */}
      <g stroke="red" strokeWidth="1" fill="none" opacity="0.4">
        <path d="M 60 70 Q 75 40 135 45" />
        <path d="M 60 90 Q 100 115 135 115" />
      </g>

      {/* User B (You) - Center-left - adapted to red and transparent */}
      <g transform="translate(60, 80)">
        <circle
          cx="0"
          cy="0"
          r="15"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
          filter="url(#shadow)"
        />
        <circle cx="0" cy="0" r="12" fill="rgba(255, 0, 0, 0.05)" />
        <text
          x="0"
          y="40"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill="red"
        >
          YOU
        </text>
        {/* Pulsing glow inside the profile circle - adapted to red and transparent */}
        <circle
          cx="0"
          cy="0"
          r="8"
          fill="rgba(255, 0, 0, 0.05)"
          filter="url(#redGlow)"
        >
          <animate
            attributeName="r"
            values="6;9;6"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.7;0.3"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Recruiter - Top-right - adapted to red */}
      <g transform="translate(140, 50)">
        <use href="#recruiterIcon" />
        <text
          x="0"
          y="25"
          textAnchor="middle"
          fontSize="10"
          fill="red"
          opacity="0.8"
        >
          RECRUITER
        </text>
        {/* Floating handshake icon - adapted to red and transparent */}
        <g transform="translate(0, -18)" opacity="0">
          <animate
            attributeName="opacity"
            values="0;0.8;0.8;0"
            dur="4s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 -18; 0 -22; 0 -18"
            dur="4s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <path
            d="M-5,0 Q-2,-3 2,0"
            stroke="red"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M-2,0 Q1,3 5,0"
            stroke="red"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </g>
      </g>

      {/* Mentor - Bottom-right - adapted to red */}
      <g transform="translate(140, 110)">
        <use href="#mentorIcon" />
        <text
          x="0"
          y="25"
          textAnchor="middle"
          fontSize="10"
          fill="red"
          opacity="0.8"
        >
          MENTOR
        </text>
        {/* Floating lightbulb icon - adapted to red and transparent */}
        <g transform="translate(0, -18)" opacity="0">
          <animate
            attributeName="opacity"
            values="0;0.8;0.8;0"
            dur="4s"
            repeatCount="indefinite"
            begin="1.5s"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 -18; 0 -22; 0 -18"
            dur="4s"
            repeatCount="indefinite"
            begin="1.5s"
          />
          <path
            d="M-2,1 L2,1 Q0,-1.5 0,-4 Q0,-1.5 -2,1 Z"
            fill="red"
            stroke="none"
            opacity="0.6"
          />
          <line
            x1="0"
            y1="2"
            x2="0"
            y2="4"
            stroke="red"
            strokeWidth="1"
            opacity="0.6"
          />
        </g>
      </g>

      {/* Large connecting sweep (COMMUNITY LOOP) - adapted to red and transparent */}
      <path
        d="M 60 110 Q 90 145 140 140 Q 185 130 180 80 Q 170 30 110 30"
        fill="none"
        stroke="red"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.4"
      />
      <text
        x="120"
        y="152"
        textAnchor="middle"
        fontSize="10"
        fill="red"
        fontWeight="bold"
        opacity="0.8"
      >
        COMMUNITY LOOP
      </text>

      {/* Method icons moving along the loop - adapted to red and transparent */}
      <circle
        r="12"
        fill="#fff"
        stroke="red"
        strokeWidth="1.5"
        filter="url(#shadow)"
      >
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          path="M 60 110 Q 90 145 140 140 Q 185 130 180 80 Q 170 30 110 30 Z"
        />
        {/* Text icon placeholder - adapted to red */}
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fill="red"
          fontSize="10"
          fontWeight="bold"
        >
          in
        </text>
      </circle>
      <circle
        r="12"
        fill="#fff"
        stroke="red"
        strokeWidth="1.5"
        filter="url(#shadow)"
      >
        <animateMotion
          dur="8s"
          begin="2.66s"
          repeatCount="indefinite"
          path="M 60 110 Q 90 145 140 140 Q 185 130 180 80 Q 170 30 110 30 Z"
        />
        <path
          d="M-6,-4 L6,-4 L0,2 Z M-6,0 L6,0 L0,6 Z"
          fill="red"
          stroke="none"
          transform="translate(0, 1)"
          opacity="0.8"
        />
      </circle>
      <circle
        r="12"
        fill="#fff"
        stroke="red"
        strokeWidth="1.5"
        filter="url(#shadow)"
      >
        <animateMotion
          dur="8s"
          begin="5.33s"
          repeatCount="indefinite"
          path="M 60 110 Q 90 145 140 140 Q 185 130 180 80 Q 170 30 110 30 Z"
        />
        <path
          d="M-6,-3 L1,-3 L1,3 L-6,3 Z M3,-2 L6,-5 L6,5 L3,2 Z"
          fill="red"
          stroke="none"
          transform="translate(0, 1.5)"
          opacity="0.8"
        />
      </circle>

      {/* Rotating gear at the bottom-center (Networking System) - adapted to red and transparent */}
      <g transform="translate(100, 135)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0"
          to="360"
          dur="15s"
          repeatCount="indefinite"
        />
        <circle
          cx="0"
          cy="0"
          r="15"
          fill="none"
          stroke="red"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M0,-12 L3,-11 L3,-3 L8,-1 L8,1 L3,3 L3,11 L-3,11 L-3,3 L-8,1 L-8,-1 L-3,-3 L-3,-11 Z"
          fill="red"
          transform="translate(0, 1.5)"
          opacity="0.3"
        />
      </g>
    </svg>
  );
}

function SubmitDetailsVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Target Clipboard */}
      <g transform="translate(100, 80)">
        {/* Background Glow */}
        <circle r="40" fill="none" stroke="red" strokeWidth="0.5" opacity="0.3">
          <animate
            attributeName="r"
            values="35;45;35"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.1;0.4;0.1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Clipboard Body */}
        <rect
          x="-25"
          y="-35"
          width="50"
          height="70"
          rx="4"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
        />

        {/* Clip Top */}
        <path
          d="M-12,-35 L-12,-42 A2,2 0 0,1 -10,-44 L10,-44 A2,2 0 0,1 12,-42 L12,-35 Z"
          fill="red"
          stroke="none"
        />
        <circle
          cx="0"
          cy="-35"
          r="3"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
        />

        {/* Lines on the paper */}
        <line
          x1="-15"
          y1="-15"
          x2="15"
          y2="-15"
          stroke="red"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <line
          x1="-15"
          y1="-3"
          x2="15"
          y2="-3"
          stroke="red"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <line
          x1="-15"
          y1="9"
          x2="5"
          y2="9"
          stroke="red"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />

        {/* Floating Checkmark when data is received */}
        <g transform="translate(15, 20)">
          <path
            d="M -6 0 L -1 5 L 8 -5"
            fill="none"
            stroke="red"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>

      {/* Floating Data Blocks flying into the clipboard */}
      <g stroke="red" strokeWidth="1.5" fill="none" opacity="0.7">
        {/* Data Block 1 */}
        <rect x="-10" y="-10" width="20" height="20" rx="2">
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            path="M 30 110 Q 50 140 100 80"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Data Block 2 */}
        <path d="M-8,-8 A8,8 0 1,1 8,8 Z">
          <animateMotion
            dur="2.5s"
            begin="0.8s"
            repeatCount="indefinite"
            path="M 20 50 Q 50 10 100 80"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2.5s"
            begin="0.8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Data Block 3 */}
        <polygon points="0,-10 8.6,5 -8.6,5">
          <animateMotion
            dur="2.5s"
            begin="1.6s"
            repeatCount="indefinite"
            path="M 170 120 Q 150 150 100 80"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2.5s"
            begin="1.6s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Data Block 4 */}
        <line x1="-8" y1="-8" x2="8" y2="8">
          <animateMotion
            dur="2.5s"
            begin="2.1s"
            repeatCount="indefinite"
            path="M 160 40 Q 140 10 100 80"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2.5s"
            begin="2.1s"
            repeatCount="indefinite"
          />
        </line>
      </g>

      {/* Label */}
      <text
        x="100"
        y="150"
        textAnchor="middle"
        fontSize="10"
        fontFamily="monospace"
        fill="red"
        fontWeight="bold"
      >
        SUBMITTING DETAILS...
      </text>
    </svg>
  );
}

function PaymentVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full lg:mt-30">
      {/* Background Pulse (Security Shield) */}
      <circle
        cx="100"
        cy="75"
        r="45"
        fill="none"
        stroke="red"
        strokeWidth="0.5"
        opacity="0.2"
      >
        <animate
          attributeName="r"
          values="40;50;40"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dasharray"
          values="1,5;5,1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* The Secure Wallet/Vault */}
      <g transform="translate(100, 75)">
        {/* Wallet Body */}
        <path
          d="M -25 -15 L 20 -15 C 23 -15 25 -13 25 -10 L 25 20 C 25 23 23 25 20 25 L -25 25 C -28 25 -30 23 -30 20 L -30 -10 C -30 -13 -28 -15 -25 -15 Z"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
        />
        {/* Wallet Flap */}
        <path
          d="M -30 -5 L 10 -5 C 13 -5 15 -3 15 0 L 15 5 C 15 8 13 10 10 10 L -30 10"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
        {/* Lock Detail */}
        <circle cx="10" cy="2.5" r="3" fill="red">
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Orbiting Currency Symbols ($) */}
      <g>
        {[0, 120, 240].map((angle, i) => (
          <g key={i}>
            <text
              fontSize="16"
              fill="red"
              fontWeight="bold"
              fontFamily="Arial"
              textAnchor="middle"
            >
              $
              <animateMotion
                dur="4s"
                begin={`${i * 1.3}s`}
                repeatCount="indefinite"
                path="M 100 75 m -60 0 a 60 40 0 1 0 120 0 a 60 40 0 1 0 -120 0"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="4s"
                begin={`${i * 1.3}s`}
                repeatCount="indefinite"
              />
            </text>
          </g>
        ))}
      </g>

      {/* Upward Success Beam */}
      <line
        x1="100"
        y1="50"
        x2="100"
        y2="20"
        stroke="red"
        strokeWidth="2"
        strokeDasharray="4 2"
        opacity="0.6"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;12"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </line>

      {/* Labels */}
      <text
        x="100"
        y="135"
        textAnchor="middle"
        fontSize="10"
        fontFamily="monospace"
        fill="red"
        fontWeight="bold"
      >
        SECURE TRANSACTION
      </text>

      <g opacity="0.8">
        <rect
          x="70"
          y="142"
          width="60"
          height="8"
          rx="4"
          fill="none"
          stroke="red"
          strokeWidth="1"
        />
        <rect x="72" y="144" width="0" height="4" rx="2" fill="red">
          <animate
            attributeName="width"
            values="0;56;56"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
}

function PaymentTermsVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full lg:mt-80">
      {/* Dynamic Background Waves (Transparency) */}
      <path
        d="M 0 80 Q 50 70 100 80 T 200 80"
        fill="none"
        stroke="red"
        strokeWidth="0.5"
        opacity="0.2"
      >
        <animate
          attributeName="d"
          values="M 0 80 Q 50 70 100 80 T 200 80; M 0 80 Q 50 90 100 80 T 200 80; M 0 80 Q 50 70 100 80 T 200 80"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Discussion Bubbles */}
      <g>
        {/* Left Bubble (Candidate) */}
        <path
          d="M 20 40 H 60 V 70 H 35 L 20 85 V 40"
          fill="none"
          stroke="red"
          strokeWidth="2"
        >
          <animate
            attributeName="transform"
            values="translate(0,0); translate(0,-3); translate(0,0)"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
        <line
          x1="30"
          y1="50"
          x2="50"
          y2="50"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="30"
          y1="60"
          x2="45"
          y2="60"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Right Bubble (Advisor) */}
        <path
          d="M 140 40 H 180 V 70 H 165 L 150 85 V 40"
          fill="none"
          stroke="red"
          strokeWidth="2"
        >
          <animate
            attributeName="transform"
            values="translate(0,0); translate(0,3); translate(0,0)"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </path>
        <circle
          cx="160"
          cy="55"
          r="5"
          fill="none"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </g>

      {/* Central Terms Document */}
      <g transform="translate(75, 85)">
        <rect
          x="0"
          y="0"
          width="50"
          height="60"
          rx="2"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
        />
        {/* Animated Text Lines */}
        <line x1="10" y1="15" x2="40" y2="15" stroke="red" strokeWidth="2">
          <animate
            attributeName="stroke-dasharray"
            values="0,30; 30,0"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="10" y1="25" x2="40" y2="25" stroke="red" strokeWidth="2">
          <animate
            attributeName="stroke-dasharray"
            values="0,30; 30,0"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="10" y1="35" x2="30" y2="35" stroke="red" strokeWidth="2">
          <animate
            attributeName="stroke-dasharray"
            values="0,20; 20,0"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
        </line>

        {/* Verification Seal */}
        <g transform="translate(40, 50)">
          <circle r="8" fill="none" stroke="red" strokeWidth="1.5">
            <animate
              attributeName="r"
              values="0;8"
              dur="0.5s"
              begin="1.5s"
              fill="freeze"
            />
            <animate
              attributeName="opacity"
              values="0;1"
              dur="0.5s"
              begin="1.5s"
              fill="freeze"
            />
          </circle>
          <path
            d="M -3 0 L -1 2 L 3 -2"
            fill="none"
            stroke="red"
            strokeWidth="1.5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="10"
              to="0"
              stroke-dasharray="10"
              dur="0.3s"
              begin="2s"
              fill="freeze"
            />
          </path>
        </g>
      </g>

      {/* Connection Logic (Dots moving between bubbles and document) */}
      <circle r="2" fill="red">
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path="M 60 55 Q 100 55 100 85"
        />
      </circle>
      <circle r="2" fill="red">
        <animateMotion
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
          path="M 140 55 Q 100 55 100 85"
        />
      </circle>

      {/* Label */}
      <text
        x="100"
        y="25"
        textAnchor="middle"
        fontSize="10"
        fontFamily="monospace"
        fill="red"
        fontWeight="bold"
      >
        TRANSPARENT AGREEMENT
      </text>
    </svg>
  );
}

function RelaxAndUpdatesVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full lg:mt-120">
      {/* Background Scanning Waves */}
      <g transform="translate(100, 80)">
        <circle
          r="70"
          fill="none"
          stroke="red"
          strokeWidth="0.5"
          opacity="0.1"
        />
        <circle
          r="50"
          fill="none"
          stroke="red"
          strokeWidth="0.5"
          opacity="0.1"
        />
        <circle
          r="30"
          fill="none"
          stroke="red"
          strokeWidth="0.5"
          opacity="0.1"
        />

        {/* Radar Sweep */}
        <path d="M 0 0 L 0 -70 A 70 70 0 0 1 50 -50 Z" fill="red" opacity="0.1">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Relaxed Person (The "Sit Back" element) */}
      <g transform="translate(100, 90)">
        {/* Chair/Lounger */}
        <path
          d="M -30 20 L -10 20 L 10 -10 L 30 -10"
          fill="none"
          stroke="red"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Person */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -2; 0 0"
            dur="4s"
            repeatCount="indefinite"
          />
          {/* Head */}
          <circle
            cx="0"
            cy="-25"
            r="8"
            fill="none"
            stroke="red"
            strokeWidth="2"
          />
          {/* Body/Torso */}
          <path
            d="M 0 -17 L 0 5 L 15 15"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Arms (behind head) */}
          <path
            d="M -8 -20 Q -15 -25 -8 -30 M 8 -20 Q 15 -25 8 -30"
            fill="none"
            stroke="red"
            strokeWidth="1.5"
          />
        </g>
      </g>

      {/* Incoming Update Notifications */}
      <g>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle r="4" fill="red">
              <animateMotion
                dur="3s"
                begin={`${i * 1}s`}
                repeatCount="indefinite"
                path="M 180 40 Q 150 20 110 60"
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="3s"
                begin={`${i * 1}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Notification Box */}
            <rect
              x="0"
              y="0"
              width="20"
              height="15"
              rx="2"
              fill="none"
              stroke="red"
              strokeWidth="1"
            >
              <animateMotion
                dur="3s"
                begin={`${i * 1}s`}
                repeatCount="indefinite"
                path="M 180 40 Q 150 20 110 60"
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="3s"
                begin={`${i * 1}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}
      </g>

      {/* "Active" Pulse dot */}
      <circle cx="180" cy="30" r="3" fill="red">
        <animate
          attributeName="r"
          values="2;4;2"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="172"
        y="22"
        textAnchor="end"
        fontSize="8"
        fill="red"
        fontWeight="bold"
      >
        SYSTEM ACTIVE
      </text>

      {/* Footer Label */}
      <text
        x="100"
        y="150"
        textAnchor="middle"
        fontSize="10"
        fontFamily="monospace"
        fill="red"
        fontWeight="bold"
      >
        RELAX. WE'VE GOT IT.
      </text>
    </svg>
  );
}

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  // window.scrollBy({
  //   top: 100, // Scrolls down exactly 100 pixels
  //   behavior: "smooth",
  // });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   // Only scroll if the user is actually interacting with this section
  //   if (!isHovered) return;
  //   // 1. Find the button that is currently active
  //   const activeAnchor =
  //     stepsContainerRef.current?.querySelectorAll("button")[activeStep];

  //   if (activeAnchor) {
  //     // Calculate where we want to go (centering the element)
  //     const elementRect = activeAnchor.getBoundingClientRect();
  //     const absoluteElementTop = elementRect.top + window.scrollY;
  //     const centerOffset = window.innerHeight / 2 - elementRect.height / 2;
  //     const targetScroll = absoluteElementTop - centerOffset;

  //     // The "Magic" Animation
  //     animate(window.scrollY, targetScroll, {
  //       type: "spring",
  //       stiffness: 100, // Higher = faster start
  //       damping: 20, // Higher = less "bounce" at the end
  //       mass: 1,
  //       onUpdate: (latest: number) => window.scrollTo(0, latest),
  //     });
  //   }
  // }, [activeStep, isHovered]); // This runs every time the step changes

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-primary overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto my-6 px-6 lg:px-12">
        {/* Header */}
        <div className="mb-4">
          {/* <span className="inline-flex items-center gap-3 text-sm font-mono text-primary/50 mb-6">
            <span className="w-8 h-px bg-primary/30" />
            Process
          </span> */}
          <h2
            className={`text-2xl text-destructive lg:text-4xl font-display tracking-tight transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            How it Works?
            <br />
            {/* <span className="text-primary/50">Infinite possibilities.</span> */}
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div ref={stepsContainerRef} className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-primary/10 transition-all duration-500 group ${
                  activeStep === index
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-primary/30">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-1xl lg:text-2xl font-display mb-3 hover:cursor group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-primary/60 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-primary/20 overflow-hidden">
                        <div
                          className="h-full bg-primary w-0"
                          style={{
                            animation: "progress 5s linear forwards",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* <div>{steps[activeStep].visual}</div> */}
          {/* Code display */}

          <div className="lg:sticky lg:top-32 self-start flex justify-center items-center">
            <div className="w-full max-w-[500px]">
              {/* Concept: State-Driven Rendering. 
                  We pass the 'visual' string from the current active step 
               */}
              <AnimatedVisual type={steps[activeStep].visual} />
            </div>
          </div>

          {/* <div className="lg:sticky lg:top-32 self-start bg-blue">
            <div className="border border-background/10 overflow-hidden ">
              Window header
              <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between bg-black">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                </div>
                <span className="text-xs font-mono text-background/40">
                  workflow.ts
                </span>
              </div>

              Code content
              <div className="p-8 font-mono text-sm min-h-[280px] bg-black">
                <pre className="text-background/70">
                  {steps[activeStep].code.split("\n").map((line, lineIndex) => (
                    <div
                      key={`${activeStep}-${lineIndex}`}
                      className="leading-loose code-line-reveal"
                      style={{
                        animationDelay: `${lineIndex * 80}ms`,
                      }}
                    >
                      <span className="text-background/20 select-none w-8 inline-block">
                        {lineIndex + 1}
                      </span>
                      <span className="inline-flex">
                        {line.split("").map((char, charIndex) => (
                          <span
                            key={`${activeStep}-${lineIndex}-${charIndex}`}
                            className="code-char-reveal"
                            style={{
                              animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>

              Status
              <div className="px-6 py-4 border-t border-background/10 flex items-center gap-3 bg-black">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-background/40">
                  Ready
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .code-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .code-char-reveal {
          opacity: 0;
          filter: blur(8px);
          animation: charReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes charReveal {
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
