import { useState, useEffect, useRef } from "react";
import { useInView } from "../../../hooks/useInView";

function CertCard({ cert, isActive, index }) {
  const [rotation, setRotation] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [manualRot, setManualRot] = useState(0);
  const [isHov, setIsHov] = useState(false);

  const rotate = () => {
    setManualRot(prev => prev + 360);
    setTimeout(() => setFlipped(f => !f), 300);
  };

  return (
    <div style={{
      flex: 1, minWidth: 300, position: "relative",
      opacity: isActive ? 1 : 0.5, transform: isActive ? "scale(1)" : "scale(0.92)",
      transition: "all .5s ease",
    }}>
      <div
        onMouseEnter={() => setIsHov(true)}
        onMouseLeave={() => setIsHov(false)}
        style={{
          perspective: "1000px", height: 320,
        }}
      >
        <div style={{
          width: "100%", height: "100%", position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateY(${manualRot + (isHov ? 5 : 0)}deg) rotateX(${isHov ? -3 : 0}deg)`,
          transition: `transform ${manualRot > 0 ? "0.7s" : "0.3s"} ease`,
        }}>
          {/* Front */}
          <div style={{
            position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
            background: cert.bg, borderRadius: 24, padding: "2.5rem 2rem",
            border: `2px solid ${cert.color}33`,
            boxShadow: isActive ? `0 20px 60px ${cert.color}22, 0 4px 16px rgba(0,0,0,.1)` : "0 4px 20px rgba(0,0,0,.08)",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <div style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>{cert.icon}</div>
              <div style={{ fontFamily: "'Fraunces',serif", fontWeight: 900, fontSize: "1.2rem", color: cert.textColor, lineHeight: 1.3, marginBottom: ".6rem" }}>{cert.name}</div>
              <div style={{ fontSize: "0.78rem", color: cert.textColor, opacity: 0.65, fontWeight: 600 }}>Issued by {cert.issuer}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: cert.color, boxShadow: `0 0 8px ${cert.color}` }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: cert.textColor, opacity: 0.7 }}>Verified Certificate</span>
            </div>
          </div>

          {/* Back */}
          <div style={{
            position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
            background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}08)`,
            borderRadius: 24, padding: "2.5rem 2rem",
            border: `2px solid ${cert.color}44`,
            transform: "rotateY(180deg)",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🏅</div>
            <h4 style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: "1.1rem", color: "#0F172A", marginBottom: "1rem" }}>{cert.name}</h4>
            <p style={{ fontSize: "0.87rem", color: "#475569", lineHeight: 1.7 }}>{cert.desc}</p>
          </div>
        </div>
      </div>

      {/* Rotate button */}
      <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
        <button onClick={rotate} style={{
          display: "inline-flex", alignItems: "center", gap: ".5rem",
          padding: ".6rem 1.4rem", borderRadius: 100,
          border: `1.5px solid ${cert.color}44`,
          background: cert.bg, color: cert.textColor,
          fontSize: "0.82rem", fontWeight: 700, cursor: "pointer", transition: "all .25s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = cert.color; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = cert.color; }}
          onMouseLeave={e => { e.currentTarget.style.background = cert.bg; e.currentTarget.style.color = cert.textColor; e.currentTarget.style.borderColor = cert.color + "44"; }}>
          <span style={{ display: "inline-block", animation: "none", transition: "transform .6s" }}>↻</span>
          Rotate to See Details
        </button>
      </div>
    </div>
  );
}

export default function Certifications({ course }) {
  const [ref, inView] = useInView(0.08);
  const [active, setActive] = useState(0);

  // Auto rotate active
  useEffect(() => {
    const t = setInterval(() => setActive(prev => (prev + 1) % course.certifications.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} style={{ padding: "7rem 5%", background: "#0F172A", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", left: "20%", width: 400, height: 400, borderRadius: "50%", background: course.accent, opacity: 0.05, filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .6s" }}>
          <div style={{ display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: `${course.accent}22`, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
            Certifications
          </div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#fff", marginBottom: ".8rem" }}>
            Certificates That <em style={{ fontStyle: "italic", color: course.accent }}>Open Doors</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "#94A3B8", maxWidth: 500, margin: "0 auto" }}>Industry-recognized credentials from Microsoft, Google, and global institutions — all included.</p>
          <p style={{ fontSize: "0.82rem", color: "#64748B", marginTop: ".5rem" }}>Hover to tilt · Click "Rotate" to see details</p>
        </div>

        {/* Cert cards */}
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", opacity: inView ? 1 : 0, transition: "all .6s .2s" }}>
          {course.certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} isActive={active === i} index={i} />
          ))}
        </div>

        {/* Active indicator */}
        <div style={{ display: "flex", gap: ".6rem", justifyContent: "center", marginTop: "2rem" }}>
          {course.certifications.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? 32 : 10, height: 10, borderRadius: 5, border: "none", background: i === active ? course.accent : "rgba(255,255,255,.2)", cursor: "pointer", transition: "all .3s" }} />
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: "3rem", textAlign: "center", padding: "2rem", background: "rgba(255,255,255,.04)", borderRadius: 16, border: "1px solid rgba(255,255,255,.08)", opacity: inView ? 1 : 0, transition: "all .6s .45s" }}>
          <div style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: ".4rem" }}>🎓 {course.certifications.length} Certificates Included in Your Program</div>
          <div style={{ fontSize: "0.85rem", color: "#64748B" }}>No extra cost. All exams, prep materials and certification fees are included in your program fee.</div>
        </div>
      </div>
    </section>
  );
}
