"use client";

export function WebDevBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes float1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-30px) rotate(180deg); } }
          @keyframes float2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(30px) rotate(180deg); } }
          @keyframes float3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
          @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        `}</style>
      </defs>
      <rect width="400" height="400" fill="white" opacity="0.02" />

      {/* Code brackets - floating */}
      <g style={{ animation: "float1 6s ease-in-out infinite" }} opacity="0.1">
        <text
          x="50"
          y="80"
          fontSize="80"
          fontFamily="monospace"
          fontWeight="bold"
          fill="black"
        >
          &lt;
        </text>
        <text
          x="320"
          y="320"
          fontSize="80"
          fontFamily="monospace"
          fontWeight="bold"
          fill="black"
        >
          &gt;
        </text>
      </g>

      {/* Circles representing nodes/connections */}
      <circle
        cx="80"
        cy="100"
        r="8"
        fill="black"
        opacity="0.15"
        style={{ animation: "pulse 3s ease-in-out infinite" }}
      />
      <circle
        cx="320"
        cy="300"
        r="8"
        fill="black"
        opacity="0.15"
        style={{ animation: "pulse 3s ease-in-out infinite 0.5s" }}
      />
      <circle
        cx="200"
        cy="200"
        r="6"
        fill="black"
        opacity="0.15"
        style={{ animation: "pulse 3s ease-in-out infinite 1s" }}
      />

      {/* Connecting lines */}
      <line
        x1="80"
        y1="100"
        x2="320"
        y2="300"
        stroke="black"
        strokeWidth="1"
        opacity="0.1"
      />
      <line
        x1="80"
        y1="100"
        x2="200"
        y2="200"
        stroke="black"
        strokeWidth="1"
        opacity="0.1"
      />
      <line
        x1="200"
        y1="200"
        x2="320"
        y2="300"
        stroke="black"
        strokeWidth="1"
        opacity="0.1"
      />
    </svg>
  );
}

export function MobileAppBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes rotateReverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
          @keyframes sway { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(20px); } }
        `}</style>
      </defs>
      <rect width="400" height="400" fill="white" opacity="0.02" />

      {/* Phone frames rotating */}
      <g style={{ animation: "rotate 20s linear infinite" }} opacity="0.1">
        <rect
          x="150"
          y="50"
          width="100"
          height="180"
          rx="8"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <rect
          x="160"
          y="65"
          width="80"
          height="140"
          fill="black"
          opacity="0.05"
        />
      </g>

      <g
        style={{ animation: "rotateReverse 20s linear infinite" }}
        opacity="0.1"
      >
        <rect
          x="150"
          y="170"
          width="100"
          height="180"
          rx="8"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <rect
          x="160"
          y="185"
          width="80"
          height="140"
          fill="black"
          opacity="0.05"
        />
      </g>

      {/* Circular nodes */}
      <circle
        cx="100"
        cy="100"
        r="20"
        fill="none"
        stroke="black"
        strokeWidth="1"
        opacity="0.1"
        style={{ animation: "rotate 10s linear infinite" }}
      />
      <circle
        cx="300"
        cy="300"
        r="20"
        fill="none"
        stroke="black"
        strokeWidth="1"
        opacity="0.1"
        style={{ animation: "rotateReverse 10s linear infinite" }}
      />

      {/* Dots */}
      <circle
        cx="100"
        cy="100"
        r="3"
        fill="black"
        opacity="0.15"
        style={{ animation: "sway 4s ease-in-out infinite" }}
      />
      <circle
        cx="300"
        cy="300"
        r="3"
        fill="black"
        opacity="0.15"
        style={{ animation: "sway 4s ease-in-out infinite 0.5s" }}
      />
    </svg>
  );
}

