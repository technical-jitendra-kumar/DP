import { COURSES } from "../../data/courses";
import ProgramLayout from "./ProgramLayout";

const course = COURSES.find(c => c.slug === "data-science-ai");

export default function DataScienceAiPage() {
  return <ProgramLayout course={course} />;
}
