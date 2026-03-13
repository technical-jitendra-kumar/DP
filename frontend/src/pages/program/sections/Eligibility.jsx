import { useInView } from "../../../hooks/useInView";

export default function Eligibility({ course }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} style={{ padding: "7rem 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -80, top: "20%", width: 350, height: 350, borderRadius: "50%", background: course.accent, opacity: 0.05, filter: "blur(70px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .6s" }}>
          <div style={{ display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: course.accentBg, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
            Who Is This For
          </div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#0F172A" }}>
            Are <span style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>You Eligible?</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }}>
          {/* This IS for you */}
          <div style={{ background: "rgba(255,255,255,.88)", borderRadius: 24, padding: "2.5rem", border: "1.5px solid #E8EDF5", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-24px)", transition: "all .65s .1s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".8rem", marginBottom: "1.8rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>✅</div>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: "1.3rem", color: "#059669", margin: 0 }}>This Program IS For You</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {course.eligibility.forYou.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: ".9rem", alignItems: "flex-start", padding: "1rem 1.2rem", borderRadius: 12, background: "#F0FDF4", border: "1px solid #BBF7D0", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-12px)", transition: `all .5s ${0.15 + i * 0.07}s` }}>
                  <span style={{ color: "#059669", fontWeight: 800, fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  <span style={{ fontSize: "0.9rem", color: "#1E4A2E", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NOT for you */}
          <div style={{ background: "rgba(255,255,255,.88)", borderRadius: 24, padding: "2.5rem", border: "1.5px solid #E8EDF5", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(24px)", transition: "all .65s .1s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".8rem", marginBottom: "1.8rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#FEF2F2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>❌</div>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: "1.3rem", color: "#DC2626", margin: 0 }}>Probably NOT For You</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {course.eligibility.notForYou.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: ".9rem", alignItems: "flex-start", padding: "1rem 1.2rem", borderRadius: 12, background: "#FEF9F9", border: "1px solid #FECACA", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(12px)", transition: `all .5s ${0.15 + i * 0.07}s` }}>
                  <span style={{ color: "#DC2626", fontWeight: 800, fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>✗</span>
                  <span style={{ fontSize: "0.9rem", color: "#5B1C1C", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0F172A", marginBottom: "1rem" }}>📋 What You Need</div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                {course.eligibility.requirements.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: ".6rem", alignItems: "center", fontSize: "0.87rem", color: "#475569" }}>
                    <span style={{ color: course.accent, fontWeight: 700 }}>→</span>{r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div style={{ background: `linear-gradient(135deg, ${course.accent}12, ${course.accent}06)`, borderRadius: 20, padding: "2rem 2.5rem", border: `1.5px solid ${course.accent}30`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", opacity: inView ? 1 : 0, transition: "all .7s .45s" }}>
          <div>
            <div style={{ fontFamily: "'Fraunces',serif", fontSize: "1.2rem", fontWeight: 800, color: "#0F172A", marginBottom: ".3rem" }}>Still not sure if this is right for you?</div>
            <div style={{ fontSize: "0.87rem", color: "#64748B" }}>Book a free 30-min counselling call. No pressure, just honest guidance.</div>
          </div>
          <button style={{ padding: ".85rem 2rem", borderRadius: 10, border: "none", background: course.accent, color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", boxShadow: `0 4px 20px ${course.accent}44`, transition: "all .2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
            Book Free Counselling →
          </button>
        </div>
      </div>

      <style>{`@media(max-width:768px){section>div>div:nth-child(2){grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
