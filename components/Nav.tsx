"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 80);
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = currentScrollY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"} ${scrolled ? "bg-[#0a0a0f]/95 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight">
          <LogoMark className="w-6 h-6" />
          <span>Auto<span className="gradient-text-blue">AI</span>Tech</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
            Home
          </Link>
          <Link href="/systems" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
            Systems
          </Link>
          <Link href="/contact" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn-glow bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Book a Strategy Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="text-slate-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/systems" className="text-slate-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>Systems</Link>
          <Link href="/contact" className="text-slate-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link
            href="/contact"
            className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book a Strategy Call
          </Link>
        </div>
      )}
    </nav>
  );
}
