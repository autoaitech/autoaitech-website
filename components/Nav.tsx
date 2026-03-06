"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";

const links = [
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible,  setVisible]  = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y < 10) setVisible(true);
      else if (y < lastY.current) setVisible(true);
      else setVisible(false);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "bg-white/92 backdrop-blur-sm border-b border-border"
    : "bg-white border-b border-border";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-8 lg:px-10 h-[56px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline" style={{ color: "#111110" }}>
          <LogoMark className="w-[18px] h-[18px]" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 500, letterSpacing: "0.05em", color: "#111110" }}>
            AutoAITech
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="no-underline transition-colors"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "#6b6a67" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111110")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6a67")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn-nav-green">
            Book a call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: "#111110" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-8 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="no-underline"
              style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#6b6a67" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-nav-green text-center mt-2" onClick={() => setMenuOpen(false)}>
            Book a call
          </Link>
        </div>
      )}
    </nav>
  );
}
