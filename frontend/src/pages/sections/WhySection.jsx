import React from 'react';
import { useInView, useCounter } from "../../hooks/useInView";
import { FEATURES } from "../../data/companies";

function Num({ target, inView }) {
  const v = useCounter(target, inView);
  return <>{v}</>;
}

const getFeatureIcon = (iconName) => {
  const iconMap = {
    'users': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    'briefcase': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/></svg>),
    'award': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>),
    'shield': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    'globe': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
    'check': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>),
    'star': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
    'target': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>),
    'zap': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
    'trending': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
    'clock': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
    'book': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>),
    'graduation': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>),
    'certificate': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/><path d="M9.5 8.5 11 10l3.5-3.5"/></svg>),
    'handshake': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>),
    'rocket': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>),
    'lightbulb': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>),
    'chart': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>),
    'work': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>),
    'school': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>),
    'support': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
    'verified': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>),
    'academic': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>),
    'business': (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/></svg>),
  };
  return iconMap[iconName] || (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
};

const TRUST_BADGES = [
  {
    text: "Microsoft Partner",
    icon: (<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>)
  },
  {
    text: "ISO 9001 Certified",
    icon: (<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>)
  },
  {
    text: "NASSCOM Member",
    icon: (<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>)
  },
];

export default function WhySection() {
  const [ref, inView] = useInView(0.08);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .ws * { box-sizing: border-box; }

        .ws {
          font-family: 'DM Sans', sans-serif;
          background: #F5F7FA;
          padding: 6rem 5%;
          position: relative;
          overflow: hidden;
        }

        /* ── Background ── */
        .ws-bg {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 50% 50% at 10% 20%, rgba(20,41,208,0.055) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 90% 80%, rgba(14,127,221,0.05) 0%, transparent 60%);
        }
        .ws-dots {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: radial-gradient(rgba(20,41,208,0.055) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: radial-gradient(ellipse 75% 65% at 50% 50%, black 10%, transparent 100%);
        }

        /* ── Outer wrapper ── */
        .ws-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
        }

        /* ── Top label row ── */
        .ws-label {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: rgba(20,41,208,0.07);
          border: 1px solid rgba(20,41,208,0.16);
          border-radius: 99px;
          padding: 0.28rem 0.85rem 0.28rem 0.55rem;
          font-size: 0.69rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase; color: #1429D0;
          margin-bottom: 1.5rem;
        }
        .ws-label-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #1429D0;
          animation: ws-pulse 2s ease-in-out infinite;
        }
        @keyframes ws-pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

        /* ── Heading ── */
        .ws-h2 {
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 900; line-height: 1.08;
          letter-spacing: -0.035em; color: #161619;
          margin: 0 0 1rem;
        }
        .ws-h2 em {
          font-style: normal;
          background: linear-gradient(130deg, #1429D0 0%, #0E7FDD 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ws-sub {
          font-size: 1rem; color: #6B7280; line-height: 1.75;
          max-width: 480px; margin: 0 0 2.5rem;
        }

        /* ════════════════════════════════
           MAIN GRID  — header always full-width,
           features left / stats right
        ════════════════════════════════ */
        .ws-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          gap: 2rem;
          align-items: start;
        }

        /* ── Feature card (left) ── */
        .ws-features-card {
          background: #fff;
          border: 1px solid rgba(20,41,208,0.09);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(20,41,208,0.07);
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .ws-feat {
          padding: 1.6rem 1.5rem;
          border-right: 1px solid rgba(20,41,208,0.07);
          border-bottom: 1px solid rgba(20,41,208,0.07);
          transition: background 0.2s;
          cursor: default;
        }
        .ws-feat:nth-child(2n)   { border-right: none; }
        .ws-feat:nth-last-child(-n+2) { border-bottom: none; }
        .ws-feat:hover { background: rgba(20,41,208,0.025); }

        .ws-feat-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(20,41,208,0.08);
          display: flex; align-items: center; justify-content: center;
          color: #1429D0; margin-bottom: 0.85rem;
          transition: all 0.2s;
        }
        .ws-feat:hover .ws-feat-icon {
          background: #1429D0; color: #fff; transform: scale(1.07);
        }
        .ws-feat-title { font-weight: 700; font-size: 0.9rem; color: #161619; margin-bottom: 0.3rem; }
        .ws-feat-desc  { font-size: 0.79rem; color: #6B7280; line-height: 1.55; }

        /* ── Right column ── */
        .ws-right {
          display: flex; flex-direction: column; gap: 1rem;
        }

        /* ── Hero metric ── */
        .ws-hero {
          border-radius: 22px;
          background: linear-gradient(145deg, #12142a 0%, #1a1f3c 50%, #222840 100%);
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 24px 64px rgba(20,41,208,0.22);
          padding: 2.8rem 2rem 2.5rem;
          text-align: center;
          position: relative; overflow: hidden;
        }
        /* centre glow */
        .ws-hero::before {
          content: '';
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(20,41,208,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .ws-hero-orb1 {
          position: absolute; top: -60px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%;
          background: rgba(20,41,208,0.17); pointer-events: none;
        }
        .ws-hero-orb2 {
          position: absolute; bottom: -50px; left: -50px;
          width: 160px; height: 160px; border-radius: 50%;
          background: rgba(14,127,221,0.11); pointer-events: none;
        }
        .ws-hero-chip {
          position: absolute; top: 14px; right: 14px; z-index: 2;
          background: rgba(20,41,208,0.28); border: 1px solid rgba(20,41,208,0.45);
          border-radius: 99px; padding: 0.2rem 0.6rem;
          font-size: 0.62rem; font-weight: 800; color: #BFD2FF; letter-spacing: 0.08em;
        }
        .ws-hero-num {
          font-size: 5rem; font-weight: 900; letter-spacing: -0.05em;
          color: #fff; line-height: 1; position: relative; z-index: 1;
        }
        .ws-hero-num sup { font-size: 2rem; vertical-align: super; color: #BFD2FF; }
        .ws-hero-lbl {
          font-size: 0.85rem; color: rgba(191,210,255,0.7); font-weight: 500;
          margin-top: 0.45rem; position: relative; z-index: 1; letter-spacing: 0.03em;
        }

        /* ── 3 stat pills ── */
        .ws-stats {
          display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.85rem;
        }
        .ws-stat {
          background: #fff;
          border: 1px solid rgba(20,41,208,0.09);
          border-radius: 16px; padding: 1.3rem 0.8rem;
          text-align: center;
          transition: all 0.22s;
          box-shadow: 0 1px 8px rgba(20,41,208,0.05);
          position: relative; overflow: hidden;
        }
        .ws-stat::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 32px; height: 2px; border-radius: 0 0 3px 3px;
          background: #1429D0; opacity: 0; transition: opacity 0.2s;
        }
        .ws-stat:hover { border-color: rgba(20,41,208,0.22); transform: translateY(-3px); box-shadow: 0 10px 28px rgba(20,41,208,0.1); }
        .ws-stat:hover::before { opacity: 1; }
        .ws-stat-num { font-size: 1.55rem; font-weight: 900; color: #1429D0; letter-spacing: -0.02em; line-height: 1; }
        .ws-stat-lbl { font-size: 0.67rem; color: #9CA3AF; font-weight: 600; text-transform: uppercase; letter-spacing: 0.7px; margin-top: 4px; }

        /* ── Trust strip ── */
        .ws-trust {
          background: #fff;
          border: 1px solid rgba(20,41,208,0.09);
          border-radius: 18px; padding: 1.35rem 1.4rem;
          box-shadow: 0 2px 12px rgba(20,41,208,0.05);
        }
        .ws-trust-hd {
          font-weight: 700; font-size: 0.84rem; color: #161619;
          margin-bottom: 0.9rem;
          display: flex; align-items: center; gap: 0.45rem;
        }
        .ws-trust-hd svg { flex-shrink: 0; }
        .ws-badges { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .ws-badge {
          display: inline-flex; align-items: center; gap: 0.35rem;
          padding: 0.4rem 0.8rem; border-radius: 8px;
          background: #EEF2FF; border: 1px solid rgba(20,41,208,0.13);
          font-size: 0.72rem; font-weight: 600; color: #1429D0;
          transition: all 0.18s; white-space: nowrap; cursor: default;
        }
        .ws-badge:hover {
          background: #1429D0; color: #fff; border-color: #1429D0;
          transform: translateY(-1px); box-shadow: 0 4px 14px rgba(20,41,208,0.2);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ws-body { grid-template-columns: 1fr; }
          .ws-sub  { max-width: 100%; }
        }
        @media (max-width: 640px) {
          .ws { padding: 4rem 4%; }
          .ws-features-card { grid-template-columns: 1fr; }
          .ws-feat { border-right: none; }
          .ws-feat:nth-last-child(-n+2) { border-bottom: 1px solid rgba(20,41,208,0.07); }
          .ws-feat:last-child { border-bottom: none; }
          .ws-hero-num { font-size: 3.8rem; }
          .ws-stat-num { font-size: 1.25rem; }
        }
        @media (max-width: 380px) {
          .ws-stat-num { font-size: 1.1rem; }
          .ws-stat-lbl { font-size: 0.6rem; letter-spacing: 0; }
        }
      `}</style>

      <section id="why" ref={ref} className="ws">
        <div className="ws-bg" />
        <div className="ws-dots" />

        <div className="ws-inner">

          {/* ── Top text — full width ── */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(16px)",
              transition: "opacity .55s, transform .55s",
            }}
          >
            <div className="ws-label">
              <span className="ws-label-dot" />
              Why DataPreneur
            </div>
            <h2 className="ws-h2">
              Education built for <br />
              <em>Real-World Outcomes</em>
            </h2>
            <p className="ws-sub">
              We aren't a typical course platform. We are a career accelerator designed
              by industry veterans to bridge the gap between learning and earning.
            </p>
          </div>

          {/* ── Two-column body ── */}
          <div className="ws-body">

            {/* Left — features */}
            <div
              className="ws-features-card"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(20px)",
                transition: "opacity .55s .1s, transform .55s .1s",
              }}
            >
              {FEATURES.map((feat, i) => (
                <div key={feat.title} className="ws-feat">
                  <div className="ws-feat-icon">
                    {typeof feat.icon === 'string' ? getFeatureIcon(feat.icon) : feat.icon}
                  </div>
                  <div className="ws-feat-title">{feat.title}</div>
                  <div className="ws-feat-desc">{feat.desc}</div>
                </div>
              ))}
            </div>

            {/* Right — stats */}
            <div className="ws-right">

              {/* Hero */}
              <div
                className="ws-hero"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: "opacity .55s .15s, transform .55s .15s",
                }}
              >
                <div className="ws-hero-orb1" />
                <div className="ws-hero-orb2" />
                <div className="ws-hero-chip">2025 COHORT</div>
                <div className="ws-hero-num">
                  {inView ? <><Num target={100} inView={inView} /><sup>%</sup></> : "0%"}
                </div>
                <div className="ws-hero-lbl">Overall Placement Rate</div>
              </div>

              {/* 3 stats */}
              <div
                className="ws-stats"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: "opacity .55s .25s, transform .55s .25s",
                }}
              >
                {[
                  { n: 2400, suf: "+", lbl: "Alumni" },
                  { n: 180,  suf: "+", lbl: "Partners" },
                  { raw: "4.9★",       lbl: "Rating" },
                ].map((m) => (
                  <div key={m.lbl} className="ws-stat">
                    <div className="ws-stat-num">
                      {m.raw ?? (inView ? <><Num target={m.n} inView={inView} />{m.suf}</> : `0${m.suf}`)}
                    </div>
                    <div className="ws-stat-lbl">{m.lbl}</div>
                  </div>
                ))}
              </div>

              {/* Trust */}
              <div
                className="ws-trust"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: "opacity .55s .35s, transform .55s .35s",
                }}
              >
                <div className="ws-trust-hd">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1429D0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                  Recognized & Trusted By
                </div>
                <div className="ws-badges">
                  {TRUST_BADGES.map(b => (
                    <span key={b.text} className="ws-badge">{b.icon} {b.text}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
