import { useInView } from "../../hooks/useInView";
import { STEPS } from "../../data/companies";

export default function ProcessSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .process-section {
          padding: 90px 5%;
          background: #F5F7FA;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* Blobs only — no grid */
        .process-blob-tl {
          position: absolute; top: -60px; left: -40px;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(20,41,208,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .process-blob-br {
          position: absolute; bottom: -60px; right: -40px;
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(14,127,221,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .process-container {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
        }

        /* Header */
        .process-header { text-align: center; margin-bottom: 64px; }

        .process-label-row {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin-bottom: 14px;
        }
        .process-label-line { width: 22px; height: 2px; background: #1429D0; border-radius: 2px; }
        .process-label { font-size: 0.72rem; font-weight: 700; color: #1429D0; letter-spacing: 2px; text-transform: uppercase; }

        .process-heading {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 900; line-height: 1.1;
          letter-spacing: -0.03em; color: #161619;
          margin: 0 auto 16px; max-width: 700px;
        }
        .process-heading span { color: #1429D0; }

        .process-desc {
          font-size: 1rem; color: #36383e;
          line-height: 1.75; max-width: 520px;
          margin: 0 auto;
        }

        /* Steps wrapper — contains grid + connector line */
        .process-steps-wrap {
          position: relative;
        }

        /* Dashed connector line behind cards */
        .process-connector {
          position: absolute;
          top: 52px; /* vertically centered on the number circles */
          left: calc(12.5% + 28px);
          right: calc(12.5% + 28px);
          height: 2px;
          border-top: 2px dashed rgba(20,41,208,0.20);
          pointer-events: none;
          z-index: 0;
        }

        /* Steps grid */
        .dp-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        /* Step card */
        .process-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px 24px;
          border: 1.5px solid rgba(20,41,208,0.09);
          box-shadow: 0 4px 24px rgba(20,41,208,0.07);
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(20,41,208,0.13);
          border-color: rgba(20,41,208,0.25);
        }

        /* Large ghost number */
        .process-num-bg {
          position: absolute;
          top: -10px; right: -4px;
          font-size: 5.5rem; font-weight: 900;
          color: rgba(20,41,208,0.04);
          line-height: 1; pointer-events: none;
          user-select: none;
        }

        /* Number circle */
        .process-num-circle {
          width: 52px; height: 52px; border-radius: 50%;
          background: linear-gradient(135deg, #1429D0, #0E7FDD);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; font-weight: 900; color: #fff;
          margin-bottom: 20px;
          box-shadow: 0 6px 20px rgba(20,41,208,0.28);
          position: relative; z-index: 1;
          flex-shrink: 0;
        }

        /* Step title */
        .process-step-title {
          font-size: 1.05rem; font-weight: 800;
          color: #161619; margin-bottom: 10px;
          letter-spacing: -0.01em; line-height: 1.2;
        }

        /* Step desc */
        .process-step-desc {
          font-size: 0.88rem; color: #36383e;
          line-height: 1.65;
        }

        /* Bottom accent bar */
        .process-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1429D0, #0E7FDD);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .process-card:hover::after { opacity: 1; }

        /* Responsive */
        @media (max-width: 900px) {
          .dp-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .process-connector { display: none; }
        }
        @media (max-width: 480px) {
          .dp-steps-grid { grid-template-columns: 1fr !important; }
          .process-section { padding: 60px 5%; }
        }
      `}</style>

      <section id="process" ref={ref} className="process-section">
        <div className="process-blob-tl" />
        <div className="process-blob-br" />

        <div className="process-container">
          {/* Header */}
          <div className="process-header">
            <div className="process-label-row">
              <span className="process-label-line" />
              <span className="process-label">How It Works</span>
              <span className="process-label-line" />
            </div>
            <h2 className="process-heading">
              Your Path from <span>Student</span> to <span>Professional</span>
            </h2>
            <p className="process-desc">
              A structured 4-step journey designed so you never feel lost,
              overwhelmed, or alone.
            </p>
          </div>

          {/* Steps */}
          <div className="process-steps-wrap">
            {/* Dashed connector line */}
            <div className="process-connector" />

            <div className="dp-steps-grid">
              {STEPS.map((step, i) => (
                <div
                  key={step.n}
                  className="process-card"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    transitionDelay: `${i * 0.12}s`,
                  }}
                >
                  {/* Ghost number */}
                  <div className="process-num-bg">{step.n}</div>

                  {/* Number circle */}
                  <div className="process-num-circle">{step.n}</div>

                  <div className="process-step-title">{step.title}</div>
                  <div className="process-step-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}