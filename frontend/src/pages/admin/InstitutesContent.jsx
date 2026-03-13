export default function InstitutesContent() {
  const rows = [
    { id: "ED-1201", name: "Northbridge College", plan: "Enterprise", students: 420 },
    { id: "ED-1202", name: "Wellington Institute", plan: "Growth", students: 310 },
    { id: "ED-1203", name: "Summit Learning", plan: "Professional", students: 205 },
    { id: "ED-1204", name: "Brighton Academy", plan: "Growth", students: 180 },
  ];

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1>Institutes</h1>
          <p>Manage your institute partners, plans, and learner counts.</p>
        </div>
      </div>

      <section className="admin-section">
        <h2>Institute Directory</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Plan</th>
              <th>Students</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.plan}</td>
                <td>{row.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
