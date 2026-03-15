import "./AuthLayout.css";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-root">

      {/* ── LEFT PANEL ── */}
      <section className="auth-left">
        <div className="auth-blob1" />
        <div className="auth-blob2" />

        <div className="auth-badge">
          <span className="auth-badge-dot" />
          DataPreneur Platform
        </div>

        <div className="auth-left-main">
          <h1 className="auth-tagline">
            Business Intelligence<br />
            <span className="auth-gradient-text">Reimagined</span> for You
          </h1>
          <p className="auth-desc">
            Unify your analytics, track real-time insights, and make faster
            decisions — all within one intelligent platform built for modern enterprises.
          </p>
        </div>

        <div className="auth-stats">
          <div className="auth-stat">
            <div className="auth-stat-num">500+</div>
            <div className="auth-stat-lbl">Enterprises</div>
          </div>
          <div className="auth-stat">
            <div className="auth-stat-num">98%</div>
            <div className="auth-stat-lbl">Uptime SLA</div>
          </div>
          <div className="auth-stat">
            <div className="auth-stat-num">2.4B</div>
            <div className="auth-stat-lbl">Rows Processed</div>
          </div>
        </div>

        <div className="auth-proof">
          <div className="auth-avatars">
            <div className="auth-av" />
            <div className="auth-av" />
            <div className="auth-av" />
          </div>
          <div className="auth-proof-text">
            <strong>Trusted by data teams worldwide</strong>
            <span>Join 10,000+ analysts using DataPreneur daily</span>
          </div>
        </div>

        {/* Floating cards */}
        <div className="auth-float auth-fc1" aria-hidden="true">
          <div className="auth-float-icon">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <div className="auth-float-label">Live Analytics</div>
            <div className="auth-float-sub">Real-time data streaming</div>
          </div>
        </div>

        <div className="auth-float auth-fc2" aria-hidden="true">
          <div className="auth-float-icon">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>
          <div>
            <div className="auth-float-label">Smart Dashboards</div>
            <div className="auth-float-sub">Custom BI views</div>
          </div>
        </div>

        <div className="auth-float auth-fc3" aria-hidden="true">
          <div className="auth-float-icon">
            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <div className="auth-float-label">AI Insights</div>
            <div className="auth-float-sub">Powered by ML models</div>
          </div>
        </div>
      </section>

      {/* ── RIGHT PANEL ── */}
      <section className="auth-right">
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="auth-logo">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7 17V13M12 17V7M17 17V11" />
              </svg>
            </div>
            <div>
              <div className="auth-card-title">{title}</div>
              <div className="auth-card-sub">{subtitle}</div>
            </div>
          </div>
          {children}
        </div>
      </section>

    </div>
  );
}