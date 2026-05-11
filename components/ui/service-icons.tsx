// Web Development Icon
export function WebDevelopmentIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Central code brackets */}
      <g>
        <path
          d="M 70 60 L 60 80 L 70 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="stroke-width"
            values="2;3;2"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M 130 60 L 140 80 L 130 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="stroke-width"
            values="2;3;2"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <line
          x1="80"
          y1="80"
          x2="120"
          y2="80"
          stroke="currentColor"
          strokeWidth="2"
        >
          <animate
            attributeName="stroke-width"
            values="2;3;2"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>
      </g>

      {/* Orbiting elements */}
      {[0, 1, 2].map((i) => {
        const angle = i * 120 * (Math.PI / 180);
        const radius = 45;
        return (
          <g key={i}>
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="4"
              fill="currentColor"
            >
              <animate
                attributeName="r"
                values="4;6;4"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {/* Pulse ring */}
      <circle
        cx="100"
        cy="80"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0"
      >
        <animate
          attributeName="r"
          values="20;50"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

// Mobile App Development Icon
export function MobileAppIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Phone frame */}
      <rect
        x="70"
        y="40"
        width="60"
        height="100"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Screen */}
      <rect
        x="75"
        y="50"
        width="50"
        height="75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Screen lines (animated) */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="78"
          y1={57 + i * 15}
          x2={98 + (i % 2) * 12}
          y2={57 + i * 15}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <animate
            attributeName="x2"
            values={`${98 + (i % 2) * 12};${105 + (i % 2) * 12};${98 + (i % 2) * 12}`}
            dur="2s"
            begin={`${i * 0.25}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Bottom notch/home button */}
      <circle cx="100" cy="132" r="3" fill="currentColor" opacity="0.5" />

      {/* Orbiting dots */}
      {[0, 1].map((i) => {
        const angle = (i * 180 + 45) * (Math.PI / 180);
        const radius = 50;
        return (
          <circle
            key={i}
            cx={100 + Math.cos(angle) * radius}
            cy={80 + Math.sin(angle) * radius}
            r="3"
            fill="currentColor"
          >
            <animate
              attributeName="r"
              values="3;5;3"
              dur="2s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
            />
          </circle>
        );
      })}
    </svg>
  );
}

// IT Course Icon
export function ITCourseIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Book/Document shape */}
      <path
        d="M 75 50 L 75 120 Q 75 125 80 125 L 120 125 Q 125 125 125 120 L 125 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Book spine */}
      <line
        x1="75"
        y1="50"
        x2="75"
        y2="120"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Pages/lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="82"
          y1={60 + i * 12}
          x2={110 - (i % 2) * 15}
          y2={60 + i * 12}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <animate
            attributeName="x2"
            values={`${110 - (i % 2) * 15};${115 - (i % 2) * 15};${110 - (i % 2) * 15}`}
            dur="2s"
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Orbiting graduation cap elements */}
      <g>
        <circle cx="145" cy="60" r="4" fill="currentColor">
          <animate
            attributeName="r"
            values="4;6;4"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Pulse */}
      <circle
        cx="100"
        cy="85"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0"
      >
        <animate
          attributeName="r"
          values="20;50"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

// UI/UX Design Icon
export function UIUXDesignIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Monitor frame */}
      <rect
        x="55"
        y="40"
        width="90"
        height="65"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Stand */}
      <rect
        x="85"
        y="105"
        width="30"
        height="8"
        fill="currentColor"
        opacity="0.3"
      />
      <line
        x1="92"
        y1="113"
        x2="88"
        y2="120"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="108"
        y1="113"
        x2="112"
        y2="120"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Color circles on screen */}
      {[0, 1, 2, 3].map((i) => {
        const positions = [
          { x: 72, y: 55 },
          { x: 100, y: 55 },
          { x: 128, y: 55 },
          { x: 85, y: 85 },
        ];
        const pos = positions[i];
        return (
          <circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              values="6;8;6"
              dur="2s"
              begin={`${i * 0.25}s`}
              repeatCount="indefinite"
            />
          </circle>
        );
      })}

      {/* Orbiting design element */}
      <circle cx="135" cy="75" r="3" fill="currentColor">
        <animate
          attributeName="cy"
          values="75;65;75"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

// DevOps Icon
export function DevOpsIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Central circular flow */}
      <circle
        cx="100"
        cy="80"
        r="35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Gear-like circles */}
      {[0, 1, 2, 3].map((i) => {
        const angle = i * 90 * (Math.PI / 180);
        const radius = 35;
        return (
          <g key={i}>
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="8;10;8"
                dur="2s"
                begin={`${i * 0.25}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Connection line */}
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur="2s"
                begin={`${i * 0.25}s`}
                repeatCount="indefinite"
              />
            </line>
          </g>
        );
      })}

      {/* Central node */}
      <circle cx="100" cy="80" r="5" fill="currentColor">
        <animate
          attributeName="r"
          values="5;7;5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

