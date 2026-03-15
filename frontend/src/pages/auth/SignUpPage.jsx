import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import { useAuth } from "../../context/AuthContext";

export default function SignUpPage() {
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Backend expects role as uppercase e.g. "ADMIN"
      await register({ ...form, role: form.role.toUpperCase() });
      setSuccess("Account created! Please sign in.");
      setTimeout(() => navigate("/signin"), 1500);
    } catch {
      // error already set in AuthContext
    }
  };

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Launch a smarter CRM experience in minutes"
    >
      <form className="auth-form" onSubmit={handleSubmit}>

        {error && (
          <div style={{ color: "#ef4444", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", fontSize: 14 }}>
            {error}
          </div>
        )}
        {success && (
          <div style={{ color: "#16a34a", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "10px 14px", fontSize: 14 }}>
            {success}
          </div>
        )}

        <div>
          <label className="auth-label" htmlFor="signup-name">Full Name</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
              <path d="M20 21a8 8 0 1 0-16 0" />
            </svg>
            <input
              id="signup-name"
              name="name"
              type="text"
              placeholder="Jordan Morris"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="auth-label" htmlFor="signup-email">Work Email</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
              <path d="m22 8-10 6L2 8" />
            </svg>
            <input
              id="signup-email"
              name="email"
              type="email"
              placeholder="you@university.edu"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="auth-label" htmlFor="signup-password">Password</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              id="signup-password"
              name="password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="auth-label" htmlFor="signup-role">Access Role</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
            </svg>
            <select
              id="signup-role"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select role</option>
              <option value="admin">Admin</option>
              <option value="trainer">Trainer</option>
              <option value="counselor">Counselor</option>
              <option value="student">Student</option>
            </select>
            <svg className="auth-select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <button className="auth-button" type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <p className="auth-footer">
          Already have an account? <Link className="auth-link" to="/signin">Sign in</Link>
        </p>
        <p className="auth-muted">By continuing you agree to our Terms and Privacy Policy.</p>
      </form>
    </AuthLayout>
  );
}