export function ITCourseBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes slideDown { 0% { transform: translateY(-20px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(20px); opacity: 0; } }
          @keyframes expand { 0%, 100% { r: 15px; } 50% { r: 25px; } }
        `}</style>
      </defs>
      <rect width="400" height="400" fill="white" opacity="0.02" />

      {/* Books/layers */}
      <rect
        x="80"
        y="100"
        width="80"
        height="60"
        fill="none"
        stroke="black"
        strokeWidth="2"
        opacity="0.1"
      />
      <rect
        x="90"
        y="110"
        width="80"
        height="60"
        fill="none"
        stroke="black"
        strokeWidth="2"
        opacity="0.1"
        style={{ animation: "slideDown 4s ease-in-out infinite" }}
      />
      <rect
        x="100"
        y="120"
        width="80"
        height="60"
        fill="none"
        stroke="black"
        strokeWidth="2"
        opacity="0.1"
        style={{ animation: "slideDown 4s ease-in-out infinite 0.5s" }}
      />

      {/* Expanding circles for emphasis */}
      <circle
        cx="250"
        cy="150"
        r="15"
        fill="none"
        stroke="black"
        strokeWidth="1"
        opacity="0.15"
        style={{ animation: "expand 3s ease-in-out infinite" }}
      />
      <circle
        cx="250"
        cy="150"
        r="15"
        fill="none"
        stroke="black"
        strokeWidth="1"
        opacity="0.1"
        style={{ animation: "expand 3s ease-in-out infinite 0.5s" }}
      />

      {/* Checkmarks appearing */}
      <g
        opacity="0.1"
        style={{ animation: "slideDown 4s ease-in-out infinite 1s" }}
      >
        <polyline
          points="260,280 270,290 290,270"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export function UIUXBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes morph { 0%, 100% { d: path('M150,100 Q200,50 250,100 L250,250 Q200,300 150,250 Z'); } 50% { d: path('M150,80 Q200,40 250,120 L270,250 Q200,320 130,250 Z'); } }
          @keyframes dash { 0% { stroke-dashoffset: 100; } 100% { stroke-dashoffset: 0; } }
          @keyframes fadeInOut { 0%, 100% { opacity: 0.05; } 50% { opacity: 0.2; } }
        `}</style>
      </defs>
      <rect width="400" height="400" fill="white" opacity="0.02" />

      {/* Morphing shape */}
      <path
        d="M150,100 Q200,50 250,100 L250,250 Q200,300 150,250 Z"
        fill="none"
        stroke="black"
        strokeWidth="2"
        opacity="0.1"
        style={{ animation: "morph 6s ease-in-out infinite" }}
      />

      {/* Grid pattern animating */}
      <g
        opacity="0.1"
        style={{ animation: "fadeInOut 4s ease-in-out infinite" }}
      >
        <line x1="80" y1="80" x2="320" y2="80" stroke="black" strokeWidth="1" />
        <line
          x1="80"
          y1="140"
          x2="320"
          y2="140"
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1="80"
          y1="200"
          x2="320"
          y2="200"
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1="80"
          y1="260"
          x2="320"
          y2="260"
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1="80"
          y1="320"
          x2="320"
          y2="320"
          stroke="black"
          strokeWidth="1"
        />
        <line x1="80" y1="80" x2="80" y2="320" stroke="black" strokeWidth="1" />
        <line
          x1="140"
          y1="80"
          x2="140"
          y2="320"
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="80"
          x2="200"
          y2="320"
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1="260"
          y1="80"
          x2="260"
          y2="320"
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1="320"
          y1="80"
          x2="320"
          y2="320"
          stroke="black"
          strokeWidth="1"
        />
      </g>

      {/* Palette dots */}
      <circle
        cx="100"
        cy="150"
        r="6"
        fill="black"
        opacity="0.15"
        style={{ animation: "fadeInOut 3s ease-in-out infinite" }}
      />
      <circle
        cx="200"
        cy="250"
        r="6"
        fill="black"
        opacity="0.15"
        style={{ animation: "fadeInOut 3s ease-in-out infinite 0.5s" }}
      />
      <circle
        cx="300"
        cy="150"
        r="6"
        fill="black"
        opacity="0.15"
        style={{ animation: "fadeInOut 3s ease-in-out infinite 1s" }}
      />
    </svg>
  );
}

