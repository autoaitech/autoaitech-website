import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Systems — AutoAITech",
  description:
    "The AI infrastructure AutoAITech builds for Irish and UK agencies — lead response, proposals, onboarding, reporting, reviews, and reactivation. Running 24/7.",
};

/* ── Design tokens ── */
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

/* ── Systems data ── */
const systems = [
  {
    name: "Lead Response Engine",
    tag: "follow-up",
    tagline: "Every lead followed up. Every time.",
    what: "Responds to every inbound lead fast — personalised, qualified, and booked before your competitors have even opened their inbox. Pulls from your forms, website, and CRM to trigger the right message at the right moment.",
    replaces: "Leads sitting in your inbox for hours. Manual follow-up sequences that fall behind. Prospects going cold before anyone gets back to them.",
    roi: "The first agency to respond wins the client. This system makes sure that's always you.",
    integrates: ["CRM (HubSpot, Pipedrive)", "Email (Gmail, Outlook)", "Forms (Typeform, Webflow)", "Calendar"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    name: "Proposal Engine",
    tag: "sales",
    tagline: "Proposals in hours, not days.",
    what: "Generates fully personalised proposals directly from a call transcript or briefing notes. Branded, properly scoped, and ready to send — in under two hours instead of two days. Each proposal reflects the client's specific situation, not a generic template.",
    replaces: "Hours writing proposals from scratch. Inconsistent scoping. Deals going cold while you're still writing the doc.",
    roi: "Speed closes deals. A proposal that lands the same day the call ends converts at a completely different rate.",
    integrates: ["CRM", "Email", "Google Docs / Notion", "Calendar"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    name: "Onboarding System",
    tag: "retention",
    tagline: "Onboard clients without chasing them.",
    what: "Structures the entire new client journey — strategy docs, approvals, data collection, access requests — and moves it forward automatically. Every step is tracked. Every delay is flagged. Nothing gets missed and nobody has to chase.",
    replaces: "Three-week onboarding that should take three days. Back-and-forth email chains. Inconsistent client experiences that damage first impressions.",
    roi: "A client who onboards smoothly stays longer and refers more. A client who doesn't becomes a support burden from week one.",
    integrates: ["Email", "CRM", "File storage (Google Drive)", "Calendar"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    name: "Reporting System",
    tag: "visibility",
    tagline: "Clients see their ROI. Automatically.",
    what: "Pulls performance data from every connected system — ads, analytics, CRM — and generates a clear monthly report showing what your agency delivered. Your clients get evidence of value. You stop scrambling before every review call.",
    replaces: "Manual data pulls, spreadsheet formatting, last-minute report building the night before a client call.",
    roi: "Clients who clearly see ROI renew. Clients who don't — even if the results are good — churn. This system closes that gap.",
    integrates: ["Google Analytics / GA4", "Meta Ads", "Google Ads", "CRM", "Email"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    name: "Review Engine",
    tag: "reputation",
    tagline: "Good work becomes visible proof.",
    what: "Identifies the exact moment a client is happiest — after a win, after a positive call, after a result lands — and sends a well-timed, personalised review request. Systematically turns great work into public evidence of great work.",
    replaces: "Awkwardly asking for reviews manually. Forgetting to follow up. Delivering strong results that nobody outside the relationship ever sees.",
    roi: "Reviews are the most trusted signal for a new agency prospect. This system builds that asset automatically over time.",
    integrates: ["Email", "CRM", "Google Reviews", "Trustpilot"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    name: "Reactivation Engine",
    tag: "growth",
    tagline: "Dormant leads become live conversations.",
    what: "Re-engages your dormant leads and past clients with consistent, contextual sequences that feel human — not blasted. Pulls from your CRM history to reference past conversations, past work, and relevant timing. Reactivation that actually gets replies.",
    replaces: "A CRM full of cold contacts you've stopped reaching out to. Manual re-engagement that never happens because there's always something more urgent.",
    roi: "You've already done the hard work of building a relationship with these people. This system turns that dormant asset into active pipeline.",
    integrates: ["CRM", "Email (Gmail, Outlook)", "LinkedIn", "Calendar"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, stroke: GREEN }}>
        <polyline points="1 4 1 10 7 10"/>
        <polyline points="23 20 23 14 17 14"/>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
      </svg>
    ),
  },
];

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

export default function SystemsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="mt-[56px] border-b"
        style={{ background: "white", padding: "5rem 4rem 4rem", borderColor: BORDER }}
      >
        <AnimateIn>
          <SectionLabel text="The infrastructure" />
          <h1
            style={{ ...display, fontSize: "clamp(2.4rem, 4vw, 3.4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: INK, maxWidth: 700, marginBottom: "1.25rem" }}
          >
            The work your agency keeps doing manually.
          </h1>
          <p style={{ ...sans, fontSize: 17, fontWeight: 300, color: INK_MID, maxWidth: 560, lineHeight: 1.65 }}>
            We identify your highest-impact gaps and build the infrastructure to close them. Each system
            runs continuously, connects to the others, and produces measurable output every week.
          </p>
        </AnimateIn>
      </section>

      {/* ── SYSTEMS LIST ── */}
      <section style={{ background: "white" }}>
        {systems.map((system, i) => {
          const isReversed = i % 2 === 1;
          const isLast = i === systems.length - 1;
          return (
            <AnimateIn key={system.name} delay={60} direction={isReversed ? "right" : "left"}>
              <div
                style={{
                  padding: "5rem 4rem",
                  borderBottom: isLast ? "none" : `1px solid ${BORDER}`,
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "4rem",
                  alignItems: "start",
                  direction: isReversed ? "rtl" : "ltr",
                }}
              >
                {/* Left: identity */}
                <div style={{ direction: "ltr" }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: 48, height: 48,
                      borderRadius: 10,
                      background: GREEN_LIGHT,
                      border: `1px solid ${GREEN_BORDER}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {system.icon}
                  </div>

                  {/* Tag */}
                  <div style={{ ...mono, fontSize: 9.5, color: GREEN, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>
                    {system.tag}
                  </div>

                  {/* Name */}
                  <h2 style={{ ...display, fontSize: "1.5rem", fontWeight: 700, color: INK, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.5rem" }}>
                    {system.name}
                  </h2>

                  {/* Tagline */}
                  <p style={{ ...sans, fontSize: 14, fontWeight: 500, color: GREEN, marginBottom: "1.5rem", lineHeight: 1.4 }}>
                    {system.tagline}
                  </p>

                  {/* Integration tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {system.integrates.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          ...mono, fontSize: 10,
                          color: INK_MID,
                          background: "#f4f4f3",
                          border: `1px solid ${BORDER}`,
                          padding: "3px 8px",
                          borderRadius: 4,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: detail */}
                <div style={{ direction: "ltr" }} className="flex flex-col gap-6">
                  <div>
                    <div style={{ ...mono, fontSize: 9.5, color: INK_FAINT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>
                      What it does
                    </div>
                    <p style={{ ...sans, fontSize: 15, color: INK_MID, lineHeight: 1.75, fontWeight: 300 }}>
                      {system.what}
                    </p>
                  </div>

                  <div>
                    <div style={{ ...mono, fontSize: 9.5, color: INK_FAINT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>
                      What it replaces
                    </div>
                    <p style={{ ...sans, fontSize: 15, color: INK_MID, lineHeight: 1.75, fontWeight: 300 }}>
                      {system.replaces}
                    </p>
                  </div>

                  {/* ROI card */}
                  <div
                    style={{
                      background: GREEN_LIGHT,
                      border: `1px solid ${GREEN_BORDER}`,
                      borderRadius: 8,
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div style={{ ...mono, fontSize: 9.5, color: GREEN, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                      Why it matters
                    </div>
                    <p style={{ ...sans, fontSize: 14, color: "#065f46", lineHeight: 1.65, fontWeight: 400 }}>
                      {system.roi}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          );
        })}
      </section>

      {/* ── CTA ── */}
      <section style={{ background: INK, padding: "6rem 4rem", textAlign: "center", borderTop: `1px solid #1c1c1a` }}>
        <AnimateIn>
          <div style={{ ...mono, fontSize: 10, color: "#6ee7b7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
            Ready to start
          </div>
          <h2
            style={{ ...display, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, color: "white", marginBottom: "1rem" }}
          >
            Tell us your biggest bottleneck.<br />
            <em style={{ color: "#6ee7b7", fontStyle: "italic", fontWeight: 600 }}>We&apos;ll build the system for it.</em>
          </h2>
          <p style={{ ...sans, fontSize: 16, fontWeight: 300, color: "#6b6a67", maxWidth: 460, margin: "0 auto 2.5rem", lineHeight: 1.65 }}>
            One 30-minute call. We identify your highest-impact gaps and tell you exactly what the
            infrastructure looks like — and what it costs.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/contact" className="btn-green">
              Book a free call
            </Link>
            <Link
              href="/"
              className="no-underline"
              style={{ ...sans, fontSize: 14, color: "#6b6a67", border: "1px solid #333", padding: "12px 24px", borderRadius: 8 }}
            >
              Back to home
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
