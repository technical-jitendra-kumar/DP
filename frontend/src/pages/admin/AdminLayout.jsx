import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import "./AdminLayout.css";

export default function AdminLayout({ role = "admin" }) {
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("demoRole");
    if (storedRole && storedRole !== role) {
      navigate(`/${storedRole}/dashboard`, { replace: true });
    }
  }, [navigate, role]);

  return (
    <div className="admin-shell">
      <AdminSidebar role={role} />
      <div className="admin-main">
        <AdminNavbar role={role} />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
