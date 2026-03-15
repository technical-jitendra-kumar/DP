import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Globe, Shield, Briefcase, QrCode, Star } from 'lucide-react';
import img  from '../../assets/certificate.png';
import img1 from '../../assets/certificate2.png';
import img2 from '../../assets/certificate3.png';

/* ── LinkedIn icon ── */
const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M7.5 9.5H5V19H7.5V9.5Z" fill="white"/>
    <circle cx="6.25" cy="6.75" r="1.5" fill="white"/>
    <path d="M19 13.5C19 11.567 17.433 10 15.5 10C14.4 10 13.42 10.49 12.75 11.27V9.5H10.25V19H12.75V14C12.75 12.895 13.645 12 14.75 12C15.855 12 16.75 12.895 16.75 14V19H19V13.5Z" fill="white"/>
  </svg>
);

/* ── Microsoft logo ── */
const MicrosoftIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022"/>
    <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00"/>
    <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
    <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
  </svg>
);

/* ── Certificate data ── */
const certsData = [
  {
    img:     img,
    num:     '01',
    tag:     'Globally Recognized',
    title:   'Microsoft Certification',
    desc:    'Microsoft DP-900 is an internationally recognized certification that many companies and clients directly ask for. It validates your core data and essential cloud skills, making you more job-ready and client-ready.',
    issuer:  'Microsoft',
    skills:  ['Azure Data', 'Cloud Fundamentals', 'Data Analytics'],
  },
  {
    img:     img1,
    num:     '02',
    tag:     'Industry Standard',
    title:   'DataPreneur Certificate',
    desc:    'Our in-house certification is co-verified with NASSCOM and trusted by 400+ hiring partners. It demonstrates real-world project delivery, technical proficiency, and career readiness across data domains.',
    issuer:  'DataPreneur × NASSCOM',
    skills:  ['Python', 'SQL', 'Machine Learning'],
  },
  {
    img:     img2,
    num:     '03',
    tag:     'LinkedIn Verified',
    title:   'Specialisation Badge',
    desc:    'A domain-specific badge that maps directly to job descriptions. Verifiable via QR code by any hiring manager within seconds — shared directly to your LinkedIn profile upon completion.',
    issuer:  'DataPreneur',
    skills:  ['Data Science', 'AI/ML', 'BI & Visualization'],
  },
];

const trust = [
  { icon: Shield,    text: 'Blockchain Verified'  },
  { icon: LinkedInIcon, text: 'LinkedIn Ready'    },
  { icon: QrCode,    text: 'QR Scannable'         },
  { icon: Globe,     text: '25+ Countries'        },
];

const stats = [
  { n: '12K+',  l: 'Issued' },
  { n: '400+',  l: 'Partners' },
  { n: '92%',   l: 'Career Growth' },
  { n: '4.9★',  l: 'Rating' },
];