export function DevOpsBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes pulse { 0%, 100% { r: 8px; opacity: 0.15; } 50% { r: 12px; opacity: 0.3; } }
          @keyframes flowRight { 0% { x: 0; } 100% { x: 200px; } }
        `}</style>
      </defs>
      <rect width="400" height="400" fill="white" opacity="0.02" />

      {/* Gears rotating */}
      <g style={{ animation: "rotate 20s linear infinite" }} opacity="0.1">
        <circle
          cx="100"
          cy="120"
          r="30"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
        <circle cx="100" cy="90" r="5" fill="black" />
        <circle cx="100" cy="150" r="5" fill="black" />
        <circle cx="70" cy="120" r="5" fill="black" />
        <circle cx="130" cy="120" r="5" fill="black" />
      </g>

      <g
        style={{ animation: "rotate 15s linear infinite reverse" }}
        opacity="0.1"
      >
        <circle
          cx="300"
          cy="250"
          r="25"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
        <circle cx="300" cy="225" r="4" fill="black" />
        <circle cx="300" cy="275" r="4" fill="black" />
        <circle cx="275" cy="250" r="4" fill="black" />
        <circle cx="325" cy="250" r="4" fill="black" />
      </g>

      {/* Pipeline flow */}
      <g
        style={{ animation: "flowRight 4s ease-in-out infinite" }}
        opacity="0.1"
      >
        <circle cx="50" cy="200" r="6" fill="black" />
        <line
          x1="56"
          y1="200"
          x2="100"
          y2="200"
          stroke="black"
          strokeWidth="1"
        />
      </g>

      {/* Pulsing nodes */}
      <circle
        cx="150"
        cy="200"
        r="8"
        fill="black"
        opacity="0.15"
        style={{ animation: "pulse 2s ease-in-out infinite" }}
      />
      <circle
        cx="250"
        cy="200"
        r="8"
        fill="black"
        opacity="0.15"
        style={{ animation: "pulse 2s ease-in-out infinite 0.5s" }}
      />
      <circle
        cx="350"
        cy="200"
        r="8"
        fill="black"
        opacity="0.15"
        style={{ animation: "pulse 2s ease-in-out infinite 1s" }}
      />
    </svg>
  );
}

export function BioinformaticsBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes helix { 0% { transform: rotateY(0deg) rotateX(0deg); } 100% { transform: rotateY(360deg) rotateX(360deg); } }
          @keyframes spiral { 0% { transform: translateY(-100px) rotate(0deg); } 100% { transform: translateY(100px) rotate(720deg); } }
          @keyframes pulse { 0%, 100% { r: 3px; opacity: 0.2; } 50% { r: 6px; opacity: 0.4; } }
        `}</style>
      </defs>
      <rect width="400" height="400" fill="white" opacity="0.02" />

      {/* DNA-like helixes */}
      <g opacity="0.1" style={{ animation: "spiral 8s ease-in-out infinite" }}>
        <path
          d="M 100 50 Q 120 100 100 150 Q 80 200 100 250"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M 300 50 Q 320 100 300 150 Q 280 200 300 250"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="100"
          y1="50"
          x2="300"
          y2="50"
          stroke="black"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="100"
          y1="150"
          x2="300"
          y2="150"
          stroke="black"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="100"
          y1="250"
          x2="300"
          y2="250"
          stroke="black"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>

      {/* Nodes along the helix */}
      <circle
        cx="100"
        cy="50"
        r="3"
        fill="black"
        opacity="0.2"
        style={{ animation: "pulse 3s ease-in-out infinite" }}
      />
      <circle
        cx="200"
        cy="100"
        r="3"
        fill="black"
        opacity="0.2"
        style={{ animation: "pulse 3s ease-in-out infinite 0.3s" }}
      />
      <circle
        cx="300"
        cy="150"
        r="3"
        fill="black"
        opacity="0.2"
        style={{ animation: "pulse 3s ease-in-out infinite 0.6s" }}
      />
      <circle
        cx="200"
        cy="200"
        r="3"
        fill="black"
        opacity="0.2"
        style={{ animation: "pulse 3s ease-in-out infinite 0.9s" }}
      />
      <circle
        cx="100"
        cy="250"
        r="3"
        fill="black"
        opacity="0.2"
        style={{ animation: "pulse 3s ease-in-out infinite 1.2s" }}
      />
    </svg>
  );
}

