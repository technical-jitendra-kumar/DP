import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getAdminDashboard } from "../../api/reports.api";
import { getTrainerDashboard } from "../../api/reports.api";
import { getCounselorDashboard } from "../../api/reports.api";
import { getStudentDashboard } from "../../api/reports.api";

const dashboardFnMap = {
  ADMIN:     getAdminDashboard,
  TRAINER:   getTrainerDashboard,
  COUNSELOR: getCounselorDashboard,
  STUDENT:   getStudentDashboard,
};

const defaultTitles = {
  ADMIN:     { title: "Admin Dashboard",     subtitle: "Monitor performance, revenue, and institute engagement in real time." },
  TRAINER:   { title: "Trainer Dashboard",   subtitle: "Track cohort progress, attendance, and learner outcomes." },
  COUNSELOR: { title: "Counselor Dashboard", subtitle: "Manage leads, conversions, and learner engagement." },
  STUDENT:   { title: "Student Dashboard",   subtitle: "Keep up with courses, payments, and progress milestones." },
};

export default function DashboardContent({ title, subtitle }) {
  const { user } = useAuth();
  const role = user?.role || "ADMIN";
  const defaults = defaultTitles[role] || defaultTitles.ADMIN;
  const displayTitle    = title    || defaults.title;
  const displaySubtitle = subtitle || defaults.subtitle;

  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const fetchFn = dashboardFnMap[role];
    if (!fetchFn) return;
    setLoading(true);
    fetchFn()
      .then((res) => setData(res.data ?? res))
      .catch((err) => setError(err.response?.data?.message || "Failed to load dashboard"))
      .finally(() => setLoading(false));
  }, [role]);

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1>{displayTitle}</h1>
          <p>{displaySubtitle}</p>
        </div>
      </div>

      {loading && (
        <div className="admin-metrics">
          {[1,2,3].map((i) => (
            <div key={i} className="admin-card" style={{ opacity: 0.5 }}>
              <h3>Loading...</h3>
              <div className="admin-metric-value">—</div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div style={{ color: "#ef4444", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "14px 18px", marginBottom: 20 }}>
          {error}
        </div>
      )}

      {data && role === "ADMIN" && (
        <>
          <div className="admin-metrics">
            <div className="admin-card admin-card--indigo">
              <h3>Total Students</h3>
              <div className="admin-metric-value">{data.totalStudents ?? "—"}</div>
              <div className="admin-pill">Registered users</div>
            </div>
            <div className="admin-card">
              <h3>Total Courses</h3>
              <div className="admin-metric-value">{data.totalCourses ?? "—"}</div>
              <div className="admin-pill">Active programs</div>
            </div>
            <div className="admin-card admin-card--teal">
              <h3>Total Enrollments</h3>
              <div className="admin-metric-value">{data.totalEnrollments ?? "—"}</div>
              <div className="admin-pill">All time</div>
            </div>
          </div>

          <div className="admin-grid-two">
            {data.recentEnrollments?.length > 0 && (
              <section className="admin-section">
                <h2>Recent Enrollments</h2>
                <div className="admin-list">
                  {data.recentEnrollments.map((item, i) => (
                    <div className="admin-list-item" key={i}>
                      <div>
                        <strong>{item.student?.name || "Student"}</strong>
                        <div style={{ color: "#6B7280", fontSize: 12 }}>{item.batch?.name || "Batch"}</div>
                      </div>
                      <span className="admin-pill">{new Date(item.createdAt).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.revenueStats && (
              <section className="admin-section">
                <h2>Revenue Overview</h2>
                <div className="admin-list">
                  <div className="admin-list-item">
                    <strong>Total Invoiced</strong>
                    <span className="admin-pill">₹{data.revenueStats.totalInvoiced ?? 0}</span>
                  </div>
                  <div className="admin-list-item">
                    <strong>Total Collected</strong>
                    <span className="admin-pill">₹{data.revenueStats.totalCollected ?? 0}</span>
                  </div>
                  <div className="admin-list-item">
                    <strong>Pending</strong>
                    <span className="admin-pill">₹{data.revenueStats.totalPending ?? 0}</span>
                  </div>
                </div>
              </section>
            )}
          </div>
        </>
      )}

      {data && role === "STUDENT" && (
        <div className="admin-grid-two">
          {data.enrollments?.length > 0 && (
            <section className="admin-section">
              <h2>My Enrollments</h2>
              <div className="admin-list">
                {data.enrollments.map((item, i) => (
                  <div className="admin-list-item" key={i}>
                    <div>
                      <strong>{item.batch?.name || "Batch"}</strong>
                      <div style={{ color: "#6B7280", fontSize: 12 }}>{item.batch?.course?.name || ""}</div>
                    </div>
                    <span className="admin-pill">{item.status}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {data && (role === "TRAINER" || role === "COUNSELOR") && (
        <div className="admin-metrics">
          <div className="admin-card admin-card--indigo">
            <h3>Assigned Batches</h3>
            <div className="admin-metric-value">{data.totalBatches ?? data.assignedBatches ?? "—"}</div>
          </div>
          <div className="admin-card">
            <h3>Total Students</h3>
            <div className="admin-metric-value">{data.totalStudents ?? "—"}</div>
          </div>
        </div>
      )}
    </div>
  );
}
