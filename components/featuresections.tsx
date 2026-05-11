"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "ATS optimization and Humanized Resumes",
    description:
      "We craft ATS-optimized resumes packed with relevant keywords to beat applicant tracking systems. We also humanize the tone and structure so they read naturally and impress recruiters.",
    visual: "deploy",
  },
  {
    number: "02",
    title: "Strategic Application Management",
    description:
      "We strategically select and manage job applications that perfectly align with your skills and goals. Our targeted approach maximizes response rates while avoiding irrelevant submissions.",
    visual: "strategic",
  },
  {
    number: "03",
    title: "5 Optimal Applications Per Day",
    description:
      "We submit only 5 carefully chosen and fully customized applications per day. This focused pace ensures higher quality and better chances of getting noticed.",
    visual: "quota",
  },
  {
    number: "04",
    title: "Application Tracking & Follow-ups",
    description:
      "We track every application and monitor responses in real time. We handle timely, professional follow-ups to keep your profile visible and gather feedback.",
    visual: "apptracking",
  },
  {
    number: "05",
    title: "Pre-Interview Training (As Needed)",
    description:
      "We provide personalized pre-interview coaching and mock sessions when you reach the interview stage. This targeted preparation boosts your confidence and performance.",
    visual: "interview",
  },
];

function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="deployClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>

      {/* Container */}
      <rect
        x="30"
        y="20"
        width="140"
        height="120"
        rx="4"
        fill="none"
        stroke="red"
        color="red"
        strokeWidth="2"
      />

      {/* Animated bars */}
      <g clipPath="url(#deployClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="red"
            color="red"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>

      {/* Progress indicator */}
      <circle cx="100" cy="155" r="3" fill="red" opacity="0.3">
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Central node */}
      <circle cx="100" cy="80" r="12" fill="red">
        <animate
          attributeName="r"
          values="12;14;12"
          dur="2s"
          repeatCount="indefinite"
          color="red"
        />
      </circle>

      {/* Orbiting nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = i * 60 * (Math.PI / 180);
        const radius = 50;
        return (
          <g key={i}>
            {/* Connection line */}
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="red"
              color="red"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
                color="red"
              />
            </line>

            {/* Outer node */}
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="6"
              fill="none"
              stroke="red"
              strokeWidth="2"
              color="red"
            >
              <animate
                attributeName="r"
                values="6;8;6"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
                color="red"
              />
            </circle>
          </g>
        );
      })}

      {/* Pulse rings */}
      <circle
        cx="100"
        cy="80"
        r="30"
        fill="none"
        stroke="red"
        strokeWidth="1"
        opacity="0"
        color="red"
      >
        <animate
          attributeName="r"
          values="20;60"
          dur="2s"
          repeatCount="indefinite"
          color="red"
        />
        <animate
          attributeName="opacity"
          values="0.5;0"
          dur="2s"
          repeatCount="indefinite"
          color="red"
        />
      </circle>
    </svg>
  );
}

function CollabVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* User A */}
      <g>
        <rect
          x="30"
          y="50"
          width="50"
          height="60"
          rx="4"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
        <text
          x="55"
          y="85"
          textAnchor="middle"
          fontSize="20"
          fontFamily="monospace"
          fill="red"
        >
          A
        </text>
        <circle
          cx="55"
          cy="35"
          r="12"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
      </g>

      {/* User B */}
      <g>
        <rect
          x="120"
          y="50"
          width="50"
          height="60"
          rx="4"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
        <text
          x="145"
          y="85"
          textAnchor="middle"
          fontSize="20"
          fontFamily="monospace"
          fill="red"
        >
          B
        </text>
        <circle
          cx="145"
          cy="35"
          r="12"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
      </g>

      {/* Connection */}
      <line
        x1="80"
        y1="80"
        x2="120"
        y2="80"
        stroke="red"
        strokeWidth="2"
        strokeDasharray="4 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-8"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </line>

      {/* Data packet */}
      <circle r="4" fill="red">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#dataPath" />
        </animateMotion>
      </circle>
      <path id="dataPath" d="M 80 80 L 120 80" fill="none" />

      {/* Sync indicator */}
      <g transform="translate(100, 130)">
        <circle r="6" fill="none" stroke="red" strokeWidth="2">
          <animate
            attributeName="r"
            values="6;10;6"
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
      </g>
    </svg>
  );
}

function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Shield */}
      <path
        d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z"
        fill="none"
        stroke="red"
        strokeWidth="2"
      />

      {/* Inner shield */}
      <path
        d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z"
        fill="red"
        opacity="0.1"
      >
        <animate
          attributeName="opacity"
          values="0.1;0.2;0.1"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Lock icon */}
      <rect x="85" y="70" width="30" height="25" rx="3" fill="red" />
      <path
        d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70"
        fill="none"
        stroke="red"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Keyhole */}
      <circle cx="100" cy="80" r="4" fill="white" />
      <rect x="98" y="82" width="4" height="8" fill="white" />

      {/* Scan lines */}
      <line
        x1="60"
        y1="60"
        x2="140"
        y2="60"
        stroke="red"
        strokeWidth="1"
        opacity="0"
      >
        <animate
          attributeName="y1"
          values="40;120;40"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y2"
          values="40;120;40"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.5;0"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}

function AppTrackingVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Kanban/Status Columns */}
      <g stroke="red" strokeWidth="1" fill="none" opacity="0.4">
        <rect x="15" y="30" width="40" height="100" rx="2" />
        <rect x="65" y="30" width="40" height="100" rx="2" />
        <rect x="115" y="30" width="40" height="100" rx="2" />
      </g>

      {/* Column Headers */}
      <g fill="red" fontSize="6" fontFamily="sans-serif" fontWeight="bold">
        <text x="20" y="25">
          APPLIED
        </text>
        <text x="70" y="25">
          INTERVIEW
        </text>
        <text x="123" y="25">
          OFFER
        </text>
      </g>

      {/* Moving Application Card */}
      <g>
        <rect
          x="0"
          y="0"
          width="30"
          height="20"
          rx="2"
          fill="none"
          stroke="red"
          strokeWidth="2"
        >
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 20 45 L 70 65 L 120 85"
          />
        </rect>
        {/* Lines on the card to look like text */}
        <g stroke="red" strokeWidth="1">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 25 52 L 75 72 L 125 92"
          />
          <line x1="0" y1="0" x2="15" y2="0" />
          <line x1="0" y1="5" x2="10" y2="5" />
        </g>
      </g>

      {/* Follow-up "Ping" Notification */}
      <g transform="translate(175, 45)">
        <path
          d="M -10 0 L 10 0 M 0 -10 L 0 10"
          stroke="red"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle r="3" fill="red">
          <animate
            attributeName="r"
            values="2;6;2"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Signal Waves */}
        <circle r="8" fill="none" stroke="red" strokeWidth="1">
          <animate
            attributeName="r"
            values="8;15"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Connective Follow-up Line */}
      <path
        d="M 175 60 Q 175 140 90 140"
        fill="none"
        stroke="red"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <text x="100" y="150" fill="red" fontSize="8" fontFamily="monospace">
        FOLLOW-UP LOOP
      </text>
    </svg>
  );
}
function InterviewPrepVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Knowledge Base / Notebook */}
      <g>
        <rect
          x="20"
          y="40"
          width="45"
          height="55"
          rx="2"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
        <line x1="28" y1="55" x2="57" y2="55" stroke="red" strokeWidth="1" />
        <line x1="28" y1="65" x2="57" y2="65" stroke="red" strokeWidth="1" />
        <line x1="28" y1="75" x2="45" y2="75" stroke="red" strokeWidth="1" />
      </g>

      {/* Candidate / Trainee */}
      <g>
        <circle
          cx="100"
          cy="50"
          r="15"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
        {/* Pulsing "Thinking" Core */}
        <circle cx="100" cy="50" r="6" fill="red">
          <animate
            attributeName="r"
            values="4;8;4"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Body */}
        <path
          d="M 80 100 Q 100 85 120 100 L 125 130 L 75 130 Z"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
      </g>

      {/* Feedback/Learning Loop */}
      <path
        id="loopPath"
        d="M 65 65 Q 80 40 95 65"
        fill="none"
        stroke="red"
        strokeWidth="1"
        strokeDasharray="3 2"
      />

      {/* Success/Target Icon */}
      <g transform="translate(155, 65)">
        <circle
          r="18"
          fill="none"
          stroke="red"
          strokeWidth="1"
          strokeDasharray="2 2"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0"
            to="360"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fontFamily="sans-serif"
          fill="red"
        >
          JOB
        </text>
      </g>

      {/* Progress Arrow */}
      <line
        x1="115"
        y1="115"
        x2="145"
        y2="115"
        stroke="red"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      {/* Definition of the arrowhead */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="red" />
        </marker>
      </defs>
    </svg>
  );
}

function StrategicManagementVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Radar / Strategy Grid */}
      <circle
        cx="100"
        cy="80"
        r="60"
        fill="none"
        stroke="red"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="100"
        cy="80"
        r="40"
        fill="none"
        stroke="red"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <line
        x1="40"
        y1="80"
        x2="160"
        y2="80"
        stroke="red"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <line
        x1="100"
        y1="20"
        x2="100"
        y2="140"
        stroke="red"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Radar Sweep */}
      <g transform="translate(100, 80)">
        <path d="M 0 0 L 0 -60 A 60 60 0 0 1 42 -42 Z" fill="red" opacity="0.2">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0"
            to="360"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Strategic Targets (Priority Leads) */}
      <g>
        {/* Target 1 */}
        <circle cx="140" cy="50" r="4" fill="red">
          <animate
            attributeName="opacity"
            values="1;0.2;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Target 2 */}
        <circle cx="60" cy="60" r="4" fill="red">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Target 3 */}
        <circle cx="110" cy="110" r="4" fill="red">
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* The "Filter" (Decision Making) */}
      <path
        d="M 70 20 L 130 20 L 115 50 L 85 50 Z"
        fill="none"
        stroke="red"
        strokeWidth="2"
      />
      <text
        x="100"
        y="15"
        textAnchor="middle"
        fontSize="8"
        fill="red"
        fontWeight="bold"
      >
        QUALITY FILTER
      </text>

      {/* Connection to Central Strategy */}
      <g stroke="red" strokeWidth="1.5" fill="none">
        <polyline points="100,50 100,70" markerEnd="url(#redArrow)" />
      </g>

      {/* Dashboard Stats (Bottom) */}
      <rect
        x="40"
        y="130"
        width="35"
        height="6"
        rx="1"
        fill="red"
        opacity="0.6"
      />
      <rect
        x="82"
        y="130"
        width="35"
        height="6"
        rx="1"
        fill="red"
        opacity="0.6"
      />
      <rect
        x="125"
        y="130"
        width="35"
        height="6"
        rx="1"
        fill="red"
        opacity="0.6"
      />

      {/* Arrowhead Def */}
      <defs>
        <marker
          id="redArrow"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="red" />
        </marker>
      </defs>

      {/* Central "Manager" Icon */}
      <rect
        x="92"
        y="72"
        width="16"
        height="16"
        rx="2"
        fill="none"
        stroke="red"
        strokeWidth="2"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 80"
          to="90 100 80"
          dur="3s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}

function DailyQuotaVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Sun/Day Cycle Icon */}
      <g transform="translate(170, 30)">
        <circle
          cx="0"
          cy="0"
          r="10"
          fill="none"
          stroke="red"
          strokeWidth="2"
          strokeDasharray="3 2"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0"
            to="360"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="0" cy="0" r="5" fill="red" />
      </g>

      {/* Progress Track */}
      <rect x="20" y="120" width="160" height="4" rx="2" fill="#eee" />

      {/* The 5 Optimal Slots */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${30 + i * 35}, 70)`}>
          {/* Document/App Icon */}
          <rect
            x="-12"
            y="-15"
            width="24"
            height="30"
            rx="2"
            fill="none"
            stroke="red"
            strokeWidth="2"
          >
            <animate
              attributeName="stroke-width"
              values="2;3;2"
              dur="2s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </rect>

          {/* Checkmark that appears */}
          <path
            d="M -5 0 L -1 4 L 6 -4"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;1;1"
              dur="3s"
              begin={`${i * 0.6}s`}
              repeatCount="indefinite"
            />
          </path>

          {/* Connection to progress bar */}
          <line
            x1="0"
            y1="15"
            x2="0"
            y2="50"
            stroke="red"
            strokeWidth="1"
            strokeDasharray="2 2"
          />

          {/* Status Glow */}
          <circle r="4" cy="50" fill="red">
            <animate
              attributeName="r"
              values="3;5;3"
              dur="1.5s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

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
        DAILY QUALITY TARGET: 5/5
      </text>

      {/* Efficiency Curve */}
      <path
        d="M 20 100 Q 100 40 180 100"
        fill="none"
        stroke="red"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}
function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "deploy":
      return <DeployVisual />;
    case "ai":
      return <AIVisual />;
    case "collab":
      return <CollabVisual />;
    case "security":
      return <SecurityVisual />;
    case "interview":
      return <InterviewPrepVisual />;
    case "apptracking":
      return <AppTrackingVisual />;
    case "strategic":
      return <StrategicManagementVisual />;
    case "quota":
      return <DailyQuotaVisual />;
    default:
      return <DeployVisual />;
  }
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Content */}
      <div className="flex-1 grid lg:ml-8 lg:grid-cols-[2fr_1fr] items-center">
        <div>
          <h3 className="text-2xl lg:text-3xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
            {feature.title}
          </h3>
          <p className="text-md text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-48 h-40 text-foreground">
            <AnimatedVisual type={feature.visual} />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="features" ref={sectionRef} className="relative">
      <div className="max-w-[1400px] mx-auto px-6 mt-5 lg:px-12">
        {/* Header */}
        <div className="mb-2 ">
          <span className="inline-flex items-center gap-3 text-xl font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            IT Career & Placement Support
          </span>
          <h2
            className={`text-2xl text-destructive lg:text-4xl font-display tracking-tight transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            What we do
            <br />
            {/* <span className="text-muted-foreground">
              Nothing you don&apos;t.
            </span> */}
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