export default function CertificationsSection() {
  const [active, setActive]       = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir]             = useState(null);
  const dragX = useRef(null);

  const go = (idx, d) => {
    if (animating || idx === active) return;
    setDir(d);
    setAnimating(true);
    setTimeout(() => { setActive(idx); setAnimating(false); setDir(null); }, 400);
  };
  const next = () => go((active + 1) % certsData.length, 'left');
  const prev = () => go((active - 1 + certsData.length) % certsData.length, 'right');

  const onTouchStart = (e) => { dragX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (dragX.current === null) return;
    const d = dragX.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 40) d > 0 ? next() : prev();
    dragX.current = null;
  };
  const onMouseDown  = (e) => { dragX.current = e.clientX; };
  const onMouseUp    = (e) => {
    if (dragX.current === null) return;
    const d = dragX.current - e.clientX;
    if (Math.abs(d) > 40) d > 0 ? next() : prev();
    dragX.current = null;
  };

  const cert    = certsData[active];
  const nextIdx = dir === 'left' ? (active + 1) % certsData.length : (active - 1 + certsData.length) % certsData.length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .dc * { box-sizing: border-box; }

        /* ════════════════════════════════════
           SECTION — dark gradient hero
        ════════════════════════════════════ */
        .dc {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(145deg, #0a0c1a 0%, #0f1535 35%, #1429D0 70%, #0E7FDD 100%);
          position: relative; overflow: hidden;
          padding: 0 0 5rem;
        }

        /* Grid lines overlay — like reference image */
        .dc-grid-lines {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.6) 80%, transparent 100%);
        }
        /* Glow orbs */
        .dc-orb1 {
          position: absolute; top: -120px; right: -120px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(20,41,208,0.35) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .dc-orb2 {
          position: absolute; bottom: -80px; left: -80px;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(14,127,221,0.25) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* ── Top hero text area ── */
        .dc-hero {
          text-align: center;
          padding: 5rem 5% 2.5rem;
          position: relative; z-index: 1;
        }
        .dc-hero-label {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 99px;
          padding: 0.28rem 0.9rem 0.28rem 0.6rem;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          margin-bottom: 1.25rem;
        }
        .dc-hero-label-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #BFD2FF;
          animation: dc-blink 2s ease-in-out infinite;
        }
        @keyframes dc-blink { 0%,100%{opacity:1} 50%{opacity:.3} }

        .dc-hero-h2 {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 900;
          color: #fff; letter-spacing: -0.04em; line-height: 1.05;
          margin: 0 0 1rem;
        }
        .dc-hero-h2 em {
          font-style: normal;
          background: linear-gradient(130deg, #BFD2FF 0%, #fff 50%, #93C5FD 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .dc-hero-sub {
          font-size: 1rem; color: rgba(255,255,255,0.65);
          max-width: 540px; margin: 0 auto 2rem; line-height: 1.75;
        }

        /* CTA button */
        .dc-hero-cta {
          display: inline-flex; align-items: center; gap: 0.6rem;
          background: #fff; color: #1429D0;
          border: none; border-radius: 12px;
          padding: 0.85rem 2rem;
          font-size: 0.92rem; font-weight: 800;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
          transition: all 0.22s ease;
          letter-spacing: -0.01em;
        }
        .dc-hero-cta:hover {
          background: #F2F5FF;
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.35);
        }

        /* ── CTA + stats strip ── */
        .dc-cta-strip {
          display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
          padding: 0 5% 3.5rem;
          position: relative; z-index: 1;
        }

        /* ── Stats strip ── */
        .dc-stats-row {
          display: flex; align-items: center; justify-content: center;
          gap: 0;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px; overflow: hidden;
          width: fit-content; margin-left: auto; margin-right: auto;
        }
        .dc-stat {
          padding: 1rem 2rem; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .dc-stat:last-child { border-right: none; }
        .dc-stat-n { font-size: 1.45rem; font-weight: 900; color: #fff; letter-spacing: -0.03em; line-height: 1; }
        .dc-stat-l { font-size: 0.65rem; font-weight: 600; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.7px; margin-top: 3px; }

        /* ════════════════════════════════════
           BOTTOM — two-column card area
        ════════════════════════════════════ */
        .dc-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 0 5%;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        /* ── Left: certificate image slider ── */
        .dc-left {
          display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
        }

        .dc-slider-wrap {
          width: 100%; position: relative;
          border-radius: 22px; overflow: hidden;
          cursor: grab; user-select: none;
        }
        .dc-slider-wrap:active { cursor: grabbing; }

        /* Dark frame behind cert */
        .dc-cert-frame {
          background: linear-gradient(145deg, #0d1024, #1a1f3c);
          border-radius: 22px; padding: 1.75rem 1.75rem 1.25rem;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow:
            0 32px 80px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.06) inset;
          position: relative; overflow: hidden;
        }
        /* Inner shine */
        .dc-cert-frame::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          pointer-events: none;
        }

        .dc-cert-inner {
          background: #fff; border-radius: 14px; overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        .dc-cert-img {
          width: 100%; display: block;
          object-fit: contain; padding: 12px;
          max-height: 500px; min-height: 260px;
        }

        /* Slide animations */
        @keyframes dc-out-l { from{transform:translateX(0);opacity:1} to{transform:translateX(-110%);opacity:0} }
        @keyframes dc-out-r { from{transform:translateX(0);opacity:1} to{transform:translateX(110%);opacity:0} }
        @keyframes dc-in-r  { from{transform:translateX(110%);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes dc-in-l  { from{transform:translateX(-110%);opacity:0} to{transform:translateX(0);opacity:1} }

        .dc-slide-main               { width: 100%; }
        .dc-slide-main.anim-left     { animation: dc-out-l 0.4s cubic-bezier(.4,0,.2,1) forwards; }
        .dc-slide-main.anim-right    { animation: dc-out-r 0.4s cubic-bezier(.4,0,.2,1) forwards; }
        .dc-slide-incoming           { position: absolute; inset: 0; pointer-events: none; }
        .dc-slide-incoming.from-right{ animation: dc-in-r 0.4s cubic-bezier(.4,0,.2,1) forwards; }
        .dc-slide-incoming.from-left { animation: dc-in-l 0.4s cubic-bezier(.4,0,.2,1) forwards; }

        /* Count badge on cert */
        .dc-count-pill {
          position: absolute; top: 22px; left: 22px;
          background: rgba(20,41,208,0.88); color: #fff; backdrop-filter: blur(4px);
          font-size: 0.65rem; font-weight: 800; letter-spacing: 0.1em;
          padding: 3px 11px; border-radius: 99px;
        }

        /* Trust badges row */
        .dc-trust-row {
          display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; justify-content: center;
        }
        .dc-trust-pill {
          display: inline-flex; align-items: center; gap: 0.35rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 99px; padding: 0.3rem 0.85rem;
          font-size: 0.72rem; font-weight: 600; color: rgba(255,255,255,0.8);
          transition: all 0.18s;
        }
        .dc-trust-pill:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.25);
          color: #fff;
        }

        /* Nav row */
        .dc-nav {
          display: flex; align-items: center; gap: 1rem;
        }
        .dc-nav-btn {
          width: 46px; height: 46px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; padding: 0; transition: all 0.22s;
          backdrop-filter: blur(8px);
          -webkit-tap-highlight-color: transparent;
        }
        .dc-nav-btn:hover {
          background: #1429D0; border-color: #1429D0;
          box-shadow: 0 8px 24px rgba(20,41,208,0.5);
          transform: translateY(-1px);
        }
        .dc-dots { display: flex; gap: 6px; align-items: center; }
        .dc-dot {
          height: 8px; border-radius: 4px; border: none;
          cursor: pointer; padding: 0; transition: all 0.3s;
          -webkit-tap-highlight-color: transparent;
        }
        .dc-dot.on  { width: 24px; background: #fff; }
        .dc-dot.off { width: 8px;  background: rgba(255,255,255,0.3); }

        /* ── Right: info panel ── */
        .dc-right {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 24px;
          padding: 2.5rem;
          backdrop-filter: blur(20px);
          position: relative; overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.3);
        }
        .dc-right::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }

        /* Large ghost number */
        .dc-ghost-num {
          font-size: 8rem; font-weight: 900; letter-spacing: -0.06em;
          color: rgba(255,255,255,0.04); line-height: 1;
          position: absolute; top: -10px; right: 16px;
          pointer-events: none; user-select: none;
        }

        .dc-info-tag {
          display: inline-flex; align-items: center; gap: 0.35rem;
          background: rgba(20,41,208,0.4);
          border: 1px solid rgba(20,41,208,0.6);
          border-radius: 99px; padding: 0.22rem 0.75rem;
          font-size: 0.65rem; font-weight: 700;
          color: #BFD2FF; letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 1.1rem;
        }
        .dc-info-tag-dot { width: 5px; height: 5px; border-radius: 50%; background: #BFD2FF; }

        .dc-info-title {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900;
          color: #fff; letter-spacing: -0.03em; line-height: 1.15;
          margin-bottom: 1rem; position: relative; z-index: 1;
          transition: opacity 0.3s;
        }
        .dc-info-desc {
          font-size: 0.92rem; color: rgba(255,255,255,0.65);
          line-height: 1.8; margin-bottom: 1.5rem;
          position: relative; z-index: 1;
          transition: opacity 0.3s;
        }

        /* Issuer row */
        .dc-issuer {
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 1.25rem;
        }
        .dc-issuer-icon {
          width: 32px; height: 32px; border-radius: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .dc-issuer-label { font-size: 0.72rem; color: rgba(255,255,255,0.45); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .dc-issuer-name  { font-size: 0.85rem; color: #fff; font-weight: 700; }

        /* Skills */
        .dc-skills {
          display: flex; flex-wrap: wrap; gap: 0.5rem;
          margin-bottom: 1.75rem;
        }
        .dc-skill {
          font-size: 0.74rem; font-weight: 600;
          padding: 0.32rem 0.75rem; border-radius: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.8);
          transition: all 0.18s;
        }
        .dc-skill:hover {
          background: rgba(20,41,208,0.4);
          border-color: rgba(20,41,208,0.6);
          color: #fff;
        }

        /* Divider */
        .dc-info-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin-bottom: 1.25rem;
        }

        /* Verification row */
        .dc-verify-row {
          display: flex; align-items: center; gap: 0.85rem; flex-wrap: wrap;
        }
        .dc-verify-item {
          display: flex; align-items: center; gap: 0.4rem;
          font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.6);
        }
        .dc-verify-item svg { color: #BFD2FF; }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .dc-body { grid-template-columns: 1fr; gap: 2.5rem; }
          .dc-right { order: -1; }
          .dc-ghost-num { font-size: 5rem; }
        }
        @media (max-width: 600px) {
          .dc-hero { padding: 4rem 4% 3rem; }
          .dc-body { padding: 0 4%; }
          .dc-stats-row { gap: 0; }
          .dc-stat { padding: 0.85rem 1.2rem; }
          .dc-stat-n { font-size: 1.2rem; }
          .dc-right { padding: 1.75rem; }
          .dc-trust-row { gap: 0.45rem; }
          .dc-hero-cta { width: 100%; justify-content: center; max-width: 320px; }
        }
      `}</style>

      <section className="dc">
        <div className="dc-grid-lines" />
        <div className="dc-orb1" />
        <div className="dc-orb2" />

        {/* ── Hero ── */}
        <div className="dc-hero">
          <div className="dc-hero-label">
            <span className="dc-hero-label-dot" />
            Certification
          </div>

          <h2 className="dc-hero-h2">
            Dual Certification<br />
            <em>Program</em>
          </h2>

          <p className="dc-hero-sub">
            Complete the certification stack companies actually ask for.
            Two certifications that together fulfil what hiring managers
            and clients look for.
          </p>

        </div>

        {/* ── CTA + Stats strip — between hero and body ── */}
        <div className="dc-cta-strip">
          <button className="dc-hero-cta">
            Know What Companies Ask For →
          </button>
          <div className="dc-stats-row">
            {stats.map((s, i) => (
              <div key={i} className="dc-stat">
                <div className="dc-stat-n">{s.n}</div>
                <div className="dc-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="dc-body">

          {/* Left — slider */}
          <div className="dc-left">

            <div
              className="dc-slider-wrap"
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseLeave={() => { dragX.current = null; }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="dc-cert-frame">
                {/* Current */}
                <div
                  key={`main-${active}`}
                  className={`dc-slide-main${dir === 'left' ? ' anim-left' : dir === 'right' ? ' anim-right' : ''}`}
                >
                  <div className="dc-cert-inner">
                    <img src={certsData[active].img} alt={certsData[active].title} className="dc-cert-img" draggable={false} />
                  </div>
                </div>

                {/* Incoming */}
                {animating && (
                  <div className={`dc-slide-incoming ${dir === 'left' ? 'from-right' : 'from-left'}`}>
                    <div className="dc-cert-frame" style={{ position: 'static', boxShadow: 'none', border: 'none', padding: 0 }}>
                      <div className="dc-cert-inner">
                        <img src={certsData[nextIdx].img} alt="" className="dc-cert-img" draggable={false} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="dc-count-pill">{active + 1} / {certsData.length}</div>
              </div>
            </div>

            {/* Trust pills */}
            <div className="dc-trust-row">
              {trust.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div key={i} className="dc-trust-pill">
                    {typeof Icon === 'function' && Icon.length === 0
                      ? <Icon size={13} />
                      : <Icon size={13} />
                    }
                    {t.text}
                  </div>
                );
              })}
            </div>

            {/* Nav */}
            <div className="dc-nav">
              <button className="dc-nav-btn" onClick={prev} aria-label="Previous">
                <ChevronLeft size={19} />
              </button>
              <div className="dc-dots">
                {certsData.map((_, i) => (
                  <button
                    key={i}
                    className={`dc-dot ${i === active ? 'on' : 'off'}`}
                    onClick={() => go(i, i > active ? 'left' : 'right')}
                    aria-label={`Certificate ${i + 1}`}
                  />
                ))}
              </div>
              <button className="dc-nav-btn" onClick={next} aria-label="Next">
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

          {/* Right — info panel */}
          <div className="dc-right">
            <div className="dc-ghost-num">{cert.num}</div>

            <div className="dc-info-tag">
              <span className="dc-info-tag-dot" />
              {cert.tag}
            </div>

            <h3 className="dc-info-title">{cert.title}</h3>

            <p className="dc-info-desc">{cert.desc}</p>

            {/* Issuer */}
            <div className="dc-issuer">
              <div className="dc-issuer-icon">
                {cert.issuer.includes('Microsoft') ? <MicrosoftIcon size={16} /> : <CheckCircle size={14} color="#BFD2FF" />}
              </div>
              <div>
                <div className="dc-issuer-label">Issued by</div>
                <div className="dc-issuer-name">{cert.issuer}</div>
              </div>
            </div>

            {/* Skills */}
            <div className="dc-skills">
              {cert.skills.map((s, i) => (
                <span key={i} className="dc-skill">{s}</span>
              ))}
            </div>

            <div className="dc-info-divider" />

            {/* Verify row */}
            <div className="dc-verify-row">
              <div className="dc-verify-item"><CheckCircle size={13} /> Digitally Verified</div>
              <div className="dc-verify-item"><Globe size={13} /> Globally Accepted</div>
              <div className="dc-verify-item"><LinkedInIcon size={13} /> LinkedIn Ready</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
