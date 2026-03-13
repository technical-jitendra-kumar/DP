import { useState, useRef } from 'react';
import { Shield, Briefcase, QrCode, Globe, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import img  from '../../assets/certificate.png';
import img1 from '../../assets/certificate2.png';
import img2 from '../../assets/certificate3.png';

/* ── Real LinkedIn SVG icon ── */
const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M7.5 9.5H5V19H7.5V9.5Z" fill="white"/>
    <circle cx="6.25" cy="6.75" r="1.5" fill="white"/>
    <path d="M19 13.5C19 11.567 17.433 10 15.5 10C14.4 10 13.42 10.49 12.75 11.27V9.5H10.25V19H12.75V14C12.75 12.895 13.645 12 14.75 12C15.855 12 16.75 12.895 16.75 14V19H19V13.5Z" fill="white"/>
  </svg>
);

export default function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating]     = useState(false);
  const [direction, setDirection]     = useState(null); // 'left' | 'right'

  /* drag / swipe state */
  const dragStartX  = useRef(null);
  const isDragging  = useRef(false);

  const certificates = [img, img1, img2];

  const badges = [
    { icon: Shield,    title: 'Verified Digital Credential' },
    { icon: Briefcase, title: 'LinkedIn Ready'              },
    { icon: QrCode,    title: 'QR Verification'             },
    { icon: Globe,     title: 'Globally Accepted'           },
  ];

  const stats = [
    { number: '12,000+', label: 'Certificates Issued' },
    { number: '92%',     label: 'Career Growth'        },
    { number: '400+',    label: 'Hiring Partners'      },
    { number: '25+',     label: 'Countries'             },
  ];

  /* go to next (left swipe) */
  const nextCert = () => {
    if (animating) return;
    setDirection('left');
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(p => (p + 1) % certificates.length);
      setAnimating(false);
      setDirection(null);
    }, 420);
  };

  /* go to prev (right swipe) */
  const prevCert = () => {
    if (animating) return;
    setDirection('right');
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(p => (p - 1 + certificates.length) % certificates.length);
      setAnimating(false);
      setDirection(null);
    }, 420);
  };

  /* ── Mouse drag handlers ── */
  const onMouseDown = (e) => { dragStartX.current = e.clientX; isDragging.current = true; };
  const onMouseMove = (e) => { /* optional: live drag visual */ };
  const onMouseUp   = (e) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    if (Math.abs(delta) > 40) delta > 0 ? nextCert() : prevCert();
    isDragging.current = false;
    dragStartX.current = null;
  };
  const onMouseLeave = () => { isDragging.current = false; dragStartX.current = null; };

  /* ── Touch handlers ── */
  const onTouchStart = (e) => { dragStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? nextCert() : prevCert();
    dragStartX.current = null;
  };

  const animClass = direction === 'left' ? 'cert-slide-left' : direction === 'right' ? 'cert-slide-right' : '';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .cert-section {
          padding: 90px 0;
          background: #ffffff;
          overflow: hidden;
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }

        /* Blobs only — no grid */
        .cert-blob-tr {
          position: absolute; top: -60px; right: -60px;
          width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, rgba(20,41,208,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .cert-blob-bl {
          position: absolute; bottom: -60px; left: -60px;
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(14,127,221,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .cert-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
          display: grid; grid-template-columns: 1fr 1.25fr;
          gap: 72px; align-items: center; position: relative; z-index: 1;
        }

        /* ── Left ── */
        .cert-left { display: flex; flex-direction: column; gap: 28px; }
        .cert-label-row { display: flex; align-items: center; gap: 12px; }
        .cert-label-line { width: 22px; height: 2px; background: #1429D0; border-radius: 2px; }
        .cert-label { font-size: 0.72rem; font-weight: 700; color: #1429D0; letter-spacing: 2px; text-transform: uppercase; }

        .cert-heading {
          font-size: clamp(2rem, 3.5vw, 2.9rem); font-weight: 900;
          color: #161619; line-height: 1.1; letter-spacing: -0.03em; margin: 0;
        }
        .cert-heading span {
          color: #1429D0;
          text-decoration: underline;
          text-decoration-color: #BFD2FF;
          text-decoration-thickness: 3px;
          text-underline-offset: 5px;
        }

        .cert-desc { font-size: 1rem; color: #36383e; line-height: 1.8; margin: 0; }
        .cert-desc strong { color: #161619; font-weight: 700; }

        .cert-badges { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .cert-badge {
          display: flex; align-items: center; gap: 10px;
          background: #F2F5FF; border-radius: 12px; padding: 12px 15px;
          border: 1.5px solid rgba(20,41,208,0.12); transition: all 0.22s;
        }
        .cert-badge:hover {
          background: #fff; border-color: #1429D0;
          box-shadow: 0 4px 16px rgba(20,41,208,0.10); transform: translateY(-2px);
        }
        .cert-badge-text { font-size: 0.8rem; font-weight: 600; color: #1429D0; }

        .cert-stats {
          display: grid; grid-template-columns: repeat(4,1fr);
          background: #fff; border-radius: 16px;
          border: 1.5px solid rgba(20,41,208,0.10);
          box-shadow: 0 4px 24px rgba(20,41,208,0.08); overflow: hidden;
        }
        .cert-stat-item {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: 22px 10px;
          border-right: 1px solid rgba(20,41,208,0.08);
        }
        .cert-stat-item:last-child { border-right: none; }
        .cert-stat-num { font-size: 1.6rem; font-weight: 900; color: #1429D0; line-height: 1; margin-bottom: 5px; letter-spacing: -0.02em; }
        .cert-stat-lbl { font-size: 0.65rem; font-weight: 600; color: #36383e; letter-spacing: 0.05em; text-transform: uppercase; }

        /* ── Right ── */
        .cert-right {
          position: relative;
          display: flex; flex-direction: column; align-items: center;
          gap: 20px; padding: 40px 0 20px;
        }

        /* Certificate image area — clips overflow for slide animation */
        .cert-img-area {
          width: 100%; max-width: 520px;
          position: relative; overflow: hidden;
          border-radius: 22px;
          cursor: grab;
          user-select: none;
        }
        .cert-img-area:active { cursor: grabbing; }

        /* Horizontal slide animations */
        @keyframes slideOutLeft  { from { transform: translateX(0);     opacity: 1; } to { transform: translateX(-100%); opacity: 0; } }
        @keyframes slideOutRight { from { transform: translateX(0);     opacity: 1; } to { transform: translateX(100%);  opacity: 0; } }
        @keyframes slideInRight  { from { transform: translateX(100%);  opacity: 0; } to { transform: translateX(0);     opacity: 1; } }
        @keyframes slideInLeft   { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0);     opacity: 1; } }

        .cert-main-card { width: 100%; }
        .cert-main-card.cert-slide-left  { animation: slideOutLeft  0.42s cubic-bezier(.4,0,.2,1) forwards; }
        .cert-main-card.cert-slide-right { animation: slideOutRight 0.42s cubic-bezier(.4,0,.2,1) forwards; }

        /* Incoming card sits on top during transition */
        .cert-incoming {
          position: absolute; inset: 0;
          pointer-events: none;
        }
        .cert-incoming.from-right { animation: slideInRight 0.42s cubic-bezier(.4,0,.2,1) forwards; }
        .cert-incoming.from-left  { animation: slideInLeft  0.42s cubic-bezier(.4,0,.2,1) forwards; }

        .cert-card-inner {
          position: relative; background: #fff;
          border-radius: 22px; overflow: hidden;
          border: 1.5px solid rgba(20,41,208,0.10);
          box-shadow: 0 12px 48px rgba(20,41,208,0.14);
          transition: box-shadow 0.3s;
        }
        .cert-card-inner:hover { box-shadow: 0 20px 60px rgba(20,41,208,0.20); }

        .cert-img {
          width: 100%; display: block;
          object-fit: contain; padding: 20px;
          min-height: 300px; max-height: 400px;
        }

        .cert-count-pill {
          position: absolute; top: 14px; left: 14px;
          background: rgba(20,41,208,0.90); color: #fff;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.05em;
          padding: 4px 12px; border-radius: 100px; backdrop-filter: blur(4px);
        }

        /* Drag hint overlay */
        .cert-drag-hint {
          position: absolute; inset: 0; border-radius: 22px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 16px; pointer-events: none; opacity: 0;
          transition: opacity 0.2s;
        }
        .cert-img-area:hover .cert-drag-hint { opacity: 1; }
        .cert-drag-arrow {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(20,41,208,0.75); backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          color: #fff;
        }

        /* ── Nav row (left / right buttons) ── */
        .cert-nav-row {
          display: flex; align-items: center; gap: 16px; z-index: 10;
        }
        .cert-nav-btn {
          width: 46px; height: 46px; border-radius: 50%;
          border: 1.5px solid rgba(20,41,208,0.20);
          background: #fff; color: #1429D0;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; padding: 0; transition: all 0.22s ease;
          box-shadow: 0 4px 12px rgba(20,41,208,0.08);
        }
        .cert-nav-btn:hover {
          background: #1429D0; border-color: #1429D0; color: #fff;
          box-shadow: 0 8px 24px rgba(20,41,208,0.30);
        }
        .cert-dots { display: flex; align-items: center; gap: 6px; }
        .cert-dot {
          height: 8px; border-radius: 4px; border: none;
          cursor: pointer; padding: 0; transition: all 0.3s ease;
        }
        .cert-dot.active  { width: 24px; background: #1429D0; }
        .cert-dot:not(.active) { width: 8px; background: #BFD2FF; }

        /* Floating badges */
        .cert-float-badge {
          position: absolute; background: #fff; border-radius: 14px;
          padding: 10px 15px; display: flex; align-items: center; gap: 10px;
          box-shadow: 0 8px 32px rgba(20,41,208,0.13);
          border: 1px solid rgba(20,41,208,0.10); z-index: 20;
        }
        .cert-float-badge.top-right    { top: 0; right: -10px; }
        .cert-float-badge.bottom-left  { bottom: 56px; left: -10px; }
        .cert-float-title { font-size: 0.82rem; font-weight: 700; color: #161619; }
        .cert-float-sub   { font-size: 0.7rem; color: #36383e; }

        /* Responsive */
        @media (max-width: 900px) {
          .cert-container { grid-template-columns: 1fr; gap: 48px; padding: 0 24px; }
          .cert-right { padding-top: 20px; }
          .cert-stats { grid-template-columns: repeat(2,1fr); }
          .cert-stat-item:nth-child(2) { border-right: none; }
          .cert-stat-item:nth-child(3),
          .cert-stat-item:nth-child(4) { border-top: 1px solid rgba(20,41,208,0.08); }
          .cert-float-badge.top-right   { right: 0; }
          .cert-float-badge.bottom-left { left: 0; }
        }
        @media (max-width: 540px) {
          .cert-section { padding: 60px 0; }
          .cert-badges  { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="cert-section">
        <div className="cert-blob-tr" />
        <div className="cert-blob-bl" />

        <div className="cert-container">

          {/* ── LEFT ── */}
          <div className="cert-left">
            <div className="cert-label-row">
              <span className="cert-label-line" />
              <span className="cert-label">Industry-Recognized Credentials</span>
            </div>

            <h2 className="cert-heading">
              Earn Certificates<br />
              That <span>Actually Matter</span>
            </h2>

            <p className="cert-desc">
              Not just paper credentials. Our certifications are recognized by{' '}
              <strong>400+ hiring partners</strong> and validate the skills that
              top employers are actively searching for.
            </p>

            <div className="cert-badges">
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="cert-badge">
                    <Icon size={17} color="#1429D0" />
                    <span className="cert-badge-text">{b.title}</span>
                  </div>
                );
              })}
            </div>

            <div className="cert-stats">
              {stats.map((s, i) => (
                <div key={i} className="cert-stat-item">
                  <div className="cert-stat-num">{s.number}</div>
                  <div className="cert-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="cert-right">

            {/* Verified badge */}
            <div className="cert-float-badge top-right">
              <CheckCircle size={20} color="#fff" style={{ background: "#10B981", borderRadius: "50%" }} />
              <div>
                <div className="cert-float-title">Verified Credential</div>
                <div className="cert-float-sub">Digitally Secured</div>
              </div>
            </div>

            {/* Certificate image with drag */}
            <div
              className="cert-img-area"
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {/* Current (exiting) card */}
              <div key={`main-${activeIndex}`} className={`cert-main-card ${animClass}`}>
                <div className="cert-card-inner">
                  <img src={certificates[activeIndex]} alt={`Certificate ${activeIndex + 1}`} className="cert-img" draggable={false} />
                  <div className="cert-count-pill">{activeIndex + 1} / {certificates.length}</div>
                </div>
              </div>

              {/* Incoming card during animation */}
              {animating && (
                <div className={`cert-incoming ${direction === 'left' ? 'from-right' : 'from-left'}`}>
                  <div className="cert-card-inner">
                    <img
                      src={certificates[direction === 'left'
                        ? (activeIndex + 1) % certificates.length
                        : (activeIndex - 1 + certificates.length) % certificates.length]}
                      alt="Next certificate"
                      className="cert-img"
                      draggable={false}
                    />
                  </div>
                </div>
              )}

              {/* Drag hint arrows */}
              <div className="cert-drag-hint">
                <div className="cert-drag-arrow"><ChevronLeft size={18} /></div>
                <div className="cert-drag-arrow"><ChevronRight size={18} /></div>
              </div>
            </div>

            {/* Nav row — horizontal left/right */}
            <div className="cert-nav-row">
              <button className="cert-nav-btn" onClick={prevCert} aria-label="Previous certificate">
                <ChevronLeft size={20} />
              </button>

              <div className="cert-dots">
                {certificates.map((_, i) => (
                  <button
                    key={i}
                    className={`cert-dot${i === activeIndex ? ' active' : ''}`}
                    onClick={() => {
                      if (i === activeIndex || animating) return;
                      setDirection(i > activeIndex ? 'left' : 'right');
                      setAnimating(true);
                      setTimeout(() => { setActiveIndex(i); setAnimating(false); setDirection(null); }, 420);
                    }}
                    aria-label={`Go to certificate ${i + 1}`}
                  />
                ))}
              </div>

              <button className="cert-nav-btn" onClick={nextCert} aria-label="Next certificate">
                <ChevronRight size={20} />
              </button>
            </div>

            {/* LinkedIn badge */}
            <div className="cert-float-badge bottom-left">
              <LinkedInIcon size={22} />
              <div>
                <div className="cert-float-title">LinkedIn Ready</div>
                <div className="cert-float-sub">Share Instantly</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}