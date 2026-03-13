import { useState, useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";

// ── SVG atoms ────────────────────────────────────────────────────────────────

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="#F59E0B">
    <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.7 4.08L8 10.4 4.3 12.5l.7-4.08L2 5.5l4.15-.75L8 1z"/>
  </svg>
);

const QuoteIcon = () => (
  <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
    <path d="M0 16C0 7.163 5.373 1.65 16.12 0l1.44 2.6C12.373 3.9 9.547 6.587 8.72 10.4H14V26H0V16zm22 0C22 7.163 27.373 1.65 38.12 0l1.44 2.6C34.373 3.9 31.547 6.587 30.72 10.4H36V26H22V16z" fill="#1429D0" opacity=".10"/>
  </svg>
);

const CheckBadge = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <circle cx="5.5" cy="5.5" r="5.5" fill="#1429D0" opacity=".12"/>
    <path d="M2.8 5.5l1.9 1.9 3.5-3.5" stroke="#1429D0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronLeft = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M10.5 13L6 8.5l4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M6.5 4l4.5 4.5L6.5 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PauseIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="1" width="4" height="12" rx="1.5" fill="#1429D0"/>
    <rect x="8" y="1" width="4" height="12" rx="1.5" fill="#1429D0"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M3 1.5l10 5.5-10 5.5V1.5z" fill="#1429D0"/>
  </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────

