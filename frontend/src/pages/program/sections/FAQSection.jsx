import { useState } from "react";
import { useInView } from "../../../hooks/useInView";

function FAQItem({ faq, index, accent, isOpen, onToggle }) {
  return (
    <div style={{
      background: isOpen ? "#fff" : "rgba(255,255,255,.85)",
      border: `1.5px solid ${isOpen ? accent + "44" : "#E8EDF5"}`,
      borderRadius: 16, overflow: "hidden",
      boxShadow: isOpen ? `0 8px 30px ${accent}12` : "0 2px 8px rgba(0,0,0,.04)",
      transition: "all .3s ease", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
    }}>
      <button onClick={onToggle} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.5rem 2rem", background: "none", border: "none", cursor: "pointer",
        textAlign: "left", gap: "1rem",
      }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: isOpen ? accent : "#F1F5F9", color: isOpen ? "#fff" : "#94A3B8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.78rem", flexShrink: 0, transition: "all .3s" }}>
            {String(index + 1).padStart(2, "0")}
          </div>
          <span style={{ fontWeight: 700, fontSize: "0.97rem", color: "#0F172A", lineHeight: 1.4 }}>{faq.q}</span>
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
          background: isOpen ? accent : "#F8FAFF",
          border: `1.5px solid ${isOpen ? accent : "#E2E8F0"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all .3s",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: isOpen ? "rotate(45deg)" : "none", transition: "transform .3s" }}>
            <path d="M7 1v12M1 7h12" stroke={isOpen ? "#fff" : accent} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </button>

      <div style={{
        maxHeight: isOpen ? "500px" : "0", overflow: "hidden",
        transition: "max-height .4s ease",
      }}>
        <div style={{ padding: "0 2rem 1.8rem 5rem" }}>
          <div style={{ width: "100%", height: 1, background: "#F1F5F9", marginBottom: "1.2rem" }} />
          <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ course }) {
  const [ref, inView] = useInView(0.08);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section ref={ref} style={{ padding: "7rem 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -50, bottom: "20%", width: 350, height: 350, borderRadius: "50%", background: course.accent, opacity: 0.04, filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .6s" }}>
          <div style={{ display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: course.accentBg, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
            FAQ
          </div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#0F172A", marginBottom: ".8rem" }}>
            Questions <span style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Answered</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#64748B" }}>Everything you want to know before enrolling. Honest answers, no marketing fluff.</p>
        </div>

        {/* FAQ list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", opacity: inView ? 1 : 0, transition: "all .6s .15s" }}>
          {course.faqs.map((faq, i) => (
            <div key={i} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(16px)", transition: `all .5s ${i * 0.06}s` }}>
              <FAQItem faq={faq} index={i} accent={course.accent} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: "3.5rem", background: `linear-gradient(135deg, ${course.accentBg}, rgba(255,255,255,.5))`, border: `1.5px solid ${course.accent}33`, borderRadius: 24, padding: "2.5rem 3rem", textAlign: "center", opacity: inView ? 1 : 0, transition: "all .6s .5s" }}>
          <div style={{ fontFamily: "'Fraunces',serif", fontSize: "1.5rem", fontWeight: 900, color: "#0F172A", marginBottom: ".6rem" }}>Still have questions?</div>
          <p style={{ fontSize: "0.92rem", color: "#64748B", marginBottom: "1.5rem", lineHeight: 1.7 }}>Book a free 30-min call with our team. We'll answer every question you have — no pressure to enroll.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ padding: ".9rem 2.2rem", borderRadius: 10, border: "none", background: course.accent, color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${course.accent}44`, transition: "all .2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}>
              Book Free Counselling →
            </button>
            <a href="tel:+919810000000" style={{ textDecoration: "none" }}>
              <button style={{ padding: ".9rem 2.2rem", borderRadius: 10, border: `1.5px solid ${course.accent}44`, background: "transparent", color: course.accent, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer", transition: "all .2s" }}>
                📞 Call Us Directly
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
