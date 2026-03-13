import { COURSES } from "../../data/courses";
import ProgramLayout from "./ProgramLayout";

const course = COURSES.find(c => c.slug === "data-ai-masters-track");

export default function DataAiMastersTrackPage() {
  return <ProgramLayout course={course} />;
}
