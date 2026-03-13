import { useState } from "react";
import { useInView } from "../../hooks/useInView";

function OfferCard({ offer, index, inView }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "#fff" : "#F5F7FA",
        borderRadius: 20, padding: "2rem",
        border: `1.5px solid ${hov ? "rgba(20,41,208,0.28)" : "rgba(20,41,208,0.09)"}`,
        boxShadow: hov
          ? "0 20px 50px rgba(20,41,208,0.10), 0 4px 16px rgba(20,41,208,0.06)"
          : "0 2px 8px rgba(20,41,208,0.04)",
        transform: inView ? (hov ? "translateY(-8px)" : "none") : "translateY(28px)",
        opacity: inView ? 1 : 0,
        transition: `all 0.5s ${index * 0.08}s ease`,
        cursor: "default", position: "relative", overflow: "hidden",
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: 60, height: 60,
        background: "radial-gradient(circle at 0 0, rgba(20,41,208,0.07), transparent 70%)",
        borderRadius: "20px 0 0 0",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: "#F2F5FF",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.25rem", marginBottom: "1.2rem",
        border: "1.5px solid rgba(20,41,208,0.14)",
        color: "#1429D0",
        transition: "transform 0.3s ease",
        transform: hov ? "scale(1.1) rotate(5deg)" : "none",
      }}>
        {offer.icon && typeof offer.icon === "function"
          ? <offer.icon size={22} color="#1429D0" />
          : offer.icon}
      </div>

      <h3 style={{
        fontWeight: 800, fontSize: "1rem",
        color: "#262832", marginBottom: "0.5rem", lineHeight: 1.3,
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {offer.title}
      </h3>

      <p style={{
        fontSize: "0.87rem", color: "#36383e", lineHeight: 1.7,
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {offer.desc}
      </p>

      {/* Bottom accent bar */}
      <div style={{
        height: 2,
        background: "linear-gradient(90deg, #1429D0, #0E7FDD)",
        borderRadius: 2, marginTop: "1.2rem",
        transform: hov ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.35s ease",
        width: "100%",
      }} />
    </div>
  );
}

export default function WhatItOffers({ course }) {
  const [ref, inView] = useInView(0.08);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
        @media (max-width: 900px) { .dp-offers-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .dp-offers-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <section ref={ref} style={{
        padding: "90px 5%",
        position: "relative", overflow: "hidden",
        background: "#ffffff",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {/* Top border accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: "linear-gradient(90deg, transparent, #1429D0, #0E7FDD, transparent)",
          pointerEvents: "none",
        }} />

        {/* Blobs */}
        <div style={{ position: "absolute", top: -60, right: -40, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,41,208,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -40, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,127,221,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{
            textAlign: "center", marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "all 0.6s ease",
          }}>
            {/* Label row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: "1.1rem" }}>
              <span style={{ width: 22, height: 2, background: "#1429D0", borderRadius: 2, display: "inline-block" }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1429D0", letterSpacing: "2.5px", textTransform: "uppercase" }}>
                What You Get
              </span>
              <span style={{ width: 22, height: 2, background: "#1429D0", borderRadius: 2, display: "inline-block" }} />
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900,
              color: "#161619", lineHeight: 1.1, letterSpacing: "-0.03em",
              marginBottom: "0.8rem",
            }}>
              Everything in This{" "}
              <span style={{
                background: "linear-gradient(135deg, #1429D0, #0E7FDD)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Program
              </span>
            </h2>

            <p style={{ color: "#36383e", fontSize: "1rem", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
              Every element of this program is designed around one goal — getting you placed at a top company.
            </p>
          </div>

          {/* Grid */}
          <div className="dp-offers-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {course.offers.map((offer, i) => (
              <OfferCard key={i} offer={offer} index={i} inView={inView} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}