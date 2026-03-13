import { Clock, Briefcase } from "lucide-react";
import img1 from "../../assets/mentor1.jpg";
import img2 from "../../assets/mentor2.jpg";
import img3 from "../../assets/mentor3.jpg";
import img4 from "../../assets/mentor4.jpg";
import img5 from "../../assets/mentor5.jpg";

const mentorsData = [
  {
    id: 1,
    name: "Heena Arora",
    role: "Associate Data Scientist",
    company: "PwC (ex-Amazon)",
    years: "3+ years",
    skills: ["Data Science", "Image Analytics", "Python", "SQL"],
    accentColor: "#1429D0",
    image: img1,
  },
  {
    id: 2,
    name: "Anand Tripathi",
    role: "Data Analyst",
    company: "Google",
    years: "1 year",
    skills: ["Data Analytics", "Big Data", "Product Analytics"],
    accentColor: "#0E7FDD",
    image: img2,
  },
  {
    id: 3,
    name: "Shubham",
    role: "Senior Data Scientist",
    company: "RSPL Group",
    years: "5+ years",
    skills: ["Python", "Machine Learning", "SQL"],
    accentColor: "#1E3A8A",
    image: img3,
  },
  {
    id: 4,
    name: "Akshat Khandelwal",
    role: "Senior Finance BI Developer",
    company: "Autodesk",
    years: "5+ years",
    skills: ["Power BI", "Python", "SQL"],
    accentColor: "#1429D0",
    image: img4,
  },
  {
    id: 5,
    name: "Prabhat Singh",
    role: "Data Scientist",
    company: "Cognizant",
    years: "4+ years",
    skills: ["Python", "Machine Learning", "Analytics"],
    accentColor: "#0E7FDD",
    image: img5,
  },
];

export default function MentorsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

        .mentors-section {
          padding: 90px 5%;
          background: #F5F7FA;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Blobs — no grid */
        .mentors-blob-tr {
          position: absolute; top: -60px; right: -60px;
          width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, rgba(20,41,208,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .mentors-blob-bl {
          position: absolute; bottom: -60px; left: -40px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(14,127,221,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .mentors-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .mentors-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .mentors-label-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .mentors-label-line {
          width: 22px; height: 2px;
          background: #1429D0; border-radius: 2px;
        }
        .mentors-label {
          color: #1429D0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .mentors-heading {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #161619;
          margin-bottom: 14px;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .mentors-heading span { color: #1429D0; }
        .mentors-desc {
          max-width: 520px;
          margin: 0 auto;
          color: #36383e;
          line-height: 1.7;
          font-size: 1rem;
        }

        /* Grid */
        .mentor-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* Card */
        .mentor-card {
          background: #fff;
          border-radius: 20px;
          border-top: 3px solid;
          padding: 22px;
          box-shadow: 0 4px 24px rgba(20,41,208,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .mentor-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(180deg, rgba(20,41,208,0.04) 0%, transparent 100%);
          pointer-events: none;
        }
        .mentor-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(20,41,208,0.14);
        }

        /* Image */
        .mentor-img {
          width: 100%;
          height: 175px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 16px;
          display: block;
        }

        /* Name & role */
        .mentor-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #161619;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }
        .mentor-role {
          font-size: 0.8rem;
          color: #36383e;
          margin-bottom: 12px;
          font-weight: 500;
        }

        /* Info rows */
        .mentor-info {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          margin-bottom: 6px;
          color: #262832;
          font-weight: 500;
        }
        .mentor-info svg { color: #1429D0; flex-shrink: 0; }

        /* Divider */
        .mentor-divider {
          height: 1px;
          background: rgba(20,41,208,0.08);
          margin: 14px 0;
        }

        /* Skills */
        .mentor-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .mentor-skill {
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 6px;
          background: #F2F5FF;
          color: #1429D0;
          font-weight: 700;
          border: 1px solid rgba(20,41,208,0.12);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .mentor-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .mentor-grid { grid-template-columns: 1fr; }
          .mentors-section { padding: 60px 5%; }
        }
      `}</style>

      <section className="mentors-section">
        <div className="mentors-blob-tr" />
        <div className="mentors-blob-bl" />

        <div className="mentors-container">
          {/* Header */}
          <div className="mentors-header">
            <div className="mentors-label-row">
              <span className="mentors-label-line" />
              <span className="mentors-label">Learn From The Best</span>
              <span className="mentors-label-line" />
            </div>
            <h2 className="mentors-heading">
              Meet Your <span>Mentors</span>
            </h2>
            <p className="mentors-desc">
              Industry veterans from top companies who share real-world
              experience and practical insights.
            </p>
          </div>

          {/* Grid */}
          <div className="mentor-grid">
            {mentorsData.slice(0, 4).map((mentor) => (
              <div
                key={mentor.id}
                className="mentor-card"
                style={{ borderTopColor: mentor.accentColor }}
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mentor-img"
                />

                <div className="mentor-name">{mentor.name}</div>
                <div className="mentor-role">{mentor.role}</div>

                <div className="mentor-info">
                  <Briefcase size={13} />
                  <span>{mentor.company}</span>
                </div>
                <div className="mentor-info">
                  <Clock size={13} />
                  <span>{mentor.years} experience</span>
                </div>

                <div className="mentor-divider" />

                <div className="mentor-skills">
                  {mentor.skills.map((skill, i) => (
                    <span key={i} className="mentor-skill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}