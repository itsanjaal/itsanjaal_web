import React from 'react'

export function WebDevIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .wd-browser { animation: floatY 3s ease-in-out infinite; }
        .wd-bar1 { animation: widthPulse1 2s ease-in-out infinite; }
        .wd-bar2 { animation: widthPulse2 2.4s ease-in-out infinite; }
        .wd-bar3 { animation: widthPulse3 1.8s ease-in-out infinite; }
        .wd-cursor { animation: blinkCursor 1s step-end infinite; }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes widthPulse1 { 0%,100%{width:16px} 50%{width:22px} }
        @keyframes widthPulse2 { 0%,100%{width:22px} 50%{width:14px} }
        @keyframes widthPulse3 { 0%,100%{width:12px} 50%{width:20px} }
        @keyframes blinkCursor { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
      <g className="wd-browser">
        <rect x="4" y="8" width="48" height="38" rx="4" fill="#fff" stroke="#e51d1d" strokeWidth="2.5"/>
        <rect x="4" y="8" width="48" height="10" rx="4" fill="#e51d1d"/>
        <circle cx="12" cy="13" r="2" fill="rgba(255,255,255,0.7)"/>
        <circle cx="19" cy="13" r="2" fill="rgba(255,255,255,0.7)"/>
        <circle cx="26" cy="13" r="2" fill="rgba(255,255,255,0.7)"/>
        <rect x="30" y="11" width="18" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
        <rect className="wd-bar1" x="10" y="24" height="3" rx="1.5" fill="#e51d1d" opacity="0.8"/>
        <rect className="wd-bar2" x="10" y="30" height="3" rx="1.5" fill="#e51d1d" opacity="0.6"/>
        <rect className="wd-bar3" x="10" y="36" height="3" rx="1.5" fill="#e51d1d" opacity="0.4"/>
        <rect className="wd-cursor" x="34" y="24" width="2" height="14" rx="1" fill="#e51d1d"/>
      </g>
    </svg>
  )
}

