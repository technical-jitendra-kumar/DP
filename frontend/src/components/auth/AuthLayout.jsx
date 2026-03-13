import "./AuthLayout.css";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-root">
      <section className="auth-left">
        <div className="auth-badge">EdTech CRM</div>
        <div>
          <h1 className="auth-title">
            Empowering <span className="auth-gradient-text">Education</span>
            <br />
            Through Intelligence
          </h1>
          <p className="auth-copy">
            Unify enrollment, student success, and institutional intelligence in a
            modern CRM crafted for learning-first organizations.
          </p>
        </div>
        <div className="auth-proof">
          <div className="auth-proof-avatars">
            <span />
            <span />
            <span />
          </div>
          <div>
            <strong>Trusted by 500+ institutes</strong>
            <p>Global education networks modernize with clarity.</p>
          </div>
        </div>

        <div className="auth-float-icon icon-one" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4.5 6.75c2.8-1.6 6.2-1.6 9 0v11.2c-2.8-1.6-6.2-1.6-9 0V6.75z" />
            <path d="M13.5 6.75c2.8-1.6 6.2-1.6 9 0v11.2c-2.8-1.6-6.2-1.6-9 0V6.75z" />
          </svg>
        </div>
        <div className="auth-float-icon icon-two" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 18V9" />
            <path d="M12 18V5" />
            <path d="M19 18v-6" />
          </svg>
        </div>
        <div className="auth-float-icon icon-three" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 3l2.6 5.2L20 10l-5 3.3L16.2 19 12 16l-4.2 3 1.2-5.7L4 10l5.4-1.8L12 3z" />
          </svg>
        </div>
      </section>

      <section className="auth-right">
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="auth-logo">E</div>
            <div>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
          {children}
        </div>
      </section>
    </div>
  );
}
