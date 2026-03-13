import { useRef, useEffect, useState } from "react";
import { useInView } from "../../hooks/useInView";

const LEVEL_COLORS = {
  Expert:       "#059669",
  Advanced:     "#1429D0",
  Intermediate: "#D97706",
  Basics:       "#94A3B8",
};

function getLevel(n) {
  if (n >= 88) return "Expert";
  if (n >= 75) return "Advanced";
  if (n >= 55) return "Intermediate";
  return "Basics";
}

// Real SVG icons keyed by tool name (case-insensitive match in component)
const TOOL_SVGS = {
  python: (
    <svg viewBox="0 0 128 128" width="26" height="26">
      <linearGradient id="py1" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#5a9fd4"/><stop offset="1" stopColor="#306998"/>
      </linearGradient>
      <linearGradient id="py2" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ffd43b"/><stop offset="1" stopColor="#ffe873"/>
      </linearGradient>
      <path fill="url(#py1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <path fill="url(#py2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 64 64" width="26" height="26" fill="none">
      <rect width="64" height="64" rx="10" fill="#E8F4FD"/>
      <ellipse cx="32" cy="18" rx="18" ry="7" fill="#1429D0" opacity=".85"/>
      <path d="M14 18v14c0 3.87 8.06 7 18 7s18-3.13 18-7V18" stroke="#1429D0" strokeWidth="2.5" fill="none"/>
      <path d="M14 32v14c0 3.87 8.06 7 18 7s18-3.13 18-7V32" stroke="#1429D0" strokeWidth="2.5" fill="none"/>
    </svg>
  ),
  excel: (
    <svg viewBox="0 0 48 48" width="26" height="26">
      <rect width="48" height="48" rx="6" fill="#217346"/>
      <path d="M28 12h10v24H28z" fill="#185C37"/>
      <path d="M6 12h22v24H6z" fill="#21A366"/>
      <path d="M6 12h22v4H6z" fill="#107C41"/>
      <text x="9" y="30" fontSize="11" fontWeight="bold" fill="white" fontFamily="Arial">X</text>
      <path d="M30 16h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6z" fill="white" opacity=".6"/>
    </svg>
  ),
  tableau: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#E8F0FE"/>
      <g stroke="#1F6BCC" strokeWidth="2.2" strokeLinecap="round">
        <line x1="24" y1="8" x2="24" y2="40"/>
        <line x1="8" y1="24" x2="40" y2="24"/>
        <line x1="13" y1="13" x2="35" y2="35"/>
        <line x1="35" y1="13" x2="13" y2="35"/>
      </g>
      <circle cx="24" cy="24" r="4" fill="#1F6BCC"/>
      <circle cx="24" cy="10" r="2.5" fill="#E97627"/>
      <circle cx="24" cy="38" r="2.5" fill="#E97627"/>
      <circle cx="10" cy="24" r="2.5" fill="#E97627"/>
      <circle cx="38" cy="24" r="2.5" fill="#E97627"/>
    </svg>
  ),
  "power bi": (
    <svg viewBox="0 0 48 48" width="26" height="26">
      <rect width="48" height="48" rx="6" fill="#F2C811"/>
      <rect x="10" y="28" width="6" height="12" rx="1.5" fill="#333"/>
      <rect x="18" y="20" width="6" height="20" rx="1.5" fill="#333"/>
      <rect x="26" y="14" width="6" height="26" rx="1.5" fill="#333"/>
      <rect x="34" y="8" width="6" height="32" rx="1.5" fill="#333"/>
    </svg>
  ),
  powerbi: (
    <svg viewBox="0 0 48 48" width="26" height="26">
      <rect width="48" height="48" rx="6" fill="#F2C811"/>
      <rect x="10" y="28" width="6" height="12" rx="1.5" fill="#333"/>
      <rect x="18" y="20" width="6" height="20" rx="1.5" fill="#333"/>
      <rect x="26" y="14" width="6" height="26" rx="1.5" fill="#333"/>
      <rect x="34" y="8" width="6" height="32" rx="1.5" fill="#333"/>
    </svg>
  ),
  pandas: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#130654"/>
      <rect x="10" y="10" width="8" height="28" rx="4" fill="#E70488"/>
      <rect x="30" y="10" width="8" height="28" rx="4" fill="#E70488"/>
      <rect x="14" y="20" width="20" height="8" rx="2" fill="#FFCA00"/>
    </svg>
  ),
  numpy: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#4DABCF"/>
      <path d="M8 24L24 8l16 16-16 16z" fill="white" opacity=".25"/>
      <rect x="14" y="14" width="20" height="20" rx="2" fill="white" opacity=".85"/>
      <path d="M18 24h12M24 18v12" stroke="#4DABCF" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  matplotlib: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#11557C"/>
      <circle cx="24" cy="24" r="13" stroke="#E87722" strokeWidth="2.5"/>
      <circle cx="24" cy="24" r="7" stroke="#6DB3D1" strokeWidth="2"/>
      <circle cx="24" cy="24" r="2.5" fill="white"/>
    </svg>
  ),
  seaborn: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#4878CF"/>
      <path d="M8 36 Q18 12 28 24 Q36 34 42 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle cx="14" cy="30" r="2.5" fill="#6ACC65"/>
      <circle cx="24" cy="22" r="2.5" fill="#D65F5F"/>
      <circle cx="34" cy="28" r="2.5" fill="#EE854A"/>
    </svg>
  ),
  scikit: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#F7931E"/>
      <circle cx="24" cy="20" r="8" stroke="white" strokeWidth="2.5"/>
      <circle cx="24" cy="20" r="3" fill="white"/>
      <path d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  "scikit-learn": (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#F7931E"/>
      <circle cx="24" cy="20" r="8" stroke="white" strokeWidth="2.5"/>
      <circle cx="24" cy="20" r="3" fill="white"/>
      <path d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  tensorflow: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#FF6F00"/>
      <path d="M24 6L8 15v18l16 9 16-9V15z" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M24 6v36M8 15l16 9 16-9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  pytorch: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#EE4C2C"/>
      <path d="M30 10l-2 6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="29" cy="9" r="2" fill="white"/>
      <path d="M24 16c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="30" cy="20" r="2.5" fill="white"/>
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#E25A1C"/>
      <path d="M14 36l6-12 4 6 4-10 6 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  airflow: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#017CEE"/>
      <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2.2"/>
      <path d="M24 14v4M24 30v4M14 24h4M30 24h4" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="3" fill="white"/>
    </svg>
  ),
  dbt: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#FF694B"/>
      <path d="M12 36V12l24 12z" fill="white"/>
      <circle cx="12" cy="12" r="4" fill="white"/>
      <circle cx="12" cy="36" r="4" fill="white"/>
      <circle cx="36" cy="24" r="4" fill="white"/>
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#232F3E"/>
      <path d="M10 28c0 0 3 4 14 4s14-4 14-4" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M36 26l4 2-4 2" fill="#FF9900"/>
      <text x="9" y="23" fontSize="9" fontWeight="bold" fill="#FF9900" fontFamily="Arial">AWS</text>
    </svg>
  ),
  gcp: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#F1F3F4"/>
      <path d="M24 10a14 14 0 100 28 14 14 0 000-28z" fill="#4285F4" opacity=".15"/>
      <path d="M18 24a6 6 0 1112 0 6 6 0 01-12 0z" fill="#4285F4"/>
      <path d="M30 18l6-4M18 18l-6-4M24 36v-6" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#0089D6"/>
      <path d="M12 36h24M20 14l-8 22M20 14l10 12-6 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#2496ED"/>
      <rect x="10" y="20" width="6" height="5" rx="1" fill="white"/>
      <rect x="18" y="20" width="6" height="5" rx="1" fill="white"/>
      <rect x="26" y="20" width="6" height="5" rx="1" fill="white"/>
      <rect x="18" y="13" width="6" height="5" rx="1" fill="white"/>
      <path d="M8 28c0 0 2 5 10 5h14c6 0 10-5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="38" cy="22" r="3" fill="white"/>
      <path d="M36 22h-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#F05032"/>
      <path d="M38.5 22.4L25.6 9.5a2.5 2.5 0 00-3.5 0L19 12.6l4.4 4.4a3 3 0 013.8 3.8l4.2 4.2a3 3 0 11-1.8 1.8l-3.9-3.9v10.2a3 3 0 11-2.5 0V22.6a3 3 0 01-1.6-3.9L17.2 15 9.5 22.6a2.5 2.5 0 000 3.5l12.9 12.9a2.5 2.5 0 003.5 0l12.6-12.6a2.5 2.5 0 000-3.5z" fill="white"/>
    </svg>
  ),
  langchain: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#1C3A5E"/>
      <path d="M10 24c0 0 4-8 14-8s14 8 14 8" stroke="#00C2FF" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 24c0 0 4 8 14 8s14-8 14-8" stroke="#7CFF9B" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="10" cy="24" r="3" fill="#00C2FF"/>
      <circle cx="38" cy="24" r="3" fill="#7CFF9B"/>
    </svg>
  ),
  openai: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#10A37F"/>
      <path d="M24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14S31.732 10 24 10z" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M16 24c0-4.418 3.582-8 8-8v16c-4.418 0-8-3.582-8-8z" fill="white"/>
    </svg>
  ),
  looker: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#4285F4"/>
      <circle cx="24" cy="22" r="9" stroke="white" strokeWidth="2.5"/>
      <circle cx="24" cy="22" r="4" fill="white"/>
      <path d="M30 30l6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#00618A"/>
      <ellipse cx="24" cy="16" rx="14" ry="5" fill="#E48E00"/>
      <path d="M10 16v16c0 2.761 6.268 5 14 5s14-2.239 14-5V16" stroke="#E48E00" strokeWidth="2" fill="none"/>
      <path d="M10 24c0 2.761 6.268 5 14 5s14-2.239 14-5" stroke="#E48E00" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#336791"/>
      <ellipse cx="22" cy="16" rx="11" ry="8" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M11 16v14a5 5 0 0010 0" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M33 16v8M33 24c2 0 4-1 4-4s-2-4-4-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#13AA52"/>
      <path d="M24 8c0 0-10 10-10 18a10 10 0 0020 0C34 18 24 8 24 8z" fill="white" opacity=".9"/>
      <path d="M24 10v28" stroke="#13AA52" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  r: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#276DC3"/>
      <circle cx="22" cy="20" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M18 20h8M26 20l8 10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#29B5E8"/>
      <path d="M24 8v32M8 24h32M12 12l24 24M36 12L12 36" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="4" fill="white"/>
    </svg>
  ),
  bigquery: (
    <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
      <rect width="48" height="48" rx="6" fill="#4285F4"/>
      <circle cx="22" cy="22" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M29 29l7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M17 22h10M22 17v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

function getToolSvg(name) {
  const key = name.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
  return TOOL_SVGS[key] || (
    // Generic fallback — first two letters in a coloured circle
    <svg viewBox="0 0 48 48" width="26" height="26">
      <rect width="48" height="48" rx="10" fill="#1429D0"/>
      <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="DM Sans,sans-serif">
        {name.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
}

export default function ToolsSection({ course }) {
  const [ref, inView] = useInView(0.1);
  const trackRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [hovTool, setHovTool] = useState(null);

  useEffect(() => {
    if (!inView) return;
    const section = ref.current;
    if (!section) return;
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const start = rect.top + window.scrollY - window.innerHeight * 0.8;
      const end   = rect.bottom + window.scrollY - window.innerHeight * 0.5;
      const progress = Math.max(0, Math.min(1, (window.scrollY - start) / (end - start)));
      setScrollPct(progress);
      if (trackRef.current) {
        const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
        trackRef.current.scrollLeft = maxScroll * progress;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      <section ref={ref} style={{
        padding: "90px 0 60px",
        overflow: "hidden", position: "relative",
        background: "#ffffff",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {/* Top accent stripe */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: "linear-gradient(90deg, transparent 0%, #1429D0 30%, #0E7FDD 70%, transparent 100%)",
        }} />

        {/* Blob */}
        <div style={{ position: "absolute", top: -80, right: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,41,208,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Header */}
        <div style={{
          padding: "0 5%", marginBottom: "3rem",
          opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.6s ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.1rem" }}>
            <span style={{ width: 22, height: 2, background: "#1429D0", borderRadius: 2, display: "inline-block" }} />
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1429D0", letterSpacing: "2.5px", textTransform: "uppercase" }}>Tools You'll Master</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900,
              color: "#161619", lineHeight: 1.1, letterSpacing: "-0.03em",
            }}>
              Your{" "}
              <span style={{
                background: "linear-gradient(135deg, #1429D0, #0E7FDD)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Tech Stack
              </span>
            </h2>

            {/* Scroll progress */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 120, height: 5, borderRadius: 3, background: "rgba(20,41,208,0.10)", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${scrollPct * 100}%`, background: "linear-gradient(90deg, #1429D0, #0E7FDD)", borderRadius: 3, transition: "width 0.1s linear" }} />
              </div>
              <span style={{ fontSize: "0.78rem", color: "#94A3B8" }}>Scroll to explore →</span>
            </div>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div ref={trackRef} style={{ overflow: "hidden", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "1.2rem", paddingLeft: "5%", paddingRight: "5%" }}>
            {course.tools.map((tool, i) => {
              const level = getLevel(tool.level);
              const levelColor = LEVEL_COLORS[level];
              const isHov = hovTool === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovTool(i)}
                  onMouseLeave={() => setHovTool(null)}
                  style={{
                    flexShrink: 0, width: 186,
                    background: isHov ? "#fff" : "#F5F7FA",
                    borderRadius: 20, padding: "1.5rem",
                    border: `1.5px solid ${isHov ? "rgba(20,41,208,0.30)" : "rgba(20,41,208,0.09)"}`,
                    boxShadow: isHov ? "0 16px 40px rgba(20,41,208,0.12)" : "0 2px 8px rgba(20,41,208,0.04)",
                    transition: "all 0.3s ease",
                    transform: inView ? (isHov ? "translateY(-10px) scale(1.04)" : "none") : "translateY(30px)",
                    opacity: inView ? 1 : 0,
                    transitionDelay: `${i * 0.04}s`,
                    cursor: "default",
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: "#fff",
                    border: "1.5px solid rgba(20,41,208,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem",
                    boxShadow: "0 2px 8px rgba(20,41,208,0.06)",
                    transition: "transform 0.3s",
                    transform: isHov ? "scale(1.15)" : "none",
                  }}>
                    {getToolSvg(tool.name)}
                  </div>

                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#161619", marginBottom: "0.3rem" }}>{tool.name}</div>

                  {/* Level badge */}
                  <span style={{
                    display: "inline-block", padding: "0.2rem 0.65rem", borderRadius: 100,
                    background: `${levelColor}18`, color: levelColor,
                    fontSize: "0.7rem", fontWeight: 700, marginBottom: "1rem",
                  }}>
                    {level}
                  </span>

                  {/* Skill bar */}
                  <div style={{ height: 5, borderRadius: 3, background: "rgba(20,41,208,0.10)", overflow: "hidden" }}>
                    <div style={{
                      height: "100%", borderRadius: 3,
                      background: "linear-gradient(90deg, #1429D0, #0E7FDD)",
                      width: inView ? `${tool.level}%` : "0%",
                      transition: `width 0.8s ${0.3 + i * 0.05}s ease`,
                    }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.4rem" }}>
                    <span style={{ fontSize: "0.68rem", color: "#94A3B8" }}>Proficiency</span>
                    <span style={{ fontSize: "0.68rem", color: "#1429D0", fontWeight: 700 }}>{tool.level}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Level legend */}
        <div style={{
          padding: "0 5%", marginTop: "1rem",
          display: "flex", gap: "1.5rem", flexWrap: "wrap",
          opacity: inView ? 1 : 0, transition: "opacity 0.6s 0.5s ease",
        }}>
          {Object.entries(LEVEL_COLORS).map(([label, color]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: color }} />
              <span style={{ fontSize: "0.78rem", color: "#36383e", fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}