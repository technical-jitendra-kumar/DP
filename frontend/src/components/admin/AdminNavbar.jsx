import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const roleNames = {
  admin: "Admin", ADMIN: "Admin",
  trainer: "Trainer", TRAINER: "Trainer",
  counselor: "Counselor", COUNSELOR: "Counselor",
  student: "Student", STUDENT: "Student",
};

function getInitials(name = "") {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "??";
}

export default function AdminNavbar({ role = "admin" }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const normalizedRole = (role || "admin").toLowerCase();
  const roleLabel = roleNames[normalizedRole] || "Admin";

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <header className="admin-navbar">
      <div className="admin-navbar-inner">
        <div className="admin-navbar-spacer" />

        <label className="admin-search" htmlFor="admin-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input id="admin-search" type="text" placeholder="Search..." />
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
              <div className="admin-user-name">{user?.name || "User"}</div>
              <div className="admin-user-role">{roleLabel}</div>
            </div>
            <div
              className="admin-avatar"
              title="Click to logout"
              style={{ cursor: "pointer" }}
              onClick={handleLogout}
            >
              {getInitials(user?.name)}
              <span className="admin-status" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
