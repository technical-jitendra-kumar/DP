import { COURSES } from "../../data/courses";
import ProgramLayout from "./ProgramLayout";

const course = COURSES.find(c => c.slug === "data-analytics");

export default function DataAnalyticsPage() {
  return <ProgramLayout course={course} />;
}
