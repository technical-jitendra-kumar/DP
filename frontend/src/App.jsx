import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AnimatedBackground from "./components/AnimatedBackground";
import Aboutus from "./components/Aboutus";

import DataAnalyticsPage       from "./pages/programs/DataAnalyticsPage";
import BusinessAnalyticsPage   from "./pages/programs/BusinessAnalyticsPage";
import DataScienceAIPage       from "./pages/programs/DataScienceAIPage";
import AgenticAIPage           from "./pages/programs/AgenticAIPage";
import InvestmentBankingPage   from "./pages/programs/InvestmentBankingPage";
import MastersTrackPage        from "./pages/programs/MastersTrackPage";
import SignInPage              from "./pages/auth/SignInPage";
import SignUpPage              from "./pages/auth/SignUpPage";
import ForgotPasswordPage      from "./pages/auth/ForgotPasswordPage";
import AdminLayout             from "./pages/admin/AdminLayout";
import DashboardContent        from "./pages/admin/DashboardContent";
import InstitutesContent       from "./pages/admin/InstitutesContent";
import AdminPlaceholder        from "./pages/admin/AdminPlaceholder";


export default function App() {
  const location = useLocation();
  const hideBackground = ["/admin", "/trainer", "/counselor", "/student"].some((prefix) =>
    location.pathname.startsWith(prefix)
  );

  return (
    <>
      {!hideBackground && <AnimatedBackground />}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route path="/admin" element={<AdminLayout role="admin" />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardContent />} />
            <Route path="institutes" element={<InstitutesContent />} />
            <Route path="students" element={<AdminPlaceholder title="Students" />} />
            <Route path="payments" element={<AdminPlaceholder title="Payments" />} />
            <Route path="reports" element={<AdminPlaceholder title="Reports" />} />
          </Route>

          <Route path="/trainer" element={<AdminLayout role="trainer" />}>
            <Route index element={<Navigate to="/trainer/dashboard" replace />} />
            <Route
              path="dashboard"
              element={<DashboardContent title="Trainer Dashboard" subtitle="Track cohort progress, attendance, and learner outcomes." />}
            />
            <Route path="cohorts" element={<AdminPlaceholder title="Cohorts" />} />
            <Route path="sessions" element={<AdminPlaceholder title="Sessions" />} />
            <Route path="students" element={<AdminPlaceholder title="Students" />} />
            <Route path="reports" element={<AdminPlaceholder title="Reports" />} />
          </Route>

          <Route path="/counselor" element={<AdminLayout role="counselor" />}>
            <Route index element={<Navigate to="/counselor/dashboard" replace />} />
            <Route
              path="dashboard"
              element={<DashboardContent title="Counselor Dashboard" subtitle="Manage leads, conversions, and learner engagement." />}
            />
            <Route path="leads" element={<AdminPlaceholder title="Leads" />} />
            <Route path="follow-ups" element={<AdminPlaceholder title="Follow-ups" />} />
            <Route path="institutes" element={<AdminPlaceholder title="Institutes" />} />
            <Route path="reports" element={<AdminPlaceholder title="Reports" />} />
          </Route>

          <Route path="/student" element={<AdminLayout role="student" />}>
            <Route index element={<Navigate to="/student/dashboard" replace />} />
            <Route
              path="dashboard"
              element={<DashboardContent title="Student Dashboard" subtitle="Keep up with courses, payments, and progress milestones." />}
            />
            <Route path="courses" element={<AdminPlaceholder title="My Courses" />} />
            <Route path="payments" element={<AdminPlaceholder title="Payments" />} />
            <Route path="certificates" element={<AdminPlaceholder title="Certificates" />} />
            <Route path="support" element={<AdminPlaceholder title="Support" />} />
          </Route>

          <Route path="/programs/data-analytics"                element={<DataAnalyticsPage />} />
          <Route path="/programs/business-analytics"            element={<BusinessAnalyticsPage />} />
          <Route path="/programs/data-science-ai"               element={<DataScienceAIPage />} />
          <Route path="/programs/agentic-ai-prompt-engineering" element={<AgenticAIPage />} />
          <Route path="/programs/investment-banking"            element={<InvestmentBankingPage />} />
          <Route path="/programs/data-ai-masters-track"         element={<MastersTrackPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
