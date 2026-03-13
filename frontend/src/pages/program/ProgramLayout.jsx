import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import AnimatedBackground from "../../components/AnimatedBackground";

import ProgramHero from "./sections/ProgramHero";
import WhatOffers from "./sections/WhatOffers";
import Eligibility from "./sections/Eligibility";
import WhyDatapreneur from "./sections/WhyDatapreneur";
import Curriculum from "./sections/Curriculum";
import ToolsSection from "./sections/ToolsSection";
import Projects from "./sections/Projects";
import SuccessStories from "./sections/SuccessStories";
import JourneyTimeline from "./sections/JourneyTimeline";
import Certifications from "./sections/Certifications";
import FAQSection from "./sections/FAQSection";

import { useEffect } from "react";

export default function ProgramLayout({ course }) {
  useEffect(() => { window.scrollTo(0, 0); }, [course.slug]);

  return (
    <div style={{ position: "relative" }}>
      <AnimatedBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <ProgramHero course={course} />
        <WhatOffers course={course} />
        <Eligibility course={course} />
        <WhyDatapreneur course={course} />
        <Curriculum course={course} />
        <ToolsSection course={course} />
        <Projects course={course} />
        <SuccessStories course={course} />
        <JourneyTimeline course={course} />
        <Certifications course={course} />
        <FAQSection course={course} />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
}
