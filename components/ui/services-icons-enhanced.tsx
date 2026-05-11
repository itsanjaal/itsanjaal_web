"use client";

export function WebDevIcon({ className = "w-24 h-24" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes rotateBrackets { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes floatNode { 0%, 100% { cy: 80; } 50% { cy: 60; } }
          @keyframes pulse { 0%, 100% { r: 6; opacity: 0.6; } 50% { r: 9; opacity: 1; } }
          @keyframes dash { 0% { stroke-dashoffset: 50; } 100% { stroke-dashoffset: 0; } }
        `}</style>
      </defs>

      {/* Outer rotating circle */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="red"
        strokeWidth="2"
        opacity="0.3"
        style={{ animation: "rotateBrackets 20s linear infinite" }}
      />

      {/* Brackets */}
      <text
        x="40"
        y="110"
        fontSize="60"
        fontFamily="monospace"
        fontWeight="bold"
        fill="red"
        opacity="0.7"
      >
        &lt;
      </text>
      <text
        x="120"
        y="110"
        fontSize="60"
        fontFamily="monospace"
        fontWeight="bold"
        fill="red"
        opacity="0.7"
      >
        &gt;
      </text>

      {/* Center circle with pulsing effect */}
      <circle
        cx="100"
        cy="100"
        r="12"
        fill="none"
        stroke="red"
        strokeWidth="2"
        opacity="0.5"
        style={{ animation: "pulse 2s ease-in-out infinite" }}
      />
      <circle cx="100" cy="100" r="4" fill="red" opacity="0.8" />

      {/* Orbiting nodes */}
      <circle
        cx="140"
        cy="70"
        r="5"
        fill="red"
        opacity="0.6"
        style={{ animation: "rotateBrackets 8s linear infinite" }}
      />
      <circle
        cx="60"
        cy="130"
        r="5"
        fill="red"
        opacity="0.6"
        style={{ animation: "rotateBrackets 8s linear infinite reverse" }}
      />

      {/* Connecting lines */}
      <line
        x1="100"
        y1="100"
        x2="140"
        y2="70"
        stroke="red"
        strokeWidth="1.5"
        opacity="0.3"
        style={{ animation: "dash 3s ease-in-out infinite" }}
        strokeDasharray="50"
      />
      <line
        x1="100"
        y1="100"
        x2="60"
        y2="130"
        stroke="red"
        strokeWidth="1.5"
        opacity="0.3"
        style={{ animation: "dash 3s ease-in-out infinite 0.5s" }}
        strokeDasharray="50"
      />
    </svg>
  );
}

export function MobileAppIcon({ className = "w-24 h-24" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes rotatePhone { 0% { transform: rotate(-15deg); } 50% { transform: rotate(0deg); } 100% { transform: rotate(-15deg); } }
          @keyframes slideContent { 0% { y: -10; } 50% { y: 0; } 100% { y: -10; } }
          @keyframes glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        `}</style>
      </defs>

      {/* Phone frame rotating */}
      <g
        style={{
          animation: "rotatePhone 4s ease-in-out infinite",
          transformOrigin: "100px 100px",
        }}
      >
        <rect
          x="70"
          y="40"
          width="60"
          height="120"
          rx="6"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <rect
          x="75"
          y="48"
          width="50"
          height="95"
          fill="none"
          stroke="red"
          strokeWidth="1"
          opacity="0.4"
          style={{ animation: "slideContent 3s ease-in-out infinite" }}
        />

        {/* Screen content lines */}
        <line
          x1="80"
          y1="60"
          x2="120"
          y2="60"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.5"
          style={{ animation: "slideContent 3s ease-in-out infinite 0.2s" }}
        />
        <line
          x1="80"
          y1="75"
          x2="115"
          y2="75"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.5"
          style={{ animation: "slideContent 3s ease-in-out infinite 0.4s" }}
        />
        <line
          x1="80"
          y1="90"
          x2="120"
          y2="90"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.5"
          style={{ animation: "slideContent 3s ease-in-out infinite 0.6s" }}
        />

        {/* Home button */}
        <circle cx="100" cy="150" r="3" fill="red" opacity="0.5" />
      </g>

      {/* Pulsing glow around phone */}
      <circle
        cx="100"
        cy="100"
        r="75"
        fill="none"
        stroke="red"
        strokeWidth="1"
        opacity="0.2"
        style={{ animation: "glow 2s ease-in-out infinite" }}
      />
    </svg>
  );
}

