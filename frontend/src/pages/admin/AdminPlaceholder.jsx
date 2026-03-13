export default function AdminPlaceholder({ title }) {
  return (
    <div>
      <div className="admin-page-header">
        <div>
          <h1>{title}</h1>
          <p>Content for this section is being prepared.</p>
        </div>
      </div>

      <section className="admin-section">
        <h2>Coming Soon</h2>
        <p style={{ color: "#6B7280", fontSize: 14 }}>
          This area will include detailed insights and management tools.
        </p>
      </section>
    </div>
  );
}
