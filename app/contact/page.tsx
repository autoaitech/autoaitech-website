"use client";

import { useState, FormEvent } from "react";
import AnimateIn from "@/components/AnimateIn";

/* ── Design tokens (matches site theme) ── */
const display: React.CSSProperties = { fontFamily: "var(--font-display)" };
const mono: React.CSSProperties    = { fontFamily: "var(--font-mono)" };
const sans: React.CSSProperties    = { fontFamily: "var(--font-sans)" };

const GREEN        = "#059669";
const GREEN_LIGHT  = "#d1fae5";
const GREEN_BORDER = "#a7f3d0";
const INK          = "#111110";
const INK_MID      = "#6b6a67";
const INK_FAINT    = "#a09e9b";
const BORDER       = "#e2e1de";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <div style={{ width: 24, height: 1, background: GREEN }} />
      <span style={{ ...mono, fontSize: 10, fontWeight: 500, color: GREEN, textTransform: "uppercase", letterSpacing: "0.1em" }}>
        {text}
      </span>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  ...sans,
  fontSize: 14,
  color: INK,
  border: `1px solid ${BORDER}`,
  borderRadius: 8,
  padding: "12px 16px",
  width: "100%",
  outline: "none",
  background: "white",
  transition: "border-color 0.15s",
};

const labelStyle: React.CSSProperties = {
  ...sans,
  fontSize: 13,
  fontWeight: 600,
  color: INK,
  display: "block",
  marginBottom: 6,
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    challenge: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email me directly at sean@autoaitech.co");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="mt-[56px] border-b"
        style={{ background: "white", padding: "5rem 4rem 4rem", borderColor: BORDER }}
      >
        <AnimateIn>
          <SectionLabel text="Get in touch" />
          <h1
            style={{ ...display, fontSize: "clamp(2.4rem, 4vw, 3.4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: INK, maxWidth: 620, marginBottom: "1.25rem" }}
          >
            Tell us your biggest bottleneck.
          </h1>
          <p style={{ ...sans, fontSize: 17, fontWeight: 300, color: INK_MID, maxWidth: 520, lineHeight: 1.65 }}>
            No sales pitch. One 30-minute call and we&apos;ll tell you exactly what your agency is missing
            and what the infrastructure looks like in practice.
          </p>
        </AnimateIn>
      </section>

      {/* ── FORM ── */}
      <section style={{ background: "#fafaf9", padding: "5rem 4rem", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <AnimateIn direction="up">
            {submitted ? (
              /* ── Success state ── */
              <div
                style={{
                  background: "white",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "4rem 3rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 52, height: 52,
                    borderRadius: "50%",
                    background: GREEN_LIGHT,
                    border: `1px solid ${GREEN_BORDER}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 style={{ ...display, fontSize: "1.6rem", fontWeight: 700, color: INK, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
                  Message received
                </h2>
                <p style={{ ...sans, fontSize: 16, fontWeight: 300, color: INK_MID, lineHeight: 1.65, maxWidth: 380, margin: "0 auto" }}>
                  I&apos;ll be in touch within 24 hours with a clear next step.
                </p>
              </div>
            ) : (
              /* ── Form ── */
              <div
                style={{
                  background: "white",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "2.5rem 3rem",
                }}
              >
                <h2 style={{ ...display, fontSize: "1.4rem", fontWeight: 700, color: INK, letterSpacing: "-0.02em", marginBottom: "0.4rem" }}>
                  Book a free call
                </h2>
                <p style={{ ...sans, fontSize: 14, fontWeight: 300, color: INK_MID, marginBottom: "2rem", lineHeight: 1.6 }}>
                  Fill this in and I&apos;ll come prepared. We&apos;ll talk through your biggest gaps and what infrastructure would actually solve them.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label htmlFor="name" style={labelStyle}>
                        Your name <span style={{ color: "#c1440e" }}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Sean Mulligan"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="business" style={labelStyle}>
                        Agency name <span style={{ color: "#c1440e" }}>*</span>
                      </label>
                      <input
                        id="business"
                        name="business"
                        type="text"
                        required
                        value={form.business}
                        onChange={handleChange}
                        placeholder="Your Agency Ltd"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label htmlFor="email" style={labelStyle}>
                        Email address <span style={{ color: "#c1440e" }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="sean@youragency.ie"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" style={labelStyle}>
                        Phone{" "}
                        <span style={{ ...sans, fontWeight: 400, color: INK_FAINT }}>(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+353 87 000 0000"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="challenge" style={labelStyle}>
                      What&apos;s your biggest growth challenge right now? <span style={{ color: "#c1440e" }}>*</span>
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      required
                      rows={5}
                      value={form.challenge}
                      onChange={handleChange}
                      placeholder="Tell us what's slowing your growth, what you're trying to solve, or where you feel like you're leaving money on the table..."
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-green"
                      style={{
                        opacity: sending ? 0.6 : 1,
                        cursor: sending ? "not-allowed" : "pointer",
                        border: "none",
                      }}
                    >
                      {sending ? "Sending…" : "Send message"}
                    </button>
                  </div>

                  {error && (
                    <p style={{ ...sans, fontSize: 13, color: "#c1440e" }}>{error}</p>
                  )}

                  <p style={{ ...sans, fontSize: 12, color: INK_FAINT, lineHeight: 1.6 }}>
                    I respond to every message within 24 hours. Your details are never shared with third parties.
                  </p>
                </form>
              </div>
            )}
          </AnimateIn>
        </div>
      </section>

      {/* ── REASSURANCE STRIP ── */}
      <section style={{ background: "white", padding: "4rem", borderBottom: `1px solid ${BORDER}` }}>
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3rem",
            textAlign: "center",
          }}
        >
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
              ),
              title: "24-hour response",
              desc: "I respond to every enquiry within one business day.",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
                  <path d="M17 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v3l-4-3H9a2 2 0 0 1-2-2v-1" />
                  <path d="M3 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8l-4 3V6z" />
                </svg>
              ),
              title: "No commitment",
              desc: "A strategy call is a conversation, not a sales pitch.",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a14.5 14.5 0 0 1 0 18M3 12h18" />
                </svg>
              ),
              title: "Ireland-based",
              desc: "I work with Irish and UK agencies who want real results.",
            },
          ].map((item, i) => (
            <AnimateIn key={item.title} delay={i * 100} direction="up">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: 48, height: 48,
                    borderRadius: "50%",
                    background: GREEN_LIGHT,
                    border: `1px solid ${GREEN_BORDER}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ ...display, fontSize: 14, fontWeight: 700, color: INK }}>{item.title}</div>
                <p style={{ ...sans, fontSize: 13, fontWeight: 300, color: INK_MID, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