export function ContentWritingBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes typewrite { 0% { width: 0; } 100% { width: 200px; } }
          @keyframes fadeIn { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }
          @keyframes slide { 0%, 100% { transform: translateX(-10px); } 50% { transform: translateX(10px); } }
        `}</style>
      </defs>
      <rect width="400" height="400" fill="white" opacity="0.02" />

      {/* Lines of text */}
      <g opacity="0.1" style={{ animation: "fadeIn 4s ease-in-out infinite" }}>
        <line x1="50" y1="80" x2="350" y2="80" stroke="black" strokeWidth="2" />
        <line
          x1="50"
          y1="110"
          x2="300"
          y2="110"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="50"
          y1="140"
          x2="320"
          y2="140"
          stroke="black"
          strokeWidth="2"
        />
      </g>

      <g
        opacity="0.1"
        style={{ animation: "fadeIn 4s ease-in-out infinite 0.5s" }}
      >
        <line
          x1="50"
          y1="200"
          x2="350"
          y2="200"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="50"
          y1="230"
          x2="280"
          y2="230"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="50"
          y1="260"
          x2="310"
          y2="260"
          stroke="black"
          strokeWidth="2"
        />
      </g>

      {/* Pen/cursor */}
      <g style={{ animation: "slide 3s ease-in-out infinite" }} opacity="0.15">
        <circle cx="200" cy="300" r="4" fill="black" />
        <line
          x1="200"
          y1="300"
          x2="200"
          y2="330"
          stroke="black"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export function AIStrategyBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes pulse { 0%, 100% { r: 5px; opacity: 0.2; } 50% { r: 10px; opacity: 0.4; } }
          @keyframes orbitSlow { 0% { transform: rotate(0deg) translateX(50px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); } }
          @keyframes orbitFast { 0% { transform: rotate(0deg) translateX(40px) rotate(0deg); } 100% { transform: rotate(-360deg) translateX(40px) rotate(360deg); } }
          @keyframes glow { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.3; } }
        `}</style>
      </defs>
      <rect width="400" height="400" fill="white" opacity="0.02" />

      {/* Central brain/core */}
      <circle
        cx="200"
        cy="200"
        r="20"
        fill="none"
        stroke="black"
        strokeWidth="2"
        opacity="0.2"
        style={{ animation: "glow 3s ease-in-out infinite" }}
      />

      {/* Orbiting nodes - brain connections */}
      <g
        style={{
          animation: "orbitSlow 10s linear infinite",
          transformOrigin: "200px 200px",
        }}
        opacity="0.15"
      >
        <circle cx="250" cy="200" r="4" fill="black" />
      </g>
      <g
        style={{
          animation: "orbitSlow 10s linear infinite 2s",
          transformOrigin: "200px 200px",
        }}
        opacity="0.15"
      >
        <circle cx="250" cy="200" r="4" fill="black" />
      </g>
      <g
        style={{
          animation: "orbitFast 8s linear infinite",
          transformOrigin: "200px 200px",
        }}
        opacity="0.15"
      >
        <circle cx="220" cy="200" r="3" fill="black" />
      </g>
      <g
        style={{
          animation: "orbitFast 8s linear infinite 1s",
          transformOrigin: "200px 200px",
        }}
        opacity="0.15"
      >
        <circle cx="220" cy="200" r="3" fill="black" />
      </g>

      {/* Pulsing points */}
      <circle
        cx="150"
        cy="150"
        r="5"
        fill="black"
        opacity="0.2"
        style={{ animation: "pulse 2.5s ease-in-out infinite" }}
      />
      <circle
        cx="250"
        cy="250"
        r="5"
        fill="black"
        opacity="0.2"
        style={{ animation: "pulse 2.5s ease-in-out infinite 0.5s" }}
      />
      <circle
        cx="150"
        cy="250"
        r="5"
        fill="black"
        opacity="0.2"
        style={{ animation: "pulse 2.5s ease-in-out infinite 1s" }}
      />
      <circle
        cx="250"
        cy="150"
        r="5"
        fill="black"
        opacity="0.2"
        style={{ animation: "pulse 2.5s ease-in-out infinite 1.5s" }}
      />
    </svg>
  );
}