export function MobileIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .mob-phone { animation: mobFloat 3s ease-in-out infinite; }
        .mob-screen { animation: screenGlow 2s ease-in-out infinite; }
        .mob-notif { animation: notifSlide 3s ease-in-out infinite; }
        .mob-dot { animation: dotBounce 1s ease-in-out infinite; }
        .mob-dot2 { animation: dotBounce 1s 0.2s ease-in-out infinite; }
        .mob-dot3 { animation: dotBounce 1s 0.4s ease-in-out infinite; }
        @keyframes mobFloat { 0%,100%{transform:rotate(-3deg) translateY(0)} 50%{transform:rotate(3deg) translateY(-5px)} }
        @keyframes screenGlow { 0%,100%{opacity:0.6} 50%{opacity:1} }
        @keyframes notifSlide { 0%,80%,100%{transform:translateY(0);opacity:1} 40%{transform:translateY(-3px);opacity:0.8} }
        @keyframes dotBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
      `}</style>
      <g className="mob-phone">
        <rect x="14" y="4" width="28" height="48" rx="6" fill="#fff" stroke="#e51d1d" strokeWidth="2.5"/>
        <rect x="18" y="10" width="20" height="32" rx="2" className="mob-screen" fill="#ffe1e1"/>
        <rect x="20" y="13" width="16" height="5" rx="2" className="mob-notif" fill="#e51d1d" opacity="0.8"/>
        <circle cx="22" className="mob-dot" cy="22" r="2" fill="#e51d1d"/>
        <circle cx="28" className="mob-dot2" cy="22" r="2" fill="#e51d1d"/>
        <circle cx="34" className="mob-dot3" cy="22" r="2" fill="#e51d1d"/>
        <rect x="20" y="27" width="16" height="2" rx="1" fill="#e51d1d" opacity="0.4"/>
        <rect x="20" y="31" width="10" height="2" rx="1" fill="#e51d1d" opacity="0.4"/>
        <circle cx="28" cy="47" r="2" fill="#e51d1d"/>
        <rect x="24" y="6" width="8" height="2" rx="1" fill="#e51d1d" opacity="0.5"/>
      </g>
    </svg>
  )
}

export function CourseIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .co-book { animation: bookFloat 3s ease-in-out infinite; }
        .co-line1 { animation: lineWrite1 2s ease-in-out infinite; }
        .co-line2 { animation: lineWrite2 2.5s ease-in-out infinite 0.3s; }
        .co-line3 { animation: lineWrite3 2.2s ease-in-out infinite 0.6s; }
        .co-star { animation: starSpin 4s linear infinite; }
        @keyframes bookFloat { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-5px) rotate(2deg)} }
        @keyframes lineWrite1 { 0%{width:0} 50%,100%{width:20px} }
        @keyframes lineWrite2 { 0%{width:0} 50%,100%{width:14px} }
        @keyframes lineWrite3 { 0%{width:0} 50%,100%{width:17px} }
        @keyframes starSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
      <g className="co-book">
        <rect x="8" y="6" width="32" height="40" rx="3" fill="#fff" stroke="#e51d1d" strokeWidth="2.5"/>
        <rect x="8" y="6" width="6" height="40" rx="3" fill="#e51d1d"/>
        <rect className="co-line1" x="18" y="16" height="3" rx="1.5" fill="#e51d1d" opacity="0.7"/>
        <rect className="co-line2" x="18" y="22" height="3" rx="1.5" fill="#e51d1d" opacity="0.5"/>
        <rect className="co-line3" x="18" y="28" height="3" rx="1.5" fill="#e51d1d" opacity="0.6"/>
        <rect x="18" y="34" width="8" height="3" rx="1.5" fill="#e51d1d" opacity="0.3"/>
      </g>
      <g className="co-star" style={{transformOrigin:'42px 12px'}}>
        <polygon points="42,6 43.5,10.5 48,10.5 44.5,13.5 46,18 42,15 38,18 39.5,13.5 36,10.5 40.5,10.5" fill="#e51d1d"/>
      </g>
    </svg>
  )
}

export function UIUXIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .ui-pen { animation: penDraw 3s ease-in-out infinite; }
        .ui-circle { animation: circleGrow 2s ease-in-out infinite; }
        .ui-grid1 { animation: gridFade1 2s ease-in-out infinite; }
        .ui-grid2 { animation: gridFade2 2s 0.3s ease-in-out infinite; }
        .ui-grid3 { animation: gridFade3 2s 0.6s ease-in-out infinite; }
        @keyframes penDraw { 0%,100%{transform:translate(0,0) rotate(-10deg)} 50%{transform:translate(3px,-3px) rotate(5deg)} }
        @keyframes circleGrow { 0%,100%{r:8} 50%{r:10} }
        @keyframes gridFade1 { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes gridFade2 { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes gridFade3 { 0%,100%{opacity:0.4} 50%{opacity:1} }
      `}</style>
      <rect x="4" y="4" width="32" height="40" rx="4" fill="#fff" stroke="#e51d1d" strokeWidth="2.5"/>
      <rect x="4" y="4" width="32" height="10" rx="4" fill="#e51d1d" opacity="0.15"/>
      <rect className="ui-grid1" x="8" y="18" width="10" height="8" rx="2" fill="#e51d1d" opacity="0.4"/>
      <rect className="ui-grid2" x="21" y="18" width="10" height="8" rx="2" fill="#e51d1d" opacity="0.4"/>
      <rect className="ui-grid3" x="8" y="30" width="23" height="8" rx="2" fill="#e51d1d" opacity="0.4"/>
      <g className="ui-pen" style={{transformOrigin:'44px 20px'}}>
        <rect x="38" y="10" width="8" height="22" rx="2" fill="#e51d1d" transform="rotate(20 44 20)"/>
        <polygon points="40,30 48,30 44,42" fill="#e51d1d" transform="rotate(20 44 20)"/>
        <rect x="39" y="10" width="2" height="22" rx="1" fill="rgba(255,255,255,0.4)" transform="rotate(20 44 20)"/>
      </g>
    </svg>
  )
}

