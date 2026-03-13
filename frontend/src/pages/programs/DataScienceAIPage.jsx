import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AnimatedBackground from "../../components/AnimatedBackground";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import ProgramHero from "../program-sections/ProgramHero";
import WhatItOffers from "../program-sections/WhatItOffers";
import Eligibility from "../program-sections/Eligibility";
import WhyDataPreneur from "../program-sections/WhyDataPreneur";
import Curriculum from "../program-sections/Curriculum";
import ToolsSection from "../program-sections/ToolsSection";
import ProjectsSection from "../program-sections/ProjectsSection";
import SuccessStories from "../program-sections/SuccessStories";
import JourneyTimeline from "../program-sections/JourneyTimeline";
import Certifications from "../program-sections/Certifications";
import FAQ from "../program-sections/FAQ";
import { COURSES } from "../../data/courses";

const SLUG = "data-science-ai";

export default function DataScienceAIPage() {
  const navigate = useNavigate();
  const course = COURSES.find(c => c.slug === SLUG);

  useEffect(() => {
    if (!course) { navigate("/"); return; }
    window.scrollTo(0, 0);
    document.title = `${course.title} | DataPreneur`;
  }, [course, navigate]);

  if (!course) return null;

  return (
    <>
      <AnimatedBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <ProgramHero     course={course} />
          <WhatItOffers    course={course} />
          <Eligibility     course={course} />
          <WhyDataPreneur  course={course} />
          <Curriculum      course={course} />
          <ToolsSection    course={course} />
          <ProjectsSection course={course} />
          <SuccessStories  course={course} />
          <JourneyTimeline course={course} />
          <Certifications  course={course} />
          <FAQ             course={course} />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
}
