import { COURSES } from "../../data/courses";
import ProgramLayout from "./ProgramLayout";

const course = COURSES.find(c => c.slug === "business-analytics");

export default function BusinessAnalyticsPage() {
  return <ProgramLayout course={course} />;
}
