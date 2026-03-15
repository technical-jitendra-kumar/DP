import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import { useAuth } from "../../context/AuthContext";

export default function SignInPage() {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await login(form.email, form.password);
      // Backend returns role as uppercase e.g. "ADMIN" → route to /admin/dashboard
      const roleRoute = res.data?.role?.toLowerCase();
      navigate(`/${roleRoute}/dashboard`);
    } catch {
      // error already set in AuthContext
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your DataPreneur workspace"
    >
      <form className="auth-form" onSubmit={handleSubmit}>

        {/* Error message from backend */}
        {error && (
          <div style={{ color: "#ef4444", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", fontSize: 14 }}>
            {error}
          </div>
        )}

        {/* Email */}
        <div>
          <label className="auth-label" htmlFor="signin-email">Email address</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
            <input
              id="signin-email"
              name="email"
              type="email"
              placeholder="name@company.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="auth-label" htmlFor="signin-password">Password</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              id="signin-password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Remember / Forgot */}
        <div className="auth-row">
          <label className="auth-checkbox">
            <input type="checkbox" />
            Remember me
          </label>
          <Link className="auth-link" to="/forgot-password">
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button className="auth-button" type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In →"}
        </button>

        {/* Footer */}
        <p className="auth-footer">
          No account?{" "}
          <Link className="auth-link" to="/signup">Create workspace</Link>
        </p>

      </form>
    </AuthLayout>
  );
}
