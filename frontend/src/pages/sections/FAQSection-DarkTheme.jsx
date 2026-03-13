import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    question: 'What are the eligibility criteria for the programs?',
    answer: 'Our programs are open to graduates and working professionals from any background. Basic computer knowledge and English proficiency are required. No prior coding experience is needed for beginner programs.'
  },
  {
    question: 'What is the duration of the programs?',
    answer: 'Program duration varies from 4 to 8 months depending on the course you choose. All programs include flexible schedules with weekend and evening batches available.'
  },
  {
    question: 'Do you provide placement assistance?',
    answer: 'Yes! We offer 360° placement support including resume building, mock interviews, portfolio development, and direct connections with 500+ hiring partners. Our placement rate is 95%.'
  },
  {
    question: 'What is the fee structure and payment options?',
    answer: 'We offer flexible payment plans including EMI options, income-share agreements, and scholarships for deserving candidates. Contact our counselors for detailed fee information.'
  },
  {
    question: 'Can I switch careers with no technical background?',
    answer: 'Absolutely! Many of our successful alumni come from non-technical backgrounds. Our programs are designed to take you from basics to industry-ready skills with personalized support.'
  },
  {
    question: 'What kind of projects will I work on?',
    answer: "You'll work on real-world capstone projects in areas like predictive analytics, ML models, data pipelines, and business intelligence dashboards. Projects are based on actual industry scenarios."
  }
];

