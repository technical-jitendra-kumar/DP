import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navConfig = {
  admin: [
    { path: "dashboard", label: "Dashboard", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /></svg>) },
    { path: "institutes", label: "Institutes", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-5 9 5" /><path d="M5 10v9" /><path d="M19 10v9" /><path d="M9 19V8" /><path d="M15 19V8" /></svg>) },
    { path: "students", label: "Students", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.3 3-6 6-6s6 2.7 6 6" /><path d="M14.5 20c.3-2.1 2-3.8 4.5-4" /></svg>) },
    { path: "payments", label: "Payments", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M7 15h4" /></svg>) },
    { path: "reports", label: "Reports", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M7 16V8" /><path d="M12 16V5" /><path d="M17 16v-6" /></svg>) },
  ],
  trainer: [
    { path: "dashboard", label: "Dashboard", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /></svg>) },
    { path: "cohorts", label: "Cohorts", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="7" height="7" rx="2" /><rect x="13" y="4" width="7" height="7" rx="2" /><rect x="4" y="13" width="7" height="7" rx="2" /><rect x="13" y="13" width="7" height="7" rx="2" /></svg>) },
    { path: "sessions", label: "Sessions", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M3 11h18" /></svg>) },
    { path: "students", label: "Students", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.3 3-6 6-6s6 2.7 6 6" /><path d="M14.5 20c.3-2.1 2-3.8 4.5-4" /></svg>) },
    { path: "reports", label: "Reports", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M7 16V8" /><path d="M12 16V5" /><path d="M17 16v-6" /></svg>) },
  ],
  counselor: [
    { path: "dashboard", label: "Dashboard", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /></svg>) },
    { path: "leads", label: "Leads", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 4v8l5 3" /></svg>) },
    { path: "follow-ups", label: "Follow-ups", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg>) },
    { path: "institutes", label: "Institutes", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-5 9 5" /><path d="M5 10v9" /><path d="M19 10v9" /><path d="M9 19V8" /><path d="M15 19V8" /></svg>) },
    { path: "reports", label: "Reports", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M7 16V8" /><path d="M12 16V5" /><path d="M17 16v-6" /></svg>) },
  ],
  student: [
    { path: "dashboard", label: "Dashboard", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /></svg>) },
    { path: "courses", label: "My Courses", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16" /><path d="M4 10h16" /><path d="M4 14h10" /><path d="M4 18h8" /></svg>) },
    { path: "payments", label: "Payments", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M7 15h4" /></svg>) },
    { path: "certificates", label: "Certificates", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M8 14l-2 7 6-3 6 3-2-7" /></svg>) },
    { path: "support", label: "Support", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14v-2a8 8 0 1 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="2" /><rect x="17" y="14" width="4" height="6" rx="2" /><path d="M12 20v1" /></svg>) },
  ],
};

const roleLabels = {
  admin: "Admin Portal", trainer: "Trainer Portal",
  counselor: "Counselor Portal", student: "Student Portal",
};

export default function AdminSidebar({ role = "admin" }) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const normalizedRole = (role || "admin").toLowerCase();
  const items = navConfig[normalizedRole] || navConfig.admin;
  const basePath = `/${normalizedRole}`;
  const label = roleLabels[normalizedRole] || "Admin Portal";

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <div className="admin-logo-mark">E</div>
        <div>
          <strong>DataPreneur</strong>
          <span>{label}</span>
        </div>
      </div>

      <nav className="admin-nav">
        {items.map((link) => (
          <NavLink
            key={link.path}
            to={`${basePath}/${link.path}`}
            className={({ isActive }) => `admin-nav-link${isActive ? " active" : ""}`}
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button className="admin-logout" type="button" onClick={handleLogout}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="M16 17l5-5-5-5" />
          <path d="M21 12H9" />
        </svg>
        Logout
      </button>
    </aside>
  );
}
