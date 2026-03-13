import { useInView } from "../../hooks/useInView";
import { TESTIMONIALS } from "../../data/companies";

export default function TestimonialsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} style={{ padding: "6rem 5%", background: "rgba(248,250,255,.6)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", position: "relative" }}>
      <div style={{ maxWidth: 600, marginBottom: "1rem" }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#0057FF", marginBottom: ".6rem" }}>Success Stories</div>
        <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#0F172A", marginBottom: "1rem" }}>
          Real People,{" "}
          <span style={{ background: "linear-gradient(135deg,#0057FF,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Dream Careers</span>
        </h2>
        <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.75 }}>Not just numbers — real stories of transformation from our alumni community.</p>
      </div>

      <div style={{ display: "inline-flex", alignItems: "center", gap: ".75rem", padding: ".6rem 1.2rem", borderRadius: 100, background: "rgba(255,255,255,.85)", border: "1.5px solid #FCD34D", marginBottom: "2.5rem", backdropFilter: "blur(8px)" }}>
        <span style={{ color: "#F59E0B", fontSize: "1rem", letterSpacing: "2px" }}>★★★★★</span>
        <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0F172A" }}>4.9/5</span>
        <span style={{ fontSize: "0.82rem", color: "#64748B" }}>from 1,200+ reviews</span>
      </div>

      <div style={{ display: "flex", gap: "1.5rem", overflowX: "auto", paddingBottom: "1rem", scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} style={{
            background: "rgba(255,255,255,.9)", borderRadius: 20, padding: "2rem",
            border: "1.5px solid #E8EDF5", minWidth: 320, flexShrink: 0,
            boxShadow: "0 4px 20px rgba(0,0,0,.06)",
            backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            transition: `opacity .5s ${i*.1}s, transform .5s ${i*.1}s`,
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
          }}>
            <div style={{ color: "#F59E0B", fontSize: "0.9rem", marginBottom: ".8rem", letterSpacing: "2px" }}>★★★★★</div>
            <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.75, marginBottom: "1.2rem", fontStyle: "italic" }}>"{t.text}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.85rem", color: "#fff", flexShrink: 0 }}>{t.avatar}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0F172A" }}>{t.name}</div>
                <div style={{ fontSize: "0.78rem", color: "#94A3B8", marginTop: ".15rem" }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
