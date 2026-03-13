import { useState } from "react";
import { useInView } from "../../hooks/useInView";

export default function Curriculum({ course }) {
  const [ref, inView] = useInView(0.05);
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
        @keyframes currSlide { from { opacity: 0; transform: translateX(12px); } to { opacity: 1; transform: none; } }
        @keyframes topicIn  { from { opacity: 0; transform: translateY(8px); }  to { opacity: 1; transform: none; } }
        @media (max-width: 860px) {
          .dp-curr-layout { grid-template-columns: 1fr !important; }
          .dp-curr-layout > :first-child { position: static !important; }
        }
        @media (max-width: 540px) {
          .dp-curr-topics { grid-template-columns: 1fr !important; }
        }
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
        <div style={{ position: "absolute", top: -60, left: -40, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,41,208,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div style={{
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all 0.6s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.1rem" }}>
              <span style={{ width: 22, height: 2, background: "#1429D0", borderRadius: 2, display: "inline-block" }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1429D0", letterSpacing: "2.5px", textTransform: "uppercase" }}>Curriculum</span>
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900,
              color: "#161619", lineHeight: 1.1, letterSpacing: "-0.03em",
            }}>
              What You'll{" "}
              <span style={{
                background: "linear-gradient(135deg, #1429D0, #0E7FDD)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Learn & Build
              </span>
            </h2>
          </div>

          <div className="dp-curr-layout" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "2rem", alignItems: "start" }}>

            {/* ── Left: module tabs ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", position: "sticky", top: 100 }}>
              {course.curriculum.map((mod, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  textAlign: "left", padding: "0.95rem 1.1rem", borderRadius: 14,
                  border: `1.5px solid ${active === i ? "#1429D0" : "rgba(20,41,208,0.10)"}`,
                  background: active === i ? "#F2F5FF" : "#fff",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-20px)",
                  transitionDelay: `${i * 0.07}s`,
                  boxShadow: active === i ? "0 4px 16px rgba(20,41,208,0.12)" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: active === i ? "#1429D0" : "rgba(20,41,208,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: active === i ? "#fff" : "#1429D0",
                      fontWeight: 900, fontSize: "0.8rem", flexShrink: 0,
                      transition: "all 0.25s ease",
                    }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: active === i ? "#1429D0" : "#94A3B8", fontWeight: 600, marginBottom: "0.1rem" }}>{mod.week}</div>
                      <div style={{ fontSize: "0.86rem", fontWeight: 700, color: active === i ? "#161619" : "#36383e", lineHeight: 1.25 }}>{mod.title}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* ── Right: expanded module ── */}
            {course.curriculum.map((mod, i) => (
              active === i && (
                <div key={i} style={{
                  background: "#fff", borderRadius: 24, padding: "2.5rem",
                  border: "1.5px solid rgba(20,41,208,0.14)",
                  boxShadow: "0 8px 40px rgba(20,41,208,0.08)",
                  animation: "currSlide 0.3s ease",
                }}>
                  {/* Module header */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    marginBottom: "1.5rem", paddingBottom: "1.5rem",
                    borderBottom: "1.5px solid rgba(20,41,208,0.08)",
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: "linear-gradient(135deg, #1429D0, #0E7FDD)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontWeight: 900, fontSize: "1.4rem",
                      boxShadow: "0 6px 18px rgba(20,41,208,0.30)",
                    }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0E7FDD", marginBottom: "0.2rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>{mod.week}</div>
                      <div style={{ fontWeight: 900, fontSize: "1.4rem", color: "#161619", letterSpacing: "-0.02em" }}>{mod.title}</div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="dp-curr-topics" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem" }}>
                    {mod.topics.map((topic, j) => (
                      <div key={j} style={{
                        display: "flex", gap: "0.75rem", alignItems: "flex-start",
                        padding: "0.9rem 1rem", borderRadius: 12,
                        background: "#F2F5FF",
                        border: "1px solid rgba(20,41,208,0.10)",
                        animation: `topicIn 0.3s ${j * 0.06}s ease both`,
                      }}>
                        <div style={{
                          width: 24, height: 24, borderRadius: 6,
                          background: "#1429D0",
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                        }}>
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: "0.88rem", color: "#36383e", lineHeight: 1.5, fontWeight: 500 }}>{topic}</span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    marginTop: "2rem", paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(20,41,208,0.08)",
                  }}>
                    <button
                      onClick={() => setActive(Math.max(0, i - 1))}
                      disabled={i === 0}
                      style={{
                        padding: "0.6rem 1.3rem", borderRadius: 8,
                        border: "1.5px solid rgba(20,41,208,0.15)",
                        background: "transparent",
                        color: i === 0 ? "#BFD2FF" : "#262832",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.87rem",
                        cursor: i === 0 ? "not-allowed" : "pointer", transition: "all 0.2s",
                      }}
                    >
                      ← Previous
                    </button>
                    <span style={{ fontSize: "0.82rem", color: "#94A3B8" }}>{i + 1} of {course.curriculum.length}</span>
                    <button
                      onClick={() => setActive(Math.min(course.curriculum.length - 1, i + 1))}
                      disabled={i === course.curriculum.length - 1}
                      style={{
                        padding: "0.6rem 1.3rem", borderRadius: 8, border: "none",
                        background: i === course.curriculum.length - 1 ? "rgba(20,41,208,0.10)" : "#1429D0",
                        color: i === course.curriculum.length - 1 ? "#BFD2FF" : "#fff",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.87rem",
                        cursor: i === course.curriculum.length - 1 ? "not-allowed" : "pointer",
                        transition: "all 0.2s",
                        boxShadow: i === course.curriculum.length - 1 ? "none" : "0 4px 14px rgba(20,41,208,0.28)",
                      }}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )
            ))}

          </div>
        </div>
      </section>
    </>
  );
}