const roleNames = {
  admin: "Admin",
  trainer: "Trainer",
  counselor: "Counselor",
  student: "Student",
};

export default function AdminNavbar({ role = "admin" }) {
  const normalizedRole = (role || "admin").toLowerCase();
  const roleLabel = roleNames[normalizedRole] || "Admin";

  return (
    <header className="admin-navbar">
      <div className="admin-navbar-inner">
        <div className="admin-navbar-spacer" />

        <label className="admin-search" htmlFor="admin-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            id="admin-search"
            type="text"
            placeholder="Search..."
          />
        </label>

        <div className="admin-navbar-actions">
          <button className="admin-icon-btn" type="button" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
              <path d="M13.7 21a2 2 0 0 1-3.4 0" />
            </svg>
            <span className="admin-bell-dot" />
          </button>

          <div className="admin-user">
            <div>
              <div className="admin-user-name">Alex Morgan</div>
              <div className="admin-user-role">{roleLabel}</div>
            </div>
            <div className="admin-avatar">
              AM
              <span className="admin-status" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
