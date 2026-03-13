import { useState, useEffect, useRef } from "react";
import { useInView } from "../../../hooks/useInView";

export default function SuccessStories({ course }) {
  const [ref, inView] = useInView(0.08);
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState("right");
  const timerRef = useRef(null);
  const stories = course.stories;

  const go = (dir) => {
    setAnimDir(dir);
    setCurrent(prev => dir === "right" ? (prev + 1) % stories.length : (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => go("right"), 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const resetTimer = () => { clearInterval(timerRef.current); timerRef.current = setInterval(() => go("right"), 5000); };

  return (
    <section ref={ref} style={{ padding: "7rem 5%", background: `linear-gradient(135deg, #0F172A 0%, #1E293B 100%)`, position: "relative", overflow: "hidden" }}>
      {/* Background decorations */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 350, height: 350, borderRadius: "50%", background: course.accent, opacity: 0.07, filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .6s" }}>
          <div>
            <div style={{ display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: `${course.accent}22`, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
              Alumni Stories
            </div>
            <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#fff", margin: 0 }}>
              Real People,{" "}
              <em style={{ fontStyle: "italic", color: course.accent }}>Dream Careers</em>
            </h2>
          </div>
          {/* Nav */}
          <div style={{ display: "flex", gap: ".6rem" }}>
            {["←","→"].map((d, i) => (
              <button key={d} onClick={() => { go(i === 0 ? "left" : "right"); resetTimer(); }} style={{ width: 48, height: 48, borderRadius: "50%", border: `1.5px solid rgba(255,255,255,.2)`, background: "transparent", color: "#fff", fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = course.accent; e.currentTarget.style.borderColor = course.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,.2)"; }}>
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Main carousel */}
        <div style={{ position: "relative", opacity: inView ? 1 : 0, transition: "all .6s .15s" }}>
          {/* Main card */}
          <div key={current} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "stretch", animation: "fadeUp .4s ease" }}>
            {/* Story card */}
            <div style={{ background: "rgba(255,255,255,.06)", borderRadius: 24, padding: "3rem", border: "1.5px solid rgba(255,255,255,.1)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 20, right: 24, fontSize: "4rem", color: "rgba(255,255,255,.04)", fontFamily: "Georgia", lineHeight: 1 }}>"</div>
              <div style={{ color: "#F59E0B", fontSize: "1rem", letterSpacing: "3px", marginBottom: "1.5rem" }}>★★★★★</div>
              <p style={{ fontSize: "1.05rem", color: "#CBD5E1", lineHeight: 1.85, marginBottom: "2rem", fontStyle: "italic", position: "relative", zIndex: 1 }}>
                "{stories[current].text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: stories[current].color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1.1rem", color: "#fff", flexShrink: 0, boxShadow: `0 0 0 3px ${stories[current].color}44` }}>{stories[current].avatar}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff" }}>{stories[current].name}</div>
                  <div style={{ fontSize: "0.82rem", color: "#94A3B8", marginTop: ".2rem" }}>{stories[current].role}</div>
                </div>
              </div>
            </div>

            {/* Stats sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}bb)`, borderRadius: 20, padding: "2.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,.7)", fontWeight: 600, marginBottom: ".5rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>Current Package</div>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: "3rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{stories[current].salary}</div>
                <div style={{ marginTop: "1.2rem", padding: "1rem 1.2rem", background: "rgba(0,0,0,.15)", borderRadius: 12 }}>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,.6)" }}>Previous Role</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fff", marginTop: ".2rem" }}>→ {stories[current].prev}</div>
                </div>
              </div>

              {/* Dot navigation */}
              <div style={{ display: "flex", gap: ".5rem", justifyContent: "center", padding: "1rem", background: "rgba(255,255,255,.04)", borderRadius: 14, border: "1px solid rgba(255,255,255,.08)" }}>
                {stories.map((_, i) => (
                  <button key={i} onClick={() => { setAnimDir("right"); setCurrent(i); resetTimer(); }} style={{ width: i === current ? 28 : 10, height: 10, borderRadius: 5, border: "none", background: i === current ? course.accent : "rgba(255,255,255,.2)", cursor: "pointer", transition: "all .3s" }} />
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            {stories.map((s, i) => (
              <div key={i} onClick={() => { setCurrent(i); resetTimer(); }} style={{
                flex: 1, padding: "1.2rem", borderRadius: 16,
                background: i === current ? "rgba(255,255,255,.1)" : "rgba(255,255,255,.04)",
                border: `1.5px solid ${i === current ? course.accent + "55" : "rgba(255,255,255,.08)"}`,
                cursor: "pointer", transition: "all .25s",
              }}>
                <div style={{ display: "flex", gap: ".7rem", alignItems: "center" }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.8rem", color: "#fff", flexShrink: 0 }}>{s.avatar}</div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: i === current ? "#fff" : "#94A3B8" }}>{s.name}</div>
                    <div style={{ fontSize: "0.72rem", color: "#64748B" }}>{s.salary}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
