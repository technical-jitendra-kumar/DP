import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Launch a smarter CRM experience in minutes"
    >
      <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
        <div>
          <label className="auth-label" htmlFor="signup-name">Full Name</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
              <path d="M20 21a8 8 0 1 0-16 0" />
            </svg>
            <input
              id="signup-name"
              type="text"
              placeholder="Jordan Morris"
              autoComplete="name"
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
              type="email"
              placeholder="you@university.edu"
              autoComplete="email"
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
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </div>
        </div>

        <div>
          <label className="auth-label" htmlFor="signup-role">Access Role</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
            <select id="signup-role" defaultValue="">
              <option value="" disabled>Select role</option>
              <option>Admin</option>
              <option>Trainer</option>
              <option>Counselor</option>
              <option>Student</option>
            </select>
            <svg className="auth-select-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <button className="auth-button" type="submit">
          Create Account
        </button>

        <div className="auth-demo">
          <span>Demo Access (One-Click)</span>
          <div className="auth-demo-buttons">
            {"Admin,Trainer,Counselor,Student".split(",").map((role) => (
              <button type="button" key={role} className="auth-demo-button">
                {role}
              </button>
            ))}
          </div>
        </div>

        <p className="auth-footer">
          Already have an account? <Link className="auth-link" to="/signin">Sign in</Link>
        </p>
        <p className="auth-muted">By continuing you agree to our Terms and Privacy Policy.</p>
      </form>
    </AuthLayout>
  );
}