const highlights = [
  { title: 'Expert Guidance',     text: '1-on-1 career counseling sessions'   },
  { title: '360° Support',        text: 'Resume, interviews, placement'        },
  { title: 'Flexible Learning',   text: 'Weekend and evening batches'          },
  { title: '95% Placement Rate',  text: 'Proven success with alumni'           },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .faq-section {
          padding: 90px 0;
          background: #ffffff;
          overflow: hidden;
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }

        /* Blobs only — no grid */
        .faq-blob-tr {
          position: absolute; top: -60px; right: -50px;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(20,41,208,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .faq-blob-bl {
          position: absolute; bottom: -60px; left: -40px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(14,127,221,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .faq-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
          display: grid; grid-template-columns: 1fr 1.25fr;
          gap: 72px; align-items: start;
          position: relative; z-index: 1;
        }

        /* ── Left ── */
        .faq-left { display: flex; flex-direction: column; justify-content: flex-start; gap: 28px; }

        .faq-label-row { display: flex; align-items: center; gap: 12px; margin-bottom: 2px; }
        .faq-label-line { width: 22px; height: 2px; background: #1429D0; border-radius: 2px; }
        .faq-label { font-size: 0.72rem; font-weight: 700; color: #1429D0; letter-spacing: 2px; text-transform: uppercase; }

        .faq-heading {
          font-size: clamp(2rem, 3.5vw, 2.7rem); font-weight: 900;
          color: #161619; line-height: 1.1; letter-spacing: -0.03em; margin: 0;
        }
        .faq-heading span { color: #1429D0; display: block; }

        .faq-desc { font-size: 1rem; color: #36383e; line-height: 1.8; margin: 0; }

        /* Highlights */
        .faq-highlights { display: flex; flex-direction: column; gap: 16px; }
        .faq-highlight-item {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 14px 16px; border-radius: 14px;
          background: #F2F5FF;
          border: 1px solid rgba(20,41,208,0.10);
          transition: all 0.22s;
        }
        .faq-highlight-item:hover {
          background: #fff;
          border-color: rgba(20,41,208,0.25);
          box-shadow: 0 4px 16px rgba(20,41,208,0.09);
          transform: translateX(4px);
        }
        .faq-highlight-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, #1429D0, #0E7FDD);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(20,41,208,0.25);
        }
        .faq-highlight-title { font-size: 0.9rem; font-weight: 700; color: #161619; margin-bottom: 2px; }
        .faq-highlight-text  { font-size: 0.8rem; color: #36383e; }

        .faq-cta {
          font-size: 0.88rem; color: #36383e;
          font-style: italic; margin: 0;
          padding: 14px 18px; border-radius: 12px;
          background: rgba(20,41,208,0.04);
          border-left: 3px solid #1429D0;
        }

        /* ── Right ── */
        .faq-right { display: flex; flex-direction: column; gap: 24px; }

        .faq-right-header { margin-bottom: 4px; }
        .faq-right-heading {
          font-size: 1.5rem; font-weight: 800;
          color: #161619; margin: 0 0 6px; letter-spacing: -0.02em;
          /* Add top padding matching label row height on left (~28px gap + ~16px label) */
          padding-top: 44px;
        }
        .faq-right-sub { font-size: 0.88rem; color: #36383e; margin: 0; }

        /* Accordion list */
        .faq-list { display: flex; flex-direction: column; gap: 12px; }

        /* Accordion item */
        .faq-item-btn {
          width: 100%; text-align: left;
          border-radius: 16px; padding: 0;
          cursor: pointer; appearance: none;
          font-family: 'DM Sans', sans-serif;
          border: 1.5px solid rgba(20,41,208,0.10);
          background: #F5F7FA;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
        }
        .faq-item-btn.open {
          background: #fff;
          border-color: #1429D0;
          box-shadow: 0 8px 32px rgba(20,41,208,0.10);
        }
        .faq-item-btn:hover:not(.open) {
          border-color: rgba(20,41,208,0.28);
          background: #fff;
        }

        .faq-q-row {
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; padding: 18px 20px;
        }
        .faq-q-text {
          font-size: 0.95rem; font-weight: 600;
          color: #161619; margin: 0; line-height: 1.5;
          transition: color 0.2s;
        }
        .faq-item-btn.open .faq-q-text { color: #1429D0; }

        .faq-chevron {
          width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(20,41,208,0.07);
          color: #1429D0;
          transition: background 0.22s, transform 0.3s ease;
        }
        .faq-item-btn.open .faq-chevron {
          background: #1429D0; color: #fff; transform: rotate(180deg);
        }

        .faq-a-text {
          font-size: 0.88rem; color: #36383e;
          line-height: 1.75; margin: 0;
          padding: 0 20px 18px;
          border-top: 1px solid rgba(20,41,208,0.07);
          padding-top: 14px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .faq-container { grid-template-columns: 1fr; gap: 48px; padding: 0 24px; }
          .faq-left { position: static; justify-content: flex-start; height: auto; }
        }
        @media (max-width: 540px) {
          .faq-section { padding: 60px 0; }
        }
      `}</style>

      <section id="faq" className="faq-section">
        <div className="faq-blob-tr" />
        <div className="faq-blob-bl" />

        <div className="faq-container">

          {/* ── LEFT ── */}
          <div className="faq-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
            >
              <div className="faq-label-row">
                <span className="faq-label-line" />
                <span className="faq-label">FAQ</span>
              </div>

              <h2 className="faq-heading">
                Have Questions?
                <span>We Have Answers</span>
              </h2>

              <p className="faq-desc">
                Everything you need to know about our programs, eligibility, placement
                support, and career guidance. Our expert counselors are here to help you
                make the best decision for your career transformation.
              </p>

              <div className="faq-highlights">
                {highlights.map((h, i) => (
                  <div key={i} className="faq-highlight-item">
                    <div className="faq-highlight-icon">
                      <CheckCircle2 size={18} color="#fff" />
                    </div>
                    <div>
                      <div className="faq-highlight-title">{h.title}</div>
                      <div className="faq-highlight-text">{h.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="faq-cta">
                Still have questions? Reach out to our team for personalized guidance!
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <div className="faq-right">
            <motion.div
              className="faq-right-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="faq-right-heading">Frequently Asked Questions</div>
              <p className="faq-right-sub">Get instant answers to common questions</p>
            </motion.div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <button
                      className={`faq-item-btn${isOpen ? ' open' : ''}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <div className="faq-q-row">
                        <h4 className="faq-q-text">{faq.question}</h4>
                        <div className="faq-chevron">
                          <ChevronDown size={16} />
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                          >
                            <p className="faq-a-text">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}