import { useState } from "react";
import { useInView } from "../../../hooks/useInView";
import { FiCheckCircle } from 'react-icons/fi';

export default function Curriculum({ course }) {
  const [ref, inView] = useInView(0.05);
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} style={{ fontFamily: "'DM Sans', sans-serif", padding: "7rem 5%", position: "relative", background: "rgba(248,250,255,.5)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .6s" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: course.accentBg, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
            Curriculum
          </div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#0F172A", marginBottom: ".8rem" }}>
            What You'll <span style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Learn</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#64748B", maxWidth: 500 }}>A structured, hands-on curriculum built with hiring managers at top companies.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "2rem", alignItems: "start" }}>
          {/* Sidebar timeline */}
          <div style={{ position: "sticky", top: 100, opacity: inView ? 1 : 0, transition: "all .6s .15s" }}>
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: 22, top: 24, bottom: 24, width: 2, background: `linear-gradient(180deg, ${course.accent}, ${course.accent}22)`, borderRadius: 2 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                {course.curriculum.map((mod, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    padding: ".9rem 1.1rem", borderRadius: 14, border: "none", cursor: "pointer",
                    background: active === i ? "#fff" : "transparent",
                    boxShadow: active === i ? "0 4px 20px rgba(0,0,0,.08)" : "none",
                    transition: "all .25s", textAlign: "left", width: "100%",
                    border: active === i ? `1.5px solid ${course.accent}33` : "1.5px solid transparent",
                  }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: active === i ? mod.color : "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "0.85rem", color: active === i ? "#fff" : "#94A3B8", flexShrink: 0, transition: "all .25s", border: active === i ? "none" : "2px solid #E2E8F0", zIndex: 1 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: active === i ? mod.color : "#94A3B8", fontWeight: 700, marginBottom: ".15rem" }}>{mod.week}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: active === i ? 700 : 600, color: active === i ? "#0F172A" : "#64748B", lineHeight: 1.3 }}>{mod.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content panel */}
          <div style={{ opacity: inView ? 1 : 0, transition: "all .6s .25s" }}>
            {course.curriculum.map((mod, i) => (
              <div key={i} style={{
                display: active === i ? "block" : "none",
                animation: "fadeUp .3s ease",
              }}>
                <div style={{ background: "#fff", borderRadius: 24, padding: "2.5rem", border: `2px solid ${mod.color}33`, boxShadow: `0 8px 40px ${mod.color}14`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${mod.color}, ${mod.color}66)` }} />
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", marginBottom: "2rem" }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: mod.color + "18", border: `2px solid ${mod.color}33`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "1.3rem", color: mod.color, flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: mod.color, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: ".3rem" }}>{mod.week}</div>
                      <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "1.6rem", color: "#0F172A", margin: 0 }}>{mod.title}</h3>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    {mod.topics.map((topic, j) => (
                      <div key={j} style={{ display: "flex", gap: ".75rem", alignItems: "flex-start", padding: "1.1rem 1.2rem", borderRadius: 12, background: mod.color + "08", border: `1px solid ${mod.color}22` }}>
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: mod.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px", color: "#fff" }}>
                          <FiCheckCircle size={12} />
                        </div>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.87rem", color: "#374151", lineHeight: 1.5, fontWeight: 500 }}>{topic}</span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #F1F5F9" }}>
                    <button onClick={() => setActive(Math.max(0, i - 1))} disabled={i === 0} style={{ fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: ".5rem", padding: ".6rem 1.2rem", borderRadius: 8, border: "1.5px solid #E2E8F0", background: "transparent", color: i === 0 ? "#CBD5E1" : "#0F172A", fontWeight: 600, fontSize: "0.85rem", cursor: i === 0 ? "not-allowed" : "pointer", transition: "all .2s" }}>
                      ← Previous
                    </button>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#94A3B8" }}>{i + 1} / {course.curriculum.length}</div>
                    <button onClick={() => setActive(Math.min(course.curriculum.length - 1, i + 1))} disabled={i === course.curriculum.length - 1} style={{ fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: ".5rem", padding: ".6rem 1.2rem", borderRadius: 8, border: "none", background: i === course.curriculum.length - 1 ? "#F1F5F9" : mod.color, color: i === course.curriculum.length - 1 ? "#CBD5E1" : "#fff", fontWeight: 600, fontSize: "0.85rem", cursor: i === course.curriculum.length - 1 ? "not-allowed" : "pointer", transition: "all .2s" }}>>
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr !important}section>div>div:last-child>div:first-child{position:relative !important;top:0 !important}}`}</style>
    </section>
  );
}