export function DevOpsIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .dv-gear1 { animation: gearSpin1 4s linear infinite; transform-origin: 18px 18px; }
        .dv-gear2 { animation: gearSpin2 3s linear infinite; transform-origin: 38px 38px; }
        .dv-arrow { animation: arrowCircle 2s ease-in-out infinite; }
        @keyframes gearSpin1 { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes gearSpin2 { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes arrowCircle { 0%,100%{opacity:0.6} 50%{opacity:1} }
      `}</style>
      <g className="dv-gear1">
        <circle cx="18" cy="18" r="7" fill="#fff" stroke="#e51d1d" strokeWidth="2"/>
        <circle cx="18" cy="18" r="3" fill="#e51d1d"/>
        {[0,45,90,135,180,225,270,315].map((a,i) => (
          <rect key={i} x="17" y="9" width="2" height="4" rx="1" fill="#e51d1d"
            transform={`rotate(${a} 18 18)`}/>
        ))}
      </g>
      <g className="dv-gear2">
        <circle cx="38" cy="38" r="9" fill="#fff" stroke="#e51d1d" strokeWidth="2"/>
        <circle cx="38" cy="38" r="3.5" fill="#e51d1d"/>
        {[0,45,90,135,180,225,270,315].map((a,i) => (
          <rect key={i} x="37" y="27" width="2" height="5" rx="1" fill="#e51d1d"
            transform={`rotate(${a} 38 38)`}/>
        ))}
      </g>
      <g className="dv-arrow">
        <path d="M28 10 C42 10 48 20 48 28 C48 38 40 46 30 46" stroke="#e51d1d" strokeWidth="2" strokeDasharray="4 2" fill="none" strokeLinecap="round"/>
        <path d="M26 43 L30 47 L26 51" stroke="#e51d1d" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M28 10 C14 10 8 20 8 28 C8 34 12 40 18 44" stroke="#e51d1d" strokeWidth="2" strokeDasharray="4 2" fill="none" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

export function BioIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .bio-helix { animation: helixSpin 4s ease-in-out infinite; transform-origin: 28px 28px; }
        .bio-dot1 { animation: dotGlow 1.5s ease-in-out infinite; }
        .bio-dot2 { animation: dotGlow 1.5s 0.3s ease-in-out infinite; }
        .bio-dot3 { animation: dotGlow 1.5s 0.6s ease-in-out infinite; }
        .bio-dot4 { animation: dotGlow 1.5s 0.9s ease-in-out infinite; }
        @keyframes helixSpin { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(-1)} }
        @keyframes dotGlow { 0%,100%{r:3;opacity:0.6} 50%{r:4.5;opacity:1} }
      `}</style>
      <g className="bio-helix">
        <path d="M20 6 C30 12 26 20 20 28 C14 36 16 44 22 50" stroke="#e51d1d" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M36 6 C26 12 30 20 36 28 C42 36 40 44 34 50" stroke="#e51d1d" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5"/>
        <line x1="22" y1="12" x2="34" y2="14" stroke="#e51d1d" strokeWidth="1.5" opacity="0.7"/>
        <line x1="24" y1="20" x2="32" y2="18" stroke="#e51d1d" strokeWidth="1.5" opacity="0.7"/>
        <line x1="22" y1="28" x2="34" y2="28" stroke="#e51d1d" strokeWidth="1.5" opacity="0.7"/>
        <line x1="24" y1="36" x2="32" y2="38" stroke="#e51d1d" strokeWidth="1.5" opacity="0.7"/>
        <line x1="22" y1="44" x2="34" y2="42" stroke="#e51d1d" strokeWidth="1.5" opacity="0.7"/>
      </g>
      <circle className="bio-dot1" cx="20" cy="8" r="3" fill="#e51d1d"/>
      <circle className="bio-dot2" cx="36" cy="20" r="3" fill="#e51d1d"/>
      <circle className="bio-dot3" cx="20" cy="36" r="3" fill="#e51d1d"/>
      <circle className="bio-dot4" cx="36" cy="48" r="3" fill="#e51d1d"/>
    </svg>
  )
}

