import { useState } from "react";
import { useInView } from "../../hooks/useInView";

const DIFF_COLORS = {
  Expert:       "#DC2626",
  Advanced:     "#D97706",
  Intermediate: "#059669",
};

// SVG difficulty dots replacing emoji
const DiffDot = ({ difficulty }) => {
  const color = DIFF_COLORS[difficulty] || "#94A3B8";
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" style={{ marginRight: 5, flexShrink: 0 }}>
      <circle cx="5" cy="5" r="5" fill={color} />
    </svg>
  );
};

// Graduation cap SVG replacing 🎓
const GradCap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <polygon points="12,3 22,9 12,15 2,9" fill="#1429D0" opacity=".18" stroke="#1429D0" strokeWidth="1.5"/>
    <path d="M7 11.5v4.5c0 0 2 2 5 2s5-2 5-2v-4.5" stroke="#1429D0" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="22" y1="9" x2="22" y2="14" stroke="#1429D0" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Target SVG replacing
const Target = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#1429D0" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="6"  stroke="#1429D0" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="2"  fill="#1429D0"/>
  </svg>
);

// Lightbulb SVG replacing 💡
const Bulb = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M9 21h6M12 3a7 7 0 0 1 4 12.74V17H8v-1.26A7 7 0 0 1 12 3z" stroke="#1429D0" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// Check SVG for list items
const Check = ({ color = "#1429D0" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="8" cy="8" r="8" fill={color} opacity=".12"/>
    <path d="M4.5 8l2.5 2.5 4.5-4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Project Icon SVGs (clean, professional, no emoji) ──────────────────────

// Bar chart icon — for DCF/Valuation projects
const IconBarChart = ({ color = "#fff" }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="6"  y="24" width="8" height="14" rx="2" fill={color} opacity=".9"/>
    <rect x="18" y="16" width="8" height="22" rx="2" fill={color}/>
    <rect x="30" y="8"  width="8" height="30" rx="2" fill={color} opacity=".7"/>
    <path d="M4 40h36" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity=".4"/>
  </svg>
);

// Money/LBO icon — stack of coins / dollar sign
const IconMoney = ({ color = "#fff" }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="16" stroke={color} strokeWidth="2" opacity=".35"/>
    <circle cx="22" cy="22" r="11" stroke={color} strokeWidth="2" opacity=".6"/>
    <text x="22" y="27" textAnchor="middle" fontSize="13" fontWeight="700" fill={color} fontFamily="sans-serif">$</text>
  </svg>
);

// Trend / growth icon — for market analysis
const IconTrend = ({ color = "#fff" }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <polyline points="6,34 16,22 24,28 38,10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="30,10 38,10 38,18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 38h36" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity=".4"/>
  </svg>
);

// Pie chart icon
const IconPie = ({ color = "#fff" }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <path d="M22 6 A16 16 0 0 1 38 22 L22 22 Z" fill={color} opacity=".9"/>
    <path d="M22 22 A16 16 0 1 1 22 6 Z" fill={color} opacity=".45"/>
    <circle cx="22" cy="22" r="16" stroke={color} strokeWidth="1.5" opacity=".3"/>
  </svg>
);

// Building / company icon
const IconBuilding = ({ color = "#fff" }) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="10" y="12" width="24" height="26" rx="2" stroke={color} strokeWidth="2" fill={color} opacity=".18"/>
    <rect x="16" y="18" width="5" height="5" rx="1" fill={color} opacity=".9"/>
    <rect x="23" y="18" width="5" height="5" rx="1" fill={color} opacity=".9"/>
    <rect x="16" y="26" width="5" height="5" rx="1" fill={color} opacity=".9"/>
    <rect x="23" y="26" width="5" height="5" rx="1" fill={color} opacity=".9"/>
    <rect x="18" y="32" width="8" height="6" rx="1" fill={color}/>
    <path d="M22 6v6" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".5"/>
  </svg>
);

// Map proj.icon string → SVG component
const PROJECT_ICONS = {
  "📊": IconBarChart,
  "💰": IconMoney,
  "📈": IconTrend,
  "🥧": IconPie,
  "🏢": IconBuilding,
};

const ProjectIcon = ({ iconKey, color = "#fff" }) => {
  const Comp = PROJECT_ICONS[iconKey] || IconBarChart;
  return <Comp color={color} />;
};

// ── Professional banner color palette ─────────────────────────────────────
// Project 1 keeps original red; others use deep professional hues.
const BANNER_PALETTES = [
  { from: "#E53935", to: "#EF9A9A" },   // original red (project 1)
  { from: "#134E5E", to: "#71B280" },   // dark teal → sage
  { from: "#1F3A5F", to: "#4D7FA8" },   // midnight blue → steel
  { from: "#2C1654", to: "#6B4FA0" },   // deep violet → mid purple
  { from: "#1B3C34", to: "#3D8B7A" },   // forest → emerald
];

const getBannerStyle = (projIndex) => {
  const p = BANNER_PALETTES[projIndex % BANNER_PALETTES.length];
  return `linear-gradient(135deg, ${p.from}, ${p.to})`;
};

export default function ProjectsSection({ course }) {
  const [ref, inView] = useInView(0.1);
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
        @keyframes projIn  { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        @keyframes topicIn { from { opacity: 0; transform: translateX(8px);  } to { opacity: 1; transform: none; } }
        @media (max-width: 860px) { .dp-proj-card { grid-template-columns: 1fr !important; } }
      `}</style>

      <section ref={ref} style={{
        padding: "90px 5%",
        background: "#F5F7FA",
        borderTop: "1px solid rgba(20,41,208,0.08)",
        borderBottom: "1px solid rgba(20,41,208,0.08)",
        overflow: "hidden", position: "relative",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {/* Blobs */}
        <div style={{ position: "absolute", bottom: -60, left: -40, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,41,208,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -40, right: -40, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,127,221,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{
            textAlign: "center", marginBottom: "3.5rem",
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.6s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: "1.1rem" }}>
              <span style={{ width: 22, height: 2, background: "#1429D0", borderRadius: 2, display: "inline-block" }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1429D0", letterSpacing: "2.5px", textTransform: "uppercase" }}>Real Projects</span>
              <span style={{ width: 22, height: 2, background: "#1429D0", borderRadius: 2, display: "inline-block" }} />
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900,
              color: "#161619", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "0.8rem",
            }}>
              Build. Ship.{" "}
              <span style={{
                background: "linear-gradient(135deg, #1429D0, #0E7FDD)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Get Hired.
              </span>
            </h2>
            <p style={{ color: "#36383e", fontSize: "1rem", lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>
              Every project in this program uses real company data. Your portfolio will stand out because it's built on actual business problems.
            </p>
          </div>

          {/* Project tabs */}
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginBottom: "3rem", flexWrap: "wrap" }}>
            {course.projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  padding: "0.6rem 1.5rem", borderRadius: 100,
                  border: `1.5px solid ${active === i ? "#1429D0" : "rgba(20,41,208,0.14)"}`,
                  background: active === i ? "#1429D0" : "#fff",
                  color: active === i ? "#fff" : "#36383e",
                  fontSize: "0.87rem", fontWeight: 700,
                  cursor: "pointer", transition: "all 0.25s ease",
                  boxShadow: active === i ? "0 4px 14px rgba(20,41,208,0.25)" : "none",
                }}
              >
                Project {i + 1}
              </button>
            ))}
          </div>

          {/* Active project */}
          {course.projects.map((proj, i) => (
            active === i && (
              <div key={i} className="dp-proj-card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", animation: "projIn 0.35s ease" }}>

                {/* ── Main card ── */}
                <div style={{
                  background: "#fff", borderRadius: 24, overflow: "hidden",
                  border: "1.5px solid rgba(20,41,208,0.12)",
                  boxShadow: "0 20px 60px rgba(20,41,208,0.08)",
                }}>
                  {/* Banner — proj.color for project 1, professional gradient for rest */}
                  <div style={{
                    background: i === 0
                      ? `linear-gradient(135deg, ${proj.color}, ${proj.color}cc)`
                      : getBannerStyle(i),
                    padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem",
                    position: "relative", overflow: "hidden",
                  }}>
                    <div style={{ position: "absolute", right: -20, top: -20,  width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
                    <div style={{ position: "absolute", right: 30,  bottom: -30, width: 80,  height: 80,  borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />

                    {/* SVG icon instead of emoji */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <ProjectIcon iconKey={proj.icon} color="#fff" />
                    </div>

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <span style={{ background: "rgba(255,255,255,0.18)", color: "#fff", fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.7rem", borderRadius: 100, letterSpacing: "1px" }}>
                        {proj.company}
                      </span>
                      <h3 style={{ fontSize: "1.55rem", fontWeight: 900, color: "#fff", marginTop: "0.75rem", lineHeight: 1.25, letterSpacing: "-0.02em" }}>{proj.title}</h3>
                    </div>
                  </div>

                  <div style={{ padding: "2rem" }}>
                    <p style={{ fontSize: "0.95rem", color: "#36383e", lineHeight: 1.75, marginBottom: "1.5rem" }}>{proj.desc}</p>

                    {/* Tags */}
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                      {proj.tags.map(t => (
                        <span key={t} style={{ padding: "0.28rem 0.75rem", borderRadius: 8, background: "#F5F7FA", border: "1px solid rgba(20,41,208,0.10)", fontSize: "0.78rem", fontWeight: 600, color: "#36383e" }}>{t}</span>
                      ))}
                    </div>

                    {/* Difficulty */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center",
                        padding: "0.3rem 0.9rem", borderRadius: 100,
                        background: `${DIFF_COLORS[proj.difficulty]}15`,
                        color: DIFF_COLORS[proj.difficulty],
                        fontSize: "0.75rem", fontWeight: 700,
                      }}>
                        <DiffDot difficulty={proj.difficulty} />
                        {proj.difficulty}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "#94A3B8" }}>difficulty level</span>
                    </div>
                  </div>
                </div>

                {/* ── Right column ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                  {/* What you'll build */}
                  <div style={{ background: "#fff", borderRadius: 20, padding: "1.8rem", border: "1.5px solid rgba(20,41,208,0.10)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 800, fontSize: "1rem", color: "#161619", marginBottom: "1rem" }}>
                      <Target /> What You'll Build
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {[
                        "Complete working solution from scratch",
                        "Clean, documented, production-grade code",
                        "Business insights report with recommendations",
                        "Shareable GitHub repository + live demo",
                      ].map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", animation: `topicIn 0.3s ${j * 0.07}s ease both` }}>
                          <Check color="#1429D0" />
                          <span style={{ fontSize: "0.88rem", color: "#36383e", lineHeight: 1.55 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills you'll gain */}
                  <div style={{
                    background: "#F2F5FF", borderRadius: 20, padding: "1.8rem",
                    border: "1.5px solid rgba(20,41,208,0.12)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 800, fontSize: "1rem", color: "#161619", marginBottom: "0.8rem" }}>
                      <Bulb /> Skills You'll Gain
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {proj.tags.concat(["Business Thinking", "Data Storytelling", "Code Review"]).map(s => (
                        <span key={s} style={{ padding: "0.28rem 0.75rem", borderRadius: 8, background: "#fff", border: "1px solid rgba(20,41,208,0.12)", fontSize: "0.78rem", fontWeight: 600, color: "#262832" }}>{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Mentor reviewed */}
                  <div style={{
                    background: "#fff", borderRadius: 20, padding: "1.5rem",
                    border: "1.5px solid rgba(20,41,208,0.10)",
                    display: "flex", alignItems: "center", gap: "1rem",
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: "#F2F5FF", border: "1px solid rgba(20,41,208,0.14)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <GradCap />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#161619" }}>Mentor-Reviewed</div>
                      <div style={{ fontSize: "0.8rem", color: "#36383e", marginTop: "0.1rem", lineHeight: 1.5 }}>Every project is reviewed by an industry mentor before it goes in your portfolio.</div>
                    </div>
                  </div>
                </div>

              </div>
            )
          ))}
        </div>
      </section>
    </>
  );
}