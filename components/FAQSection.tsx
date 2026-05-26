"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

const display: React.CSSProperties = { fontFamily: "var(--font-display)" };
const mono: React.CSSProperties    = { fontFamily: "var(--font-mono)" };
const sans: React.CSSProperties    = { fontFamily: "var(--font-sans)" };

const GREEN  = "#059669";
const INK    = "#111110";
const INK_MID = "#6b6a67";
const BORDER  = "#e2e1de";
const BG_SUBTLE = "#fafaf9";

const faqs = [
  {
    q: "Is this right for my agency?",
    a: [
      "This is built for Irish and UK agencies running five or more people who are spending too many hours on repeatable work: lead generation, onboarding, reporting, client chasing. If you know systems would help but haven't had the time or expertise to build them, this is designed for you.",
      "If you're a solo freelancer, looking for a quick one-off automation, or not yet running consistent client work, it probably isn't the right fit. The call will make that clear either way.",
    ],
  },
  {
    q: "What does it actually cost?",
    a: [
      "There's a setup fee to build and connect your systems, then a monthly retainer to keep them running, monitored, and improving. The exact number depends on which systems you need and the complexity of your setup.",
      "I give you a clear figure on the first call. No vague quotes, no scope that grows after you've signed.",
    ],
  },
  {
    q: "How long before I see results?",
    a: [
      "The first systems are live within two to three weeks of starting. Once they're connected and running, you'll see them working straight away. There's no long runway before infrastructure is active — the systems go live and start running immediately.",
    ],
  },
  {
    q: "Do I need to change my existing tools?",
    a: [
      "No. The infrastructure connects to what you already use: your CRM, email, project management, and communication tools. Nothing gets ripped out. The systems slot in on top of your existing stack and extend what it can do.",
    ],
  },
  {
    q: "What happens if something breaks or needs updating?",
    a: [
      "That's what the retainer covers. I monitor every system, receive alerts when something goes wrong, and fix it before it affects your business. You're not left managing infrastructure yourself. That's the whole point.",
      "As your business evolves, systems get updated to match. You don't pay for a build and then get abandoned.",
    ],
  },
  {
    q: "Do I need to be technical to work with you?",
    a: [
      "No. You get access to the Client OS, a web application where you can see what's running, what's working, and what the numbers look like. You log in from any browser. The complexity lives in the backend, not in your hands.",
    ],
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      style={{
        flexShrink: 0,
        width: 22, height: 22,
        borderRadius: "50%",
        border: `1px solid ${open ? GREEN : BORDER}`,
        background: open ? GREEN : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.15s, border-color 0.15s",
      }}
    >
      <svg
        width="10" height="10" viewBox="0 0 10 10" fill="none"
        style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}
      >
        <path d="M5 1v8M1 5h8" stroke={open ? "white" : INK} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="px-6 py-20 md:px-16 md:py-24"
      style={{ borderBottom: `1px solid ${BORDER}`, background: "white" }}
    >
      <AnimateIn>
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="flex items-center gap-2.5 mb-4">
            <div style={{ width: 24, height: 1, background: GREEN }} />
            <span style={{ ...mono, fontSize: 10, fontWeight: 500, color: GREEN, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              FAQ
            </span>
          </div>
          <h2 style={{ ...display, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, color: INK, marginBottom: "0.75rem" }}>
            Questions worth answering before the call.
          </h2>
          <p style={{ ...sans, fontSize: 16, fontWeight: 300, color: INK_MID, lineHeight: 1.65 }}>
            The things agencies usually ask, answered honestly.
          </p>
        </div>

        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} style={{ borderBottom: i < faqs.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: "1.5rem",
                    padding: "1.375rem 1.75rem",
                    background: isOpen ? BG_SUBTLE : "white",
                    border: "none", cursor: "pointer", textAlign: "left",
                    transition: "background 0.15s",
                  }}
                >
                  <span style={{ ...display, fontSize: 15, fontWeight: 600, color: INK, letterSpacing: "-0.01em", lineHeight: 1.4 }}>
                    {item.q}
                  </span>
                  <PlusIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div style={{ padding: "0 1.75rem 1.5rem", background: BG_SUBTLE }}>
                    {item.a.map((para, j) => (
                      <p
                        key={j}
                        style={{ ...sans, fontSize: 14.5, fontWeight: 300, color: INK_MID, lineHeight: 1.7, marginTop: j > 0 ? "0.75rem" : 0 }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </AnimateIn>
    </section>
  );
}