export function ContentIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .ct-pen { animation: penFloat 3s ease-in-out infinite; transform-origin: 32px 20px; }
        .ct-wave1 { animation: textWave 2s ease-in-out infinite; }
        .ct-wave2 { animation: textWave 2s 0.2s ease-in-out infinite; }
        .ct-wave3 { animation: textWave 2s 0.4s ease-in-out infinite; }
        .ct-cursor { animation: blink 1s step-end infinite; }
        @keyframes penFloat { 0%,100%{transform:translateY(0) rotate(-5deg)} 50%{transform:translateY(-4px) rotate(5deg)} }
        @keyframes textWave { 0%,100%{scaleX:1;opacity:0.6} 50%{scaleX:1.05;opacity:1} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
      <rect x="6" y="8" width="36" height="42" rx="4" fill="#fff" stroke="#e51d1d" strokeWidth="2.5"/>
      <rect className="ct-wave1" x="12" y="18" width="24" height="3" rx="1.5" fill="#e51d1d" opacity="0.6"/>
      <rect className="ct-wave2" x="12" y="25" width="18" height="3" rx="1.5" fill="#e51d1d" opacity="0.5"/>
      <rect className="ct-wave3" x="12" y="32" width="22" height="3" rx="1.5" fill="#e51d1d" opacity="0.4"/>
      <rect x="12" y="39" width="14" height="3" rx="1.5" fill="#e51d1d" opacity="0.3"/>
      <rect className="ct-cursor" x="27" y="39" width="2" height="3" rx="1" fill="#e51d1d"/>
      <g className="ct-pen">
        <rect x="38" y="4" width="6" height="18" rx="2" fill="#e51d1d" transform="rotate(15 41 13)"/>
        <polygon points="37,20 43,20 40,28" fill="#e51d1d" transform="rotate(15 41 13)"/>
        <rect x="39" y="4" width="2" height="18" rx="1" fill="rgba(255,255,255,0.5)" transform="rotate(15 41 13)"/>
        <circle cx="40" cy="29" r="1.5" fill="#111" transform="rotate(15 41 13)"/>
      </g>
    </svg>
  )
}

