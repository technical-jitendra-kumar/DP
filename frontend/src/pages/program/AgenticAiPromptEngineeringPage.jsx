import { COURSES } from "../../data/courses";
import ProgramLayout from "./ProgramLayout";

const course = COURSES.find(c => c.slug === "agentic-ai-prompt-engineering");

export default function AgenticAiPromptEngineeringPage() {
  return <ProgramLayout course={course} />;
}