export function ITCourseIcon({ className = "w-24 h-24" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes slideBooks { 0% { y: 0; } 50% { y: -8px; } 100% { y: 0; } }
          @keyframes checkmark { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 1; } }
          @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </defs>

      {/* Stack of books */}
      <rect
        x="50"
        y="100"
        width="70"
        height="50"
        rx="3"
        fill="none"
        stroke="red"
        strokeWidth="2.5"
        opacity="0.7"
        style={{ animation: "slideBooks 3s ease-in-out infinite" }}
      />
      <rect
        x="60"
        y="90"
        width="70"
        height="50"
        rx="3"
        fill="none"
        stroke="red"
        strokeWidth="2.5"
        opacity="0.5"
        style={{ animation: "slideBooks 3s ease-in-out infinite 0.3s" }}
      />
      <rect
        x="70"
        y="80"
        width="70"
        height="50"
        rx="3"
        fill="none"
        stroke="red"
        strokeWidth="2.5"
        opacity="0.3"
        style={{ animation: "slideBooks 3s ease-in-out infinite 0.6s" }}
      />

      {/* Checkmark/Badge */}
      <circle
        cx="140"
        cy="50"
        r="25"
        fill="none"
        stroke="red"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M130 50 L137 58 L150 42"
        stroke="red"
        strokeWidth="2.5"
        fill="none"
        style={{ animation: "checkmark 2s ease-in-out infinite 0.5s" }}
      />

      {/* Rotating outer ring */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="red"
        strokeWidth="1.5"
        opacity="0.2"
        style={{ animation: "rotate 15s linear infinite" }}
      />
    </svg>
  );
}

export function UIUXIcon({ className = "w-24 h-24" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes morph { 0%, 100% { d: path('M100,50 Q130,50 150,80 Q150,120 100,150 Q50,120 50,80 Q70,50 100,50'); } 50% { d: path('M100,40 Q140,45 160,75 Q165,130 100,160 Q35,130 40,75 Q60,40 100,40'); } }
          @keyframes fadeGrid { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.4; } }
          @keyframes rotatePalette { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </defs>

      {/* Morphing shape */}
      <path
        d="M100,50 Q130,50 150,80 Q150,120 100,150 Q50,120 50,80 Q70,50 100,50"
        fill="none"
        stroke="red"
        strokeWidth="2.5"
        opacity="0.6"
        style={{ animation: "morph 5s ease-in-out infinite" }}
      />

      {/* Grid pattern */}
      <g style={{ animation: "fadeGrid 3s ease-in-out infinite" }}>
        <line
          x1="60"
          y1="50"
          x2="140"
          y2="50"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="60"
          y1="85"
          x2="140"
          y2="85"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="60"
          y1="120"
          x2="140"
          y2="120"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="60"
          y1="155"
          x2="140"
          y2="155"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="60"
          y1="50"
          x2="60"
          y2="155"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="100"
          y1="50"
          x2="100"
          y2="155"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="140"
          y1="50"
          x2="140"
          y2="155"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.4"
        />
      </g>

      {/* Color palette dots rotating */}
      <g
        style={{
          animation: "rotatePalette 6s linear infinite",
          transformOrigin: "100px 100px",
        }}
      >
        <circle cx="130" cy="100" r="6" fill="red" opacity="0.7" />
        <circle cx="100" cy="65" r="6" fill="red" opacity="0.6" />
        <circle cx="70" cy="100" r="6" fill="red" opacity="0.5" />
      </g>
    </svg>
  );
}

