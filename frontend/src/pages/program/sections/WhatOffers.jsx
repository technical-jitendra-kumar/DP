import { useState } from "react";
import { useInView } from "../../../hooks/useInView";
import { 
  FiBarChart2, 
  FiTool, 
  FiPieChart, 
  FiBriefcase, 
  FiAward, 
  FiUsers, 
  FiGlobe, 
  FiTarget, 
  FiMessageSquare, 
  FiHome, 
  FiClipboard, 
  FiDollarSign,
  FiSettings,
  FiRadio,
  FiMic,
  FiKey,
  FiEdit3,
  FiLink,
  FiDatabase,
  FiTrendingUp,
  FiCloud,
  FiZap,
  FiRefreshCw,
  FiInbox,
  FiFileText
} from 'react-icons/fi';
import { HiAcademicCap } from 'react-icons/hi2';
import { 
  FaTrophy, 
  FaMedal, 
  FaPython, 
  FaRobot, 
  FaRocket, 
  FaFire, 
  FaGem, 
  FaInfinity,
  FaGift,
  FaCrown,
  FaHandshake,
  FaChartLine,
  FaBrain,
  FaUtensils,
  FaCreditCard,
  FaPlane,
  FaShoppingBag,
  FaPhoneAlt,
  FaHotel,
  FaBuilding,
  FaNewspaper,
  FaComments,
  FaBalanceScale,
  FaLightbulb,
  FaHandsHelping,
  FaGraduationCap
} from 'react-icons/fa';
import { 
  TbMicroscope, 
  TbRuler, 
  TbDna2, 
  TbHammer, 
  TbPuzzle,
  TbChartLine,
  TbBrain,
  TbRocket,
  TbTarget,
  TbPuzzle2,
  TbMoneybag,
  TbInfinity
} from 'react-icons/tb';
import { 
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiGoogle,
  SiOpenai,
  SiStreamlit,
  SiFastapi,
  SiHuggingface
} from 'react-icons/si';
import { 
  MdTrendingUp,
  MdBusiness,
  MdScience,
  MdHandshake,
  MdFilePresent,
  MdMic,
  MdDiamond
} from 'react-icons/md';
import { 
  BsGear,
  BsTree,
  BsLightning,
  BsBarChart,
  BsLink,
  BsPalette,
  BsEmojiSmile,
  BsChevronDown,
  BsPinMap
} from 'react-icons/bs';

export default function WhatOffers({ course }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(null);

  return (
    <section ref={ref} style={{ padding: "7rem 5%", background: "rgba(248,250,255,.6)", borderTop: "1px solid #E8EDF5", borderBottom: "1px solid #E8EDF5", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "30%", left: -100, width: 400, height: 400, borderRadius: "50%", background: course.accent, opacity: 0.04, filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)", transition: "all .6s" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: course.accentBg, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
            What You Get
          </div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#0F172A", marginBottom: ".8rem" }}>
            What <span style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>This Program</span> Offers
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#64748B", maxWidth: 520, margin: "0 auto" }}>Everything you need — tools, mentorship, projects and placement — in one cohort.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {course.offers.map((item, i) => (
            <div key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                background: hov === i ? "#fff" : "rgba(255,255,255,.85)",
                border: `1.5px solid ${hov === i ? course.accent + "55" : "#E8EDF5"}`,
                borderRadius: 20, padding: "2rem",
                boxShadow: hov === i ? `0 20px 60px rgba(0,0,0,.1), 0 4px 16px ${course.accent}18` : "0 2px 12px rgba(0,0,0,.05)",
                transform: hov === i ? "translateY(-6px)" : "none",
                transition: "all .3s ease",
                opacity: inView ? 1 : 0,
                transitionDelay: `${i * 0.07}s`,
                cursor: "default", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                position: "relative", overflow: "hidden",
              }}
            >
              {hov === i && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${course.accent}, ${course.accent}66)`, borderRadius: "20px 20px 0 0" }} />}
              <div style={{ width: 52, height: 52, borderRadius: 14, background: hov === i ? course.accentBg : "#F8FAFF", border: `1.5px solid ${hov === i ? course.accent + "44" : "#E8EDF5"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1.1rem", transition: "all .3s" }}>
                {item.icon}
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#0F172A", marginBottom: ".5rem" }}>{item.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.87rem", color: "#64748B", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr 1fr !important}}@media(max-width:600px){section>div>div:last-child{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