export function AIIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .ai-brain { animation: brainPulse 2s ease-in-out infinite; transform-origin: 28px 26px; }
        .ai-orb1 { animation: orbOrbit1 3s linear infinite; transform-origin: 28px 26px; }
        .ai-orb2 { animation: orbOrbit2 2s linear infinite; transform-origin: 28px 26px; }
        .ai-spark1 { animation: sparkPop 2s ease-in-out infinite; }
        .ai-spark2 { animation: sparkPop 2s 0.5s ease-in-out infinite; }
        .ai-spark3 { animation: sparkPop 2s 1s ease-in-out infinite; }
        @keyframes brainPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        @keyframes orbOrbit1 { from{transform:rotate(0deg) translateX(20px)} to{transform:rotate(360deg) translateX(20px)} }
        @keyframes orbOrbit2 { from{transform:rotate(180deg) translateX(14px)} to{transform:rotate(540deg) translateX(14px)} }
        @keyframes sparkPop { 0%,100%{opacity:0;transform:scale(0)} 50%{opacity:1;transform:scale(1)} }
      `}</style>
      <g className="ai-brain">
        <path d="M28 8 C20 8 14 14 14 20 C14 24 16 27 20 29 C20 35 24 40 28 40 C32 40 36 35 36 29 C40 27 42 24 42 20 C42 14 36 8 28 8Z" fill="#ffe1e1" stroke="#e51d1d" strokeWidth="2"/>
        <path d="M28 12 C28 18 22 20 22 26" stroke="#e51d1d" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <path d="M28 12 C28 18 34 20 34 26" stroke="#e51d1d" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <path d="M22 26 C25 24 31 24 34 26" stroke="#e51d1d" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <rect x="24" y="40" width="8" height="6" rx="2" fill="#e51d1d" opacity="0.6"/>
        <rect x="22" y="46" width="12" height="3" rx="1.5" fill="#e51d1d" opacity="0.4"/>
      </g>
      <circle className="ai-orb1" cx="28" cy="6" r="3" fill="#e51d1d"/>
      <circle className="ai-orb2" cx="28" cy="12" r="2" fill="#e51d1d" opacity="0.7"/>
      <g className="ai-spark1" style={{transformOrigin:'10px 10px'}}>
        <line x1="7" y1="10" x2="13" y2="10" stroke="#e51d1d" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="7" x2="10" y2="13" stroke="#e51d1d" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <g className="ai-spark2" style={{transformOrigin:'46px 10px'}}>
        <line x1="43" y1="10" x2="49" y2="10" stroke="#e51d1d" strokeWidth="2" strokeLinecap="round"/>
        <line x1="46" y1="7" x2="46" y2="13" stroke="#e51d1d" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <g className="ai-spark3" style={{transformOrigin:'46px 46px'}}>
        <line x1="43" y1="46" x2="49" y2="46" stroke="#e51d1d" strokeWidth="2" strokeLinecap="round"/>
        <line x1="46" y1="43" x2="46" y2="49" stroke="#e51d1d" strokeWidth="2" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

export function CareerIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .ca-rocket { animation: rocketLaunch 3s ease-in-out infinite; transform-origin: 28px 28px; }
        .ca-flame1 { animation: flameFlicker1 0.3s ease-in-out infinite; }
        .ca-flame2 { animation: flameFlicker2 0.3s 0.15s ease-in-out infinite; }
        .ca-star1 { animation: starTwinkle 1.5s ease-in-out infinite; }
        .ca-star2 { animation: starTwinkle 1.5s 0.5s ease-in-out infinite; }
        .ca-star3 { animation: starTwinkle 1.5s 1s ease-in-out infinite; }
        @keyframes rocketLaunch { 0%,100%{transform:translateY(0) rotate(-5deg)} 50%{transform:translateY(-8px) rotate(5deg)} }
        @keyframes flameFlicker1 { 0%,100%{scaleY:1;opacity:0.8} 50%{scaleY:1.3;opacity:1} }
        @keyframes flameFlicker2 { 0%,100%{scaleY:0.8;opacity:0.6} 50%{scaleY:1.2;opacity:0.9} }
        @keyframes starTwinkle { 0%,100%{opacity:0.3;r:1.5} 50%{opacity:1;r:2.5} }
      `}</style>
      <g className="ca-rocket">
        <path d="M28 6 C28 6 20 18 20 30 L28 36 L36 30 C36 18 28 6 28 6Z" fill="#e51d1d"/>
        <path d="M22 28 L16 34 L20 34 L20 30Z" fill="#e51d1d" opacity="0.7"/>
        <path d="M34 28 L40 34 L36 34 L36 30Z" fill="#e51d1d" opacity="0.7"/>
        <circle cx="28" cy="20" r="5" fill="#fff" opacity="0.8"/>
        <circle cx="28" cy="20" r="3" fill="#ffe1e1" stroke="#e51d1d" strokeWidth="1.5"/>
        <g className="ca-flame1" style={{transformOrigin:'26px 36px'}}>
          <ellipse cx="26" cy="40" rx="3" ry="6" fill="#ff6b6b" opacity="0.9"/>
        </g>
        <g className="ca-flame2" style={{transformOrigin:'30px 36px'}}>
          <ellipse cx="30" cy="40" rx="3" ry="6" fill="#e51d1d" opacity="0.7"/>
        </g>
      </g>
      <circle className="ca-star1" cx="10" cy="12" r="2" fill="#e51d1d"/>
      <circle className="ca-star2" cx="46" cy="20" r="2" fill="#e51d1d"/>
      <circle className="ca-star3" cx="8" cy="40" r="2" fill="#e51d1d"/>
    </svg>
  )
}

const iconMap = {
  'web-development': WebDevIcon,
  'mobile-app-development': MobileIcon,
  'it-course': CourseIcon,
  'ui-ux-design': UIUXIcon,
  'devops': DevOpsIcon,
  'bioinformatics': BioIcon,
  'content-writing': ContentIcon,
  'ai-strategy': AIIcon,
  'it-career': CareerIcon,
}

export default function ServiceIcon({ id, size = 56 }) {
  const Icon = iconMap[id]
  if (!Icon) return null
  return <Icon size={size} />
}
