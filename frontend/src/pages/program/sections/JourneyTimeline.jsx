import { useInView } from "../../../hooks/useInView";
import { useState, useEffect, useRef } from "react";

export default function JourneyTimeline({ course }) {
  const [ref, inView] = useInView(0.05);
  const [revealedCount, setRevealedCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (inView && revealedCount === 0) {
      let count = 0;
      timerRef.current = setInterval(() => {
        count++;
        setRevealedCount(count);
        if (count >= course.journey.length) clearInterval(timerRef.current);
      }, 350);
    }
    return () => clearInterval(timerRef.current);
  }, [inView]);

  return (
    <section ref={ref} style={{ padding: "7rem 5%", background: "rgba(248,250,255,.5)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, transparent, #E2E8F0 15%, #E2E8F0 85%, transparent)", transform: "translateX(-50%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .6s" }}>
          <div style={{ display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: course.accentBg, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
            Your Journey
          </div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#0F172A", marginBottom: ".8rem" }}>
            Your <span style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Journey</span> With Us
          </h2>
          <p style={{ fontSize: "1rem", color: "#64748B", maxWidth: 500, margin: "0 auto" }}>A week-by-week roadmap so you always know exactly where you're headed and what comes next.</p>
        </div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0", maxWidth: 900, margin: "0 auto", position: "relative" }}>
          {course.journey.map((step, i) => {
            const isRight = i % 2 !== 0;
            const revealed = i < revealedCount;
            return (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: "0",
                alignItems: "center", marginBottom: "1.5rem",
                opacity: revealed ? 1 : 0,
                transform: revealed ? "none" : (isRight ? "translateX(30px)" : "translateX(-30px)"),
                transition: `opacity .5s, transform .5s`,
              }}>
                {/* Left content */}
                {!isRight ? (
                  <div style={{
                    background: "#fff", borderRadius: 20, padding: "1.8rem 2rem",
                    border: `1.5px solid ${course.accent}33`,
                    boxShadow: `0 6px 24px ${course.accent}10`,
                    textAlign: "right", position: "relative",
                  }}>
                    <div style={{ position: "absolute", right: -12, top: "50%", transform: "translateY(-50%)", width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `12px solid ${course.accent}33` }} />
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, color: course.accent, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: ".4rem" }}>{step.week}</div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0F172A", marginBottom: ".4rem" }}>{step.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                  </div>
                ) : <div />}

                {/* Center node */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: revealed ? `linear-gradient(135deg, ${course.accent}, ${course.accent}bb)` : "#F1F5F9", border: revealed ? `3px solid ${course.accent}44` : "3px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0, boxShadow: revealed ? `0 0 0 6px ${course.accent}18` : "none", transition: "all .5s", zIndex: 2, position: "relative" }}>
                    {step.icon}
                  </div>
                </div>

                {/* Right content */}
                {isRight ? (
                  <div style={{
                    background: "#fff", borderRadius: 20, padding: "1.8rem 2rem",
                    border: `1.5px solid ${course.accent}33`,
                    boxShadow: `0 6px 24px ${course.accent}10`,
                    position: "relative",
                  }}>
                    <div style={{ position: "absolute", left: -12, top: "50%", transform: "translateY(-50%)", width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderRight: `12px solid ${course.accent}33` }} />
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, color: course.accent, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: ".4rem" }}>{step.week}</div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0F172A", marginBottom: ".4rem" }}>{step.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                  </div>
                ) : <div />}
              </div>
            );
          })}

          {/* End marker */}
          <div style={{ display: "flex", justifyContent: "center", opacity: revealedCount >= course.journey.length ? 1 : 0, transition: "opacity .5s 1s" }}>
            <div style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}bb)`, borderRadius: 100, padding: ".8rem 2rem", color: "#fff", fontWeight: 700, fontSize: "0.9rem", boxShadow: `0 8px 30px ${course.accent}44` }}>
              🎓 You're Placed. Career Unlocked.
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){section>div>div:last-child>div{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