export function DevOpsIcon({ className = "w-24 h-24" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes rotateGear1 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes rotateGear2 { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
          @keyframes flowRight { 0% { x: 30; opacity: 0; } 50% { opacity: 1; } 100% { x: 150; opacity: 0; } }
          @keyframes pulse { 0%, 100% { r: 5; opacity: 0.5; } 50% { r: 8; opacity: 1; } }
        `}</style>
      </defs>

      {/* Left gear */}
      <g
        style={{
          animation: "rotateGear1 8s linear infinite",
          transformOrigin: "70px 100px",
        }}
      >
        <circle
          cx="70"
          cy="100"
          r="28"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <circle cx="70" cy="70" r="4" fill="red" />
        <circle cx="98" cy="100" r="4" fill="red" />
        <circle cx="70" cy="130" r="4" fill="red" />
        <circle cx="42" cy="100" r="4" fill="red" />
      </g>

      {/* Right gear */}
      <g
        style={{
          animation: "rotateGear2 8s linear infinite",
          transformOrigin: "130px 100px",
        }}
      >
        <circle
          cx="130"
          cy="100"
          r="24"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <circle cx="130" cy="76" r="3.5" fill="red" />
        <circle cx="154" cy="100" r="3.5" fill="red" />
        <circle cx="130" cy="124" r="3.5" fill="red" />
        <circle cx="106" cy="100" r="3.5" fill="red" />
      </g>

      {/* Pipeline arrow/dot */}
      <circle
        cx="50"
        cy="160"
        r="5"
        fill="none"
        stroke="red"
        strokeWidth="1.5"
        opacity="0.5"
        style={{ animation: "flowRight 3s ease-in-out infinite" }}
      />

      {/* Center pulsing node */}
      <circle
        cx="100"
        cy="100"
        r="5"
        fill="red"
        opacity="0.6"
        style={{ animation: "pulse 1.5s ease-in-out infinite" }}
      />

      {/* Outer rotating ring */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="red"
        strokeWidth="1"
        opacity="0.15"
        style={{ animation: "rotateGear1 20s linear infinite" }}
      />
    </svg>
  );
}

export function BioinformaticsIcon({ className = "w-24 h-24" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes helix { 0% { transform: rotateZ(0deg); } 100% { transform: rotateZ(360deg); } }
          @keyframes spiral { 0%, 100% { cy: 80; } 50% { cy: 60; } }
          @keyframes pulse { 0%, 100% { r: 4; opacity: 0.5; } 50% { r: 7; opacity: 1; } }
          @keyframes slideDown { 0% { y: -20; opacity: 0; } 50% { opacity: 1; } 100% { y: 20; opacity: 0; } }
        `}</style>
      </defs>

      {/* DNA-like double helix */}
      <g
        style={{
          animation: "helix 10s linear infinite",
          transformOrigin: "100px 100px",
        }}
      >
        {/* Left strand */}
        <path
          d="M 80 50 Q 70 80 80 110 Q 90 140 80 170"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
          opacity="0.7"
        />

        {/* Right strand */}
        <path
          d="M 120 50 Q 130 80 120 110 Q 110 140 120 170"
          fill="none"
          stroke="red"
          strokeWidth="2.5"
          opacity="0.7"
        />

        {/* Connecting rungs */}
        <line
          x1="80"
          y1="70"
          x2="120"
          y2="70"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line
          x1="80"
          y1="110"
          x2="120"
          y2="110"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line
          x1="80"
          y1="150"
          x2="120"
          y2="150"
          stroke="red"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </g>

      {/* Pulsing nodes on helix */}
      <circle
        cx="80"
        cy="70"
        r="4"
        fill="red"
        opacity="0.6"
        style={{ animation: "pulse 2s ease-in-out infinite" }}
      />
      <circle
        cx="120"
        cy="110"
        r="4"
        fill="red"
        opacity="0.6"
        style={{ animation: "pulse 2s ease-in-out infinite 0.3s" }}
      />
      <circle
        cx="80"
        cy="150"
        r="4"
        fill="red"
        opacity="0.6"
        style={{ animation: "pulse 2s ease-in-out infinite 0.6s" }}
      />

      {/* Sliding center indicator */}
      <circle
        cx="100"
        cy="100"
        r="6"
        fill="none"
        stroke="red"
        strokeWidth="2"
        opacity="0.5"
        style={{ animation: "slideDown 3s ease-in-out infinite" }}
      />
    </svg>
  );
}

