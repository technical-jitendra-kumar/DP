import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="We will email you a secure reset link"
    >
      <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
        <div>
          <label className="auth-label" htmlFor="reset-email">Email</label>
          <div className="auth-input">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
              <path d="m22 8-10 6L2 8" />
            </svg>
            <input
              id="reset-email"
              type="email"
              placeholder="name@institution.com"
              autoComplete="email"
            />
          </div>
        </div>

        <button className="auth-button" type="submit">
          Send Reset Link
        </button>

        <p className="auth-footer">
          Remembered your password? <Link className="auth-link" to="/signin">Back to sign in</Link>
        </p>
        <p className="auth-muted">Need help? Contact your CRM administrator.</p>
      </form>
    </AuthLayout>
  );
}
