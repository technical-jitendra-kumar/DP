import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProgramHero({ course }) {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 5% 80px", position: "relative", overflow: "hidden",
      background: `radial-gradient(ellipse 70% 60% at 80% 30%, ${course.accent}10 0%, transparent 70%), #FAFBFF`,
    }}>
      {/* BG orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: course.accent, opacity: 0.05, filter: "blur(80px)", top: -100, right: -150, transform: `translateY(${scrollY * 0.15}px)`, transition: "transform .1s linear" }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: course.accent, opacity: 0.06, filter: "blur(50px)", top: "50%", right: "15%", transform: `translateY(${scrollY * 0.25}px)`, transition: "transform .1s linear" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${course.accent}20 1px, transparent 1px)`, backgroundSize: "38px 38px", maskImage: "radial-gradient(ellipse 55% 70% at 90% 15%, black, transparent)", WebkitMaskImage: "radial-gradient(ellipse 55% 70% at 90% 15%, black, transparent)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>

          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1.5rem", fontSize: "0.82rem", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)", transition: "all .5s" }}>
              <Link to="/" style={{ color: course.accent, textDecoration: "none", fontWeight: 600 }}>Home</Link>
              <span style={{ color: "#CBD5E1" }}>›</span>
              <Link to="/#programs" style={{ color: course.accent, textDecoration: "none", fontWeight: 600 }}>Programs</Link>
              <span style={{ color: "#CBD5E1" }}>›</span>
              <span style={{ color: "#94A3B8" }}>{course.title}</span>
            </div>

            {/* Badges */}
            <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginBottom: "1.4rem", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transition: "all .55s .06s" }}>
              <span style={{ padding: ".35rem 1rem", borderRadius: 100, background: course.accentBg, color: course.accent, fontSize: "0.78rem", fontWeight: 700, border: `1.5px solid ${course.accent}44` }}>{course.tag}</span>
              {course.badge && <span style={{ padding: ".35rem 1rem", borderRadius: 100, background: "#0F172A", color: "#fff", fontSize: "0.78rem", fontWeight: 700 }}>{course.badge}</span>}
              <span style={{ padding: ".35rem 1rem", borderRadius: 100, background: "#ECFDF5", color: "#059669", fontSize: "0.78rem", fontWeight: 700, border: "1.5px solid #6EE7B7" }}>✅ Placement Support</span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 900, lineHeight: 1.06, letterSpacing: "-1.5px", color: "#0F172A", marginBottom: "1rem", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all .6s .1s" }}>
              {course.title}
              <br />
              <em style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontStyle: "italic", fontWeight: 700, letterSpacing: "-0.3px" }}>
                {course.subtitle}
              </em>
            </h1>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#475569", maxWidth: 560, marginBottom: "2.2rem", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all .6s .16s" }}>
              {course.longDesc}
            </p>

            {/* Meta pills */}
            <div style={{ display: "flex", gap: ".7rem", flexWrap: "wrap", marginBottom: "2.2rem", opacity: visible ? 1 : 0, transition: "all .6s .22s" }}>
              {[{ icon: "⏱", v: course.duration }, { icon: "🎥", v: course.mode }, { icon: "💰", v: course.price }, { icon: "👥", v: "Max 25 students" }].map(({ icon, v }) => (
                <div key={v} style={{ display: "flex", alignItems: "center", gap: ".45rem", padding: ".5rem 1.1rem", borderRadius: 100, background: "rgba(255,255,255,.9)", border: "1.5px solid #E2E8F0", fontSize: "0.87rem", fontWeight: 600, color: "#0F172A", boxShadow: "0 2px 8px rgba(0,0,0,.05)", backdropFilter: "blur(8px)" }}>
                  <span>{icon}</span><span>{v}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all .6s .28s" }}>
              <button style={{ padding: "1rem 2.4rem", borderRadius: 12, border: "none", background: `linear-gradient(135deg, ${course.accent}, ${course.accent}bb)`, color: "#fff", fontSize: "1rem", fontWeight: 700, cursor: "pointer", boxShadow: `0 6px 24px ${course.accent}44`, transition: "all .25s", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${course.accent}55`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 6px 24px ${course.accent}44`; }}>
                Enroll Now — {course.price}
              </button>
              <button style={{ padding: "1rem 2rem", borderRadius: 12, border: `1.5px solid ${course.accent}44`, background: course.accentBg, color: course.accent, fontSize: "1rem", fontWeight: 700, cursor: "pointer", transition: "all .25s", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = course.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = course.accentBg; e.currentTarget.style.borderColor = `${course.accent}44`; }}>
                📅 Book Free Session
              </button>
            </div>
          </div>

          {/* Right stats */}
          <div className="dp-hero-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", flexShrink: 0, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(30px)", transition: "all .7s .35s" }}>
            {course.heroStats.map((stat, i) => (
              <div key={i} style={{
                background: i === 0 ? `linear-gradient(135deg, ${course.accent}, ${course.accent}cc)` : "rgba(255,255,255,.88)",
                borderRadius: 20, padding: "1.8rem 1.5rem",
                boxShadow: i === 0 ? `0 12px 40px ${course.accent}33` : "0 4px 20px rgba(0,0,0,.07)",
                border: i === 0 ? "none" : "1.5px solid #E8EDF5",
                backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                textAlign: "center", minWidth: 130, animation: `floatA ${4 + i}s ease-in-out infinite ${i * 0.5}s`,
              }}>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: "2.4rem", fontWeight: 900, lineHeight: 1, color: i === 0 ? "#fff" : "#0F172A", marginBottom: ".3rem" }}>
                  {stat.num}<span style={{ fontSize: "1.3rem" }}>{stat.suffix}</span>
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: i === 0 ? "rgba(255,255,255,.8)" : "#94A3B8" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div style={{ marginTop: "3rem", display: "flex", gap: "2rem", flexWrap: "wrap", paddingTop: "2rem", borderTop: "1px solid #E8EDF5", opacity: visible ? 1 : 0, transition: "all .7s .45s" }}>
          {["🏆 Microsoft Certified", "✅ 100% Placement Support", "📞 Mentor on Call", "🔒 EMI Available", "♾️ Lifetime Access"].map(t => (
            <span key={t} style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </div>

      <style>{`@media (max-width:900px){.dp-hero-stats-grid{display:none !important;}}`}</style>
    </section>
  );
}
