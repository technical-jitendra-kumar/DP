import { useState } from "react";
import { useInView } from "../../../hooks/useInView";
import { 
  FiBarChart2, 
  FiTool, 
  FiPieChart, 
  FiBriefcase, 
  FiAward, 
  FiUsers, 
  FiGlobe, 
  FiTarget, 
  FiMessageSquare, 
  FiHome, 
  FiClipboard, 
  FiDollarSign,
  FiSettings,
  FiRadio,
  FiMic,
  FiKey,
  FiEdit3,
  FiLink,
  FiDatabase,
  FiTrendingUp,
  FiCloud,
  FiZap,
  FiRefreshCw,
  FiInbox,
  FiFileText,
  FiFolder
} from 'react-icons/fi';
import { HiAcademicCap } from 'react-icons/hi2';
import { 
  FaTrophy, 
  FaMedal, 
  FaPython, 
  FaRobot, 
  FaRocket, 
  FaFire, 
  FaGem, 
  FaInfinity,
  FaGift,
  FaCrown,
  FaHandshake,
  FaChartLine,
  FaBrain,
  FaUtensils,
  FaCreditCard,
  FaPlane,
  FaShoppingBag,
  FaPhoneAlt,
  FaHotel,
  FaBuilding,
  FaNewspaper,
  FaComments,
  FaBalanceScale,
  FaLightbulb,
  FaHandsHelping,
  FaGraduationCap
} from 'react-icons/fa';

const DIFFICULTY_COLOR = { "Intermediate": "#D97706", "Advanced": "#DC2626", "Expert": "#7C3AED" };

export default function Projects({ course }) {
  const [ref, inView] = useInView(0.08);
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} style={{ padding: "7rem 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "50%", top: "30%", width: 500, height: 500, borderRadius: "50%", background: course.accent, opacity: 0.04, filter: "blur(100px)", transform: "translateX(-50%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .6s" }}>
          <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: course.accentBg, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
              Real Projects
            </div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#0F172A", margin: 0 }}>
              Portfolio-Ready <span style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Projects</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#64748B", maxWidth: 340, lineHeight: 1.7 }}>Real datasets from real companies. Every project is interview-ready from day one.</p>
        </div>

        {/* Project tabs */}
        <div style={{ display: "flex", gap: ".6rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {course.projects.map((p, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              fontFamily: "'DM Sans', sans-serif",
              padding: ".55rem 1.3rem", borderRadius: 100,
              border: `1.5px solid ${active === i ? course.accent : "#E2E8F0"}`,
              background: active === i ? course.accent : "rgba(255,255,255,.85)",
              color: active === i ? "#fff" : "#64748B",
              fontSize: "0.87rem", fontWeight: 600, cursor: "pointer", transition: "all .2s",
            }}>
              {typeof p.icon === 'string' ? <FiFolder /> : p.icon} {p.title.split(" ").slice(0, 2).join(" ")}…
            </button>
          ))}
        </div>

        {/* Main project display */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
          {/* Active project big card */}
          <div style={{ background: "#fff", borderRadius: 24, border: `2px solid ${course.accent}33`, boxShadow: `0 12px 50px ${course.accent}12`, overflow: "hidden", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all .65s .1s", animation: "fadeUp .3s ease" }}>
            <div style={{ background: `linear-gradient(135deg, ${course.accent}15, ${course.accent}06)`, padding: "3rem 2.5rem", borderBottom: `1px solid ${course.accent}22`, textAlign: "center" }}>
              <div style={{ fontSize: "4rem", marginBottom: "1rem", color: course.accent }}>{typeof course.projects[active].icon === 'string' ? <FiFolder size={64} /> : course.projects[active].icon}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", display: "inline-block", padding: ".3rem .8rem", borderRadius: 100, background: DIFFICULTY_COLOR[course.projects[active].difficulty] + "22", color: DIFFICULTY_COLOR[course.projects[active].difficulty], fontSize: "0.75rem", fontWeight: 700 }}>{course.projects[active].difficulty}</div>
            </div>
            <div style={{ padding: "2rem 2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".6rem", marginBottom: ".8rem" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: course.accent, fontWeight: 700 }}>Company Partner</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", padding: ".2rem .7rem", borderRadius: 100, background: course.accentBg, color: course.accent, fontSize: "0.75rem", fontWeight: 700 }}>{course.projects[active].company}</span>
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "1.4rem", color: "#0F172A", marginBottom: ".9rem", lineHeight: 1.25 }}>{course.projects[active].title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#475569", lineHeight: 1.75, marginBottom: "1.5rem" }}>{course.projects[active].desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                {course.projects[active].tags.map(tag => (
                  <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", padding: ".3rem .8rem", borderRadius: 8, background: "#F8FAFF", border: "1px solid #E2E8F0", fontSize: "0.78rem", fontWeight: 600, color: "#475569" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Other projects + stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", opacity: inView ? 1 : 0, transition: "all .65s .2s" }}>
            {course.projects.map((proj, i) => i !== active && (
              <div key={i} onClick={() => setActive(i)} style={{
                background: "rgba(255,255,255,.88)", borderRadius: 18, padding: "1.5rem", border: "1.5px solid #E8EDF5",
                cursor: "pointer", transition: "all .25s", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = course.accent + "55"; e.currentTarget.style.transform = "translateX(6px)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,.08)`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E8EDF5"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: course.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0, color: course.accent }}>{typeof proj.icon === 'string' ? <FiFolder size={24} /> : proj.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#0F172A", marginBottom: ".3rem" }}>{proj.title}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#94A3B8" }}>Partner: {proj.company} · {proj.difficulty}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats card */}
            <div style={{ background: `linear-gradient(135deg, #0F172A, #1E293B)`, borderRadius: 20, padding: "2rem", border: "1px solid rgba(51,65,85,.8)" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#fff", marginBottom: "1.2rem" }}><FiFolder size={20} style={{ display: "inline", marginRight: "0.5rem" }} />Project Portfolio Stats</div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
                {[{ label: "Projects in portfolio", val: `${course.projects.length}+` }, { label: "Real company datasets", val: "100%" }, { label: "GitHub-ready codebase", val: "✅ Yes" }, { label: "Mentor-reviewed", val: "✅ Every project" }].map(({ label, val }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: ".6rem", borderBottom: "1px solid rgba(51,65,85,.5)" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#94A3B8" }}>{label}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
