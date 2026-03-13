import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
      <div style={{ fontFamily: "'Fraunces',serif", fontSize: "7rem", fontWeight: 900, color: "#E2E8F0", lineHeight: 1, marginBottom: "1rem" }}>404</div>
      <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "2rem", fontWeight: 900, color: "#0F172A", marginBottom: ".75rem" }}>Page Not Found</h1>
      <p style={{ fontSize: "1rem", color: "#64748B", marginBottom: "2rem", maxWidth: 400 }}>The page you're looking for doesn't exist. Let's get you back on track.</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button style={{ padding: ".9rem 2rem", borderRadius: 10, border: "none", background: "#0057FF", color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1rem", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,87,255,.35)" }}>
          ← Go Home
        </button>
      </Link>
    </div>
  );
}
