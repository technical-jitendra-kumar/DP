import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Globe, Shield, QrCode } from 'lucide-react';
import img  from '../../assets/certificate.png';
import img1 from '../../assets/certificate2.png';
import img2 from '../../assets/certificate3.png';

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M7.5 9.5H5V19H7.5V9.5Z" fill="white"/>
    <circle cx="6.25" cy="6.75" r="1.5" fill="white"/>
    <path d="M19 13.5C19 11.567 17.433 10 15.5 10C14.4 10 13.42 10.49 12.75 11.27V9.5H10.25V19H12.75V14C12.75 12.895 13.645 12 14.75 12C15.855 12 16.75 12.895 16.75 14V19H19V13.5Z" fill="white"/>
  </svg>
);

const MicrosoftIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022"/>
    <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00"/>
    <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
    <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
  </svg>
);

const certsData = [
  {
    img:    img,
    num:    '01',
    tag:    'Globally Recognized',
    title:  'Microsoft Certification',
    desc:   'Microsoft DP-900 is an internationally recognized certification that many companies and clients directly ask for. It validates your core data and essential cloud skills, making you more job-ready and client-ready.',
    issuer: 'Microsoft',
    skills: ['Azure Data', 'Cloud Fundamentals', 'Data Analytics'],
  },
  {
    img:    img1,
    num:    '02',
    tag:    'Industry Standard',
    title:  'DataPreneur Certificate',
    desc:   'Our in-house certification is co-verified with NASSCOM and trusted by 400+ hiring partners. It demonstrates real-world project delivery, technical proficiency, and career readiness across data domains.',
    issuer: 'DataPreneur × NASSCOM',
    skills: ['Python', 'SQL', 'Machine Learning'],
  },
  {
    img:    img2,
    num:    '03',
    tag:    'LinkedIn Verified',
    title:  'Specialisation Badge',
    desc:   'A domain-specific badge that maps directly to job descriptions. Verifiable via QR code by any hiring manager within seconds — shared directly to your LinkedIn profile upon completion.',
    issuer: 'DataPreneur',
    skills: ['Data Science', 'AI/ML', 'BI & Visualization'],
  },
];

const trust = [
  { icon: Shield,       text: 'Blockchain Verified', sub: 'Tamper-proof credential'  },
  { icon: LinkedInIcon, text: 'LinkedIn Ready',       sub: 'Share in one click'       },
  { icon: QrCode,       text: 'QR Scannable',         sub: 'Instant employer check'   },
  { icon: Globe,        text: '25+ Countries',        sub: 'Globally recognised'      },
];