export default function SuccessStories({ course }) {
  const [ref, inView]       = useInView(0.1);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const timer = useRef(null);
  const total = course.testimonials.length;

  useEffect(() => {
    if (isPlaying) {
      timer.current = setInterval(() => setCurrent(c => (c + 1) % total), 4500);
    }
    return () => clearInterval(timer.current);
  }, [isPlaying, total]);

  const goTo = (i) => { setCurrent(i); setIsPlaying(false); };
  const prev  = () => { setCurrent(c => (c - 1 + total) % total); setIsPlaying(false); };
  const next  = () => { setCurrent(c => (c + 1) % total); setIsPlaying(false); };

  const onMouseDown = (e) => { setDragStart(e.clientX); setIsPlaying(false); };
  const onMouseMove = (e) => { if (dragStart !== null) setDragOffset(e.clientX - dragStart); };
  const onMouseUp   = ()  => {
    if (dragOffset > 60) prev();
    else if (dragOffset < -60) next();
    setDragStart(null); setDragOffset(0);
  };

  const t = course.testimonials[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .dp-ss-sidebar-item:hover {
          background: #F2F5FF !important;
          border-color: rgba(20,41,208,0.20) !important;
        }
        .dp-ss-nav-btn:hover {
          background: #F2F5FF !important;
          border-color: #1429D0 !important;
          color: #1429D0 !important;
        }
        .dp-ss-play-btn:hover { background: #dce4ff !important; }
      `}</style>

      <section
        ref={ref}
        style={{
          padding: "96px 5%",
          background: "#ffffff",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Blobs — no grid */}
        <div style={{ position: "absolute", top: "6%",  left:  "2%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,41,208,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "6%", right: "2%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,127,221,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* ── Header ── */}
          <div style={{
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all .6s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.1rem" }}>
              <span style={{ width: 22, height: 2, background: "#1429D0", borderRadius: 2, display: "inline-block" }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1429D0", letterSpacing: "2.5px", textTransform: "uppercase" }}>
                Success Stories
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
              <h2 style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900,
                color: "#161619", lineHeight: 1.1, letterSpacing: "-0.03em",
              }}>
                Real People,{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1429D0, #0E7FDD)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Dream Careers
                </span>
              </h2>
              <p style={{ color: "#36383e", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 360 }}>
                Our alumni are now working at top firms across finance, consulting, and tech.
              </p>
            </div>
          </div>

          {/* ── Two-column layout ── */}
          <div
            className="dp-ss-layout"
            style={{
              display: "grid", gridTemplateColumns: "1fr 340px", gap: "1.5rem", alignItems: "start",
              opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .7s .15s ease",
            }}
          >

            {/* ── LEFT — featured card ── */}
            <div
              style={{ cursor: "grab", userSelect: "none", position: "relative" }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <div style={{
                background: "#fff",
                borderRadius: 28,
                padding: "3rem",
                border: "1.5px solid rgba(20,41,208,0.12)",
                boxShadow: "0 8px 48px rgba(20,41,208,0.08)",
                minHeight: 360,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                transition: "all .55s cubic-bezier(.4,0,.2,1)",
              }}>

                {/* Top: stars + quote icon */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.8rem" }}>
                    <div style={{ display: "flex", gap: "0.2rem" }}>
                      {Array.from({ length: t.stars || 5 }).map((_, s) => <StarIcon key={s} />)}
                    </div>
                    <QuoteIcon />
                  </div>

                  {/* Quote text */}
                  <blockquote style={{
                    fontSize: "1.12rem", fontWeight: 500,
                    color: "#262832", lineHeight: 1.8,
                    fontStyle: "normal", margin: 0,
                    letterSpacing: "-0.01em",
                    transition: "all .4s ease",
                  }}>
                    {t.text}
                  </blockquote>
                </div>

                {/* Bottom: author + badge */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(20,41,208,0.07)",
                  marginTop: "2rem",
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${t.color || "#1429D0"}, ${t.color ? t.color + "bb" : "#0E7FDD"})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "1.05rem", color: "#fff", flexShrink: 0,
                    boxShadow: "0 4px 14px rgba(20,41,208,0.18)",
                    border: "2.5px solid #fff",
                    letterSpacing: "-0.02em",
                  }}>
                    {t.avatar}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: "0.97rem", color: "#161619", marginBottom: "0.1rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.4 }}>{t.role}</div>
                  </div>

                  {/* Alumni badge */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0.35rem",
                    padding: "0.32rem 0.9rem", borderRadius: 100,
                    background: "rgba(20,41,208,0.07)", border: "1px solid rgba(20,41,208,0.16)",
                    color: "#1429D0", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.5px",
                    flexShrink: 0,
                  }}>
                    <CheckBadge /> Alumni
                  </div>
                </div>
              </div>

              {/* ── Controls ── */}
              <div style={{
                display: "flex", alignItems: "center", gap: "1rem",
                marginTop: "1.75rem",
              }}>
                {/* Prev */}
                <button className="dp-ss-nav-btn" onClick={prev} style={{
                  width: 42, height: 42, borderRadius: "50%",
                  border: "1.5px solid rgba(20,41,208,0.16)", background: "#fff",
                  color: "#36383e", cursor: "pointer", transition: "all .2s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(20,41,208,0.06)", flexShrink: 0,
                }}>
                  <ChevronLeft />
                </button>

                {/* Pill dots */}
                <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", flex: 1 }}>
                  {course.testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      style={{
                        width: i === current ? 32 : 8, height: 8, borderRadius: 4,
                        border: "none",
                        background: i === current ? "#1429D0" : "rgba(20,41,208,0.14)",
                        cursor: "pointer", transition: "all .35s ease", padding: 0,
                      }}
                    />
                  ))}
                </div>

                {/* Next */}
                <button className="dp-ss-nav-btn" onClick={next} style={{
                  width: 42, height: 42, borderRadius: "50%",
                  border: "1.5px solid rgba(20,41,208,0.16)", background: "#fff",
                  color: "#36383e", cursor: "pointer", transition: "all .2s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(20,41,208,0.06)", flexShrink: 0,
                }}>
                  <ChevronRight />
                </button>

                {/* Play / pause */}
                <button className="dp-ss-play-btn" onClick={() => setIsPlaying(!isPlaying)} style={{
                  width: 42, height: 42, borderRadius: "50%",
                  border: "1.5px solid rgba(20,41,208,0.20)", background: "#EEF2FF",
                  cursor: "pointer", transition: "all .2s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
              </div>
            </div>

            {/* ── RIGHT — sidebar stack ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>

              {/* Quick-stats card */}
              <div style={{
                background: "linear-gradient(135deg, #1429D0 0%, #0E7FDD 100%)",
                borderRadius: 20, padding: "1.6rem",
                boxShadow: "0 8px 32px rgba(20,41,208,0.25)",
                marginBottom: "0.25rem",
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {[
                    { num: "94%",   label: "Placement Rate" },
                    { num: "2400+", label: "Alumni Placed"  },
                    { num: "₹12L",  label: "Avg. First CTC" },
                    { num: "45 Days", label: "Avg. Job Time" },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: i % 2 === 0 ? "left" : "right" }}>
                      <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</div>
                      <div style={{ fontSize: "0.72rem", color: "rgba(191,210,255,0.80)", marginTop: "0.2rem", fontWeight: 500 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar testimonial list */}
              {course.testimonials.map((item, i) => {
                const isActive = i === current;
                return (
                  <button
                    key={i}
                    className="dp-ss-sidebar-item"
                    onClick={() => goTo(i)}
                    style={{
                      display: "flex", alignItems: "center", gap: "0.85rem",
                      padding: "0.85rem 1rem", borderRadius: 16, width: "100%",
                      textAlign: "left", cursor: "pointer",
                      background: isActive ? "#F2F5FF" : "#fff",
                      border: `1.5px solid ${isActive ? "rgba(20,41,208,0.22)" : "rgba(20,41,208,0.08)"}`,
                      transition: "all .25s ease",
                      boxShadow: isActive ? "0 4px 16px rgba(20,41,208,0.10)" : "none",
                    }}
                  >
                    {/* Mini avatar */}
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                      background: `linear-gradient(135deg, ${item.color || "#1429D0"}, ${item.color ? item.color + "bb" : "#0E7FDD"})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 800, fontSize: "0.82rem", color: "#fff",
                      border: isActive ? "2px solid #fff" : "2px solid transparent",
                      boxShadow: isActive ? "0 2px 8px rgba(20,41,208,0.18)" : "none",
                    }}>
                      {item.avatar}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: "0.85rem", color: isActive ? "#1429D0" : "#262832", marginBottom: "0.1rem" }}>
                        {item.name}
                      </div>
                      <div style={{
                        fontSize: "0.76rem", color: "#94A3B8", lineHeight: 1.3,
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                      }}>
                        {item.role}
                      </div>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "#1429D0", flexShrink: 0,
                      }} />
                    )}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .dp-ss-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}