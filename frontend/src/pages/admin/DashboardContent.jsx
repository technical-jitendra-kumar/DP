export default function DashboardContent({ title = "Admin Dashboard", subtitle = "Monitor performance, revenue, and institute engagement in real time." }) {
  const enrollments = [
    { name: "Wellington Institute", program: "AI Foundations", date: "Mar 11" },
    { name: "Northbridge College", program: "Business Analytics", date: "Mar 10" },
    { name: "Summit Learning", program: "Data Analytics", date: "Mar 10" },
    { name: "Brighton Academy", program: "EdTech Ops", date: "Mar 9" },
  ];

  const activity = [
    { title: "Payment processed", detail: "Invoice #2190", time: "10 min ago" },
    { title: "New institute onboarded", detail: "Crestwood University", time: "1 hr ago" },
    { title: "Report generated", detail: "Quarterly performance", time: "3 hrs ago" },
    { title: "Student sync completed", detail: "1,280 records", time: "Yesterday" },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="admin-metrics">
        <div className="admin-card admin-card--indigo">
          <h3>Total Institutes</h3>
          <div className="admin-metric-value">520</div>
          <div className="admin-pill">+14 this month</div>
        </div>
        <div className="admin-card">
          <h3>Total Students</h3>
          <div className="admin-metric-value">1,500</div>
          <div className="admin-pill">+3.2% growth</div>
        </div>
        <div className="admin-card admin-card--teal">
          <h3>Revenue</h3>
          <div className="admin-metric-value">$105,000</div>
          <div className="admin-pill">Monthly recurring</div>
        </div>
      </div>

      <div className="admin-grid-two">
        <section className="admin-section">
          <h2>Recent Enrollments</h2>
          <div className="admin-list">
            {enrollments.map((item) => (
              <div className="admin-list-item" key={item.name}>
                <div>
                  <strong>{item.name}</strong>
                  <div style={{ color: "#6B7280", fontSize: 12 }}>{item.program}</div>
                </div>
                <span className="admin-pill">{item.date}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="admin-section">
          <h2>System Activity</h2>
          <div className="admin-list">
            {activity.map((item) => (
              <div className="admin-list-item" key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <div style={{ color: "#6B7280", fontSize: 12 }}>{item.detail}</div>
                </div>
                <span className="admin-pill">{item.time}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
