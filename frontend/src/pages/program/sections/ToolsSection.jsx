import { useEffect, useRef, useState } from "react";
import { useInView } from "../../../hooks/useInView";

export default function ToolsSection({ course }) {
  const [ref, inView] = useInView(0.08);
  const scrollRef = useRef(null);
  const [barWidths, setBarWidths] = useState({});
  const animRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const widths = {};
      course.tools.forEach((t, i) => {
        setTimeout(() => {
          setBarWidths(prev => ({ ...prev, [i]: t.level }));
        }, i * 80);
      });
    }
  }, [inView, course.tools]);

  // Auto-scroll
  useEffect(() => {
    if (!inView) return;
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    let paused = false;
    el.addEventListener("mouseenter", () => (paused = true));
    el.addEventListener("mouseleave", () => (paused = false));
    animRef.current = setInterval(() => {
      if (!paused) {
        pos += 1;
        if (pos >= el.scrollWidth / 2) pos = 0;
        el.scrollLeft = pos;
      }
    }, 20);
    return () => clearInterval(animRef.current);
  }, [inView]);

  const doubled = [...course.tools, ...course.tools];

  return (
    <section ref={ref} style={{ padding: "7rem 0 7rem", background: "#0F172A", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.02) 1px, transparent 1px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{ padding: "0 5%", marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .6s", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: `${course.accent}22`, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
          Tools & Tech Stack
        </div>
        <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#fff", marginBottom: ".8rem" }}>
          Tools You'll <em style={{ fontStyle: "italic", color: course.accent }}>Master</em>
        </h2>
        <p style={{ fontSize: "1rem", color: "#94A3B8", maxWidth: 500 }}>Industry-standard tools used at Google, Amazon, and top Indian companies.</p>
      </div>

      {/* Horizontal scroll marquee */}
      <div style={{ position: "relative", marginBottom: "4rem" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 120, background: "linear-gradient(90deg, #0F172A, transparent)", pointerEvents: "none", zIndex: 3 }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 120, background: "linear-gradient(270deg, #0F172A, transparent)", pointerEvents: "none", zIndex: 3 }} />
        <div ref={scrollRef} style={{ display: "flex", overflowX: "hidden", gap: "1.2rem", padding: "1rem 5%", cursor: "grab", scrollBehavior: "smooth" }}>
          {doubled.map((tool, i) => (
            <div key={i} style={{
              flexShrink: 0, background: "rgba(30,41,59,.9)", borderRadius: 18, padding: "1.5rem 1.8rem",
              border: `1.5px solid rgba(51,65,85,.8)`, minWidth: 160, textAlign: "center",
              transition: "all .2s", cursor: "pointer",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = tool.color + "77"; e.currentTarget.style.background = "rgba(51,65,85,.9)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(51,65,85,.8)"; e.currentTarget.style.background = "rgba(30,41,59,.9)"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ fontSize: "2rem", marginBottom: ".6rem" }}>{tool.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#fff", marginBottom: ".3rem" }}>{tool.name}</div>
              <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,.1)", overflow: "hidden", marginTop: ".6rem" }}>
                <div style={{ height: "100%", width: `${inView ? tool.level : 0}%`, background: `linear-gradient(90deg, ${tool.color}, ${tool.color}99)`, borderRadius: 2, transition: `width 1.2s ease ${i * 0.05}s` }} />
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: ".4rem" }}>{tool.level}% coverage</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill bars */}
      <div style={{ padding: "0 5%", position: "relative", zIndex: 1, opacity: inView ? 1 : 0, transition: "all .6s .3s" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", maxWidth: 900, margin: "0 auto" }}>
          {course.tools.map((tool, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: tool.color + "22", border: `1px solid ${tool.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{tool.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".4rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#CBD5E1" }}>{tool.name}</span>
                  <span style={{ fontSize: "0.72rem", color: "#64748B" }}>{tool.level}%</span>
                </div>
                <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,.07)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${barWidths[i] || 0}%`, background: `linear-gradient(90deg, ${tool.color}, ${tool.color}88)`, borderRadius: 3, transition: `width 1.2s ease ${i * 0.08}s` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
