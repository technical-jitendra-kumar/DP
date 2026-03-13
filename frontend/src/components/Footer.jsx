import { Linkedin, Twitter, Youtube, Instagram, Mail, Phone } from 'lucide-react';

const cols = [
  {
    title: "Programs",
    links: ["Data Analytics", "Business Analytics", "Data Science & AI", "Agentic AI", "Investment Banking", "Masters Track"],
  },
  {
    title: "Resources",
    links: ["Blog", "Free Workshops", "Interview Prep", "Career Roadmaps", "Alumni Stories"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Mentors", "Hiring Partners", "Events", "Privacy Policy"],
  },
];

const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z" fill="#1429D0" opacity=".25" stroke="#1429D0" strokeWidth="1.5"/>
    <circle cx="12" cy="8" r="2.2" fill="#1429D0"/>
  </svg>
);

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
        @media (max-width: 992px) {
          .dp-footer-grid { grid-template-columns: 1.5fr 1fr 1fr !important; gap: 3rem 2rem !important; }
        }
        @media (max-width: 600px) {
          .dp-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .dp-footer-brand { grid-column: span 2 !important; }
        }
        .dp-footer-link:hover { color: #BFD2FF !important; }
        .dp-social-btn:hover  { color: #BFD2FF !important; transform: translateY(-3px) !important; }
      `}</style>

      <footer style={{
        background: "#161619",
        padding: "4rem 5% 2rem",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        fontFamily: "'DM Sans', sans-serif",
      }}>

        <div className="dp-footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr 0.8fr",
          gap: "3rem",
          maxWidth: 1200, margin: "0 auto",
          alignItems: "start",
        }}>

          {/* Brand column */}
          <div className="dp-footer-brand" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.03em" }}>
              <span style={{ color: "#fff" }}>Data</span>
              <span style={{ color: "#1429D0" }}>Preneur</span>
            </div>

            <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.7, maxWidth: 270 }}>
              Empowering the next generation of data professionals and financial analysts across India with industry-led mentorship.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "0.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.84rem", color: "#CBD5E1" }}>
                <Mail size={13} color="#1429D0" />
                hello@datapreneur.in
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.84rem", color: "#CBD5E1" }}>
                <Phone size={13} color="#1429D0" />
                +91-98100-00000
              </div>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontWeight: 700, fontSize: "0.75rem", color: "#fff",
                letterSpacing: "1.5px", textTransform: "uppercase",
                marginBottom: "1.2rem", marginTop: 0,
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {col.links.map(l => (
                  <li key={l}>
                    <span
                      className="dp-footer-link"
                      style={{
                        fontSize: "0.88rem", color: "#94A3B8",
                        cursor: "pointer", transition: "color 0.2s ease",
                      }}
                    >
                      {l}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social column */}
          <div>
            <h4 style={{
              fontWeight: 700, fontSize: "0.75rem", color: "#fff",
              letterSpacing: "1.5px", textTransform: "uppercase",
              marginBottom: "1.2rem", marginTop: 0,
            }}>
              Connect
            </h4>
            <div style={{ display: "flex", gap: "1.1rem", alignItems: "center", flexWrap: "wrap" }}>
              {[
                { ico: <Linkedin size={19} />, lab: "LinkedIn"  },
                { ico: <Twitter  size={19} />, lab: "Twitter"   },
                { ico: <Youtube  size={19} />, lab: "YouTube"   },
                { ico: <Instagram size={19}/>, lab: "Instagram" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="dp-social-btn"
                  title={s.lab}
                  style={{
                    color: "#94A3B8",
                    textDecoration: "none",
                    display: "inline-flex", alignItems: "center",
                    transition: "all 0.25s ease",
                  }}
                >
                  {s.ico}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: "3.5rem", paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          fontSize: "0.8rem", color: "#4B5563",
        }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "0.75rem",
          }}>
            <span>© 2025 DataPreneur Education Pvt. Ltd. All rights reserved.</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#6B7280" }}>
              <PinIcon /> Sector-62, Noida, Uttar Pradesh
            </span>
          </div>
        </div>

      </footer>
    </>
  );
}