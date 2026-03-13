import { useState } from "react";
import { Play, TrendingUp } from "lucide-react";
import story1 from "../../assets/mentor1.jpg";
import story2 from "../../assets/mentor2.jpg";
import story3 from "../../assets/mentor3.jpg";
import story4 from "../../assets/mentor4.jpg";
import story5 from "../../assets/mentor5.jpg";

const storiesData = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Data Scientist at Google",
    image: story1,
    hike: "300% Hike",
    beforeLPA: "4.5",
    afterLPA: "18",
    testimonial:
      "Datapreneur transformed my career completely. The mentorship and real projects made all the difference.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "ML Engineer at Microsoft",
    image: story2,
    hike: "340% Hike",
    beforeLPA: "5",
    afterLPA: "22",
    testimonial:
      "The placement support was incredible. From resume building to mock interviews, everything was top-notch.",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Data Analyst at Amazon",
    image: story3,
    hike: "240% Hike",
    beforeLPA: "3.5",
    afterLPA: "12",
    testimonial:
      "The curriculum was perfectly aligned with industry needs. I felt confident from day one at my new job.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Senior BI Developer at Accenture",
    image: story4,
    hike: "280% Hike",
    beforeLPA: "4",
    afterLPA: "15",
    testimonial:
      "The hands-on projects and mentorship helped me secure a senior role. Best investment in my career.",
  },
  {
    id: 5,
    name: "Neha Kapoor",
    role: "Data Scientist at IBM",
    image: story5,
    hike: "320% Hike",
    beforeLPA: "3.8",
    afterLPA: "16",
    testimonial:
      "Outstanding support throughout the journey. The community and guidance made all the difference in my success.",
  },
];

function StoryCard({ story, id }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      key={id}
      className="story-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: "0 0 290px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: hov
          ? "0 20px 48px rgba(20,41,208,0.16), 0 2px 8px rgba(0,0,0,0.06)"
          : "0 4px 20px rgba(20,41,208,0.08), 0 1px 4px rgba(0,0,0,0.05)",
        transition: "all 0.28s ease",
        transform: hov ? "translateY(-6px)" : "none",
        cursor: "pointer",
        border: "1px solid rgba(20,41,208,0.09)",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: "100%", height: "210px" }}>
        <img
          src={story.image}
          alt={story.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(22,22,25,0.55) 100%)" }} />

        {/* Play btn */}
        <div
          className="play-btn"
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "52px", height: "52px",
            backgroundColor: hov ? "#1429D0" : "rgba(20,41,208,0.82)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 20px rgba(20,41,208,0.45)",
            transition: "all 0.25s ease",
            transform: hov
              ? "translate(-50%, -50%) scale(1.12)"
              : "translate(-50%, -50%) scale(1)",
          }}
        >
          <Play size={20} color="#fff" fill="#fff" />
        </div>

        {/* Hike badge */}
        <div style={{
          position: "absolute", top: "14px", right: "14px",
          background: "linear-gradient(135deg, #1429D0, #0E7FDD)",
          color: "#fff",
          padding: "5px 12px", borderRadius: "100px",
          fontSize: "0.75rem", fontWeight: "700",
          display: "flex", alignItems: "center", gap: "5px",
          boxShadow: "0 4px 12px rgba(20,41,208,0.35)",
        }}>
          <TrendingUp size={13} color="#BFD2FF" />
          {story.hike}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "18px" }}>
        <div style={{ fontWeight: 800, fontSize: "1rem", color: "#161619", marginBottom: "3px", letterSpacing: "-0.01em" }}>
          {story.name}
        </div>
        <div style={{ fontSize: "0.78rem", color: "#36383e", marginBottom: "14px", fontWeight: 500 }}>
          {story.role}
        </div>

        {/* LPA bar */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          background: "#F2F5FF",
          borderRadius: "12px", padding: "10px 12px",
          marginBottom: "14px",
          border: "1px solid rgba(20,41,208,0.08)",
        }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: "0.65rem", color: "#36383e", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.06em", marginBottom: "3px" }}>Before</div>
            <div style={{ fontSize: "0.88rem", color: "#262832", fontWeight: 700 }}>₹{story.beforeLPA} LPA</div>
          </div>

          {/* Arrow */}
          <div style={{
            width: "28px", height: "28px", borderRadius: "50%",
            background: "linear-gradient(135deg, #1429D0, #0E7FDD)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{ color: "#fff", fontSize: "0.9rem", lineHeight: 1 }}>→</span>
          </div>

          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: "0.65rem", color: "#36383e", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.06em", marginBottom: "3px" }}>After</div>
            <div style={{ fontSize: "0.88rem", color: "#1429D0", fontWeight: 800 }}>₹{story.afterLPA} LPA</div>
          </div>
        </div>

        {/* Testimonial */}
        <p style={{
          fontSize: "0.8rem", color: "#262832", margin: 0,
          lineHeight: 1.65, fontStyle: "italic",
          borderLeft: "2px solid #BFD2FF", paddingLeft: "10px",
        }}>
          <span style={{ color: "#1429D0", fontSize: "1.1rem", fontStyle: "normal", marginRight: "3px", lineHeight: 1 }}>❝</span>
          {story.testimonial}
        </p>
      </div>
    </div>
  );
}

