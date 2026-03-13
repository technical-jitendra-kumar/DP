import React from 'react';
import { useInView, useCounter } from "../../hooks/useInView";
import { FEATURES } from "../../data/companies";

function Num({ target, inView }) {
  const v = useCounter(target, inView);
  return <>{v}</>;
}

const getFeatureIcon = (iconName) => {
  const iconMap = {
    'users': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    'briefcase': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="12"/>
        <path d="M2 12h20"/>
      </svg>
    ),
    'award': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    'shield': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    'globe': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    'check': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    'star': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    'target': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    'zap': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    'trending': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    'clock': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    'book': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    'graduation': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    'certificate': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
        <path d="M9.5 8.5 11 10l3.5-3.5"/>
      </svg>
    ),
    'handshake': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
      </svg>
    ),
    'rocket': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
    'lightbulb': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="18" x2="15" y2="18"/>
        <line x1="10" y1="22" x2="14" y2="22"/>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
      </svg>
    ),
    'chart': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
    'work': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    'school': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    'support': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    'verified': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    'academic': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    'business': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  };
  return iconMap[iconName] || (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
};

export default function WhySection() {
  const [ref, inView] = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .why-section {
          font-family: 'DM Sans', sans-serif;
          background: #F5F7FA;
          padding: 4rem 5%;
          position: relative;
          overflow: hidden;
        }

        .why-blob-tr {
          position: absolute;
          top: 8%;
          right: -6%;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(20,41,208,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .why-blob-bl {
          position: absolute;
          bottom: 5%;
          left: -4%;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(14,127,221,0.06) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .why-main-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
        }

        .why-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1429D0;
          margin-bottom: 1rem;
        }
        .why-label-line {
          width: 22px;
          height: 2px;
          background: #1429D0;
          border-radius: 2px;
        }

        .why-h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #161619;
          margin-bottom: 1.4rem;
        }
        .why-h2 span { color: #1429D0; }

        .why-para {
          font-size: 1.05rem;
          color: #36383e;
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 3rem;
        }

        .why-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.75rem;
        }
        .why-feature-item { transition: all 0.5s ease; }
        .why-feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(20,41,208,0.09);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1429D0;
          margin-bottom: 0.85rem;
          transition: background 0.2s;
        }
        .why-feature-item:hover .why-feature-icon {
          background: #1429D0;
          color: #fff;
        }
        .why-feature-title {
          font-weight: 700;
          font-size: 0.97rem;
          color: #161619;
          margin-bottom: 0.35rem;
        }
        .why-feature-desc {
          font-size: 0.84rem;
          color: #36383e;
          line-height: 1.55;
        }

        .why-right {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .why-main-metric {
          background: linear-gradient(135deg, #161619 0%, #262832 100%);
          border-radius: 24px;
          padding: 3rem 2rem;
          color: #fff;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(20,41,208,0.20);
        }
        .why-main-metric::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(20,41,208,0.15);
          pointer-events: none;
        }
        .why-main-metric::after {
          content: '';
          position: absolute;
          bottom: -30px; left: -30px;
          width: 140px; height: 140px;
          border-radius: 50%;
          background: rgba(14,127,221,0.10);
          pointer-events: none;
        }
        .why-metric-num {
          font-size: 4.2rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #fff;
          line-height: 1;
          position: relative;
          z-index: 1;
        }
        .why-metric-num span { color: #BFD2FF; }
        .why-metric-label {
          font-size: 0.95rem;
          color: #BFD2FF;
          font-weight: 500;
          margin-top: 0.5rem;
          position: relative;
          z-index: 1;
        }
        .why-metric-icon {
          position: absolute;
          top: 18px; right: 22px;
          opacity: 0.15;
          z-index: 1;
        }

        .why-sub-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
        }
        .why-sub-card {
          background: #fff;
          border-radius: 18px;
          padding: 1.4rem 1rem;
          border: 1px solid rgba(20,41,208,0.1);
          text-align: center;
          transition: all 0.22s;
          box-shadow: 0 2px 12px rgba(20,41,208,0.06);
        }
        .why-sub-card:hover {
          border-color: #1429D0;
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(20,41,208,0.12);
        }
        .why-sub-num {
          font-size: 1.55rem;
          font-weight: 900;
          color: #1429D0;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .why-sub-lbl {
          font-size: 0.72rem;
          color: #36383e;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 5px;
        }

        .why-trust-card {
          background: #fff;
          border-radius: 20px;
          padding: 1.75rem;
          border: 1px solid rgba(20,41,208,0.1);
          box-shadow: 0 4px 16px rgba(20,41,208,0.06);
        }
        .why-trust-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: #161619;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .why-trust-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }
        .why-trust-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
          background: #F2F5FF;
          border: 1px solid rgba(20,41,208,0.12);
          font-size: 0.75rem;
          font-weight: 600;
          color: #1429D0;
          transition: all 0.18s;
        }
        .why-trust-badge:hover {
          background: #1429D0;
          color: #fff;
        }

        @media (max-width: 900px) {
          .why-main-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
          .why-section { padding: 5rem 5%; }
        }
        @media (max-width: 540px) {
          .why-features-grid { grid-template-columns: 1fr; gap: 1.2rem; }
          .why-sub-metrics { grid-template-columns: 1fr 1fr 1fr; gap: 0.6rem; }
          .why-sub-card { padding: 1rem 0.6rem; }
          .why-sub-num { font-size: 1.2rem; }
        }
      `}</style>

      <section id="why" ref={ref} className="why-section">
        <div className="why-blob-tr" />
        <div className="why-blob-bl" />

        <div className="why-main-grid">

          {/* ── Left Column ── */}
          <div>
            <div className="why-label">
              <span className="why-label-line" />
              Why DataPreneur
            </div>

            <h2 className="why-h2">
              Education built for <br />
              <span>Real-World Outcomes</span>
            </h2>

            <p className="why-para">
              We aren't a typical course platform. We are a career accelerator designed
              by industry veterans to bridge the gap between learning and earning.
            </p>

            <div className="why-features-grid">
              {FEATURES.map((feat, i) => (
                <div
                  key={feat.title}
                  className="why-feature-item"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(20px)",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="why-feature-icon">
                    {typeof feat.icon === 'string' ? getFeatureIcon(feat.icon) : feat.icon}
                  </div>
                  <div className="why-feature-title">{feat.title}</div>
                  <div className="why-feature-desc">{feat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="why-right">

            {/* Main metric */}
            <div className="why-main-metric">
              <div className="why-metric-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="why-metric-num">
                {inView ? <><Num target={100} inView={inView} /><span>%</span></> : "0%"}
              </div>
              <div className="why-metric-label">Overall Placement Rate</div>
            </div>

            {/* Sub metrics */}
            <div className="why-sub-metrics">
              {[
                {
                  n: 2400, suf: "+", lbl: "Alumni",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )
                },
                {
                  n: 180, suf: "+", lbl: "Partners",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2"/>
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      <path d="M2 12h20"/>
                    </svg>
                  )
                },
                {
                  n: 4.9, suf: "★", lbl: "Rating",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  )
                },
              ].map((m) => (
                <div key={m.lbl} className="why-sub-card">
                  <div className="why-sub-num">
                    {m.lbl === "Rating"
                      ? "4.9★"
                      : <>{inView ? <Num target={m.n} inView={inView} /> : 0}{m.suf}</>}
                  </div>
                  <div className="why-sub-lbl">{m.lbl}</div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="why-trust-card">
              <div className="why-trust-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1429D0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                Recognized & Trusted By
              </div>
              <div className="why-trust-badges">
                {[
                  {
                    text: "Microsoft Partner",
                    icon: (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6"/>
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                    )
                  },
                  {
                    text: "ISO 9001 Certified",
                    icon: (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    )
                  },
                  {
                    text: "NASSCOM Member",
                    icon: (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    )
                  },
                ].map((b) => (
                  <span key={b.text} className="why-trust-badge">
                    {b.icon} {b.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}