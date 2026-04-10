"use client";

import Link from "next/link";
import LogoMark from "./LogoMark";

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)" };

const linkStyle: React.CSSProperties = {
  ...mono,
  fontSize: 9.5,
  color: "#2e2e2b",
  textDecoration: "none",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
};

const sep = <span style={{ ...mono, fontSize: 9.5, color: "#222220", margin: "0 0.75rem" }}>|</span>;

export default function Footer() {
  return (
    <footer style={{ background: "#111110", borderTop: "1px solid #1c1c1a" }}>
      <div style={{ padding: "0 4rem", height: 52, display: "flex", alignItems: "center" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 7, textDecoration: "none", flexShrink: 0 }}>
          <LogoMark className="w-[15px] h-[15px] opacity-55" />
          <span style={{ ...mono, fontSize: 10.5, color: "#4a4946", letterSpacing: "0.05em" }}>
            AutoAITech
          </span>
        </Link>

        {/* Separator line */}
        <div style={{ flex: 1, height: 1, background: "#1e1e1c", margin: "0 2rem" }} />

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <span style={{ ...mono, fontSize: 9.5, color: "#2e2e2b", letterSpacing: "0.05em" }}>
            © 2026 AutoAITech
          </span>
          {sep}
          <a href="/privacy" style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6b6a67")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2e2b")}
          >Privacy Policy</a>
          {sep}
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("aat_cookie_consent");
              window.dispatchEvent(new Event("aat-consent-change"));
            }}
            style={{ ...linkStyle, background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6b6a67")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2e2b")}
          >Manage Cookies</button>
          {sep}
          <a href="/terms" style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6b6a67")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2e2b")}
          >Terms</a>
          {sep}
          <a href="https://linkedin.com/company/autoaitech" target="_blank" rel="noopener noreferrer" style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6b6a67")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2e2b")}
          >LinkedIn</a>
          {sep}
          <Link href="/contact" style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6b6a67")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2e2b")}
          >Contact</Link>
        </div>

      </div>
    </footer>
  );
}
