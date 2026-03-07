"use client";

import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer style={{ background: "#111110", borderTop: "1px solid #1c1c1a" }}>
      <div
        className="px-8 lg:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <Link href="/" className="flex items-center gap-2.5 no-underline" style={{ color: "#484f58" }}>
          <LogoMark className="w-[16px] h-[16px]" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#484f58", letterSpacing: "0.04em" }}>
            AutoAITech
          </span>
        </Link>

        <div className="flex gap-8">
          {[
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="no-underline transition-colors"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#484f58" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6e7681")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#484f58")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#333", letterSpacing: "0.04em" }}>
          © 2026 AutoAITech
        </span>
      </div>
    </footer>
  );
}
