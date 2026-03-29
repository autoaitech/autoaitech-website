"use client";

import { useEffect, useState } from "react";

const COOKIE_KEY = "aat_cookie_consent";

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)" };

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        background: "#111110",
        border: "1px solid #2a2a28",
        borderRadius: 6,
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        gap: 20,
        maxWidth: 560,
        width: "calc(100vw - 48px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <p style={{ ...mono, fontSize: 11, color: "#9a9893", margin: 0, lineHeight: 1.6, flex: 1 }}>
        We use cookies for analytics to improve this site.{" "}
        <a
          href="/privacy"
          style={{ color: "#6b6a67", textDecoration: "underline" }}
        >
          Privacy Policy
        </a>
      </p>

      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            ...mono,
            fontSize: 10,
            color: "#4a4946",
            background: "transparent",
            border: "1px solid #2a2a28",
            borderRadius: 4,
            padding: "5px 12px",
            cursor: "pointer",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#9a9893")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4946")}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            ...mono,
            fontSize: 10,
            color: "#111110",
            background: "#f5f2ec",
            border: "1px solid #f5f2ec",
            borderRadius: 4,
            padding: "5px 12px",
            cursor: "pointer",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#e8e4dc")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#f5f2ec")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
