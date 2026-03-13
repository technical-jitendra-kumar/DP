import { useInView, useCounter } from "../../../hooks/useInView";
import { FiUsers, FiTool, FiHeadphones, FiBriefcase, FiAward, FiClock } from 'react-icons/fi';

const FEATURES = [
  { icon: <FiUsers size={22} />, title: "Max 25 Students/Batch", desc: "Your mentor knows you by name. Real accountability, real attention.", stat: "25", label: "max students" },
  { icon: <FiTool size={22} />, title: "Real-World Projects",   desc: "Capstones with actual company data — Swiggy, HDFC, MakeMyTrip.", stat: "12", label: "projects" },
  { icon: <FiHeadphones size={22} />, title: "Mentor on Call",         desc: "Stuck at 11pm? Your mentor is reachable. We don't close at 5pm.",  stat: "24", label: "hrs support" },
  { icon: <FiBriefcase size={22} />, title: "Placement Support",      desc: "Resume, LinkedIn, mock interviews + direct recruiter referrals.",   stat: "180", label: "hiring partners" },
  { icon: <FiAward size={22} />, title: "Microsoft Certified",    desc: "Official Microsoft Learning Partner — recognized globally.",        stat: "10k", label: "companies trust it" },
  { icon: <FiClock size={22} />, title: "Lifetime Access",        desc: "Recordings, updates and alumni community forever. No subscription.", stat: "∞", label: "access" },
];

function CountNum({ target, inView }) {
  const v = useCounter(target, inView);
  return <>{v}</>;
}

export default function WhyDatapreneur({ course }) {
  const [ref, inView] = useInView(0.08);

  return (
    <section ref={ref} style={{ padding: "7rem 5%", background: "#0F172A", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: course.accent, opacity: 0.06, filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "#7C3AED", opacity: 0.06, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

          {/* Left */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-24px)", transition: "all .7s" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", display: "inline-block", padding: ".35rem 1.1rem", borderRadius: 100, background: `${course.accent}22`, border: `1.5px solid ${course.accent}44`, color: course.accent, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>
              Why DataPreneur
            </div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem,3.5vw,2.9rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#fff", marginBottom: "1rem" }}>
              We're Not a Course Platform.<br />
              <em style={{ fontStyle: "normal", color: course.accent }}>We're a Career Accelerator.</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#94A3B8", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              Built by people who've hired at Google, JPMorgan, and Amazon. Every decision — batch size, project choice, mentor selection — is made with one goal: getting you hired.
            </p>

            {/* Big metric */}
            <div style={{ background: `linear-gradient(135deg, ${course.accent}, ${course.accent}99)`, borderRadius: 20, padding: "2.5rem", textAlign: "center", boxShadow: `0 16px 50px ${course.accent}44` }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "4.5rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                {inView ? <><CountNum target={94} inView={inView} />%</> : "0%"}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,.85)", marginTop: ".6rem", fontWeight: 600 }}>Overall Placement Rate</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,.6)", marginTop: ".3rem" }}>Across all programs · 2024 cohorts</div>
            </div>

            {/* Mini metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: ".75rem", marginTop: "1rem" }}>
              {[{n:2400,s:"+",l:"Alumni Placed"},{n:180,s:"+",l:"Partners"},{n:4.9,s:"★",l:"Rating"}].map((m, i) => (
                <div key={i} style={{ background: "rgba(30,41,59,.8)", borderRadius: 14, padding: "1.2rem .8rem", border: "1px solid rgba(51,65,85,.8)", textAlign: "center" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.6rem", fontWeight: 900, color: "#fff" }}>
                    {m.l === "Rating" ? "4.9★" : <>{inView ? <CountNum target={m.n} inView={inView} /> : 0}{m.s}</>}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#64748B", marginTop: ".2rem" }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - feature cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: "rgba(30,41,59,.7)", borderRadius: 18, padding: "1.5rem",
                border: "1px solid rgba(51,65,85,.8)", backdropFilter: "blur(12px)",
                opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
                transition: `all .5s ${0.1 + i * 0.08}s`, cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(51,65,85,.9)"; e.currentTarget.style.borderColor = course.accent + "55"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(30,41,59,.7)"; e.currentTarget.style.borderColor = "rgba(51,65,85,.8)"; }}>
                <div style={{ color: course.accent, marginBottom: ".6rem" }}>{f.icon}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: ".35rem" }}>{f.title}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#64748B", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){section>div>div>div:first-child,section>div>div>div:last-child{grid-column:1!important}section>div>div{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