export function CareerSupportBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <style>{`
          @keyframes climbUp { 0% { transform: translateY(100px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-100px); opacity: 0; } }
          @keyframes expand { 0%, 100% { r: 10px; } 50% { r: 20px; } }
          @keyframes rotateSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </defs>
      <rect width="400" height="400" fill="white" opacity="0.02" />

      {/* Ascending stairs/ladder */}
      <g opacity="0.1">
        <line
          x1="80"
          y1="300"
          x2="320"
          y2="100"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="75"
          y1="305"
          x2="95"
          y2="285"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="110"
          y1="270"
          x2="130"
          y2="250"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="145"
          y1="235"
          x2="165"
          y2="215"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="180"
          y1="200"
          x2="200"
          y2="180"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="215"
          y1="165"
          x2="235"
          y2="145"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="250"
          y1="130"
          x2="270"
          y2="110"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="285"
          y1="95"
          x2="305"
          y2="75"
          stroke="black"
          strokeWidth="1.5"
        />
      </g>

      {/* Ascending circles */}
      <circle
        cx="90"
        cy="290"
        r="5"
        fill="black"
        opacity="0.15"
        style={{ animation: "climbUp 5s ease-in-out infinite" }}
      />
      <circle
        cx="140"
        cy="240"
        r="5"
        fill="black"
        opacity="0.15"
        style={{ animation: "climbUp 5s ease-in-out infinite 0.5s" }}
      />
      <circle
        cx="190"
        cy="190"
        r="5"
        fill="black"
        opacity="0.15"
        style={{ animation: "climbUp 5s ease-in-out infinite 1s" }}
      />
      <circle
        cx="240"
        cy="140"
        r="5"
        fill="black"
        opacity="0.15"
        style={{ animation: "climbUp 5s ease-in-out infinite 1.5s" }}
      />
      <circle
        cx="290"
        cy="90"
        r="5"
        fill="black"
        opacity="0.15"
        style={{ animation: "climbUp 5s ease-in-out infinite 2s" }}
      />

      {/* Expanding star at top */}
      <circle
        cx="310"
        cy="75"
        r="10"
        fill="none"
        stroke="black"
        strokeWidth="1"
        opacity="0.15"
        style={{ animation: "expand 3s ease-in-out infinite" }}
      />
    </svg>
  );
}

export function AnimatedBackground({ service }: { service: string }) {
  const backgrounds: Record<string, React.ReactNode> = {
    "web-development": <WebDevBackground />,
    "mobile-app-development": <MobileAppBackground />,
    "it-course": <ITCourseBackground />,
    "ui-ux-design": <UIUXBackground />,
    devops: <DevOpsBackground />,
    bioinformatics: <BioinformaticsBackground />,
    "content-writing": <ContentWritingBackground />,
    "ai-strategy": <AIStrategyBackground />,
    "career-support": <CareerSupportBackground />,
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {backgrounds[service]}
    </div>
  );
}