export default function CertificationsSection() {
  const [active, setActive]       = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir]             = useState(null);
  const [tilt, setTilt]           = useState({ x: 0, y: 0 });
  const dragX = useRef(null);

  const onMouseMove  = (e) => {
    const r  = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
    const dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  };
  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  const go = (idx, d) => {
    if (animating || idx === active) return;
    setDir(d); setAnimating(true);
    setTimeout(() => { setActive(idx); setAnimating(false); setDir(null); }, 380);
  };
  const next = () => go((active + 1) % certsData.length, 'left');
  const prev = () => go((active - 1 + certsData.length) % certsData.length, 'right');

  const onTouchStart = (e) => { dragX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (!dragX.current) return;
    const d = dragX.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 40) d > 0 ? next() : prev();
    dragX.current = null;
  };
  const onDragDown = (e) => { dragX.current = e.clientX; };
  const onDragUp   = (e) => {
    if (!dragX.current) return;
    const d = dragX.current - e.clientX;
    if (Math.abs(d) > 40) d > 0 ? next() : prev();
    dragX.current = null;
  };

  const cert    = certsData[active];
  const nextIdx = dir === 'left'
    ? (active + 1) % certsData.length
    : (active - 1 + certsData.length) % certsData.length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .dc * { box-sizing: border-box; }

        /* ══ SECTION ══ */
        .dc {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(145deg, #0a0c1a 0%, #0f1535 35%, #1429D0 70%, #0E7FDD 100%);
          position: relative; overflow: hidden;
          padding: 0 0 5rem;
        }

        /* Grid lines */
        .dc-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.5) 80%, transparent 100%);
        }
        .dc-orb1 {
          position: absolute; top: -100px; right: -100px;
          width: 560px; height: 560px; border-radius: 50%;
          background: radial-gradient(circle, rgba(20,41,208,0.3) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .dc-orb2 {
          position: absolute; bottom: -60px; left: -60px;
          width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, rgba(14,127,221,0.22) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* ══ HERO ══ */
        .dc-hero {
          text-align: center; padding: 5rem 5% 3rem;
          position: relative; z-index: 1;
        }
        .dc-hero-label {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
          border-radius: 99px; padding: 0.28rem 0.9rem 0.28rem 0.6rem;
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.85); margin-bottom: 1.25rem;
        }
        .dc-hero-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #BFD2FF;
          animation: dc-blink 2s ease-in-out infinite;
        }
        @keyframes dc-blink { 0%,100%{opacity:1} 50%{opacity:.3} }

        .dc-hero-h2 {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 900;
          color: #fff; letter-spacing: -0.04em; line-height: 1.05; margin: 0 0 1rem;
        }
        .dc-hero-h2 em {
          font-style: normal;
          background: linear-gradient(130deg, #BFD2FF 0%, #fff 50%, #93C5FD 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .dc-hero-sub {
          font-size: 1rem; color: rgba(255,255,255,0.6);
          max-width: 520px; margin: 0 auto; line-height: 1.75;
        }

        /* ══ BODY ══ */
        .dc-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto; padding: 0 5%;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        /* ══ LEFT ══ */
        .dc-left {
          display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
        }

        /* ─── 3D tilt perspective scene ─── */
        .dc-scene {
          width: 100%;
          perspective: 1200px;
          cursor: grab;
        }
        .dc-scene:active { cursor: grabbing; }

        .dc-tilt {
          width: 100%;
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
          position: relative;
        }

        /* ─── Stacked depth shadow layers (the "lift" effect) ─── */
        .dc-shadow-stack {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          transform: translateZ(-1px);
          pointer-events: none;
        }
        .dc-shadow-1 {
          box-shadow:
            0 6px 0 4px rgba(20,41,208,0.35),
            0 12px 0 6px rgba(20,41,208,0.2),
            0 20px 0 8px rgba(20,41,208,0.1);
          border-radius: 24px;
          position: absolute; inset: 0;
          pointer-events: none;
        }
        .dc-shadow-2 {
          position: absolute;
          bottom: -28px; left: 5%; right: 5%;
          height: 30px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(20,41,208,0.55) 0%, transparent 70%);
          filter: blur(12px);
          pointer-events: none;
        }

        /* ─── Certificate frame (dark device bezel like reference) ─── */
        .dc-cert-frame {
          background: linear-gradient(160deg, #10142e 0%, #0d1126 50%, #141932 100%);
          border-radius: 22px;
          padding: 18px 18px 14px;
          border: 1px solid rgba(255,255,255,0.08);
          position: relative; overflow: hidden;
          /* The main card shadow */
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.05) inset,
            0 40px 80px rgba(0,0,0,0.7),
            0 16px 40px rgba(0,0,0,0.5);
        }

        /* Top shine line */
        .dc-cert-frame::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.18) 50%, transparent 90%);
        }

        /* Moving light reflection on hover/tilt */
        .dc-cert-shine {
          position: absolute; inset: 0; border-radius: 22px;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.06) 0%,
            transparent 50%,
            rgba(255,255,255,0.02) 100%
          );
          pointer-events: none; z-index: 3;
          transition: opacity 0.3s;
        }

        /* White cert card inside the dark frame */
        .dc-cert-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow:
            0 2px 0 rgba(255,255,255,0.1),
            0 8px 24px rgba(0,0,0,0.45);
        }
        .dc-cert-img {
          width: 100%; display: block;
          object-fit: contain;
          max-height: 460px; min-height: 240px;
        }

        /* Count badge */
        .dc-count {
          position: absolute; top: 16px; left: 16px; z-index: 4;
          background: rgba(20,41,208,0.9); color: #fff;
          backdrop-filter: blur(6px);
          font-size: 0.63rem; font-weight: 800; letter-spacing: 0.12em;
          padding: 3px 11px; border-radius: 99px;
        }

        /* Slide animations */
        @keyframes dc-out-l { from{opacity:1;transform:translateX(0)} to{opacity:0;transform:translateX(-105%)} }
        @keyframes dc-out-r { from{opacity:1;transform:translateX(0)} to{opacity:0;transform:translateX(105%)} }
        @keyframes dc-in-r  { from{opacity:0;transform:translateX(105%)} to{opacity:1;transform:translateX(0)} }
        @keyframes dc-in-l  { from{opacity:0;transform:translateX(-105%)} to{opacity:1;transform:translateX(0)} }

        .dc-slide { width: 100%; }
        .dc-slide.out-l { animation: dc-out-l 0.38s cubic-bezier(.4,0,.2,1) forwards; }
        .dc-slide.out-r { animation: dc-out-r 0.38s cubic-bezier(.4,0,.2,1) forwards; }
        .dc-slide-in { position: absolute; inset: 0; pointer-events: none; }
        .dc-slide-in.in-r { animation: dc-in-r 0.38s cubic-bezier(.4,0,.2,1) forwards; }
        .dc-slide-in.in-l { animation: dc-in-l 0.38s cubic-bezier(.4,0,.2,1) forwards; }

        /* ─── Trust grid ─── */
        .dc-trust-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; width: 100%;
        }
        .dc-trust-card {
          display: flex; align-items: center; gap: 0.65rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 14px; padding: 0.75rem 0.9rem;
          transition: all 0.2s; cursor: default; position: relative; overflow: hidden;
        }
        .dc-trust-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }
        .dc-trust-card:hover {
          background: rgba(20,41,208,0.18);
          border-color: rgba(20,41,208,0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(20,41,208,0.22);
        }
        .dc-trust-icon {
          width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
          background: rgba(20,41,208,0.22);
          border: 1px solid rgba(20,41,208,0.38);
          display: flex; align-items: center; justify-content: center;
          color: #BFD2FF; transition: all 0.2s;
        }
        .dc-trust-card:hover .dc-trust-icon { background: #1429D0; border-color: #1429D0; color: #fff; }
        .dc-trust-title { font-size: 0.78rem; font-weight: 700; color: #fff; }
        .dc-trust-sub   { font-size: 0.63rem; color: rgba(255,255,255,0.42); font-weight: 500; margin-top: 1px; }

        /* ─── Nav ─── */
        .dc-nav { display: flex; align-items: center; gap: 0.9rem; }
        .dc-nav-btn {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.07);
          color: #fff; display: flex; align-items: center; justify-content: center;
          cursor: pointer; padding: 0; transition: all 0.22s;
          backdrop-filter: blur(8px);
          -webkit-tap-highlight-color: transparent;
        }
        .dc-nav-btn:hover {
          background: #1429D0; border-color: #1429D0;
          box-shadow: 0 8px 22px rgba(20,41,208,0.5);
          transform: translateY(-1px);
        }
        .dc-dots { display: flex; gap: 6px; align-items: center; }
        .dc-dot {
          height: 8px; border-radius: 4px; border: none;
          cursor: pointer; padding: 0; transition: all 0.28s;
          -webkit-tap-highlight-color: transparent;
        }
        .dc-dot.on  { width: 24px; background: #fff; }
        .dc-dot.off { width: 8px;  background: rgba(255,255,255,0.28); }

        /* ══ RIGHT — light card matching reference ══ */
        .dc-right {
          background: rgba(255,255,255,0.95);
          border-radius: 24px;
          padding: 2.5rem;
          position: relative; overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.35),
            0 0 0 1px rgba(255,255,255,0.08);
          /* Subtle top-left blue accent border */
          border-top: 3px solid #1429D0;
        }

        /* Large ghost number — light grey like reference */
        .dc-ghost {
          position: absolute; top: -18px; right: 12px;
          font-size: 9rem; font-weight: 900; letter-spacing: -0.06em;
          line-height: 1; pointer-events: none; user-select: none;
          color: rgba(20,41,208,0.06);
          transition: color 0.4s;
        }

        /* Tag */
        .dc-tag {
          display: inline-flex; align-items: center; gap: 0.35rem;
          background: #161619; color: #fff;
          border-radius: 6px; padding: 0.22rem 0.7rem;
          font-size: 0.63rem; font-weight: 800;
          letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 1.1rem;
        }

        /* Title */
        .dc-title {
          font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 900;
          color: #161619; letter-spacing: -0.03em; line-height: 1.15;
          margin-bottom: 0.9rem; position: relative; z-index: 1;
        }

        /* Desc */
        .dc-desc {
          font-size: 0.92rem; color: #4B5563;
          line-height: 1.8; margin-bottom: 1.5rem;
          position: relative; z-index: 1;
        }

        /* Issuer */
        .dc-issuer {
          display: flex; align-items: center; gap: 0.65rem; margin-bottom: 1.25rem;
        }
        .dc-issuer-icon {
          width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
          background: #F2F5FF; border: 1px solid rgba(20,41,208,0.14);
          display: flex; align-items: center; justify-content: center;
        }
        .dc-issuer-lbl  { font-size: 0.65rem; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.5px; }
        .dc-issuer-name { font-size: 0.86rem; font-weight: 700; color: #161619; }

        /* Skills */
        .dc-skills { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1.5rem; }
        .dc-skill {
          font-size: 0.74rem; font-weight: 600;
          padding: 0.3rem 0.75rem; border-radius: 8px;
          background: #EEF2FF; border: 1px solid rgba(20,41,208,0.13);
          color: #1429D0; transition: all 0.16s;
        }
        .dc-skill:hover { background: #1429D0; color: #fff; border-color: #1429D0; }

        /* Divider */
        .dc-divider { height: 1px; background: rgba(20,41,208,0.08); margin-bottom: 1.1rem; }

        /* Verify */
        .dc-verify { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .dc-verify-item {
          display: flex; align-items: center; gap: 0.38rem;
          font-size: 0.73rem; font-weight: 600; color: #6B7280;
        }
        .dc-verify-item svg { color: #1429D0; }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 960px) {
          .dc-body { grid-template-columns: 1fr; gap: 2.5rem; }
          .dc-right { order: -1; }
          .dc-ghost { font-size: 6rem; }
        }
        @media (max-width: 600px) {
          .dc-hero { padding: 4rem 4% 2.5rem; }
          .dc-body { padding: 0 4%; }
          .dc-right { padding: 1.75rem; }
          .dc-ghost { font-size: 4.5rem; top: -10px; right: 8px; }
        }
      `}</style>

      <section className="dc">
        <div className="dc-grid" />
        <div className="dc-orb1" />
        <div className="dc-orb2" />

        {/* Hero */}
        <div className="dc-hero">
          <div className="dc-hero-label">
            <span className="dc-hero-dot" />
            Certification
          </div>
          <h2 className="dc-hero-h2">
            Dual Certification<br /><em>Program</em>
          </h2>
          <p className="dc-hero-sub">
            Complete the certification stack companies actually ask for.
            Two certifications that together fulfil what hiring managers and clients look for.
          </p>
        </div>

        {/* Body */}
        <div className="dc-body">

          {/* ── Left: 3D cert slider ── */}
          <div className="dc-left">

            {/* Perspective tilt scene */}
            <div
              className="dc-scene"
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
            >
              <div
                className="dc-tilt"
                style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
              >
                {/* Stacked depth shadow */}
                <div className="dc-shadow-1" />

                {/* Dark device frame */}
                <div
                  className="dc-cert-frame"
                  onMouseDown={onDragDown}
                  onMouseUp={onDragUp}
                  onMouseLeave={() => { dragX.current = null; }}
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  <div className="dc-cert-shine" />

                  {/* Current slide */}
                  <div
                    key={`s-${active}`}
                    className={`dc-slide${dir === 'left' ? ' out-l' : dir === 'right' ? ' out-r' : ''}`}
                  >
                    <div className="dc-cert-card">
                      <img
                        src={certsData[active].img}
                        alt={certsData[active].title}
                        className="dc-cert-img"
                        draggable={false}
                      />
                    </div>
                  </div>

                  {/* Incoming */}
                  {animating && (
                    <div className={`dc-slide-in ${dir === 'left' ? 'in-r' : 'in-l'}`}>
                      <div className="dc-cert-card">
                        <img
                          src={certsData[nextIdx].img}
                          alt=""
                          className="dc-cert-img"
                          draggable={false}
                        />
                      </div>
                    </div>
                  )}

                  <div className="dc-count">{active + 1} / {certsData.length}</div>
                </div>

                {/* Ground shadow ellipse */}
                <div className="dc-shadow-2" />
              </div>
            </div>

            {/* Trust grid */}
            <div className="dc-trust-grid">
              {trust.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div key={i} className="dc-trust-card">
                    <div className="dc-trust-icon"><Icon size={15} /></div>
                    <div>
                      <div className="dc-trust-title">{t.text}</div>
                      <div className="dc-trust-sub">{t.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nav */}
            <div className="dc-nav">
              <button className="dc-nav-btn" onClick={prev} aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <div className="dc-dots">
                {certsData.map((_, i) => (
                  <button
                    key={i}
                    className={`dc-dot ${i === active ? 'on' : 'off'}`}
                    onClick={() => go(i, i > active ? 'left' : 'right')}
                    aria-label={`Cert ${i + 1}`}
                  />
                ))}
              </div>
              <button className="dc-nav-btn" onClick={next} aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* ── Right: light info card ── */}
          <div className="dc-right">
            {/* Large ghost number */}
            <div className="dc-ghost">{cert.num}</div>

            {/* Black tag badge */}
            <div className="dc-tag">{cert.tag}</div>

            <h3 className="dc-title">{cert.title}</h3>

            <p className="dc-desc">{cert.desc}</p>

            {/* Issuer */}
            <div className="dc-issuer">
              <div className="dc-issuer-icon">
                {cert.issuer.includes('Microsoft')
                  ? <MicrosoftIcon size={16} />
                  : <CheckCircle size={14} color="#1429D0" />
                }
              </div>
              <div>
                <div className="dc-issuer-lbl">Issued by</div>
                <div className="dc-issuer-name">{cert.issuer}</div>
              </div>
            </div>

            {/* Skills */}
            <div className="dc-skills">
              {cert.skills.map((s, i) => (
                <span key={i} className="dc-skill">{s}</span>
              ))}
            </div>

            <div className="dc-divider" />

            {/* Verification */}
            <div className="dc-verify">
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