// Bioinformatics Icon
export function BioinformaticsIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* DNA double helix shape */}
      <g>
        {/* Left strand */}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={`left-${i}`}
            cx={75 + Math.sin(i * 0.8) * 15}
            cy={50 + i * 13}
            r="3"
            fill="currentColor"
          >
            <animate
              attributeName="r"
              values="3;5;3"
              dur="2s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Right strand */}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={`right-${i}`}
            cx={125 + Math.sin(i * 0.8 + Math.PI) * 15}
            cy={50 + i * 13}
            r="3"
            fill="currentColor"
          >
            <animate
              attributeName="r"
              values="3;5;3"
              dur="2s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Connecting lines (base pairs) */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`line-${i}`}
            x1={75 + Math.sin(i * 0.8) * 15}
            y1={50 + i * 13}
            x2={125 + Math.sin(i * 0.8 + Math.PI) * 15}
            y2={50 + i * 13}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.8;0.4"
              dur="2s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
      </g>
    </svg>
  );
}

// Content Writing Icon
export function ContentWritingIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Document */}
      <rect
        x="65"
        y="35"
        width="70"
        height="100"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Text lines */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1="75"
          y1={50 + i * 14}
          x2={125 - (i % 2) * 20}
          y2={50 + i * 14}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <animate
            attributeName="x2"
            values={`${125 - (i % 2) * 20};${130 - (i % 2) * 20};${125 - (i % 2) * 20}`}
            dur="2s"
            begin={`${i * 0.15}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Pen cursor */}
      <g>
        <circle cx="145" cy="105" r="4" fill="currentColor" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Pulse */}
      <circle
        cx="100"
        cy="85"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0"
      >
        <animate
          attributeName="r"
          values="15;45"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

// AI Strategy Icon
export function AIStrategyIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Brain-like central structure */}
      <circle cx="100" cy="75" r="12" fill="currentColor" opacity="0.4">
        <animate
          attributeName="r"
          values="12;14;12"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Neural connections */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const angle = i * (360 / 7) * (Math.PI / 180);
        const radius = 40;
        return (
          <g key={i}>
            {/* Connection line */}
            <line
              x1="100"
              y1="75"
              x2={100 + Math.cos(angle) * radius}
              y2={75 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur="2s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </line>

            {/* Node */}
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={75 + Math.sin(angle) * radius}
              r="5"
              fill="currentColor"
            >
              <animate
                attributeName="r"
                values="5;7;5"
                dur="2s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {/* Central pulse */}
      <circle
        cx="100"
        cy="75"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0"
      >
        <animate
          attributeName="r"
          values="15;50"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.5;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

// IT Career Icon
export function ITCareerIcon() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Ladder/Career progression */}
      <g>
        {/* Ladder rails */}
        <line
          x1="70"
          y1="50"
          x2="70"
          y2="130"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="130"
          y1="50"
          x2="130"
          y2="130"
          stroke="currentColor"
          strokeWidth="2"
        />

        {/* Ladder rungs */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="70"
            y1={60 + i * 15}
            x2="130"
            y2={60 + i * 15}
            stroke="currentColor"
            strokeWidth="2"
          >
            <animate
              attributeName="x2"
              values="130;135;130"
              dur="2s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
      </g>

      {/* Climbing figure/circle */}
      <circle cx="100" cy="95" r="6" fill="currentColor">
        <animate
          attributeName="cy"
          values="95;70;95"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Target/goal at top */}
      <circle
        cx="100"
        cy="55"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle
        cx="100"
        cy="55"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}
