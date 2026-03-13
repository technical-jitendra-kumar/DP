import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

const roleOptions = ["Admin", "Trainer", "Counselor", "Student"];

export default function SignInPage() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const routeToRole = (value) => {
    const selectedRole = value || role || "Admin";
    const normalized = selectedRole.toLowerCase();
    localStorage.setItem("demoRole", normalized);
    navigate(`/${normalized}/dashboard`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    routeToRole();
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to access your dashboard"
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <div>
          <label className="auth-label" htmlFor="signin-email">Email</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
              <path d="m22 8-10 6L2 8" />
            </svg>
            <input
              id="signin-email"
              type="email"
              placeholder="name@institution.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <label className="auth-label" htmlFor="signin-password">Password</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              id="signin-password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
        </div>

        <div>
          <label className="auth-label" htmlFor="signin-role">Access Role</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
            <select id="signin-role" value={role} onChange={(event) => setRole(event.target.value)}>
              <option value="" disabled>Select role</option>
              {roleOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <svg className="auth-select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="auth-row">
          <label className="auth-checkbox">
            <input type="checkbox" />
            Remember me
          </label>
          <Link className="auth-link" to="/forgot-password">
            Forgot password?
          </Link>
        </div>

        <button className="auth-button" type="submit">
          Sign In
        </button>

        <div className="auth-demo">
          <span>Demo Access (One-Click)</span>
          <div className="auth-demo-buttons">
            {roleOptions.map((option) => (
              <button
                type="button"
                key={option}
                className="auth-demo-button"
                onClick={() => routeToRole(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <p className="auth-footer">
          Don&apos;t have an account? <Link className="auth-link" to="/signup">Create account</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