export default function SuccessStoriesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .success-section {
          padding: 90px 0;
          background: #F5F7FA;
          overflow: hidden;
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }

        /* Blobs only — no grid */
        .success-blob-tl {
          position: absolute; top: -60px; left: -40px;
          width: 340px; height: 340px; border-radius: 50%;
          background: radial-gradient(circle, rgba(20,41,208,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .success-blob-br {
          position: absolute; bottom: -60px; right: -40px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(14,127,221,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Header */
        .success-header {
          text-align: center;
          margin-bottom: 56px;
          padding: 0 5%;
          position: relative;
          z-index: 1;
        }
        .success-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1429D0;
          background: rgba(20,41,208,0.08);
          border: 1px solid rgba(20,41,208,0.18);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 18px;
        }
        .success-heading {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #161619;
          margin-bottom: 14px;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .success-heading span { color: #1429D0; }
        .success-desc {
          font-size: 1rem;
          color: #36383e;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Scroll track */
        .success-scroll-wrap {
          position: relative;
          overflow: hidden;
        }
        .success-scroll-track {
          display: flex;
          gap: 22px;
          width: fit-content;
          padding: 12px 0 20px;
          animation: scrollRight 40s linear infinite;
          will-change: transform;
        }
        .success-scroll-wrap:hover .success-scroll-track {
          animation-play-state: paused;
        }

        @keyframes scrollRight {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Edge fades — match section bg */
        .success-fade-left {
          position: absolute; left: 0; top: 0; bottom: 0; width: 120px;
          background: linear-gradient(90deg, #F5F7FA, transparent);
          pointer-events: none; z-index: 10;
        }
        .success-fade-right {
          position: absolute; right: 0; top: 0; bottom: 0; width: 120px;
          background: linear-gradient(270deg, #F5F7FA, transparent);
          pointer-events: none; z-index: 10;
        }

        @media (max-width: 600px) {
          .success-section { padding: 60px 0; }
        }
      `}</style>

      <section className="success-section">
        <div className="success-blob-tl" />
        <div className="success-blob-br" />

        {/* Header */}
        <div className="success-header">
          <div>
            <span className="success-eyebrow">Alumni Wins</span>
          </div>
          <h2 className="success-heading">
            Real <span>Success Stories</span>
          </h2>
          <p className="success-desc">
            Real salary transformations from our alumni — from learners to industry leaders.
          </p>
        </div>

        {/* Scroll strip */}
        <div className="success-scroll-wrap">
          <div className="success-fade-left" />
          <div className="success-fade-right" />

          <div className="success-scroll-track" style={{ paddingLeft: "24px" }}>
            {/* First set */}
            {storiesData.map((story) => (
              <StoryCard key={`${story.id}-1`} story={story} id={`${story.id}-1`} />
            ))}
            {/* Duplicate for seamless loop */}
            {storiesData.map((story) => (
              <StoryCard key={`${story.id}-2`} story={story} id={`${story.id}-2`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}