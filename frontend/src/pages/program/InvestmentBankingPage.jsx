import { COURSES } from "../../data/courses";
import ProgramLayout from "./ProgramLayout";

const course = COURSES.find(c => c.slug === "investment-banking");

export default function InvestmentBankingPage() {
  return <ProgramLayout course={course} />;
}