export function ContentWritingIcon({ className = "w-24 h-24" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes typewriter { 0% { width: 0; } 100% { width: 60px; } }
          @keyframes fadeLines { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
          @keyframes cursorBlink { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }
          @keyframes rotatePage { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </defs>

      {/* Page/document background */}
      <rect
        x="50"
        y="40"
        width="100"
        height="120"
        rx="4"
        fill="none"
        stroke="red"
        strokeWidth="2.5"
        opacity="0.6"
      />

      {/* Text lines with fade animation */}
      <line
        x1="65"
        y1="60"
        x2="135"
        y2="60"
        stroke="red"
        strokeWidth="2"
        opacity="0.5"
        style={{ animation: "fadeLines 2.5s ease-in-out infinite" }}
      />
      <line
        x1="65"
        y1="80"
        x2="130"
        y2="80"
        stroke="red"
        strokeWidth="2"
        opacity="0.5"
        style={{ animation: "fadeLines 2.5s ease-in-out infinite 0.3s" }}
      />
      <line
        x1="65"
        y1="100"
        x2="135"
        y2="100"
        stroke="red"
        strokeWidth="2"
        opacity="0.5"
        style={{ animation: "fadeLines 2.5s ease-in-out infinite 0.6s" }}
      />
      <line
        x1="65"
        y1="120"
        x2="125"
        y2="120"
        stroke="red"
        strokeWidth="2"
        opacity="0.5"
        style={{ animation: "fadeLines 2.5s ease-in-out infinite 0.9s" }}
      />
      <line
        x1="65"
        y1="140"
        x2="115"
        y2="140"
        stroke="red"
        strokeWidth="2"
        opacity="0.5"
        style={{ animation: "fadeLines 2.5s ease-in-out infinite 1.2s" }}
      />

      {/* Cursor/pen indicator */}
      <circle
        cx="135"
        cy="60"
        r="3"
        fill="red"
        opacity="0.7"
        style={{ animation: "cursorBlink 1.2s ease-in-out infinite" }}
      />

      {/* Rotating outer accent */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="red"
        strokeWidth="1"
        opacity="0.15"
        style={{ animation: "rotatePage 15s linear infinite" }}
      />
    </svg>
  );
}

export function AIStrategyIcon({ className = "w-24 h-24" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes orbitSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes orbitFast { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
          @keyframes pulse { 0%, 100% { r: 4; opacity: 0.4; } 50% { r: 7; opacity: 1; } }
          @keyframes glow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
          @keyframes blink { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        `}</style>
      </defs>

      {/* Central brain icon */}
      <circle
        cx="100"
        cy="100"
        r="18"
        fill="none"
        stroke="red"
        strokeWidth="2.5"
        opacity="0.7"
      />
      <path
        d="M 88 88 Q 100 80 112 88"
        fill="none"
        stroke="red"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M 88 112 Q 100 120 112 112"
        fill="none"
        stroke="red"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Orbiting nodes - slow orbit */}
      <g
        style={{
          animation: "orbitSlow 10s linear infinite",
          transformOrigin: "100px 100px",
        }}
      >
        <circle cx="160" cy="100" r="4" fill="red" opacity="0.7" />
      </g>
      <g
        style={{
          animation: "orbitSlow 10s linear infinite 2s",
          transformOrigin: "100px 100px",
        }}
      >
        <circle cx="160" cy="100" r="4" fill="red" opacity="0.6" />
      </g>
      <g
        style={{
          animation: "orbitSlow 10s linear infinite 4s",
          transformOrigin: "100px 100px",
        }}
      >
        <circle cx="160" cy="100" r="4" fill="red" opacity="0.5" />
      </g>

      {/* Orbiting nodes - fast orbit */}
      <g
        style={{
          animation: "orbitFast 8s linear infinite",
          transformOrigin: "100px 100px",
        }}
      >
        <circle cx="130" cy="100" r="3" fill="red" opacity="0.6" />
      </g>
      <g
        style={{
          animation: "orbitFast 8s linear infinite 1.5s",
          transformOrigin: "100px 100px",
        }}
      >
        <circle cx="130" cy="100" r="3" fill="red" opacity="0.5" />
      </g>

      {/* Outer pulsing ring */}
      <circle
        cx="100"
        cy="100"
        r="75"
        fill="none"
        stroke="red"
        strokeWidth="1.5"
        opacity="0.3"
        style={{ animation: "glow 2s ease-in-out infinite" }}
      />

      {/* Corner accent nodes */}
      <circle
        cx="70"
        cy="70"
        r="4"
        fill="red"
        opacity="0.5"
        style={{ animation: "pulse 2s ease-in-out infinite" }}
      />
      <circle
        cx="130"
        cy="130"
        r="4"
        fill="red"
        opacity="0.5"
        style={{ animation: "pulse 2s ease-in-out infinite 0.5s" }}
      />
    </svg>
  );
}

export function CareerSupportIcon({ className = "w-24 h-24" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes climbUp { 0%, 100% { cy: 140; opacity: 0.3; } 50% { cy: 60; opacity: 1; } }
          @keyframes expand { 0%, 100% { r: 8; } 50% { r: 15; } }
          @keyframes fadeIn { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.7; } }
          @keyframes rotateStar { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </defs>

      {/* Ascending path - ladder/stairs */}
      <line
        x1="60"
        y1="150"
        x2="140"
        y2="50"
        stroke="red"
        strokeWidth="2.5"
        opacity="0.5"
        style={{ animation: "fadeIn 3s ease-in-out infinite" }}
      />

      {/* Rungs of ladder */}
      <line
        x1="55"
        y1="155"
        x2="75"
        y2="135"
        stroke="red"
        strokeWidth="2"
        opacity="0.4"
      />
      <line
        x1="75"
        y1="125"
        x2="95"
        y2="105"
        stroke="red"
        strokeWidth="2"
        opacity="0.4"
      />
      <line
        x1="95"
        y1="105"
        x2="115"
        y2="85"
        stroke="red"
        strokeWidth="2"
        opacity="0.4"
      />
      <line
        x1="115"
        y1="85"
        x2="135"
        y2="65"
        stroke="red"
        strokeWidth="2"
        opacity="0.4"
      />
      <line
        x1="135"
        y1="65"
        x2="155"
        y2="45"
        stroke="red"
        strokeWidth="2"
        opacity="0.4"
      />

      {/* Climbing circle/indicator */}
      <circle
        cx="70"
        cy="130"
        r="5"
        fill="red"
        opacity="0.7"
        style={{ animation: "climbUp 4s ease-in-out infinite" }}
      />
      <circle
        cx="95"
        cy="105"
        r="5"
        fill="red"
        opacity="0.6"
        style={{ animation: "climbUp 4s ease-in-out infinite 0.5s" }}
      />
      <circle
        cx="120"
        cy="80"
        r="5"
        fill="red"
        opacity="0.5"
        style={{ animation: "climbUp 4s ease-in-out infinite 1s" }}
      />

      {/* Star at the top */}
      <circle
        cx="140"
        cy="50"
        r="8"
        fill="none"
        stroke="red"
        strokeWidth="2"
        opacity="0.7"
        style={{ animation: "expand 2s ease-in-out infinite" }}
      />
      <circle
        cx="140"
        cy="50"
        r="3"
        fill="red"
        style={{ animation: "rotateStar 6s linear infinite" }}
      />

      {/* Radiating glow from star */}
      <circle
        cx="140"
        cy="50"
        r="20"
        fill="none"
        stroke="red"
        strokeWidth="1"
        opacity="0.2"
        style={{ animation: "expand 2s ease-in-out infinite 0.3s" }}
      />
    </svg>
  );
}

export function EnhancedServiceIcon({ service }: { service: string }) {
  const icons: Record<string, React.ReactNode> = {
    "web-development": <WebDevIcon />,
    "mobile-app-development": <MobileAppIcon />,
    "it-course": <ITCourseIcon />,
    "ui-ux-design": <UIUXIcon />,
    "devops": <DevOpsIcon />,
    "bioinfo": <BioinformaticsIcon />,
    "content-writing": <ContentWritingIcon />,
    "ai-strategy-prompt-engineering": <AIStrategyIcon />,
    "it-career": <CareerSupportIcon />,
  };

  return (
    <div className="w-24 h-24 flex items-center justify-center text-black">
      {icons[service]}
    </div>
  );
}
